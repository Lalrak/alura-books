import logo from "../../images/logo.svg";
import "./estilo.css";
function Logo(teste) {
  return (
    <div className="logo">
      <img src={logo} alt="logo"></img>
      <p>
        <strong>Alura Books</strong>
      </p>
    </div>
  );
}

export default Logo;
