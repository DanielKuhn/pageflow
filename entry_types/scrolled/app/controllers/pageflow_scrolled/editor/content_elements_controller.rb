module PageflowScrolled
  module Editor
    # @api private
    class ContentElementsController < ActionController::Base
      include Pageflow::EditorController

      def create
        section = Section.find(params[:section_id])
        content_element = section.content_elements.create(content_element_params)

        render json: content_element, status: :created
      end

      def update
        content_element = ContentElement.all_for_revision(@entry.draft).find(params[:id])
        content_element.update_attributes(content_element_params)

        render json: content_element
      end

      def destroy
        content_element = ContentElement.all_for_revision(@entry.draft).find(params[:id])
        content_element.destroy

        render json: content_element
      end

      def order
        section = Section.all_for_revision(@entry.draft).find(params[:section_id])
        storyline = section.chapter.storyline

        params.require(:ids).each_with_index do |id, index|
          storyline.content_elements.update(id,
                                            section_id: section.id,
                                            position: index)
        end

        head :no_content
      end

      private

      def content_element_params
        configuration = params.require(:content_element)[:configuration].try(:permit!) || {}
        params.require(:content_element)
              .permit(:type_name, :position)
              .merge(configuration: configuration)
      end
    end
  end
end
