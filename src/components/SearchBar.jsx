import React, { useState } from "react";
import { Search } from "react-feather";
import { fetchWeather } from "../services/weatherService.js";

function SearchBar({onWeatherFetched}) {
  const [ city, setCity] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a valid city name");
      return;
    }
    const weatherData = await fetchWeather(city);
    if(weatherData && onWeatherFetched) {
      onWeatherFetched(weatherData);
    }else{

      alert("City not found. Please try again.");
    }

  };


  return (
    <div>
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button 
        
        className="search-button"
        >
          <Search className="search-icon" />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
