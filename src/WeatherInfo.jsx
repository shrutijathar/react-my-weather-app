import React from 'react';

const WeatherInfo = ({ weather }) => {
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000);
    
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const dayName = daysOfWeek[date.getDay()];
    
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "pm" : "am";
    
        hours = hours % 12;
        hours = hours ? hours : 12;
    
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    
        return `${dayName}, ${hours}:${formattedMinutes} ${ampm}`;
      };


  return (
    <div className='weather-data'>
      <hr />
      <div className='d-flex justify-content-center'>
        <img src="src/assets/img/pin.png" alt="" className='icon-pin' />
        <h3>{weather.name}, {weather.sys.country}</h3>
      </div>
        <h4 className='fw-light'>
            {formatTimestamp(weather.dt)}
        </h4>
      <hr />
      <table className='table'>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>{Math.round(weather.main.temp - 273.15)} °C</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{weather.main.humidity}%</td>
          </tr>
          <tr>
            <td>Visibility</td>
            <td>{weather.visibility} mi</td>
          </tr>
          <tr>
            <td>Wind Speed</td>
            <td>{weather.wind.speed} km/hr</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherInfo;
