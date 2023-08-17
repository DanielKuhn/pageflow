import '../frontend';
import {storiesOfContentElement} from 'pageflow-scrolled/spec/support/stories';

storiesOfContentElement(module, {
  typeName: 'quote',
  baseConfiguration: {
    text: [
      {
        type: 'paragraph',
        children: [{text: 'Be the change that you wish to see in the world.'}]
      }
    ],
    attribution: [
      {
        type: 'paragraph',
        children: [{text: 'Mahatma Gandhi'}]
      },
      {
        type: 'paragraph',
        children: [{text: '1869–1948'}]
      }
    ]
  },
  variants: [
    {
      name: 'Large',
      configuration: {
        textSize: 'large'
      }
    },
    {
      name: 'Medium',
      configuration: {
        textSize: 'medium'
      }
    },
    {
      name: 'Small',
      configuration: {
        textSize: 'small'
      }
    },
    {
      name: 'Very Small',
      configuration: {
        textSize: 'verySmall'
      }
    },
    {
      name: 'Hanging',
      themeOptions: {
        quoteDesign: 'hanging'
      }
    },
    {
      name: 'Centered Attribution',
      themeOptions: {
        properties: {
          root: {
            quoteAttributionMinWidth: '50%'
          }
        }
      }
    },
    {
      name: 'Inline',
      themeOptions: {
        quoteDesign: 'inline',
        properties: {
          root: {
            quoteLeftMark: '"»"',
            quoteRightMark: '"«"',
            quoteMarkFontWeight: 'normal',
            quoteIndent: 0,
            quoteMarkOpacity: 1
          }
        }
      }
    },
    {
      name: 'Double angle',
      themeOptions: {
        properties: {
          root: {
            quoteLeftMark: '"»"',
            quoteLeftMarkTop: '-0.35em'
          }
        }
      }
    },
    {
      name: 'Pallete color',
      themeOptions: {
        properties: {
          root: {
            paletteColorAccent: '#04f'
          }
        }
      },
      configuration: {
        color: 'accent'
      }
    }
  ]
});
