import React from "react";
import "./header.css";
import Logo from "./Logo";
import Titulo from "./Titulo";
import Fecha from "./Fecha";
const Header = (props) => {
  return (
    <div className="headers">
      <Logo />
      <Titulo title={props.title} />
      <Fecha />
    </div>
  );
};
export default Header;
