import "./style.css";
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logoLoja.png";
import DarkMode from "../Darkmode";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function NavBarBs() {
  const { cliente, deslogar, getProdutos, produtos } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-ctn">
      <Container>
        <Navbar.Brand href="#home" className="nav-img-ctn">
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
            <Nav.Link href="/">Home</Nav.Link>
            <button onClick={() => deslogar()}>Sair</button>

            <Nav.Link href="/cadastroproduto">Cadastrar Produto</Nav.Link>
          </Nav>
          <DarkMode />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
