import React from "react";
const Fecha = () => {
  const fecha = new Date();
  return <div>{fecha.toLocaleDateString()}</div>;
};

export default Fecha;
