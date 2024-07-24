import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherSearch = ({ city, onCityChange, onSearch }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={city}
        className="form-control"
        placeholder="Enter any city"
        onChange={onCityChange}
      />
      <div className="input-group-append">
        <button className="btn-search" onClick={onSearch}>
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
      </div>
    </div>
  );
};

export default WeatherSearch;
