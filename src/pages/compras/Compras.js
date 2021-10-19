import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import ComprasList from "./ComprasList";
import { log } from 'utils/helpers';
import "./compras.css";

const Compras = () => {
  const [redirect, setRedirect] = useState(false);
  const [compras, setCompras] = useState([]);
  const [compra, setCompra] = useState({});

  const obtenerLista = () => {
    const data = localStorage.getItem("compras") || "[]";
    const compras = JSON.parse(data)
    setCompras(compras);
    if(!compras.length) {
      log.warning('No hay compras guardadas')
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Seguro quiere eliminar el registro?")) {
      const data = compras.filter((compra, idx) => idx !== index);
      localStorage.setItem("compras", JSON.stringify(data));
      setCompras(data);
      log.success('Registro eliminado')
    }
  };

  const handleEdit = (index) => {
    const data = compras.filter((compra, idx) => idx === index)[0];
    setCompra(data);
    setRedirect(true);
  };

  useEffect(() => {
    obtenerLista();
  }, []);

  const onClick = (e) => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={{ pathname: "/compra/formulario", state: compra }} />;
  }
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
