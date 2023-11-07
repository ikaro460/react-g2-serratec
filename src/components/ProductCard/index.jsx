import React from "react";
import ProdutoImagem from "../../assets/saxophone-white-background.jpg";
import "./style.css";
export default function ProductCard() {
  const produto = { imagem: ProdutoImagem, nome: "Saxofone", preco: 299.99 };

  return (
    <div className="produto-card">
      <div className="produto-imagem">
        <img src={produto.imagem} alt="Imagem do Produto" />
      </div>
      <div className="produto-preco">
        <h3>{produto.nome}</h3>
        <p>${produto.preco}</p>
      </div>
    </div>
  );
}
