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
    component: Heading,
    props: {
      children: 'Heading'
    }
  },
  textBlock: {
    name: 'Text Block',
    component: TextBlock,
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
    inlinePositioning: true,
    props: {
      leftImageLabel: 'Hier kann Text zum "Vorher"-Bild angegeben werden',
      rightImageLabel: 'Hier kann Text zum "Nachher"-Bild angegeben werden',
      slideMode: 'classic',
      startPos: 0.5
    }
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

  // PresentationExample
  presentationIntroductionHeading: {
    component: Heading,
    props: {
      children: 'Pageflow Next',
      anchor: 'introduction'
    }
  },
  soundDisclaimer: {
    component: SoundDisclaimer
  },
  presentationIntroductionText: {
    component: TextBlock,
    props: {
      children: <>
        Dies ist der Prototyp von “Pageflow Next” - einer grundlegend überarbeiteten Version des
        bekannten Storytelling-Tools.<br/>
        <br/>
        Im Fokus der Entwicklung standen drei Punkte:<br/>
        <ol>
          <li>Optimale Darstellung auf mobilen Geräten</li>
          <li>Neues User Interface</li>
          <li>
            Wegfall der “Einrastfunktion” am Ende jeder Seite und grundlegend neue
            Darstellungsmöglichkeiten.
          </li>
        </ol>
        Der Prototyp läuft am besten im Chrome-Browser, auf mobilen Geräten mit dem Betriebssystem
        iOS auch in Safari.<br/>
        <br/>
        <b>Was gibt es hier zu sehen?</b>
        <ul>
          <li>
            Die <b>mobile Ausspielung</b> ist der eigentliche Star von “Pageflow Next” - alle
            Funktionen der Desktop-Version funktionieren problemlos auch auf dem Handy und das
            Layout passt sich intelligent an das Hochkantformat an.<br/>
            Zum Testen am besten diese Seite parallel auf Desktop und Mobiltelefon öffnen und
            durchscrollen. Vieles wird auch mit einem auf Handy-Format verkleinerten Browser-Fenster
            sichtbar.
          </li>
          <li>
            Das <b>User Interface</b> ist an verschiedenen Stellen überarbeitet worden. Die
            Navigationsleiste befindet sich jetzt am oberen Rand. Sie enthält Sprungmarken zu den
            Kapiteln des Beitrags. Der horizontale Fortschrittsbalken zeigt dem Leser an welcher
            Stelle des Beitrags er sich gerade befindet. Um möglichst viel Platz für die Story zu
            schaffen, wird die Navigationsleiste eingefahren während man sich durch den Beitrag
            bewegt. Durch die Bewegung des Cursors auf den (immer sichtbaren) Fortschrittsbalken
            (oder durch Scrolling entgegen der Leserichtung) wird die Navigationsleiste wieder
            ausgefahren.
          </li>
          <li>
            Die neuen <b>Darstellungsmöglichkeiten</b> werden auf den folgenden Seiten gezeigt und
            im Text jeweils auch kurz erklärt. Es gibt neue Möglichkeiten für Szenenübergänge,
            Positionierung von Text und Medien und das Layout.
          </li>
        </ul>
        Zum besseren Vergleich gibt es diese Demo-Seiten auch im “alten Pageflow”-Design unter
        folgender Adresse:
        <a href="https://reportage.wdr.de/pageflow-next-lang" target="_blank">
          https://reportage.wdr.de/pageflow-next-lang
        </a> (Benutzername: WDR, Passwort: moreflow)<br/>
        <br/>
        (#1)
      </>
    }
  },
  presentationSceneTransitionsHeading: {
    component: Heading,
    props: {
      children: 'Szenen-Übergänge',
      anchor: 'scene-transitions'
    }
  },
  presentationSceneTransitionsRevealText: {
    component: TextBlock,
    props: {
      children: <>
        Wie am Übergang der beiden Szenen (Bilder) zu sehen, entfällt in “Pageflow Next” das
        “Einrasten” jeder Seite beim Weiterscrollen. Damit soll sich für den Nutzer der Flow im
        Pageflow verbessern, es soll klarer werden, dass das Ende der Geschichte noch nicht erreicht
        ist.<br/>
        <br/>
        Es gibt verschiedene neue Szenenübergänge und Textformatierungen.<br/>
        <br/>
        <u>Szenenübergang: "Reveal"</u><br/>
        Dieser Szenenübergang legt die nächste Szene frei indem das neue Hintergrundbild
        "aufgedeckt" wird. Der Text scrollt kontinuierlich weiter, womit die Kontinuität des
        Leseflusses beibehalten wird.<br/>
        <br/>
        (#2)
      </>
    }
  },
  presentationSceneTransitionsScrollOverText: {
    component: TextBlock,
    props: {
      children: <>
        <u>Szenenübergang: "ScrollOver"</u><br/>
        Bei diesem Szenenübergang scrollt das neue Hintergrundbild über das vorherige und bleibt
        dann, sobald es den Viewport ausfüllt, an dieser Position stehen.<br/>
        <br/>
        <u>Positionierung: Zentriert</u><br/>
        Der Begleittext ist in dieser Szene zentriert dargestellt. Diese Option eignet sich
        besonders bei Hintergrundbildern deren Motiv ebenfalls mittig liegt. Neu in “Pageflow Next”:
        Der wichtige Bildteil (in diesem Fall der Fisch) kann markiert werden und wird so zunächst
        nicht von Text verdeckt.<br/>
        <br/>
        <u>Layout:</u> Als Layout kommt hier die Option "Karte" zum Einsatz. Bei dieser Option wird
        der Text mit einer einfarbigen Fläche mit abgerundeten Ecken hinterlegt. Die Option bietet
        maximalen Kontrast und optimale Lesbarkeit und hebt den Text von der Hintergrundebene ab.
        <br/><br/>
        Bei allen gezeigten Layouts sind Variationen denkbar, wie z.B. konfigurierbare Intensität
        der Abdunklung bei Layout "Abdunkeln" Oder Hintergrund- und Textfarbe bei Option "Karte".
        <br/><br/>
        (#3)
      </>
    }
  },
  presentationShortSceneHeading: {
    component: Heading,
    props: {
      children: 'Kurze Szenen'
    }
  },
  presentationShortSceneBeforeText: {
    component: TextBlock,
    props: {
      children: <>
        Einzelne Szenen müssen nicht mehr zwingend bildschirmfüllend sein.<br/>
        <br/>
        Durch die neue Scrollmechanik in “Pageflow Next” sind auch Szenen möglich, die nicht den
        ganzen Viewport ausfüllen, sondern eher eine Auflockerung des Leseflusses bieten. Im
        Hintergrund kann ein Bild mit geringer Höhe oder eine einfarbige Fläche liegen.<br/>
        <br/>
        Einsatzmöglichkeiten sind beispielsweise kurze Anmoderationen für Videos oder abgehoben
        dargestellte Zitate.<br/>
        <br/>
        (#4)
      </>
    }
  },
  shortSceneSpacer: {
    component: TextBlock,
    props: {
      children: <>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </>
    }
  },
  presentationShortSceneAfterText: {
    component: TextBlock,
    props: {
      children: <>
        Hier sind der Kreativität beim Szenenaufbau keine Grenzen gesetzt.<br/>
        <br/>
        Denkbar sind auch mehrere aneinandergereihte kurze Szenen mit verschiedenen Versionen des
        selben Motivs. So lassen sich Overlay-, X-Ray oder Scheiben-Effekte erzielen. Durch
        geschickte Bildauswahl wirken die kurzen Szenen dann wie eine semantisch zusammenhängende
        Szene.<br/>
        <br/>
        Übrigens: Bei Pageflow Next ist rechtsbündig jetzt auch wirklich richtig weit rechts. Das
        war vorher mit der alten Navigation nicht möglich.<br/>
        <br/>
        (#5)
      </>
    }
  },
  presentationFadeText1: {
    component: TextBlock,
    props: {
      children: <>
        Hintergrundbilder können auch ganz ohne Scroll-Animation einfach passend zum Kontext
        ausgetauscht werden.<br/>
        <br/>
        Bei solchen sogenannten "Fade"-Szenenübergängen wird von einem Hintergrundbild zum anderen
        überblendet.<br/>
        <br/>
        (#6)
      </>
    }
  },
  presentationFadeText2: {
    component: TextBlock,
    props: {
      children: <>
        Dabei lassen sich interessante Effekte erzielen indem der Content beider Szenen lesbar ist
        und je nach Scrollposition das eine oder das andere Hintergrundbild verwendet wird.<br/>
        <br/>
        (#7)
      </>
    }
  },
  presentationMediaHeading: {
    component: Heading,
    props: {
      children: 'Einsatz von Medien',
      anchor: 'media'
    }
  },
  presentationMediaVideosText1: {
    component: TextBlock,
    props: {
      children: <>
        Selbstverständlich sind auch Hintergrundvideos/Loops in Pageflow Next wieder möglich.<br/>
        <br/>
        Video mit O-Tönen etc. können nahtlos anschließen und starten automatisch.<br/>
        <br/>
        (#8)
      </>
    }
  },
  presentationMediaInlineHeading: {
    component: Heading,
    props: {
      children: 'Inline-Medien'
    }
  },
  presentationMediaImagesText1: {
    component: TextBlock,
    props: {
      children: <>
        Medien können nicht nur bildschirmfüllend im Hintergrund platziert werden, sondern auch
        "inline" im Vordergrund. Beispielsweise können Fotos in den Fließtext integriert werden.
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
  presentationMediaImagesText2: {
    component: TextBlock,
    props: {
      children: <>
        Hier zu sehen ist auch eine neue rechtsbündige Formatierung. Bisher steht rechtsbündig
        formatierter Text oft eher in der Mitte des Bildes, weil der rechte Rand durch die
        Navigation belegt ist.<br/>
        <br/>
        Auch Videos können “inline” ablaufen.
      </>
    }
  },
  presentationMediaImagesText3: {
    component: TextBlock,
    props: {
      children: <>
        Die Inline-Video-Funktion soll die Möglichkeit bieten auch Videos zu verwenden, die
        qualitativ nicht für eine Vollbildausspielung geeignet sind.
        Beispielsweise historisches Archivmaterial.<br/>
        <br/>
        (#9)
      </>
    }
  },
  presentationMediaImagesText4: {
    component: TextBlock,
    props: {
      children: <>
        Weiterhin ist es in Pageflow Next möglich, Medien nicht nur inline im Textfluss zu
        positionieren, sondern auch begleitend neben dem Text.
      </>
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
  presentationMediaImagesText5: {
    component: TextBlock,
    props: {
      children: <>
        Das Element bleibt dann so lange statisch an seiner Position neben dem Text stehen, bis
        entweder die Szene aus dem Viewport gescrollt wird oder es vom nächsten begleitenden Element
        verdrängt wird.<br/>
        Diese Positionierung wird im Gegensatz zu inline "sticky" genannt.
      </>
    }
  },
  presentationMediaImagesText6: {
    component: TextBlock,
    props: {
      children: <>
        In Mobildarstellung werden sticky images einfach zu inline images. Auf diese Weise kann das
        Erscheinungsbild aufgelockert werden und dabei trotzdem verschiedenen Screengrößen optimal
        Rechnung getragen werden.<br/>
        <br/>
        (#10)
      </>
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
  presentationMediaImagesText7: {
    component: TextBlock,
    props: {
      children: <>
        Sticky images funktionieren besonders gut bei Desktop-Darstellung und langen Textpassagen:
      </>
    }
  },
  presentationMediaStickyImage3: {
    name: 'braunkohleSticky3',
    component: InlineImage,
    inlinePositioning: true,
    props: {
      id: 'braunkohleSticky3'
    }
  },
  presentationMediaVideosHeading: {
    component: Heading,
    props: {
      children: 'Videos'
    }
  },
  presentationMediaVideosText2: {
    component: TextBlock,
    props: {
      children: <>
        Auf diese Weise können sich auch verschieden Video-Loops hintereinander ablösen ohne zu viel
        Unruhe in den Lesefluss zu bringen.
        <br/><br/><br/>
        Soll ein Video als Teil der Erzählung voll zur Geltung kommen, so wird es in Pageflow Next
        als "interaktives" Video gekennzeichnet. Interaktive Elemente stehen in einer Szene für sich allein.
        Es gibt keine weitere Ebene auf der Content stattfindet.<br/>
        Dies erlaubt den Zugriff auf Steuerelemente ohne vorherige Aktivierung, wie es derzeit in
        Pageflow oft nötig ist (z.B. bei Vorher/Nachher-Seiten).
        <br/><br/><br/>
        Die folgenden zwei Szenen sind interaktive Szenen, zuerst vom Typ Video und danach vom Typ
        Vorher/Nachher. (#9)
      </>
    }
  },
  presentationHeadSolutionHeading: {
    component: Heading,
    props: {
      children: <>
        Lösung für Köpfe
      </>
    }
  },
  presentationHeadSolutionText: {
    component: TextBlock,
    props: {
      children: <>
        Ein Problem der alten Pageflow-Version: Wenn Personen im Bild zu sehen waren, lief der Text
        je nach Auflösung und Gerät, mitten durch deren Gesicht. Das ist jetzt gelöst. Selbst auf
        Smartphones bleibt das Gesicht in diesem Beispiel zunächst sichtbar und wird beim Scrollen
        des Textes erst abgedunkelt und dann vom Text verdeckt.<br/>
        <br/>
        Die Auswahl der Positionierung erfolgt passend zum Hintergrundbild-Motiv. Dazu wird beim
        Upload neuer Bilder grundsätzlich ein Bereich markiert, der das wesentliche Motiv
        umschließt. Bei der Positonierung der scrollenden Vordergrundeben wird dann versucht diesen
        Bereich weitestgehend freizulassen damit er zur Geltung kommen kann.<br/>
        In der Mobildarstellung wird der Text dementsprechend innerhalb der Szene nach unten
        geschoben, während in der Desktop-Darstellung genug Platz ist um das Motiv neben dem Text
        anzuzeigen.<br/>
        <br/>
        (#11)
      </>
    }
  },
  presentationBeforeAfterHeading: {
    component: Heading,
    props: {
      children: <>
        Vorher/Nachher
      </>
    }
  },
  presentationBeforeAfterText: {
    component: TextBlock,
    props: {
      children: <>
        Das beliebte Storytelling-Feature Vorher/Nachher-Vergleichsbild ist selbstverständlich auch
        bereits in Pageflow Next integriert.<br/><br/>
        Der Schieberegler kann durch ziehen oder klicken beweget werden. Neu ist die Möglichkeit der
        Beschriftung der einzelnen Bilder, wobei der Text bei der Bedienung des Schiebreglers
        ausgeblendet wird.<br/>
        <br/>
        Der Vorher/Nachher-Modus muss nicht mehr wie aktuell in Pageflow "aktiviert" bzw.
        "gestartet" werden, sondern lädt durch eine kurze Animation beim Betreten der Szene direkt
        zum Ausprobieren ein.<br/>
        <br/>
        (#12)
      </>
    }
  },
  presentationScrollmationHeading: {
    component: Heading,
    props: {
      children: 'Phasenbilder'
    }
  },
  presentationScrollmationText1: {
    component: TextBlock,
    props: {
      children: <>
        Mit Hilfe der vordefinierten Szenenübergänge lassen sich auch zeitliche Abfolgen simulieren.
        In diesem Beispiel wird ein Schaubild in 3 Schritten passend zum Text aufgedeckt.
      </>
    }
  },
  presentationScrollmationText2: {
    component: TextBlock,
    props: {
      children: <>
        Das Scrollen des Nutzers veranlasst im Hintergrund den Szenenübergang (in diesem
        Fall die Variante "Fade").
      </>
    }
  },
  presentationScrollmationText3: {
    component: TextBlock,
    props: {
      children: <>
        Durch die Anfertigung passenden Bildmaterials und die Konfiguration entsprechender
        Szenenübergänge und Positionierungen (achten sie auch hier wieder auf die Mobildarstellung)
        lassen sich so komplexe Abfolgen, Datendiagramme oder zeitliche Veränderungen
        Stück für Stück übertragen. (#13)
      </>
    }
  },
  presentationFeedbackHeading: {
    component: Heading,
    props: {
      children: 'Feedback Pageflow Next?'
    }
  },
  presentationFeedbackText: {
    component: TextBlock,
    props: {
      children: <>
        Dieser Prototyp ist in vier einwöchigen Sprints entstanden. Wie bei der agilen
        Softwareentwicklung üblich, haben wir jede Woche neu entschieden welche Ideen wir weiter
        verfolgen wollen und welche Dinge wir niedriger priorisieren.<br/>
        Dieser Prototyp zeigt deswegen wichtige neue Darstellungs- und Bedienmöglichkeiten, aber er
        ist noch kein fertiges Produkt. Die Navigationsleiste haben wir beispielsweise nur
        skizziert, der Prototyp ist nur auf den Chrome-Browser (iOS auch Safari) optimiert und er
        enthält auch noch kein intelligentes Lademanagement für Videos.<br/>
        <br/>
        Wir freuen uns über Feedback! Sind die neuen Mechanismen sinnvoll oder überflüssig? Wie
        fühlt sich Pageflow ohne Einrasten am Seitenende an? Was fehlt? Was ist toll?<br/>
        <br/>
        <a mailto="pageflow@wdr.de">pageflow@wdr.de</a><br/>
        <br/>
        Aus dem Pageflow-Labor: Stefan Domke (WDR), Tim Fischbach (Codevise), Daniel Kuhn
        (Codevise), David Ohrndorf (WDR).
      </>
    }
  }
}
