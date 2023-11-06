import { useContext, useEffect } from "react";
import Radio1 from "../../components/Radio";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  const { cliente, deslogar, getProdutos, produtos } = useContext(AuthContext);

  useEffect(() => {
    getProdutos();
    console.log(produtos);
  }, []);

  return (
    <>
      <h1>Home</h1>
      <h2>Seja bem vindo(a), {cliente.nome}!</h2>
      <button onClick={() => deslogar()}>Sair</button>
      <ul>
        {!!produtos &&
          produtos.map((item, index) => {
            return <li key={index}>{item.nome}</li>;
          })}
      </ul>
      <Radio1 />
    </>
  );
}
