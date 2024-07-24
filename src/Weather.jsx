import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';
import WeatherIcon from './WeatherIcon';
import WeatherSkeleton from './WeatherSkeleton';
import {imgUrl, weatherapikey} from './constants';

library.add(faMagnifyingGlass);

const Weather = () => {
  const [city, setCity] = useState('Pune');
  const [error, setError] = useState('');
  const [weather, setWeather] = useState(null);
  const [iconSrc, setIconSrc] = useState(`${imgUrl}clouds.png`);
  const [loading, setLoading] = useState(false);

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleClickSearch = async () => {
    if (!city) {
      setError('Please enter city.');
      setWeather('');
      return;
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherapikey}`
      );
      if (!response.ok) {
        setError('City not found.');
        setWeather('');
        return;
      }
      const data = await response.json();
      switch (data.weather[0].main) {
        case 'Rain':
          setIconSrc(`${imgUrl}rainy.png`);
          break;
        case 'Clouds':
          setIconSrc(`${imgUrl}cloudy.png`);
          break;
        case 'Mist':
          setIconSrc(`${imgUrl}clouds.png`);
          break;
        case 'Haze':
          setIconSrc(`${imgUrl}fog.png`);
          break;
        case 'Drizzle':
          setIconSrc(`${imgUrl}rainy.png`);
          break;
        case 'Clear':
          setIconSrc(`${imgUrl}sunny.png`);
          break;
        default:
          setIconSrc(`${imgUrl}clouds.png`);
          break;
      }
      setWeather(data);
      console.log(data);
      setError(null);
    } catch {
      setError('Failed to fetch weather data');
      setWeather(null);
      return;
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleClickSearch();
  }, []);

  return (
    <div className='position-relative h-100 d-flex align-items-center flex-column'>
      {loading ? (<WeatherSkeleton/>):
      <>
      <WeatherIcon iconSrc={iconSrc} />
      {<h1 className='font-weather'>{!weather ? '????' :weather.weather[0].main}</h1>}
      <hr />
      <WeatherSearch
        city={city}
        onCityChange={handleChangeCity}
        onSearch={handleClickSearch}
      />
      {error && <p className='err'>{error}</p>}
      {weather && <WeatherInfo weather={weather} />}      
      </>
      }
    </div>
  );
};

export default Weather;
