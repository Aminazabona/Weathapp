import React from 'react'
import "./WeatherCard.css"
function WeatherCard() {
  return (
    <div className="weather-card">
      <p className="location">Mumbai, India</p>

      <div className="weather-icon">🌧️</div>

      <h1 className="temperature">29°C</h1>
      <p className="description">Expect high rain today.</p>

      <div className="details">
        <span>💨 11 km/h</span>
        <span>💧 02%</span>
        <span>☀️ 8 hr</span>
      </div>
    </div>
  )
}

export default WeatherCard
