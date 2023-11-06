import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Radio1 from "../../components/Radio";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useParams();
  const usuarioValido = JSON.parse(localStorage.getItem("info"));

  const autenticar = () => {
    usuarioValido.nome.toUpperCase().replace(/\s+/g, "") !=
      user.toUpperCase().replace(/\s+/g, "") || usuarioValido == null
      ? navigate("/")
      : null;
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
      <Radio1 />
    </>
  );
}
