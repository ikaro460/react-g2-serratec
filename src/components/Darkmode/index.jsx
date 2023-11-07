import { useState } from "react";
import "./style.css";

export default function DarkMode(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };


  const toggleTheme= () => {
    if (isDarkMode){
      setDarkMode();
      setIsDarkMode(!isDarkMode);
    } 
    else {
      setLightMode();
      setIsDarkMode(!isDarkMode);
    } 
  }


  

  return (
    <div className={isDarkMode ? "darkmode" : "lightmode"}>
      <button className="toggle-button" onClick={toggleTheme}>
        <span className="sun-mode"></span>
        <span className="moon-mode"></span>
        <span className="thumb-switch"></span>
     {/*onClick={darkMode}*/}
      </button>
    </div>
  );
};
