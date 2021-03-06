import React from "react";
import "./header.css";
import Logo from "./Logo";
import Titulo from "./Titulo";
import Fecha from "./Fecha";
import Navbar from "./Navbar";
const Header = (props) => {
  return (
    <div className="headers">
      <div>
        <Logo />
        <Titulo title={props.title} />
        <Fecha />
      </div>
      <Navbar />
    </div>
  );
};
export default Header;
