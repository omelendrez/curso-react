import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import ContactosList from "./ContactosList";
import "./contactos.css";

const Contactos = () => {
  const [redirect, setRedirect] = useState(false);
  const [contactos, setContactos] = useState([]);
  const [contacto, setContacto] = useState({});

  const obtenerLista = () => {
    const data = localStorage.getItem("contactos") || "[]";
    setContactos(JSON.parse(data));
  };

  const handleDelete = (index) => {
    if (window.confirm("Seguro quiere eliminar el registro?")) {
      const data = contactos.filter((contacto, idx) => idx !== index);
      localStorage.setItem("contactos", JSON.stringify(data));
      setContactos(data);
    }
  };

  const handleEdit = (index) => {
    const data = contactos.filter((contacto, idx) => idx === index)[0];
    setContacto(data);
    setRedirect(true);
  };

  useEffect(() => {
    obtenerLista();
  }, []);

  const onClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return (
      <Redirect to={{ pathname: "/contacto/formulario", state: contacto }} />
    );
  }

  return (
    <>
      <Header title="Contactos" />

      <Button label="fa fa-plus" onClick={onClick} />

      <ContactosList
        contactos={contactos}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </>
  );
};

export default Contactos;
