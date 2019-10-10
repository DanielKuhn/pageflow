require 'spec_helper'
require 'rake'

module Pageflow
  describe 'pageflow:entries' do
    before do
      Rake.application.rake_require 'tasks/entry_export_import'
      Rake::Task.define_task(:environment)

      Dir.glob(Rails.root.join('tmp', 'entries_export_*')).each do |f|
        FileUtils.rm_r(f)
      end
    end

    describe 'export task' do
      it 'creates zip file' do
        entry = create(:entry)

        Timecop.freeze(Time.local(2019, 10, 10)) do
          Rake.application['pageflow:entries:export'].invoke(entry.id)
        end

        archive_path = Rails.root.join('tmp',
                                       'entries_export_20191010000000',
                                       "entry_#{entry.id}.zip")
        expect(archive_path).to exist
      end
    end

    describe 'import task' do
      it 'creates entry' do
        entry = create(:entry)
        user = create(:user, :manager, on: create(:account))
        archive_path = Rails.root.join('tmp',
                                       'entries_export_20191010000000',
                                       "entry_#{entry.id}.zip")

        Timecop.freeze(Time.local(2019, 10, 10)) do
          Rake.application['pageflow:entries:export'].invoke(entry.id)
        end

        expect {
          Rake.application['pageflow:entries:import'].invoke(archive_path, user.id)
        }.to(change { user.accounts.first.entries.count })
      end
    end
  end
end
