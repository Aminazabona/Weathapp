import React from 'react'
import ForecastItem from './ForecastItem'

function HourlyForecast() {
    return (
       <div className="hourly">
      <h3>Hourly Forecast</h3>
      <div className="forecast-list">
        <ForecastItem time="Now" temp="29" />
        <ForecastItem time="5 PM" temp="28" />
        <ForecastItem time="6 PM" temp="28" />
        <ForecastItem time="7 PM" temp="27" />
      </div>
    </div>
    )
  
    
}

export default HourlyForecast
