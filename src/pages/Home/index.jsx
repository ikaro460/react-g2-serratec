import { useContext, useEffect } from "react";
import Radio1 from "../../components/Radio";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../../components/ProductCard";
import "./style.css";
import { useNavigate } from "react-router-dom";
import NavBarBs from "../../components/NavBarBs";
import Carrossel from "../../components/Carrossel";

export default function Home() {
  const { getProdutos, produtos } = useContext(AuthContext);

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="home-pg">
      <NavBarBs />
     <Carrossel/>
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
    </div>
  );
}
