import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavBarBs from "../../components/NavBarBs";
import Carrossel from "../../components/Carrossel";
import { Darkmode } from "../../components/Darkmode";



export default function LandingPage() {
  return (
    <div>
      <NavBarBs />
      <Darkmode/>
      <Carrossel/>
      <Button>Botao teste</Button>
      <Link to="/login">Login</Link>
      <Link to="/cadastrar">Cadastro</Link>
    </div>
  );
}
