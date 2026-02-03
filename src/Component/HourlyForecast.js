import React from 'react'
import ForecastItem from './ForecastItem'
import BottomNav from './BottomNav';
function HourlyForecast() {
    return (
        <div className="hourly-section">
      <h3 className="hourly-title">Hourly Forecast</h3>

      <div className="forecast-list">
        <ForecastItem time="Now" temp="29" icon="🌧️" />
        <ForecastItem time="5 PM" temp="28" icon="🌧️" />
        <ForecastItem time="7 PM" temp="27" icon="🌙🌧️" />
      </div>
      <BottomNav />
    </div>
    
    );
  
    
}

export default HourlyForecast
