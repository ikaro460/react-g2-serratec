import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";
import NavBarBs from "../../components/NavBarBs";
import saxofone from "../../assets/saxophone-white-background.png";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]);
  const { logar, deslogar } = useContext(AuthContext);

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
      if (login === cliente.email && senha === cliente.senha) {
        const info = {
          login: login,
          nome: cliente.nome,
          senha: senha,
        };

        logar(info);
        setLogin("");
        setSenha("");
        navigate("/home/" + cliente.nome);
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
    <div className="lgn-ctn">
      <NavBarBs />
      <section className="lgn-section">
        <div className="img-ctn">
          <img src={saxofone} />
        </div>

        <form className="formulario">
          <div className="title">
            <h2>Login</h2>
            <p>
              Não tem conta ainda?{" "}
              <span onClick={() => navigate("/cadastro")}>Cadastre-se</span>
            </p>
          </div>
          <div className="inputs">
            <div className="entrada">
              <input
                type="text"
                placeholder="Seu email de acesso"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="entrada">
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <button className="botao" type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
