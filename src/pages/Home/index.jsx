import { useContext } from "react";
import Radio1 from "../../components/Radio";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const { user, deslogar } = useContext(AuthContext);

  return (
    <>
      <h1>Home</h1>
      <h2>Seja bem vindo(a), {user.nome}!</h2>
      <button onClick={() => deslogar()}>Sair</button>
      <Radio1 />
    </>
  );
}
