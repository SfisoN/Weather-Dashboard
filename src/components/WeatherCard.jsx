import React, { useState } from "react";
import SearchBar from "./SearchBar";

function WeatherCard() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-gray-100 relative h-screen">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/weather4.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 flex flex-col justify-center items-center h-full gap-4">
        <div className="bg-gray-700/70 p-6 rounded-lg shadow-lg">
          <SearchBar onWeatherFetched={setWeather} />
        </div>

        {weather && (
          <div className="bg-gray-800/70 p-4 rounded-lg text-white text-center">
            <h2 className="text-xl font-bold">{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Weather: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherCard;
