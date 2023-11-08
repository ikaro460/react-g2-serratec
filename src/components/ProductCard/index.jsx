import React, { useContext } from "react";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ produto }) {
  const { getProdutos } = useContext(AuthContext);
  const navigate = useNavigate();

  const deletarProduto = async () => {
    try {
      const response = await api.delete(`/produto/${produto.id_produto}`);

      // Handle success
      console.log(`Item with ID ${produto.id_produto} deleted successfully`);
      console.log("Response:", response.data);
      getProdutos();
    } catch (error) {
      // Handle error
      console.error(
        `Error deleting item with ID ${produto.id_produto}:`,
        error
      );
    }
  };

  const editarProduto = async (id) => {
    navigate(`/editarproduto/${produto.id_produto}`);
  };

  // const produto = { imagem: ProdutoImagem, nome: "Saxofone", preco: 299.99 };
  return (
    <div className="produto-card">
      <div className="produto-imagem">
        <img src={produto.imagem} alt="Imagem do Produto" />
      </div>
      <div className="stars">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
      </div>

      <div className="produto-preco">
        <h3>{produto.nome}</h3>
        <p>$ {produto.valor_unitario}</p>

        <div className="botoes">
          <button className="botao" type="button" onClick={editarProduto}>
            <i className="bi bi-pencil"></i>
          </button>
          <button className="botao red" onClick={deletarProduto}>
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
