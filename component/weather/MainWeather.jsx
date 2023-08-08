"use client";
import React, { useState } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import styles from '../weather/MainWeather.module.scss'

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dubai&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };
  return (
    <div className={styles.containerform}>
      <form className={styles.form} action="">
        <div>
          <input type="text" placeholder="Search Sity" />
        </div>
        {/* <button onClick={fetchWeather}> */}
          <BsSearch onClick={fetchWeather}/>
        {/* </button> */}
      </form>
    </div>
  );
};

export default Weather;
