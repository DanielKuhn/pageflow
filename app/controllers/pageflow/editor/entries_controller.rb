module Pageflow
  module Editor
    class EntriesController < Pageflow::ApplicationController
      respond_to :json

      before_action :authenticate_user!

      def index
        @entries = DraftEntry.accessible_by(current_ability, :use_files)
        respond_with(@entries)
      end

      def seed
        @entry = DraftEntry.find(params[:id])
        authorize!(:edit, @entry.to_model)

        @entry_config = Pageflow.config_for(@entry)
      end

      def show
        @entry = DraftEntry.find(params[:id])
        authorize!(:show, @entry.to_model)
      end

      def update
        @entry = DraftEntry.find(params[:id])

        authorize!(:update, @entry.to_model)
        @entry.update_meta_data!(entry_params)

        head(:no_content)
      end

      private

      def entry_params
        params.require(:entry).permit(:title, :summary, :credits, :manual_start,
                                      :home_url, :home_button_enabled,
                                      :overview_button_enabled,
                                      :emphasize_chapter_beginning, :emphasize_new_pages,
                                      :share_url, :share_image_id, :share_image_x, :share_image_y,
                                      :locale, :author, :publisher, :keywords, :theme_name,
                                      share_providers: {})
      end
    end
  end
end
