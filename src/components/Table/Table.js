import React from 'react';
import clsx from 'clsx';
import styles from './Table.module.scss';

export const Table = ({ collapseBorder, children}) => {
	return (
		<div className={styles.tableWrapper}>
			<table className={clsx(styles.table,
				collapseBorder && styles.collapseBorder
			)}>
				{children}
			</table>
		</div>
	);
}

export default Table;

// TODO: add proptypes
