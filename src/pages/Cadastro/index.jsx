import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";
import NavBarBs from "../../components/NavBarBs";
import saxofone from "../../assets/saxophone.png";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    pedidos: [],
  });

  const [mensagemErro, setMensagemErro] = useState(""); // Novo estado para a mensagem de erro

  const navigate = useNavigate();
  const { parametro } = useParams();
  const { state } = useLocation();

  const cadastrar = async () => {
    if (formData.nome === "" || formData.email === "" || formData.senha === "") {
      console.log("Preencha todos os campos");
    } else {
      try {
        const existingUser = await api.get(`cliente?email=${formData.email}`);

        if (existingUser.data.length > 0) {
          setMensagemErro("Email já cadastrado");
        } else {
          const data = await api.post("cliente", formData);
          console.log("Cadastro efetuado com sucesso!");
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
        setMensagemErro("Ocorreu um erro ao cadastrar. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <div className="cadastro-ctn">
      <NavBarBs />
      <section className="cadastro-section">
        <div className="img-ctn">
          <img src={saxofone} alt="Imagem do Saxofone" />
        </div>

        <form className="formulario">
          {mensagemErro && (
            <div className="mensagem-erro">
              {mensagemErro}
            </div>
          )}

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