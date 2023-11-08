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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page

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
  }, [pesquisa, produtos]);

  useEffect(() => {
    getProdutos();
  }, []);

  // Calculate the number of pages based on the number of filtered products
  const totalPages = Math.ceil(produtosFiltrados.length / itemsPerPage);

  // Calculate the range of products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = produtosFiltrados.slice(startIndex, endIndex);

  return (
    <div className="home-pg">
      <NavBarBs />
      <Carrossel />
      <h2>Produtos</h2>
      <SearchBar setPesquisa={setPesquisa} />
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </div>
      <ul className="prod-list">
        {!!productsToDisplay &&
          productsToDisplay.map((item, index) => {
            return (
              <li key={index}>
                <ProductCard produto={item} />
              </li>
            );
          })}
      </ul>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bi bi-caret-left-fill"></i>
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <i className="bi bi-caret-right-fill"></i>
        </button>
      </div>
    </div>
  );
}
