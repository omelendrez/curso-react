import React from "react";

const CleanButton = (props) => {
  const { disabled, onClick } = props;
  return (
    <button className="btn" disabled={disabled} onClick={onClick}>
      Limpiar
    </button>
  );
};

export default CleanButton;
