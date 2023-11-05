import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useParams();
  const usuarioValido = JSON.parse(localStorage.getItem("info"));

  const autenticar = () => {
    usuarioValido.login != user || usuarioValido == null ? navigate("/") : null;
  };

  useEffect(() => {
    autenticar();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {user == undefined ? (
        <h2>Olá visitante!</h2>
      ) : (
        <h2>Seja bem vindo(a), {user}!</h2>
      )}
    </>
  );
}
