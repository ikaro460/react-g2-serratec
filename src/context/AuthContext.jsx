import React, { createContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const clienteInfo = JSON.parse(localStorage.getItem("info"));
  const produtosInfo = JSON.parse(localStorage.getItem("produtos"));

  const [cliente, setCliente] = useState(clienteInfo ? clienteInfo : null);
  const [produtos, setProdutos] = useState(produtosInfo ? produtosInfo : null);

  const logar = (loginData) => {
    setCliente(loginData);
    localStorage.setItem("info", JSON.stringify(loginData));
  };

  const deslogar = () => {
    setCliente(null);
    localStorage.removeItem("info");
  };

  const getProdutos = async () => {
    try {
      const { data } = await api.get("produto");
      setProdutos(data);
      localStorage.setItem("produtos", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        cliente: cliente,
        estaLogado: !!cliente,
        logar,
        deslogar,
        produtos: produtos,
        getProdutos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
