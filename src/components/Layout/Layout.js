import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
	<>
		<header className={styles.header}>
			<nav>
				<span className={styles.logo}>Logo</span>
			</nav>
		</header>
		<main className={styles.mainContainer}>
			{children}
		</main>
		<footer className={styles.footer}></footer>
	</>
);

export default Layout;
