module Pageflow
  # Options to be defined in the pageflow initializer of the main app.
  class Configuration
    # Default options for paperclip attachments which are supposed to
    # use filesystem storage.
    attr_accessor :paperclip_filesystem_default_options

    # Default options for paperclip attachments which are supposed to use
    # s3 storage.
    attr_accessor :paperclip_s3_default_options

    # String to interpolate into paths of files generated by paperclip
    # preprocessors. This allows to refresh cdn caches after
    # reprocessing attachments.
    attr_accessor :paperclip_attachments_version

    # Path to the location in the filesystem where attachments shall
    # be stored. The value of this option is available via the
    # pageflow_filesystem_root paperclip interpolation.
    attr_accessor :paperclip_filesystem_root

    # Refer to the pageflow initializer template for a list of
    # supported options.
    attr_accessor :zencoder_options

    # A constraint used by the pageflow engine to restrict access to
    # the editor related HTTP end points. This can be used to ensure
    # the editor is only accessable via a certain host when different
    # CNAMES are used to access the public end points of pageflow.
    attr_accessor :editor_route_constraint

    # The email address to use as from header in invitation mails to
    # new users
    attr_accessor :mailer_sender

    # Extend the configuration based on feature flags set for accounts
    # or entries.
    #
    # @example
    #
    # Make a page type only available if a feature flag is set on the
    # entry or its account
    #
    #   config.features.register('some_special_page_type' do |config
    #     config.page_types.register(Pageflow::SomeSpecial.page_type)
    #   end
    #
    # @since 0.9
    # @returns [Features}
    attr_reader :features

    # Subscribe to hooks in order to be notified of events. Any object
    # with a call method can be a subscriber
    #
    # Example:
    #
    #     config.hooks.subscribe(:submit_file, -> { do_something })
    #
    attr_reader :hooks

    # Limit the use of certain resources. Any object implementing the
    # interface of Pageflow::Quota can be registered.
    #
    # Example:
    #
    #     config.quotas.register(:users, UserQuota)
    #
    attr_accessor :quotas

    # Additional themes can be registered to use custom css.
    #
    # Example:
    #
    #     config.themes.register(:custom)
    #
    # @return [Themes]
    attr_reader :themes

    # Register new types of pages.
    # @return [PageTypes]
    # @since 0.9
    attr_reader :page_types

    # List of {FileType} instances provided by page types.
    # @return [FileTypes]
    attr_reader :file_types

    # Used to register new types of widgets to be displayed in entries.
    # @return [WidgetTypes]
    attr_reader :widget_types

    # Used to add new sections to the help dialog displayed in the
    # editor.
    #
    # @exmaple
    #
    #   config.help_entries.register('pageflow.rainbow.help_entries.colors', priority: 11)
    #   config.help_entries.register('pageflow.rainbow.help_entries.colors.blue',
    #                                parent: 'pageflow.rainbow.help_entries.colors')
    #
    # @since 0.7
    # @return [HelpEntries]
    attr_reader :help_entries

    # Paperclip style definitions of thumbnails used by Pageflow.
    # @return Hash
    attr_accessor :thumbnail_styles

    # Names of Paperclip styles that shall be rendered into entry
    # specific stylesheets.
    # @return Array<Symbol>
    attr_accessor :css_rendered_thumbnail_styles

    # Either a lambda or an object with a `match?` method, to restrict
    # access to the editor routes defined by Pageflow.
    #
    # This can be used if published entries shall be available under
    # different CNAMES but the admin and the editor shall only be
    # accessible via one official url.
    attr_accessor :editor_routing_constraint

    # Either a lambda or an object with a `call` method taking two
    # parameters: An `ActiveRecord` scope of {Pageflow::Theming} records
    # and an {ActionDispatch::Request} object. Has to return the scope
    # in which to find themings.
    #
    # Defaults to {CnameThemingRequestScope} which finds themings
    # based on the request subdomain. Can be used to alter the logic
    # of finding a theming whose home_url to redirect to when visiting
    # the public root path.
    #
    # Example:
    #
    #     config.theming_request_scope = lambda do |themings, request|
    #       themings.where(id: Pageflow::Account.find_by_name!(request.subdomain).default_theming_id)
    #     end
    attr_accessor :theming_request_scope

    # Either a lambda or an object with a `call` method taking two
    # parameters: An `ActiveRecord` scope of `Pageflow::Entry` records
    # and an `ActionDispatch::Request` object. Has to return the scope
    # in which to find entries.
    #
    # Used by all public actions that display entries to restrict the
    # available entries by hostname or other request attributes.
    #
    # Use {#public_entry_url_options} to make sure urls of published
    # entries conform twith the restrictions.
    #
    # Example:
    #
    #     # Only make entries of one account available under <account.name>.example.com
    #     config.public_entry_request_scope = lambda do |entries, request|
    #       entries.includes(:account).where(pageflow_accounts: {name: request.subdomain})
    #     end
    attr_accessor :public_entry_request_scope

    # Either a lambda or an object with a `call` method taking a
    # {Theming} as paramater and returing a hash of options used to
    # construct the url of a published entry.
    #
    # Can be used to change the host of the url under which entries
    # are available.
    #
    # Example:
    #
    #     config.public_entry_url_options = lambda do |theming|
    #       {host: "#{theming.account.name}.example.com"}
    #     end
    attr_accessor :public_entry_url_options

    # Either a lambda or an object with a `call` method taking a
    # {Theming} as paramater and returing a hash of options used to
    # construct the embed url of a published entry.
    attr_accessor :entry_embed_url_options

    # Submit video/audio encoding jobs only after the user has
    # explicitly confirmed in the editor. Defaults to false.
    attr_accessor :confirm_encoding_jobs

    # Used by Pageflow extensions to provide new tabs to be displayed
    # in the admin.
    #
    # @example
    #
    #     config.admin_resource_tabs.register(:entry, Admin::CustomTab)
    #
    # @return [Admin::Tabs]
    attr_reader :admin_resource_tabs

    # Add custom form fields to admin forms.
    #
    # @example
    #
    #     config.admin_form_inputs.register(:entry) do |form|
    #       form.input(:custom_field)
    #     end
    #
    # @since 0.9
    # @return [Admin::FormInputs]
    attr_reader :admin_form_inputs

    # Array of locales which can be chosen as interface language by a
    # user. Defaults to `[:en, :de]`.
    # @since 0.7
    attr_accessor :available_locales

    # Array of locales which can be chosen as interface language for
    # an entry. Defaults to the locales supported by the
    # `pageflow-public-i18n` gem.
    # @since 0.10
    attr_accessor :available_public_locales

    # How to handle https requests for URLs which will have assets in the page.
    # If you wish to serve all assets over http and prevent mixed-content warnings,
    # you can force a redirect to http. The inverse is also true: you can force
    # a redirect to https for all http requests.
    #
    # @example
    #
    #     config.public_https_mode = :prevent (default) # => redirects https to http
    #     config.public_https_mode = :enforce # => redirects http to https
    #     config.public_https_mode = :ignore # => does nothing
    # @since 0.9
    attr_accessor :public_https_mode

    # Meta tag defaults.
    #
    # These defaults will be included in the page <head> unless overriden by the Entry.
    # If you set these to <tt>nil</tt> or <tt>""</tt> the meta tag won't be included.
    # @since 0.10
    attr_accessor :default_keywords_meta_tag
    attr_accessor :default_author_meta_tag
    attr_accessor :default_publisher_meta_tag

    # Whether a user can be deleted.
    #
    # @example
    #
    #     config.authorize_user_deletion =
    #       lambda do |user_to_delete|
    #         if user_to_delete.accounts.all? { |account| account.users.size > 1 }
    #           true
    #         else
    #           'Last user on account. Permission denied'
    #         end
    #       end
    # @since 0.11
    attr_accessor :authorize_user_deletion

    # Array of values that the `kind` attribute on text tracks can
    # take. Defaults to `[:captions, :subtitles, :descriptions]`.
    attr_reader :available_text_track_kinds

    def initialize
      @paperclip_filesystem_default_options = {validate_media_type: false}
      @paperclip_s3_default_options = {validate_media_type: false}

      @zencoder_options = {}

      @mailer_sender = 'pageflow@example.com'

      @features = Features.new
      @hooks = Hooks.new
      @quotas = Quotas.new
      @themes = Themes.new
      @page_types = PageTypes.new
      @file_types = FileTypes.new(page_types)
      @widget_types = WidgetTypes.new
      @help_entries = HelpEntries.new

      @thumbnail_styles = {}
      @css_rendered_thumbnail_styles = Pageflow::PagesHelper::CSS_RENDERED_THUMBNAIL_STYLES

      @theming_request_scope = CnameThemingRequestScope.new
      @public_entry_request_scope = lambda { |entries, request| entries }
      @public_entry_url_options = Pageflow::ThemingsHelper::DEFAULT_PUBLIC_ENTRY_OPTIONS
      @entry_embed_url_options = {protocol: 'https'}

      @confirm_encoding_jobs = false

      @admin_resource_tabs = Pageflow::Admin::Tabs.new
      @admin_form_inputs = Pageflow::Admin::FormInputs.new

      @available_locales = [:en, :de]
      @available_public_locales = PublicI18n.available_locales

      @public_https_mode = :prevent

      @default_keywords_meta_tag = 'pageflow, multimedia, reportage'
      @default_author_meta_tag = 'Pageflow'
      @default_publisher_meta_tag = 'Pageflow'

      @authorize_user_deletion = lambda { |_user| true }

      @available_text_track_kinds = [:captions, :subtitles, :descriptions]
    end

    # Activate a plugin.
    #
    # @param [Plugin] plugin
    # @since 0.7
    def plugin(plugin)
      plugin.configure(self)
    end

    # @deprecated Use `config.page_types.register` instead.
    def register_page_type(page_type)
      ActiveSupport::Deprecation.warn('Pageflow::Configuration#register_page_type is deprecated. Use config.page_types.register instead.', caller)
      page_types.register(page_type)
    end

    def revision_components
      page_types.map(&:revision_components).flatten.uniq
    end

    # @api private
    def lint!
      @features.lint!
    end

    # @api private
    def theming_url_options(theming)
      options = public_entry_url_options
      options.respond_to?(:call) ? options.call(theming) : options
    end

    # @api private
    def enable_features(names)
      features.enable(names, FeatureLevelConfiguration.new(self))
    end

    # @api private
    def enable_all_features
      features.enable_all(FeatureLevelConfiguration.new(self))
    end

    # Restricts the configuration interface to those parts which can
    # be used from inside features.
    class FeatureLevelConfiguration < Struct.new(:config)
      delegate :page_types, to: :config
      delegate :widget_types, to: :config
      delegate :help_entries, to: :config
      delegate :admin_form_inputs, to: :config
    end
  end
end