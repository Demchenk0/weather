'use client';
import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { BsSearch } from 'react-icons/bs';
import styles from '../weather/MainWeather.module.scss';
import Weather from '../Weather';
import Spinner from '../spinner/Spinner';

const MainWeather = () => {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState({});
	const [loading, setLoading] = useState(false);

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

	const fetchWeather = e => {
		e.preventDefault();
		setLoading(true);
		axios.get(url).then(response => {
			setWeather(response.data);
			// console.log(response.data);
		});
		setCity('');
		setLoading(false);
	};

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<>
				<div className={styles.containerform}>
					<form onSubmit={fetchWeather} className={styles.form} action="">
						<div>
							<input
								onChange={e => setCity(e.target.value)}
								className={styles.input}
								type="text"
								placeholder="Search Sity"
							/>
						</div>
						{/* <button onClick={fetchWeather}> */}
						<BsSearch onClick={fetchWeather} size={25} />
						{/* </button> */}
					</form>
				</div>
				{/* Weather */}
				{weather.main && <Weather data={weather} />}
			</>
		);
	}
};

export default MainWeather;
// const MainWeather = () => {
// 	const [city, setCity] = useState('');
// 	const [weather, setWeather] = useState({});
// 	const [loading, setLoading] = useState(false);
// 	const [coordinates, setCoordinates] = useState(null); // Додайте стейт для координат

// 	useEffect(() => {
// 		if ('geolocation' in navigator) {
// 			navigator.geolocation.getCurrentPosition(
// 				position => {
// 					const latitude = position.coords.latitude;
// 					const longitude = position.coords.longitude;
// 					setCoordinates({ latitude, longitude });
// 				},
// 				error => {
// 					console.error('Помилка отримання геолокації:', error);
// 				}
// 			);
// 		} else {
// 			console.log('Геолокація не підтримується в цьому браузері.');
// 		}
// 	}, []); // Викликаємо один раз під час монтування компонента

// 	const url = coordinates
// 		? `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
// 		: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

// 	const fetchWeather = e => {
// 		e.preventDefault();
// 		setLoading(true);
// 		axios.get(url).then(response => {
// 			setWeather(response.data);
// 		});
// 		setCity('');
// 		setLoading(false);
// 	};

// 	if (loading) {
// 		return <Spinner />;
// 	} else {
// 		return (
// 			<>
// 				<div className={styles.containerform}>
// 					<form onSubmit={fetchWeather} className={styles.form} action="">
// 						<div>
// 							<input
// 								onChange={e => setCity(e.target.value)}
// 								className={styles.input}
// 								type="text"
// 								placeholder="Search City"
// 							/>
// 						</div>
// 						<BsSearch onClick={fetchWeather} size={25} />
// 					</form>
// 				</div>
// 				{weather.main && <Weather data={weather} />}
// 			</>
// 		);
// 	}
// };

// export default MainWeather;
