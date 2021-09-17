import React from "react";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import ComprasList from "./ComprasList";
import "./compras.css";

const Compras = () => {
  const onClick = (e) => {
    console.log(e);
  };

  const compras = [
    {
      id: 1,
      producto: "Harina",
      cantidad: "1kg",
      precio: "123,8",
      frecuencia: "mensual",
    },
    {
      id: 2,
      producto: "Cerveza",
      cantidad: "1l",
      precio: "200",
      frecuencia: "Semanal",
    },
    {
      id: 3,
      producto: "Fernet",
      cantidad: "1l",
      precio: "600",
      frecuencia: "Semanal",
    },
  ];

  const handleDelete = (e) => {
    console.log(e);
  };
  const handleEdit = (e) => {
    console.log(e);
  };

  return (
    <>
      <Header title="Compras" />

      <Button label="fa fa-plus" onClick={onClick} />
      <ComprasList
        compras={compras}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default Compras;
