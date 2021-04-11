import React from 'react';
import styles from './RoomShape.module.scss';

const RoomShape = ({ width, height, children }) => (
	<div
		aria-live="polite"
		className={styles.roomShape}
		style={{ width: `${width}px`, height: `${height}px`}}
	>
		{children}
	</div>
);

export default RoomShape;

// TODO: add proptypes
