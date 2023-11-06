import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("info"));

  const logar = (loginData) => {
    console.log(loginData);
    setUser(loginData);
  };

  const deslogar = (loginData) => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user: user, estaLogado: !!user, logar, deslogar }}
    >
      {children}
    </AuthContext.Provider>
  );
};
