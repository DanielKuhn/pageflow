import React, {useRef, useCallback, useMemo} from 'react';
import classNames from 'classnames';

import {Backdrop} from './Backdrop';
import Foreground from './Foreground';
import {Layout} from './layouts';
import isIntersectingX from './isIntersectingX';
import useBoundingClientRect from './useBoundingClientRect';
import useDimension from './useDimension';
import useScrollTarget from './useScrollTarget';
import {SectionLifecycleProvider} from './useSectionLifecycle'
import {withInlineEditingDecorator} from './inlineEditing';

import styles from './Section.module.css';
import {getTransitionStyles} from './transitions'

// Shadows
import NoOpShadow from './shadows/NoOpShadow';
import GradientShadow from './shadows/GradientShadow';
// Boxes
import NoOpBoxWrapper from "./foregroundBoxes/NoOpBoxWrapper";
import GradientBox from './foregroundBoxes/GradientBox';
import CardBox from "./foregroundBoxes/CardBox";
import CardBoxWrapper from "./foregroundBoxes/CardBoxWrapper";

export const OnScreenContext = React.createContext({
  center: false,
  top: false,
  bottom: false
});

export default withInlineEditingDecorator('SectionDecorator', function Section(props) {
  const ref = useRef();
  useScrollTarget(ref, props.isScrollTarget);

  const sectionProperties = useMemo(() => ({
    layout: props.layout,
    invert: props.invert
  }), [props.layout, props.invert]);

  const [motifAreaRect, setMotifAreaRect] = useBoundingClientRect();
  const [motifAreaDimension, setMotifAreaDimensionRef] = useDimension();

  const setMotifAreaRefs = useCallback(node => {
    setMotifAreaRect(node);
    setMotifAreaDimensionRef(node);
  }, [setMotifAreaRect, setMotifAreaDimensionRef]);

  const [contentAreaRect, setContentAreaRef] = useBoundingClientRect(props.layout);
  const intersecting = isIntersectingX(motifAreaRect, contentAreaRect);

  const heightOffset = 0; //(props.backdrop.first || props.transition === 'scrollOver') ? 0 : (window.innerHeight / 3);

  const transitionStyles = getTransitionStyles(props, props.previousSection, props.nextSection);

  const appearance = {
    shadow: {
      background: GradientShadow,
      foreground: GradientBox,
      foregroundWrapper: NoOpBoxWrapper
    },
    transparent: {
      background: NoOpShadow,
      foreground: CardBox,
      foregroundWrapper: NoOpBoxWrapper
    },
    cards: {
      background: NoOpShadow,
      foreground: CardBox,
      foregroundWrapper: CardBoxWrapper
    }
  }[props.appearance || 'shadow'];

  const Shadow = appearance.background;
  const Box = appearance.foreground;
  const BoxWrapper = appearance.foregroundWrapper;

  return (
    <section id={`section-${props.permaId}`}
             ref={ref}
             className={classNames(styles.Section,
                                   transitionStyles.section,
                                   {[styles.invert]: props.invert})}>
      <SectionLifecycleProvider onActivate={props.onActivate} isLast={!props.nextSection}>
        <Backdrop {...props.backdrop}
                  onMotifAreaUpdate={setMotifAreaRefs}
                  state={props.state}
                  transitionStyles={transitionStyles}>
          {(children) => <Shadow align={props.layout}
                                 inverted={props.invert}
                                 intersecting={intersecting}
                                 opacity={props.shadowOpacity >= 0 ? props.shadowOpacity / 100 : 0.7}
                                 motifAreaRect={motifAreaRect}
                                 contentAreaRect={contentAreaRect}>{children}</Shadow>}
        </Backdrop>
        <Foreground transitionStyles={transitionStyles}
                    state={props.state}
                    heightMode={heightMode(props)}>
          <Box active={intersecting}
               coverInvisibleNextSection={props.nextSection && props.nextSection.transition.startsWith('fade')}
               transitionStyles={transitionStyles}
               state={props.state}
               padding={Math.max(0, motifAreaDimension.top + motifAreaDimension.height - heightOffset)}
               opacity={props.shadowOpacity}>
            <Layout sectionId={props.id}
                    items={indexItems(props.foreground)}
                    appearance={props.appearance}
                    contentAreaRef={setContentAreaRef}
                    sectionProps={sectionProperties}>
              {(children) => <BoxWrapper inverted={props.invert}>{children}</BoxWrapper>}
            </Layout>
          </Box>
        </Foreground>
      </SectionLifecycleProvider>
    </section>
  );
});

function indexItems(items) {
  return items.map((item, index) =>
    ({...item, index})
  );
}

function heightMode(props) {
  if (props.fullHeight) {
    if (props.transition.startsWith('fade') ||
        (props.nextSection && props.nextSection.transition.startsWith('fade'))) {
      return 'fullFade';
    }
    else {
      return 'full';
    }
  }

  return 'dynamic';
}
