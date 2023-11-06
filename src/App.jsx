import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useRef, useState } from "react";
import Cadastro from "./pages/Cadastro";
import LandingPage from "./pages/LandingPage";
import { Rotas } from "./routes/Rotas";

function App() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

  return (
    <div>
      {/* <div className="menu-container">
        <button onClick={onClick} className="menu-button">
          <span className="tb">Menu</span>
          <img
            id="imagemMenu"
            width="15px"
            height="15px"
            src="../../src/assets/menuSimbolo.png"
            alt="ícone do menu"
          />
        </button>

        <nav
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <a href="#">Login</a>
            </li> 
          </ul>
        </nav>
      </div> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lp" element={<LandingPage />} />
        <Route path="/home/:user" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/cadastro/" element={<Cadastro />} />
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes> */}
      <Rotas />
    </div>
  );
}

export default App;
