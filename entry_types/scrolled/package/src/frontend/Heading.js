import React from 'react';
import classNames from 'classnames';

import styles from './Heading.module.css';

export default function Heading(props) {
  return (
    <h1 className={classNames(styles.Heading, {[styles.first]: props.first})}
        style={props.style}
        id={props.anchor}>
      {props.children}
    </h1>
  );
}

Heading.defaultProps = {
  anchor: ''
};