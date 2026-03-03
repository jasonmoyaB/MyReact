import { useState } from "react";
import { OPENWEATHER_API_KEY } from "../../config/config";
import type { WeatherData } from "../../interfaces/weather";
import "../../styles/Weather.css";

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isNight, setIsNight] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`,
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      const currentTime = data.dt;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      const nightTime = currentTime < sunrise || currentTime > sunset;
      
      setIsNight(nightTime);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={`weather-container ${isNight ? 'night' : 'day'}`}>
      <h1>CLIMA</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="weather-input"
        onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
      />
      <button onClick={fetchWeather} className="weather-button">
        Get Weather
      </button>
      {loading && <p className="weather-loading">Loading...</p>}
      {error && <p className="weather-error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p className="weather-temp">{weather.main.temp}°C</p>
          <p className="weather-description">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
