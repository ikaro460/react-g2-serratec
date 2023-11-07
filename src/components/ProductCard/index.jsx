import React, { useContext } from "react";
import ProdutoImagem from "../../assets/saxophone-white-background.jpg";
import "./style.css";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../services/api";
export default function ProductCard({ produto }) {
  const { getProdutos } = useContext(AuthContext);
  console.log(produto);

  const deletarProduto = async (id) => {
    try {
      const response = await api.delete(`/produto/${id}`);

      // Handle success
      console.log(`Item with ID ${id} deleted successfully`);
      console.log("Response:", response.data);
      getProdutos();
    } catch (error) {
      // Handle error
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };

  // const produto = { imagem: ProdutoImagem, nome: "Saxofone", preco: 299.99 };
  return (
    <div className="produto-card">
      <div className="produto-imagem">
        <img src={produto.imagem} alt="Imagem do Produto" />
      </div>
      <div className="produto-preco">
        <h3>{produto.nome}</h3>
        <p>${produto.valorUnitario}</p>
        <button onClick={() => deletarProduto(produto.id_produto)}>
          Excluir
        </button>
      </div>
    </div>
  );
}
