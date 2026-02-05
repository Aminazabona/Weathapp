import React, { useState, useEffect } from "react";
import Header from "./Header";
import { FiWind } from "react-icons/fi";
import {
  WiHumidity,
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
import axios from "axios";
import "./WeatherCard.css";

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const API_KEY = "ea5441e78ef54c67002123cd2878f937"; // Remplace par ta clé valide

  // Fonction pour récupérer la météo
  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: cityName,
            units: "metric",
            appid: API_KEY,
          },
        }
      );
      console.log("Météo principale :", response.data.weather[0].main);
      setWeather(response.data);
    } catch (error) {
      console.log("Erreur API :", error.response?.data || error.message);
      alert(error.response?.data?.message || "Ville introuvable !");
      setWeather(null);
    }
  };

  // Icônes météo pour toutes les conditions
  const weatherIcons = {
    Clear: <WiDaySunny size={60} color="#f39c12" />,
    Clouds: <WiCloud size={60} color="#7f8c8d" />,
    Rain: <WiRain size={60} color="#3498db" />,
    Drizzle: <WiRain size={60} color="#3498db" />,
    Thunderstorm: <WiThunderstorm size={60} color="#e74c3c" />,
    Snow: <WiSnow size={60} color="#5dade2" />,
    Mist: <WiFog size={60} color="#95a5a6" />,
    Smoke: <WiFog size={60} color="#95a5a6" />,
    Haze: <WiFog size={60} color="#95a5a6" />,
    Dust: <WiFog size={60} color="#95a5a6" />,
    Fog: <WiFog size={60} color="#95a5a6" />,
    Sand: <WiFog size={60} color="#95a5a6" />,
    Ash: <WiFog size={60} color="#95a5a6" />,
    Squall: <WiThunderstorm size={60} color="#e74c3c" />,
    Tornado: <WiThunderstorm size={60} color="#e74c3c" />,
  };

  const getWeatherIcon = (main) =>
    weatherIcons[main] || <WiDaySunny size={60} color="#f39c12" />;

  // ⚡ useEffect pour charger Goma au lancement
  useEffect(() => {
    fetchWeather("Goma");
  }, []);

  return (
    <div className="weather-card">
      {/* Header avec champ de recherche */}
      <Header fetchWeather={fetchWeather} />

      {weather ? (
        <>
          <p className="location">
            {weather.name}, {weather.sys.country}
          </p>

          {/* Icône météo dynamique */}
          <div className="weather-icon">
            {getWeatherIcon(weather.weather[0].main)}
          </div>

          <h1 className="temperature">{Math.round(weather.main.temp)}°C</h1>
          <p className="description">{weather.weather[0].description}</p>

          <div className="details">
            <div className="wind">
              <FiWind size={24} />
              <p>{weather.wind.speed} km/h</p>
            </div>
            <div className="humidity">
              <WiHumidity size={24} />
              <p>{weather.main.humidity}%</p>
            </div>
          </div>
        </>
      ) : (
        <p>Chargement de la météo...</p>
      )}
    </div>
  );
}

export default WeatherCard;
