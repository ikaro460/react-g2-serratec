import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useRef, useState } from "react";
import Cadastro from "./pages/Cadastro";
import LandingPage from "./pages/LandingPage";
import { Rotas } from "./routes/Rotas";
import Footer from "./components/Footer";


function App() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <div>
       <Rotas />
      <Footer />
    </div>
  );
}

export default App;
