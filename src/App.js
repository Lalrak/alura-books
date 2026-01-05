import "./App.css";
import Logo from "./components/logo/index.js";
import perfil from "./images/perfil.svg";
import sacola from "./images/sacola.svg";

const textoOpcoes = ["Categorias", "Favoritos", "Minha Estante"];
const icones = [perfil, sacola];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Logo></Logo>
        <ul className="opcoes">
          {textoOpcoes.map((texto) => (
            <li className="opcao">
              <p>{texto}</p>
            </li>
          ))}
        </ul>

        <ul className="icones">
          {icones.map((icone) => (
            <li className="icone">
              <img src={icone}></img>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
