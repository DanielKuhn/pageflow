import React, {useRef, useEffect, useContext} from 'react';
import classNames from 'classnames';

import ScrollToSectionContext from './ScrollToSectionContext';
import MutedContext from './MutedContext';

import styles from './Video.module.css';

import {useFile} from '../entryState';

/**
 * Render a video file.
 *
 * @param {Object} props
 * @param {number} props.id - Perma id of the video file.
 */
export function Video(props) {
  const video = useFile({collectionName: 'videoFiles', permaId: props.id});

  if (video) {
    const videoRef = useRef();
    const state = props.state;

    const mutedSettings = useContext(MutedContext);

    useEffect(() => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.muted = mutedSettings.muted

      if (!mutedSettings.mediaOff && props.autoplay !== false) {
        if (state === 'active') {
          if (video.readyState > 0) {
            video.play();
          } else {
            video.addEventListener('loadedmetadata', play);
            return () => video.removeEventListener('loadedmetadata', play);
          }
        } else {
          video.pause();
        }
      }

      function play() {
        video.play();
      }
    }, [state, mutedSettings.mediaOff, mutedSettings.muted, props.autoplay]);

    return (
      <div className={styles.root}>
        <ScrollToSectionContext.Consumer>
          {scrollToSection =>
            <video role="img"
                   src={video.urls.high}
                   ref={videoRef}
                   className={classNames(styles.video, {[styles.backdrop]: !props.interactive})}
                   controls={props.controls}
                   playsInline
                   onEnded={() => props.nextSectionOnEnd && scrollToSection('next')}
                   loop={!props.interactive}
                   poster={video.urls.poster_large}/>
          }
        </ScrollToSectionContext.Consumer>
      </div>
    )
  }

  return null;
}

Video.defaultProps = {
  interactive: false,
  controls: false
};
