module Pageflow
  module EntryExportImport
    # Creates an entry from JSON with latest draft and published revision including all used files.
    # The JSON structure must match the one generated by Pageflow::EntrySerializer.
    # A version check is performed for all plugins to assure data compatibility.
    # The newly created entry will be associated with the user passed into the initializer,
    # along with that users account and theming.
    class EntryImporter
      DEFAULT_REMOVAL_COLUMNS = %w[id updated_at].freeze

      def initialize(user, attachments_root_path)
        @user = user
        @account = @user.accounts.first
        @theming = @account.themings.first
        @attachments_root_path = attachments_root_path

        # file-mapping from exported to new id for associated files.
        @file_mappings = {}
      end

      def call(json_data)
        import_data = JSON.parse(json_data)

        page_type_version_requirements = import_data['page_type_version_requirements']
        unless data_compatible_for_import?(page_type_version_requirements)
          raise 'Incompatible Plugin versions detected!'
        end

        # Step 1: Create data
        p 'importing records...'
        import_records(import_data)
        p '...Done!'
        # Step 2: Upload files
        p 'uploading files...'
        upload_files
        p '...Done!'
        # Step 3: Publish files not included in upload stage
        p 'publishing generated files...'
        publish_generated_files
        p '...Done!'
      end

      private

      def import_records(import_data)
        entry_data = import_data['entry']
        draft_data = entry_data.delete('draft')
        published_revision_data = entry_data.delete('published_revision')

        Entry.transaction do
          @entry = create_entry(entry_data)
          create_revision(draft_data) if draft_data.present?
          create_revision(published_revision_data) if published_revision_data.present?
        end
      end

      # Create an entry with given data after removing all host-specific information.
      def create_entry(data)
        entry_data = data.except(*DEFAULT_REMOVAL_COLUMNS)
        entry_data['account_id'] = @account.id
        entry_data['theming_id'] = @theming.id
        Pageflow::Entry.create!(entry_data.merge(skip_draft_creation: true))
      end

      def create_revision(data)
        revision_data = data.except(*DEFAULT_REMOVAL_COLUMNS)
        revision_data['creator_id'] = @user.id
        unless Pageflow.config.themes.map(&:name).include?(revision_data['theme_name'])
          revision_data['theme_name'] = 'default'
        end

        widgets_data = revision_data.delete('widgets')
        revision_components_data = revision_data.delete('serialized_components')
        storylines_data = revision_data.delete('storylines')
        file_usages_data = revision_data.delete('file_usages')

        # create revision
        revision = @entry.revisions.create!(revision_data)

        # create widgets
        widgets_data.each do |widget_data|
          revision.widgets.create!(widget_data.except(*DEFAULT_REMOVAL_COLUMNS))
        end

        # create revision components
        revision_components_data.each do |data|
          component_class_name = data.keys.first
          component_data = data[component_class_name].except(*DEFAULT_REMOVAL_COLUMNS)
          component_data['revision_id'] = revision.id
          component_class_name.constantize.create!(component_data) # page type concept?
        end

        # create storylines with chapters and pages
        storylines_data.each do |storyline_data|
          chapters_data = storyline_data.delete('chapters')
          storyline = revision.storylines.create!(storyline_data.except(*DEFAULT_REMOVAL_COLUMNS))
          chapters_data.each do |chapter_data|
            pages_data = chapter_data.delete('pages')
            chapter = storyline.chapters.create!(chapter_data.except(*DEFAULT_REMOVAL_COLUMNS))
            pages_data.each do |page_data|
              chapter.pages.create!(page_data.except(*DEFAULT_REMOVAL_COLUMNS))
            end
          end
        end

        # create files and usages
        create_files_for_revision(file_usages_data, revision)
      end

      # Create files in the order their file type has been registered.
      # This ensures top level file types being created first and ready for foreign key remapping
      # in lower-level file types
      def create_files_for_revision(file_usages_data, revision)
        Pageflow.config.file_types.each do |file_type|
          file_type_name = file_type.type_name
          file_type_usages_data = file_usages_data.select { |file_usage|
            file_usage['file_type'].eql?(file_type_name)
          }

          file_type_usages_data.each do |file_type_usage_data|
            file_data = file_type_usage_data.delete('file')
            exported_file_id = file_data.delete('id')

            # prepare data for file creation
            file_data['uploader_id'] = @user.id if file_data['uploader_id'].present?
            file_data['confirmed_by_id'] = @user.id if file_data['confirmed_by_id'].present?
            file_data['entry_id'] = @entry.id # required for nested_file validation

            importer = file_type.importer
            file = importer.import_file(file_data, @file_mappings)

            # overwrite file id with new id
            file_type_usage_data['file_id'] = file.id
            revision.file_usages.create!(file_type_usage_data.except(*DEFAULT_REMOVAL_COLUMNS))

            # map file by type from old to new id for linking associated files
            file_type_collection_name = file_type.collection_name
            @file_mappings[file_type_collection_name] ||= {}
            @file_mappings[file_type_collection_name][exported_file_id] = file.id
          end
        end
      end

      # Recursively upload all files included in the export directory.
      # Files are stored under their respective file type's collection name and their
      # id in the host application they were exported from
      def upload_files
        Dir.foreach(@attachments_root_path) do |collection_name|
          next if %w[. ..].include?(collection_name)
          file_type = Pageflow.config.file_types.find_by_collection_name!(collection_name)
          collection_directory = File.join(@attachments_root_path, collection_name)
          importer = file_type.importer

          # special uploads handling (see Pageflow::Chart's ScrapedSiteImporter for example)
          if importer.respond_to?(:upload_files)
            importer.upload_files(collection_directory, @file_mappings)
          else
            # upload case for file types with standard uploadable file type
            Dir.foreach(collection_directory) do |exported_id|
              next if %w[. ..].include?(exported_id)

              uploadable_file_id = ImportUtils.file_id_for_exported_id(@file_mappings,
                                                                       file_type.model.name,
                                                                       exported_id)
              uploadable_file = file_type.model.find(uploadable_file_id)
              attachment_file_path = File.join(collection_directory,
                                               exported_id,
                                               uploadable_file.file_name)
              UploadAndPublishFileJob.perform_later(file_type.model.name,
                                                    uploadable_file.id,
                                                    attachment_file_path)
            end
          end
        end
      end

      # file publishing for generated files
      def publish_generated_files
        Pageflow.config.file_types.each do |file_type|
          importer = file_type.importer
          importer.publish_files(@entry) if importer.respond_to?(:publish_files)
        end
      end

      def data_compatible_for_import?(page_type_version_requirements)
        page_type_version_requirements.each do |plugin_name, plugin_version_requirement|
          page_type = Pageflow.config.page_types.find_by_name!(plugin_name)
          current_version = Gem::Version.new(page_type.version)
          return false unless Gem::Requirement.new(plugin_version_requirement)
                                .satisfied_by?(current_version)
        end
        true
      end
    end
  end
end
