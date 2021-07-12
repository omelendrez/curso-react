import React from "react";
import "./header.css";
import Logo from "./Logo";
import Titulo from "./Titulo";
import Fecha from "./Fecha";
const Header = () => {
  return (
    <div className="headers">
      <Logo />
      <Titulo title="Pagina Principal" />
      <Fecha />
    </div>
  );
};
export default Header;
