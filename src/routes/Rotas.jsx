import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import Cadastro from "../pages/Cadastro";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const RotasPrivadas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export const RotasPublicas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/lp" element={<LandingPage />} />
      <Route path="/cadastro/" element={<Cadastro />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export const Rotas = () => {
  const { estaLogado } = useContext(AuthContext);
  return <>{estaLogado ? <RotasPrivadas /> : <RotasPublicas />}</>;
};
