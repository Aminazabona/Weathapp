import React from 'react'

function ForecastItem({ time, temp }) {
    return (
         <div className="forecast-item">
      <p>{time}</p>
      <img src="/weather.png" alt="weather icon" />
      <h4>{temp}°</h4>
    </div>
  );
}

export default ForecastItem
