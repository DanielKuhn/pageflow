import React from 'react';
import classNames from 'classnames';

import ForegroundItems from '../ForegroundItems';

import styles from './TwoColumn.module.css';

const availablePositions = ['inline', 'sticky', 'full'];

export default function TwoColumn(props) {
  return (
    <div className={classNames(styles.root, styles[props.align])}>
      <div className={styles.inline} ref={props.contentAreaRef} />
      {renderItems(props)}
    </div>
  );
}

TwoColumn.defaultProps = {
  align: 'left'
}

function renderItems(props) {
  return groupItemsByPosition(props.items).map((group, index) =>
    <div key={index} className={classNames(styles.group, styles[`group-${group.position}`])}>
      {renderItemGroup(props, group, 'sticky')}
      {renderItemGroup(props, group, 'inline')}
      {renderItemGroup(props, group, 'full')}
    </div>
  );
}

function renderItemGroup(props, group, position) {
  if (group[position].length) {
    return (
      <div className={styles[position]}>
        {props.children(
          <ForegroundItems items={group[position]}
                           availablePositions={availablePositions}
                           onPositionChange={props.onPositionChange} />
        )}
      </div>
    );
  }
}

function groupItemsByPosition(items) {
  let groups = [];
  let currentGroup;

  items.reduce((previousItemPosition, item, index) => {
    const position = availablePositions.indexOf(item.position) >= 0 ? item.position : 'inline';

    if (!previousItemPosition || (previousItemPosition !== position &&
                                  (previousItemPosition !== 'sticky' || position !== 'inline'))) {
      currentGroup = {
        position,
        sticky: [],
        inline: [],
        full: []
      };
      groups = [...groups, currentGroup];
    }

    currentGroup[position].push(item);
    return position;
  }, null);

  return groups;
}
