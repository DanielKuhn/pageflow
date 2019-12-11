import React from 'react';

import Heading from './Heading';
import TextBlock from './TextBlock';
import InlineImage from './InlineImage';
import InlineVideo from './InlineVideo';
import InlineBeforeAfter from './InlineBeforeAfter';
import SoundDisclaimer from './SoundDisclaimer';

import {loremIpsum1, loremIpsum2, loremIpsum3} from './loremIpsum';

export default {
  heading: {
    name: 'Überschrift',
    component: Heading
  },
  textBlock: {
    name: 'Text Block',
    component: TextBlock,
  },
  soundDisclaimer: {
    name: 'Sound Disclaimer',
    component: SoundDisclaimer
  },
  loremIpsum1: {
    name: 'Blindtext 1',
    component: TextBlock,
    props: {
      children: loremIpsum1
    }
  },
  loremIpsum2: {
    name: 'Blindtext 2',
    component: TextBlock,
    props: {
      children: loremIpsum2
    }
  },
  loremIpsum3: {
    name: 'Blindtext 3',
    component: TextBlock,
    props: {
      children: loremIpsum3
    }
  },
  inlineImage1: {
    name: 'Inline Bild 1',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'tool1'
    }
  },
  inlineImage2: {
    name: 'Inline Bild 2',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'tool2'
    }
  },
  inlineImage3: {
    name: 'Inline Bild 3',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'tool3'
    }
  },
  inlineVideo: {
    name: 'Inline Video',
    component: InlineVideo,
    inlinePositioning: true,
    props: {
      id: 'videoKaterchen'
    }
  },
  inlineVideoFullWidth: {
    name: 'Inline Video Full Width',
    component: InlineVideo,
    inlinePositioning: true,
    props: {
      id: 'videoInselInterviewToni',
      controls: true
    }
  },
  inlineVideoDrone: {
    name: 'Inline Video Full Width',
    component: InlineVideo,
    inlinePositioning: true,
    props: {
      id: 'videoGarzweilerDrohne',
      controls: true
    }
  },
  inlineBeforeAfter: {
    name: 'Inline Before/After',
    component: InlineBeforeAfter,
    inlinePositioning: true
  },
  beforeAfterHeading: {
    component: Heading,
    props: {
      children: 'Vorher / Nachher',
    },
  },
  beforeAfterText: {
    component: TextBlock,
    props: {
      children: <>
        In diesem Beispiel wird ein Vorgeschmack auf horizontales Vorher-Nachher geboten. Der Slider steht anfänglich auf einer redaktionell festzulegenden Startposition.
        <br/><br/>
        Als Schiebemöglichkeiten bestehen dabei vertikales Scrollen, horizontales Scrollen mit Schieber, und Tap/Klick ins Bild. Der Vorher-Nachher-Szene wird hierbei die volle Bildschirmhöhe eingeräumt, wobei sich das Vorher-Nachher-Bild auf die volle Bildschirmbreite erstreckt.
      </>
    },
  },
  beforeAfterLabelHeading: {
    component: Heading,
    props: {
      children: 'Vorher / Nachher mit Beschriftung, kein Scrollen',
    },
  },
  beforeAfterLabelText: {
    component: TextBlock,
    props: {
      children: <>
        In diesem Beispiel wird ein Vorgeschmack auf horizontales Vorher-Nachher mit Beschriftung der Bilder geboten. Der Slider steht anfänglich auf einer redaktionell festzulegenden Startposition.
        <br/><br/>
        Die Bildbeschriftungen sind hierbei Teil des Hintergrunds, und sind zur Darstellung einer kurzen Erklärung des Unterschieds zwischen den beiden Bildern vorgesehen.
        <br/><br/>
        Schieben durch Scrollen des Beitrags ist deaktiviert. Nur durch Klick ins Bild oder Betätigen des Schiebers erfolgt ein Übergang zwischen Vorher-Bild und Nachher-Bild.
      </>
    },
  },
  beforeAfterScrollmodeHeading: {
    component: Heading,
    props: {
      children: 'Vorher / Nachher, nur Scrollen',
    },
  },
  beforeAfterScrollmodeText: {
    component: TextBlock,
    props: {
      children: <>
        In diesem Beispiel wird ein Vorgeschmack auf horizontales Vorher-Nachher mit Beschriftung der Bilder geboten. Der Slider steht anfänglich auf einer redaktionell festzulegenden Startposition.
        <br/><br/>
        Der klassische Schiebemodus ist hier deaktiviert. Nur durch Scrollen erfolgt ein Übergang zwischen Vorher-Bild und Nachher-Bild.
      </>
    },
  },
  beforeAfterXRayScrollmationExampleHeading: {
    component: Heading,
    props: {
      children: 'Vorher/Nachher, X-Ray und Scrollmation'
    }
  },
  beforeAfterHaldernChurchText: {
    component: TextBlock,
    props: {
      children: <>
        In diesem Beispiel sollen die Möglichkeiten zur Komposition von Phasen- und
        Vergleichsbildern mithilfe von "Bordmitteln" (Szenenübergängen) in Pageflow Next
        veranschaulicht werden.
        <br/><br/>
        Dazu sehen wir als erstes ein klassisches Vorher/Nachher-Bild, welches aus einem
        Pageflow-Beitrag entnommen wurde. Das Verhalten basiert auf zwei vollflächigen
        Bildern die statisch im Hintergrund positioniert werden. Wie man sieht, funktioniert der
        Vorher/Nachher-Effekt auch per nativem Scrolling einwandfrei.
      </>
    }
  },
  beforeAfterChernobylText: {
    component: TextBlock,
    props: {
      children: <>
        Der Vorher/Nachher-Effekt eigenet sich hervorragend zur Darstellung zeitlicher
        Veränderungen, hier am Beispiel der Stadt Prypjat nahe dem Kernreaktor Tschernobyl vor dem
        Unfall und heutzutage.
      </>
    }
  },
  beforeAfterAleppoText: {
    component: TextBlock,
    props: {
      children: <>
        Als einzelne Szene in einem Beitrag funktioniert die vertikale Variante sehr gut.
        Wenn man jedoch viele Vorher/Nachher-Beispiele am Stück darstellen möchte,
        z.B. die Veränderung von Gletschern anhand von 10 Beispielen oder eine Reihe von
        Bildern einer Stadt vor und nach einem Krieg,
        kann die vollflächige Darstellung mit vertikalem Scroll-Übergang ermüdend wirken.
        <br/><br/>
        Für solche Fälle - oder auch wenn das Bildmaterial nicht gut genug für die vollflächige
        Darstellung ist - sollte die Inline-Darstellung mit horizontalem Schieberegler,
        wie bisher aus Pageflow bekannt, trotzdem noch eine zusätzliche Option sein.
      </>
    }
  },
  aleppoInlineText: {
    component: TextBlock,
    props: {
      children: <>
        Selbstverständlich kann auch bei Vorher/Nachher-Szenen Text in die Vordergrundebene gelegt
        werden wie bei allen anderen Szenen. Dieser kann das Vorher/Nachher Bild weiter
        kommentieren.
        <br/>
        Dabei gelten die gleichen Regeln zum responsiven Verhalten basierend auf dem definierten
        Bildausschnitt (zu beobachten bei Veränderung der Größe des Browserfensters).
      </>
    }
  },
  xRayHeading: {
    component: Heading,
    props: {
      children: 'Umsetzung des "X-Ray"-Effekts'
    }
  },
  xRayText: {
    component: TextBlock,
    props: {
      children: <>
        Ein anderer Einsatz des Vorher/Nachher-Szenenübergangs ist die Umsetzung des
        X-Ray-Effekts. Dabei werden zwei Szenen mit voller Höhe von einer Szene mit dynamischer
        Höhe unterbrochen. Durch die Zuweisung aufeinander abgestimmter, statischer
        Hintergrundbilder lässt sich so eine Röntgen-Optik erzielen, mit der Objekte "durchleuchtet"
        oder anderweitig unterbrochen werden können.
      </>
    }
  },
  xRayInlineText: {
    component: TextBlock,
    props: {
      children: <>
        In diesem "Durchleuchtungs"-Abschnitt kann der Unterschied zum Original veranschaulicht
        werden.<br/><br/>
        Durch die direkte Nebeneinanderstellung und Unterbrechung des Originalbilds
        wirkt die Komposition wie eine einzelne Szene.
      </>
    }
  },
  phasesHeading: {
    component: Heading,
    props: {
      children: 'Umsetzung als Phasenbild'
    }
  },
  phasesText: {
    component: TextBlock,
    props: {
      children: <>
        Möchte man eine Veränderung in mehreren Stufen oder Schichten darstellen, lässt sich
        der Vorher/Nachher-Szenenübergang gepaart mit dynamischer Höhe der einzelenen Szenen auch
        dazu nutzen ein Phasenbild zu konstruieren.
      </>
    }
  },
  phasesSpacer: {
    component: TextBlock,
    props: {
      children: <>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
    }
  },
  scrollmationHeading: {
    component: Heading,
    props: {
      children: 'Umsetzung als Hintergrund-Scrollmation'
    }
  },
  scrollmationText1: {
    component: TextBlock,
    props: {
      children: <>
        Wenn man statt des Vorher/Nachher-Szenenübergangs die Fade-Variante konfiguriert,
        lässt sich dasselbe Bildmaterial auch als Scrollmation darstellen. Hierbei ändert sich das
        Hintergrundbild kontextbezogen an verschiedenen im Text verankerten Stellen.
      </>
    }
  },
  scrollmationText2: {
    component: TextBlock,
    props: {
      children: <>
        Dabei gilt genau wie für Vorher/Nachher-Motive: Gibt das Bildmaterial keine
        vollflächige Darstellung her oder möchte man das Material eher begleitend darstellen,
        kommt jederzeit auch die Positionierung als begleitendes Inline-element in Frage.
      </>
    }
  },
  scrollmationText3: {
    component: TextBlock,
    props: {
      children: <>
        Die Hintergrund-Scrollmation besteht dabei aus mehreren aufeinanderfolgenden Szenen
        mit vollflächigen Hintergundbildern, zwischen denen ein entsprechender Szenenübergang
        konfiguriert wurde. Dabei scrollt der Text kontinuierlich in der Vordergrundebene während
        die Hintergrund-Bilder kontextbezogen ausgetauscht werden.
      </>
    }
  },
  videoExamplesHeading: {
    component: Heading,
    props: {
      children: 'Video-Backdrops und interaktive Videos'
    }
  },
  videoExamplesText: {
    component: TextBlock,
    props: {
      children: <>
        In dieser Demo wechseln sich jeweils Hintergrund-Video und ineraktives Video ab.
        Es werden alle Szenenübergänge verwendet um die Szenenwechsel in allen Variationen wirken
        lassen zu können.<br />
        Hintergrund-Videos spielen automatisch (AutoPlay), in Endlosschleife (Loop) und
        sind grundsätzlich zentriert und Viewport-füllend positioniert.<br />
        Interaktive Videos werden auf Viewport-Breite skaliert und oben und unten mit schwarzen
        Rändern dargestellt.
      </>
    }
  },
  videoExamplesTextBeforeAfter: {
    component: TextBlock,
    props: {
      children: <>
        Für den Before/After Szenenübergang werden in dieser Szene zwei Varianten des
        Hintergrund-Videos verwendet.<br /><br />
        <b>Dazu nochmal der explizite Hinweis, dass Before/After in diesem Kontext nur der Name für
        den Szenenübergang ist</b>. Der Szenen-Typ "Interaktive Szene" mit horizontalem
        Before/After-Schieberegler wird Teil einer der nächsten Demos sein.
      </>
    }
  },




  presentationMediaInlineImage1: {
    name: 'braunkohleInline1',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'braunkohleInline1',
      focusX: 12,
      focusY: 90
    }
  },
  presentationMediaStickyImage1: {
    name: 'braunkohleSticky1',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'braunkohleSticky1',
      focusX: 12,
      focusY: 90
    }
  },
  presentationMediaStickyImage2: {
    name: 'braunkohleSticky2',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'braunkohleSticky2'
    }
  },
  presentationMediaStickyImage3: {
    name: 'braunkohleSticky3',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'braunkohleSticky3'
    }
  }
}
