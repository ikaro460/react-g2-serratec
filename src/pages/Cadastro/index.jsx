import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";

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
        console.log(data);
        console.log("Login efetuado com sucesso!");
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h1>Página de Login</h1>

      <form>
        <input
          className="entrada"
          type="text"
          placeholder="Digite Seu Nome Completo"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <br />

        <input
          className="entrada"
          type="text"
          placeholder="Digite Seu Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <input
          className="entrada"
          type="password"
          placeholder="Digite Sua Senha"
          value={formData.senha}
          onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
        />
        <br />
        <button className="botao" type="button" onClick={cadastrar}>
          Entrar
        </button>
      </form>
    </>
  );
}
