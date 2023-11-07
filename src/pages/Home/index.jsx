import { useContext, useEffect, useState } from "react";
import Radio1 from "../../components/Radio";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../../components/ProductCard";
import "./style.css";
import { useNavigate } from "react-router-dom";
import NavBarBs from "../../components/NavBarBs";
import SearchBar from "../../components/SearchBar";
import Carrossel from "../../components/Carrossel";
import unorm from "unorm";

export default function Home() {
  const { getProdutos, produtos } = useContext(AuthContext);
  const [pesquisa, setPesquisa] = useState("");
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtos);

  useEffect(() => {
    const pesquisaNormalized = unorm
      .nfd(pesquisa) // Normalize a pesquisa
      .replace(/[^\w\s]/gi, "") // Remove caracteres especiais
      .replace(/\s+/g, "") // Remove espaços em branco
      .toUpperCase();

    const filteredProducts = produtos.filter((prod) => {
      const prodNomeNormalized = unorm
        .nfd(prod.nome) // Normalize o nome do produto
        .replace(/[^\w\s]/gi, "") // Remove caracteres especiais
        .replace(/\s+/g, "") // Remove espaços em branco
        .toUpperCase();

      return prodNomeNormalized.includes(pesquisaNormalized);
    });

    setProdutosFiltrados(filteredProducts);
  }, [pesquisa]);

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="home-pg">
      <NavBarBs />
      <Carrossel />
      <SearchBar setPesquisa={setPesquisa} />
      <ul className="prod-list">
        {!!produtosFiltrados &&
          produtosFiltrados.map((item, index) => {
            return (
              <li key={index}>
                <ProductCard produto={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
