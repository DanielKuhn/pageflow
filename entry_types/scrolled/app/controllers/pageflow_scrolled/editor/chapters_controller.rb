module PageflowScrolled
  module Editor
    # @api private
    class ChaptersController < ActionController::Base
      include Pageflow::EditorController

      def create
        chapter = Chapter.create(chapter_params.merge(revision: @entry.draft))

        render json: chapter, status: :created
      end

      def update
        chapter = Chapter.all_for_revision(@entry.draft).find(params[:id])
        chapter.update_attributes(chapter_params)

        render json: chapter
      end

      def destroy
        chapter = Chapter.all_for_revision(@entry.draft).find(params[:id])
        chapter.destroy

        render json: chapter
      end

      def order
        params.require(:ids).each_with_index do |id, index|
          Chapter.all_for_revision(@entry.draft).update(id, position: index)
        end

        head :no_content
      end

      private

      def chapter_params
        {configuration: params.dig(:chapter, :configuration).try(:permit!)}
      end
    end
  end
end
