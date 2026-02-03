import React from 'react'
import "./ForecastItem.css"
function ForecastItem({ time, temp,icon }) {
    return (
          <div className="forecast-item">
      <div className="forecast-icon">{icon}</div>
      <p className="forecast-time">{time}</p>
      <p className="forecast-temp">{temp}°</p>
    </div>
  );
}

export default ForecastItem
