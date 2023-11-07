import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./style.css";
import Radio1 from "../Radio";

const Footer = () => {
  const redirectToGithub = () => {
    window.open("https://github.com/ikaro460/react-g2-serratec", "_blank"); // Substitua com o link do seu repositório
  };
  return (
    <footer className="footer">
      <ul className="social_list">
        <li className="social_list">
          <FaGithub onClick={redirectToGithub} />
        </li>
        <li className="social_list">
          <FaFacebook />
        </li>
        <li className="social_list">
          <FaInstagram />
        </li>
        <li className="social_list">
          <FaLinkedin />
        </li>
      </ul>
      <p className="copy_right">
        <span>Cost</span> &copy; 2023
      </p>
      <Radio1 />
    </footer>
  );
};

export default Footer;
