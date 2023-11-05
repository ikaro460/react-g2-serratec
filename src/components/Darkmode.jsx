import { useState } from "react";
import "./dark.css";

export const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={"isDarkMode" ? "darkmode" : "lightmode"}>
      <button className="toggle-button" onClick={toggleDarkMode}>
        <span className="sun-mode"></span>
        <span className="moon-mode"></span>
        <span className="thumb-switch"></span>
      </button>
    </div>
  );
};
