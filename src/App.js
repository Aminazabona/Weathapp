import React from 'react'

import WeatherCard from './Component/WeatherCard';
import ForecastItem from './Component/ForecastItem';
import HourlyForecast from './Component/HourlyForecast';
import BottomNav from './Component/BottomNav';

import "./index.css"
import "./App.css"

function App() {
  
 
  return (
    <>
      <div className="app">
      <WeatherCard />
    </div>
   
    </>
  );
}
  
export default App
