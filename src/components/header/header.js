import Logo from "../logo/logo.js";
import { Link } from "react-router-dom";
import OpcoesHeader from "../opcoesHeader/opcoesHeader.js";
import IconesHeader from "../iconesHeader/iconesHeader.js";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
