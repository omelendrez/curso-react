import React from "react";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import InputText from "../../components/InputText";

const ContactoForm = (props) => {
  const saveData = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header title="Nuevo contacto" />
      <form className="contacto-form">
        <InputText id="name" placeholder="nombre" />
        <InputText id="phone" placeholder="celular" />
        <InputText id="email" placeholder="e-mail" />
        <InputText id="age" placeholder="edad" />
        <InputText id="birthday" placeholder="cumple" />

        <Button label="Guardar datos" onClick={saveData} />
      </form>
    </>
  );
};

export default ContactoForm;
