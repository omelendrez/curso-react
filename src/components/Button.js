import React from "react";
import "./button.css";

const Button = (props) => {
  const { disabled, onClick, label } = props;
  return (
    <button className="btn" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
