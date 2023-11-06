import { useState } from "react";
import "./style.css";

export const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkMode = () => {
    setIsDarkMode(!isDarkMode);
  console.log(darkMode)
  };

  return (
    <div className={isDarkMode ? "darkmode" : "lightmode"}>
      <button className="toggle-button" onClick={darkMode}>
        <span className="sun-mode"></span>
        <span className="moon-mode"></span>
        <span className="thumb-switch"></span>
      </button>
    </div>
  );
};
