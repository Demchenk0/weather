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
			<div className={styles.table}>
				<p className={styles.first}>Weather in {data.name}</p>
				<div className={styles.inf}>
					<div>
						<p className={styles.secondary}>{data.main.feels_like.toFixed(0)}&#176;</p>
						<p className={styles.theardly}>Feels Like</p>
					</div>
					<div>
						<p className={styles.secondary}>{data.main.humidity}%</p>
						<p className={styles.theardly}>Humidity</p>
					</div>
					<div>
						<p className={styles.secondary}>{data.wind.speed.toFixed(0)} MPH</p>
						<p className={styles.theardly}>Winds</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
