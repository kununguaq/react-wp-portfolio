import React from 'react';
import styles from './Splash.module.css';

const Splash = props => {
	const style = {
		minHeight: `${document.documentElement.clientHeight}px`
	};

	return (
		<div className={styles.splash} style={style}>
			<h1>Hello world</h1>
		</div>
	);
};
export default Splash;
