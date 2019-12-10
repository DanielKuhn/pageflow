import React, {useRef} from 'react';
import classNames from 'classnames';

import useOnScreen from './useOnScreen';
import Backdrop from './Backdrop';
import Foreground from './Foreground';
import {Layout} from './layouts';
import isIntersectingX from './isIntersectingX';
import useBoundingClientRect from './useBoundingClientRect';
import useDimension from './useDimension';
import useScrollTarget from './useScrollTarget';

import styles from './Scene.module.css';
import {getTransitionStyles} from './transitions'

import foregroundItemTemplates from './foregroundItemTemplates';

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

export default function Scene(props) {
  const activityProbeRef = useRef();
  useOnScreen(activityProbeRef, '-50% 0px -50% 0px', props.onActivate);

  const ref = useRef();
  const onScreen = useOnScreen(ref, '0px 0px 0px 0px');

  useScrollTarget(ref, props.isScrollTarget);

  const motifAreaRef = useRef();
  const contentAreaRef = useRef()
  const motifAreaRect = useBoundingClientRect(motifAreaRef);
  const motifAreaDimension = useDimension(motifAreaRef);
  const contentAreaRect = useBoundingClientRect(contentAreaRef, props.layout);

  const intersecting = isIntersectingX(motifAreaRect, contentAreaRect);
  const contentAreaRect2 = useBoundingClientRect(contentAreaRef, intersecting);

  const heightOffset = 0; //(props.backdrop.first || props.transition === 'scrollOver') ? 0 : (window.innerHeight / 3);

  const transitionStyles = getTransitionStyles(props, props.previousScene, props.nextScene);

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
    <section ref={ref} className={classNames(styles.Scene,
                                             transitionStyles.scene,
                                             {[styles.invert]: props.invert})}>
      <div ref={activityProbeRef} className={styles.activityProbe} />
      <Backdrop {...props.backdrop}
                editMode={props.editMode}
                motifAreaRef={motifAreaRef}
                onScreen={onScreen}
                offset={Math.max(0, Math.max(1, -contentAreaRect.top / 200)) }
                state={props.state}
                transitionStyles={transitionStyles}
                nextSceneOnEnd={props.nextSceneOnEnd}
                interactive={props.interactiveBackdrop}>
        {(children) => props.interactiveBackdrop ?
                     children :
                     <Shadow align={props.layout}
                             intersecting={intersecting}
                             opacity={props.shadowOpacity >= 0 ? props.shadowOpacity / 100 : 0.7}
                             motifAreaRect={motifAreaRect}
                             contentAreaRect={contentAreaRect2}>{children}</Shadow>}
      </Backdrop>
      <Foreground transitionStyles={transitionStyles}
                  hidden={props.interactiveBackdrop}
                  disableEnlarge={props.disableEnlarge}
                  state={props.state}
                  heightMode={heightMode(props)}>
        <Box active={intersecting}
             coverInvisibleNextScene={props.nextScene && props.nextScene.transition.startsWith('fade')}
             transitionStyles={transitionStyles}
             state={props.state}
             padding={Math.max(0, motifAreaDimension.top + motifAreaDimension.height - heightOffset)}
             opacity={props.shadowOpacity}>
          <Layout items={indexItems(props.foreground)}
                  appearance={props.appearance}
                  contentAreaRef={contentAreaRef}
                  layout={props.layout}
                  onPositionChange={props.onForgroundItemPositionChange}>
            {(children) => <BoxWrapper>{children}</BoxWrapper>}
          </Layout>
          {renderAddSelect(props)}
          <button onClick={props.onReset}>Abschnitt leeren</button>
        </Box>
      </Foreground>
    </section>
  );
}

function indexItems(items) {
  return items.map((item, index) =>
    ({...item, index})
  );
}

function heightMode(props) {
  if (props.fullHeight) {
    if (props.transition.startsWith('fade') ||
        (props.nextScene && props.nextScene.transition.startsWith('fade'))) {
      return 'fullFade';
    }
    else {
      return 'full';
    }
  }

  return 'dynamic';
}

function renderAddSelect(props) {
  return (
    <select value="blank" onChange={event => props.onAdd(event.target.value)}>
      <option value="blank">(Hinzufügen)</option>
      {Object.keys(foregroundItemTemplates).map(key =>
        <option key={key} value={key}>{foregroundItemTemplates[key].name}</option>
       )}
    </select>
  );
}
