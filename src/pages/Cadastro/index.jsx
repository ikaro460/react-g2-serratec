import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";
import NavBarBs from "../../components/NavBarBs";
import saxofone from "../../assets/saxophone-white-background.png";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    pedidos: [],
  });
  const navigate = useNavigate();
  const { parametro } = useParams();
  const { state } = useLocation();

  const cadastrar = async () => {
    if (
      formData.nome === "" ||
      formData.email === "" ||
      formData.senha === ""
    ) {
      console.log("Preencha os campos de login e senha");
    } else {
      try {
        const data = await api.post("cliente", formData);
        console.log("Login efetuado com sucesso!");
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
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
            <h2>Cadastro</h2>
            <p>
              Já tem uma conta?{" "}
              <span onClick={() => navigate("/")}>Entre agora!</span>
            </p>
          </div>
          <div className="inputs">
            <div className="entrada">
              <input
                type="text"
                placeholder="Seu nome completo"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
            </div>
            <div className="entrada">
              <input
                type="text"
                placeholder="Seu email de acesso"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="entrada">
              <input
                type="password"
                placeholder="Senha"
                value={formData.senha}
                onChange={(e) =>
                  setFormData({ ...formData, senha: e.target.value })
                }
              />
            </div>
          </div>
          <button className="botao" type="button" onClick={cadastrar}>
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}
