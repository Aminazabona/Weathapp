import React from 'react'
import Header from './Header';
import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import "./WeatherCard.css"

function WeatherCard() {
  return (
    <div className="weather-card">
      <Header/>
      <p className="location">Mumbai, India</p>

      <div className="weather-icon">🌧️</div>

      <h1 className="temperature">29°C</h1>
      <p className="description">Expect high rain today.</p>

      <div className="details">
        <div className='wind'>
          <FiWind />
          <p>11km/h</p>
        </div>
        <div className='humidity'>
          <FiWind />
          <p>13%</p>
        </div>
      </div>
       
    </div>
  );
}

export default WeatherCard
