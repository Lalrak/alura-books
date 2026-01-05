import Logo from "../../components/logo/index.js";
import OpcoesHeader from "../../components/opcoesHeader/index.js";
import IconesHeader from "../../components/iconesHeader/index.js";

function Header() {
  return (
    <header className="app-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
