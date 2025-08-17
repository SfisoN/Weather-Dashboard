import React, { useState } from "react";
import { Search } from "react-feather";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      alert("Please enter a valid city name");
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button 
        type="submit" 
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
