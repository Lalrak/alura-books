import Header from "./components/header/header.js";
import styled from "styled-components";
import Pesquisa from "./components/pesquisa/pesquisa.js";
import UltimosLancamentos from "./components/ultimosLancamentos.js/ultimosLancamentos.js";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
