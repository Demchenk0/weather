import React from 'react';
import styles from '../component/Weather.module.scss';
import Image from 'next/image';
const Weather = ({ data }) => {
	console.log(data);
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.conImg}>
					<Image
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt="/"
						width="100"
						height="100"
					/>
					<p className={styles.p}>{data.weather[0].main}</p>
				</div>
				<p className={styles.pp}>{data.main.temp.toFixed(0)}&#176;</p>
			</div>
			{/* Bottom */}

		</div>
	);
};

export default Weather;
