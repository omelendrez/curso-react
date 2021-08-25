import React from "react";
import "./button.css";

const Button = (props) => {
  const { disabled, onClick, label, type } = props;
  return (
    <button className="btn" disabled={disabled} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
