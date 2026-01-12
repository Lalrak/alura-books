import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo/Titulo.js";
import CardRecomenda from "../cardRecomenda/cardRecomenda.js";
import imagemLivro from "../../images/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px" alinhamento="center">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((l) => (
          <img src={l.src} alt="" />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        imagem={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
