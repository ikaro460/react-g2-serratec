import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavBarBs from "../../components/NavBarBs";

export default function LandingPage() {
  return (
    <div>
      <NavBarBs />
      <Button>Botao teste</Button>
      <Link to="/login">Login</Link>
      <Link to="/cadastrar">Cadastro</Link>
    </div>
  );
}
