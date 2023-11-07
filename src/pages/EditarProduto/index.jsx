import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";
import NavBarBs from "../../components/NavBarBs";
import saxofone from "../../assets/saxophone-white-background.jpg";
import { AuthContext } from "../../context/AuthContext";

export default function EditarProduto() {
  const { id } = useParams();
  const { produtos } = useContext(AuthContext);
  const produto = produtos.find((item) => item.id_produto === id);

  const [formData, setFormData] = useState({
    nome: produto.nome,
    descricao: produto.descricao,
    valor_unitario: produto.valor_unitario,
    imagem: produto.imagem,
  });
  const navigate = useNavigate();
  const { parametro } = useParams();
  const { state } = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Ler o arquivo como URL de dados (base64)
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setFormData({ ...formData, imagem: imageData });
      };
      reader.readAsDataURL(file);
    }
  };

  const editar = async () => {
    if (
      formData.nome === "" ||
      formData.descricao === "" ||
      formData.valor_unitario === ""
    ) {
      console.log("Preencha todos os campos.");
    } else {
      try {
        const data = await api.put(`produto/${id}`, formData);
        console.log("Produto cadastrado com sucesso!");
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="lgn-ctn">
      <NavBarBs />
      <section className="lgn-section">
        <div className="img-ctn">
          <img src={saxofone} />
        </div>

        <form className="formulario">
          <div className="title">
            <h2>Editar produtos</h2>
          </div>
          <div className="inputs">
            <div className="entrada">
              <input
                type="text"
                placeholder="Nome do produto"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
            </div>
            <div className="entrada">
              <input
                type="text"
                placeholder="Descrição do produto"
                value={formData.descricao}
                onChange={(e) =>
                  setFormData({ ...formData, descricao: e.target.value })
                }
              />
            </div>
            <div className="entrada">
              <input
                id="img-input"
                type="text"
                placeholder="Preço(R$)"
                value={formData.valor_unitario}
                onChange={(e) =>
                  setFormData({ ...formData, valor_unitario: e.target.value })
                }
              />
            </div>
            <div className="entrada">
              <input
                type="file"
                placeholder="Imagem"
                accept="image/*"
                onChange={(e) => handleImageUpload(e)}
              />
            </div>
          </div>
          <button className="botao" type="button" onClick={editar}>
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
