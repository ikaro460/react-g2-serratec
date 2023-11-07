import { useContext, useEffect } from "react";
import Radio1 from "../../components/Radio";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../../components/ProductCard";
import "./style.css";
import { useNavigate } from "react-router-dom";
import NavBarBs from "../../components/NavBarBs";

export default function Home() {
  const { getProdutos, produtos } = useContext(AuthContext);

  useEffect(() => {
    getProdutos();
    console.log(produtos);
  }, []);

  return (
    <div className="home-pg">
      <NavBarBs />
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
