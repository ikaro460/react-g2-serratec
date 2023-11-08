import React, { useState } from "react";
import "./style.css"; // Create a CSS file for styling
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons CSS

export const SearchBar = ({ pesquisa, setPesquisa }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`input-group search-bar ${isFocused ? "focused" : ""}`}>
      <input
        type="text"
        className="form-control"
        placeholder="Pesquise algo..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default SearchBar;
