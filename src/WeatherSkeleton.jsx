import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const WeatherSkeleton = () => {
  return (
    <div className='weather-skeleton'>
      <div className='icon-div'>
        <Skeleton circle={true} height={100} width={100} />
      </div>
      <h1 className='font-weather'>
        <Skeleton width={150} />
      </h1>
      <hr />
      <div className="input-group mb-3">
        <Skeleton width="100%" height={40} />
      </div>
      <div className='weather-data'>
        <hr />
        <div className='d-flex justify-content-center'>
          <Skeleton width={200} height={30} />
        </div>
        <hr />
        <table className='table'>
          <tbody>
            <tr>
              <td><Skeleton width={100} /></td>
              <td><Skeleton width={50} /></td>
            </tr>
            <tr>
              <td><Skeleton width={100} /></td>
              <td><Skeleton width={50} /></td>
            </tr>
            <tr>
              <td><Skeleton width={100} /></td>
              <td><Skeleton width={50} /></td>
            </tr>
            <tr>
              <td><Skeleton width={100} /></td>
              <td><Skeleton width={50} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherSkeleton;
