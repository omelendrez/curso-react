import React from "react";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import ContactosList from "./ContactosList";

const contactos = [
  {
    name: "Omar",
    phone: "2915754922",
    email: "omar.melendrez@gmail.com",
    age: 61,
    birthday: "22/01/1960",
  },
  {
    name: "Jose",
    phone: "2915754923",
    email: "jose@gmail.com",
    age: 62,
    birthday: "22/01/1961",
  },
  {
    name: "Carla",
    phone: "2915754924",
    email: "carla@gmail.com",
    age: 63,
    birthday: "22/01/1962",
  },
];

const Contactos = () => {
  return (
    <>
      <Header title="Contactos" />

      <Button label="Agregar contacto" />

      <ContactosList contactos={contactos} />
    </>
  );
};

export default Contactos;
