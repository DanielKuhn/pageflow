import React from 'react';
import classNames from 'classnames';

import {Text} from 'pageflow-scrolled/frontend';

import styles from './Heading.module.css';

export function Heading(props) {
  const configuration = props.configuration;
  const sectionProps = props.sectionProps;
  const firstSectionInEntry = sectionProps.sectionIndex === 0;
  return (
    <h1 className={classNames(styles.root, {[styles.first]: firstSectionInEntry})}>
      <Text scaleCategory={firstSectionInEntry ? 'h1' : 'h2'} inline={true}>
        {configuration.children}
      </Text>
    </h1>
  );
}
