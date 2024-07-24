import React from 'react';

const WeatherIcon = ({ iconSrc }) => {
  return (
    <div className='icon-div'>
      <img src={iconSrc} alt="Weather Icon" className='icon-weather move-img' />
    </div>
  );
};

export default WeatherIcon;
