import React from "react";
import "./header.css";
import Logo from "./Logo";
import Titulo from "./Titulo";
import Fecha from "./Fecha";
const Header = () => {
  return (
    <div className="titulo">
      <Logo />
      <Titulo title="Tarea" />
      <Fecha date="11/07/2021" />
    </div>
  );
};
export default Header;
