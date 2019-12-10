import fadeInBgConceal from './fadeInBgConceal.module.css';
import fadeInBgFadeOut from './fadeInBgFadeOut.module.css';
import fadeInBgFadeOutBg from './fadeInBgFadeOutBg.module.css';
import fadeInBgScrollOut from './fadeInBgScrollOut.module.css';

import fadeInConceal from './fadeInConceal.module.css';
import fadeInFadeOut from './fadeInFadeOut.module.css';
import fadeInFadeOutBg from './fadeInFadeOutBg.module.css';
import fadeInScrollOut from './fadeInScrollOut.module.css';

import revealConceal from './revealConceal.module.css';
import revealFadeOut from './revealFadeOut.module.css';
import revealFadeOutBg from './revealFadeOutBg.module.css';
import revealScrollOut from './revealScrollOut.module.css';

import scrollInConceal from './scrollInConceal.module.css';
import scrollInFadeOut from './scrollInFadeOut.module.css';
import scrollInFadeOutBg from './scrollInFadeOutBg.module.css';
import scrollInScrollOut from './scrollInScrollOut.module.css';

const styles = {
  fadeInBgConceal,
  fadeInBgFadeOut,
  fadeInBgFadeOutBg,
  fadeInBgScrollOut,

  fadeInConceal,
  fadeInFadeOut,
  fadeInFadeOutBg,
  fadeInScrollOut,

  revealConceal,
  revealFadeOut,
  revealFadeOutBg,
  revealScrollOut,

  scrollInConceal,
  scrollInFadeOut,
  scrollInFadeOutBg,
  scrollInScrollOut
}

const enterTransitions = {
  fade: 'fadeIn',
  fadeBg: 'fadeInBg',
  scroll: 'scrollIn',
  scrollOver: 'scrollIn',
  reveal: 'reveal',
  beforeAfter: 'reveal'
}

const exitTransitions = {
  fade: 'fadeOut',
  fadeBg: 'fadeOutBg',
  scroll: 'scrollOut',
  scrollOver: 'conceal',
  reveal: 'scrollOut',
  beforeAfter: 'conceal'
}

export function getTransitionStyles(scene, previousScene, nextScene) {
  const enterTransition = enterTransitions[scene.transition]
  const exitTransition = exitTransitions[nextScene ? nextScene.transition : 'scroll']

  const name = `${enterTransition}${capitalize(exitTransition)}`;

  if (!styles[name]) {
    throw new Error(`Unknown transition ${name}`);
  }

  return styles[name];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
