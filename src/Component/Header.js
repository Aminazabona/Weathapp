import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Header.css";

function Header({ fetchWeather }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      fetchWeather(encodeURIComponent(input.trim()));
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="header">
      <p>Amina Weather-app</p>
      <div className="search">
        <input
          type="text"
          placeholder="Enter a town"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnter}
        />
        <button onClick={handleSearch}>
          <CiSearch />
        </button>
      </div>
    </div>
  );
}

export default Header;
