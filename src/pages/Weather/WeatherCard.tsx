import type { WeatherData } from "../../interfaces/weather";
import "../../styles/Weather.css";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-icon">
        <img src={iconUrl} alt={weather.weather[0].description} />
      </div>
      <div className="weather-temp">
        <h3>{Math.round(weather.main.temp)}°C</h3>
        <p>{weather.weather[0].description}</p>
      </div>
      <div className="weather-details">
        <div className="detail">
          <span className="label">Feels like:</span>
          <span className="value">{Math.round(weather.main.feels_like)}°C</span>
        </div>
        <div className="detail">
          <span className="label">Humidity:</span>
          <span className="value">{weather.main.humidity}%</span>
        </div>
        <div className="detail">
          <span className="label">Wind:</span>
          <span className="value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail">
          <span className="label">Pressure:</span>
          <span className="value">{weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
