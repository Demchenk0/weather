import React from 'react';
import spinner from '../../public/spinner.gif';
import Image from 'next/image';
import styles from "../spinner/Spinner.module.scss"
const Spinner = () => {
	return (
		<>
			<Image className={styles.spinner} src={spinner} alt='loading...'/>
		</>
	);
};

export default Spinner;
