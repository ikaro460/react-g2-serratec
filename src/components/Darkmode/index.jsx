import { useEffect, useState } from "react";
import "./style.css";

export default function DarkMode() {
  const isDark = JSON.parse(localStorage.getItem("darkmode")) === "dark";
  const [isDarkMode, setIsDarkMode] = useState(isDark);

  useEffect(() => {
    toggleTheme;
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("darkmode", JSON.stringify("light"));
    }
  }, []);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("darkmode", JSON.stringify("dark"));
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("darkmode", JSON.stringify("light"));
  };

  const toggleTheme = () => {
    if (!isDarkMode) {
      setDarkMode();
      setIsDarkMode(!isDarkMode);
    } else {
      setLightMode();
      setIsDarkMode(!isDarkMode);
    }
  };

  return (
    <div className={!isDarkMode ? "darkmode" : "lightmode"}>
      <button className="toggle-button" onClick={toggleTheme}>
        <span className="sun-mode"></span>
        <span className="moon-mode"></span>
        <span className="thumb-switch"></span>
        {/*onClick={darkMode}*/}
      </button>
    </div>
  );
}
