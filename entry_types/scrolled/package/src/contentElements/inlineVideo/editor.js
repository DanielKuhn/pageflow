import {editor} from 'pageflow-scrolled/editor';
import {CheckBoxInputView, SelectInputView} from 'pageflow/ui';
import {FileInputView} from 'pageflow/editor';

editor.contentElementTypes.register('inlineVideo', {
  configurationEditor() {
    this.tab('general', function() {
      this.input('id', FileInputView, {
        collection: 'video_files',
        fileSelectionHandler: 'contentElementConfiguration',
        positioning: false
      });
      this.input('autoplay', CheckBoxInputView);
      this.input('controls', CheckBoxInputView);
      this.input('position', SelectInputView, {
        attributeTranslationKeyPrefixes: ['pageflow_scrolled.editor.inputs'],
        values: ['inline', 'sticky', 'full']
      });
    });
  }
});
