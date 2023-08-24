import I18n from 'i18n-js';
import {editor} from 'pageflow-scrolled/editor';
import {SelectInputView, SeparatorView} from 'pageflow/ui';
import {InfoBoxView} from 'pageflow/editor';

import pictogram from './pictogram.svg';

editor.contentElementTypes.register('quote', {
  pictogram,
  supportedPositions: ['inline', 'sticky', 'left', 'right'],
  supportedWidthRange: ['xs', 'xl'],

  defaultConfig: {textSize: 'medium'},

  configurationEditor({entry}) {
    this.tab('general', function() {
      this.input('textSize', SelectInputView, {
        values: ['large', 'medium', 'small', 'verySmall']
      });
      this.group('ContentElementPosition');
      this.group('PaletteColor', {
        propertyName: 'color',
        entry
      });

      this.view(SeparatorView);

      this.view(InfoBoxView, {
        text: I18n.t(
          'pageflow_scrolled.editor.content_elements.textBlock.help_texts.shortcuts'
        ),
      });
    });
  }
});
