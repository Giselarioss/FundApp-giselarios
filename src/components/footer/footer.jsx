import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="indice-redes">
        <a
          target="_blank"
          href="https://github.com/Giselarioss"
        >
          <li>
            <i className="bx bxl-linkedin"></i>
          </li>
        </a>{" "}
        <a target="_blank" href="https://www.linkedin.com/in/giselarioss/">
          <li>
            <i className="bx bxl-github"></i>
          </li>
        </a>{" "}
        <a target="_blank" href="">
          <li>
            <i className="bx bxl-instagram"></i>
          </li>
        </a>
      </ul>
      <p>Todos los derechos reservados.</p>
      <p>Gisela Rios©</p>
    </footer>
  );
};

export default Footer;
