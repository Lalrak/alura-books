import logo from "../../images/logo.svg";
import "./estilo.css";
function Logo(teste) {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo-image"></img>
      <p>
        <strong>Alura</strong>Books
      </p>
    </div>
  );
}

export default Logo;
