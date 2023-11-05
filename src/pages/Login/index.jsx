import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]);

  async function getUsuarios() {
    try {
      const { data } = await api.get("cliente");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUsuarios();
  }, []);

  const navigate = useNavigate();
  const { parametro } = useParams();
  const { state } = useLocation();

  // function entrar(){}
  const entrar = () => {
    const matchingClientes = users.filter((cliente) => {
      if (login === cliente.nome && senha === cliente.senha) {
        const info = {
          login: login,
          senha: senha,
        };

        localStorage.setItem("info", JSON.stringify(info));

        setLogin("");
        setSenha("");

        navigate("/home/" + login);
        return true; // Cliente válido
      } else {
        return false; // Cliente inválido
      }
    });

    if (matchingClientes.length === 0) {
      console.log("Login ou senha inválidos!");
    } else if (login === "" || senha === "") {
      console.log("Preencha os campos de login e senha");
    }
  };

  return (
    <>
      <h1>Página de Login</h1>

      <form>
        <input
          className="entrada"
          type="text"
          placeholder="Digite Seu login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />
        <input
          className="entrada"
          type="password"
          placeholder="Digite Sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <br />
        <button className="botao" type="button" onClick={entrar}>
          Entrar
        </button>
      </form>
    </>
  );
}
