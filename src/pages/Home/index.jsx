import { useContext, useEffect } from "react";
import Radio1 from "../../components/Radio";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../../components/ProductCard";
import "./style.css";
import { useNavigate } from "react-router-dom";
import DarkMode from "../../components/Darkmode";


export default function Home() {
  const { cliente, deslogar, getProdutos, produtos } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProdutos();
    console.log(produtos);
  }, []);

  return (
    <div className="home-pg">
      <h1>Home</h1>
      <h2>Seja bem vindo(a), {cliente.nome}!</h2>
      <button onClick={() => deslogar()}>Sair</button>
      <button onClick={() => navigate("/cadastroproduto")}>
        Cadastrar produto
      </button>
      <ul className="prod-list">
        {!!produtos &&
          produtos.map((item, index) => {
            return (
              <li key={index}>
                <ProductCard produto={item} />
              </li>
            );
          })}
      </ul>
      <Radio1 />
    
    </div>
  );
}
