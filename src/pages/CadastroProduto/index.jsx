import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";
import { api } from "../../services/api";
import NavBarBs from "../../components/NavBarBs";
import saxofone from "../../assets/saxophone-white-background.jpg";

export default function CadastroProduto() {
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    valor_unitario: "",
    imagem: "",
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

  const cadastrar = async () => {
    if (
      formData.nome === "" ||
      formData.descricao === "" ||
      formData.valor_unitario === ""
    ) {
      console.log("Preencha todos os campos.");
    } else {
      try {
        const data = await api.post("produto", formData);
        console.log("Produto cadastrado com sucesso!");
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="cad-prod-ctn">
      <NavBarBs />
      <section className="cad-prod-section">
        <div className="img-ctn">
          <img src={saxofone} />
        </div>

        <form className="formulario">
          <div className="title">
            <h2>Cadastro de produtos</h2>
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
          <button className="botao" type="button" onClick={cadastrar}>
            Cadastrar
          </button>
        </form>
      </section>
    </div>
  );
}
