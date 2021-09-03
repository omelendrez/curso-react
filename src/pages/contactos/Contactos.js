import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import ContactosList from "./ContactosList";
import "./contactos.css";

const Contactos = () => {
  const [redirect, setRedirect] = useState(false);
  const [contactos, setContactos] = useState([]);

  const obtenerLista = () => {
    const data = localStorage.getItem("contactos") || "[]";
    setContactos(JSON.parse(data));
  };

  const handleDelete = (index) => {
    const data = contactos.filter((contacto, idx) => idx !== index);
    localStorage.setItem("contactos", JSON.stringify(data));
    setContactos(data);
  };

  useEffect(() => {
    obtenerLista();
  }, []);

  const onClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/contacto/formulario" />;
  }

  return (
    <>
      <Header title="Contactos" />

      <Button label="Agregar contacto" onClick={onClick} />

      <ContactosList contactos={contactos} onDelete={handleDelete} />
    </>
  );
};

export default Contactos;
