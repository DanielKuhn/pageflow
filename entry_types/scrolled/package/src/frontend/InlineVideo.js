import React, {useRef} from 'react';
import classNames from 'classnames';

import Video from './Video';
import useOnScreen from './useOnScreen';

import styles from './InlineVideo.module.css';

export default function InlineVideo(props) {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-50% 0px -50% 0px');

  return (
    <div ref={ref} className={classNames(styles.root)}>
      <div style={{paddingTop: props.wideFormat ? '41.15%' : '56.25%'}}>
        <div className={styles.inner}>
          <Video {...props}
                 state={onScreen ? 'active' : 'inactive'}
                 interactive={true} />
        </div>
      </div>
    </div>
  )
}
