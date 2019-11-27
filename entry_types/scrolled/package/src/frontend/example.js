export default [
  {
    transition: 'scroll',
    fullHeight: true,
    backdrop: {
      image: 'wasser'
    },
    foreground: [
      {
        type: 'presentationIntroductionHeading',
        props: {
          first: true
        }
      },
      {
        type: 'soundDisclaimer'
      },
      {
        type: 'presentationIntroductionText'
      }
    ]
  },
  {
    transition: 'reveal',
    fullHeight: true,
    appearance: 'transparent',
    backdrop: {
      image: 'boot'
    },
    foreground: [
      {
        type: 'presentationSceneTransitionsHeading'
      },
      {
        type: 'presentationSceneTransitionsRevealText'
      }
    ]
  },
  {
    transition: 'scrollOver',
    fullHeight: true,
    appearance: 'cards',
    layout: "center",
    backdrop: {
      image: 'fisch'
    },
    foreground: [
      {
        type: 'presentationSceneTransitionsScrollOverText'
      }
    ]
  },
  {
    transition: 'scrollOver',
    fullHeight: false,
    appearance: 'transparent',
    layout: "left",
    invert: true,
    backdrop: {
      image: '#fff'
    },
    foreground: [
      {
        type: 'presentationShortSceneHeading'
      },
      {
        type: 'presentationShortSceneBeforeText'
      }
    ]
  },
  {
    transition: 'reveal',
    fullHeight: false,
    appearance: 'transparent',
    layout: "right",
    backdrop: {
      image: 'schildkroete'
    },
    foreground: [{
      type: 'shortSceneSpacer'
    }]
  },
  {
    transition: 'scrollOver',
    fullHeight: false,
    appearance: 'transparent',
    invert: true,
    layout: "right",
    backdrop: {
      image: '#fff'
    },
    foreground: [
      {
        type: 'presentationShortSceneAfterText'
      }
    ]
  },
  {
    transition: 'scrollOver',
    fullHeight: false,
    appearance: 'cards',
    layout: "left",
    backdrop: {
      image: 'strandTouristen'
    },
    foreground: [
      {
        type: 'presentationFadeText1'
      }
    ]
  },
  {
    transition: 'fadeBg',
    fullHeight: false,
    appearance: 'cards',
    layout: "right",
    backdrop: {
      image: 'strandDrohne'
    },
    foreground: [
      {
        type: 'presentationFadeText2'
      }
    ]
  },
  {
    transition: 'reveal',
    fullHeight: true,
    appearance: 'shadow',
    layout: "right",
    backdrop: {
      image: 'videoGarzweilerLoop1'
    },
    foreground: [
      {
        type: 'presentationMediaHeading'
      },
      {
        type: 'presentationMediaVideosText1'
      }
    ]
  },
  {
    transition: 'scroll',
    fullHeight: false,
    appearance: 'transparent',
    layout: "right",
    backdrop: {
      image: '#000'
    },
    foreground: [
      {
        type: 'inlineVideoFullWidth',
        position: 'full',
        autoplay: true
      }
    ]
  },
  {
    transition: 'scroll',
    fullHeight: true,
    appearance: 'shadow',
    layout: "right",
    backdrop: {
      image: 'braunkohleBackground1'
    },
    foreground: [
      {
        type: 'presentationMediaInlineHeading'
      },
      {
        type: 'presentationMediaImagesText1'
      },
      {
        type: 'presentationMediaInlineImage1',
        position: 'inline',
        props: {
          caption: 'Dies ist ein Inline-Bild mit Bild-Unterschrift'
        }
      },
      {
        type: 'presentationMediaImagesText2'
      },
      {
        type: 'inlineVideoDrone',
        autoplay: true
      },
      {
        type: 'presentationMediaImagesText3'
      }
    ]
  },
  {
    transition: 'fadeBg',
    fullHeight: true,
    appearance: 'shadow',
    layout: "right",
    backdrop: {
      image: 'braunkohleBackground2'
    },
    foreground: [
      {
        type: 'presentationMediaImagesText4'
      },
      {
        type: 'presentationMediaStickyImage1',
        position: 'sticky',
        props: {
          caption: 'Dies ist ein sticky image'
        }
      },
      {
        type: 'presentationMediaImagesText5'
      },
      {
        type: 'presentationMediaImagesText6'
      },
      {
        type: 'presentationMediaImagesText7'
      },
      {
        type: 'loremIpsum3',
        props: {dummy: true}
      },
      {
        type: 'presentationMediaStickyImage2',
        position: 'sticky'
      },
      {
        type: 'loremIpsum1',
        props: {dummy: true}
      },
      {
        type: 'loremIpsum2',
        props: {dummy: true}
      },
      {
        type: 'loremIpsum3',
        props: {dummy: true}
      },
      {
        type: 'presentationMediaStickyImage3',
        position: 'sticky'
      },
      {
        type: 'loremIpsum1',
        props: {dummy: true}
      },
      {
        type: 'loremIpsum2',
        props: {dummy: true}
      },
      {
        type: 'loremIpsum3',
        props: {dummy: true}
      }
    ]
  },
  {
    transition: 'scroll',
    fullHeight: true,
    layout: "right",
    backdrop: {
      image: 'braunkohleBaggerSelfie'
    },
    foreground: [
      {
        type: 'presentationHeadSolutionHeading'
      },
      {
        type: 'presentationHeadSolutionText'
      }
    ]
  },
  {
    transition: 'beforeAfter',
    fullHeight: false,
    appearance: 'transparent',
    layout: "center",
    backdrop: {
      image: '#000'
    },
    foreground: [
      {
        type: 'presentationBeforeAfterHeading'
      },
      {
        type: 'presentationBeforeAfterText'
      }
    ]
  },
  {
    transition: 'scroll',
    fullHeight: false,
    appearance: 'transparent',
    layout: "center",
    backdrop: {
      image: '#000',
    },
    foreground: [
      {
        type: 'inlineBeforeAfter',
        position: 'full',
        leftImageLabel: 'Hier kann Text zum "Vorher"-Bild angegeben werden',
        rightImageLabel: 'Hier kann Text zum "Nachher"-Bild angegeben werden (#11)',
      }
    ],
  },
  {
    transition: 'scroll',
    fullHeight: false,
    appearance: 'transparent',
    layout: "center",
    invert: true,
    backdrop: {
      image: '#fff',
    },
    foreground: [
      {
        type: 'presentationScrollmationHeading'
      },
      {
        type: 'presentationScrollmationText1'
      }
    ],
  },
  {
    transition: 'reveal',
    fullHeight: false,
    layout: "right",
    appearance: 'cards',
    backdrop: {
      image: 'presentationScrollmation1Desktop',
      imageMobile: 'presentationScrollmation1Mobile'
    },
    foreground: [
      {
        type: 'presentationScrollmationText2'
      }
    ],
  },
  {
    transition: 'fadeBg',
    fullHeight: false,
    layout: "right",
    appearance: 'cards',
    backdrop: {
      image: 'presentationScrollmation2Desktop',
      imageMobile: 'presentationScrollmation2Mobile'
    },
    foreground: [
      {
        type: 'presentationScrollmationText3'
      }
    ],
  },
  {
    transition: 'fadeBg',
    fullHeight: false,
    layout: "right",
    appearance: 'cards',
    backdrop: {
      image: 'presentationScrollmation3Desktop',
      imageMobile: 'presentationScrollmation3Mobile'
    },
    foreground: []
  },
  {
    transition: 'beforeAfter',
    fullHeight: true,
    appearance: 'shadow',
    layout: "left",
    backdrop: {
      image: 'presentationFeedbackBg',
    },
    foreground: [
      {
        type: 'presentationFeedbackHeading'
      },
      {
        type: 'presentationFeedbackText'
      }
    ],
  }
]
