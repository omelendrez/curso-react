import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import InputText from "../../components/InputText";

const ContactoForm = (props) => {
  const initForm = {
    name: "",
    phone: "",
    email: "",
    age: "",
    birthday: "",
  };

  const [form, setForm] = useState(initForm);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.id]: e.target.value };
    setForm(newForm);
  };

  const saveData = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const cancelForm = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/contactos" />;
  }

  return (
    <>
      <Header title="Nuevo contacto" />
      <form className="contacto-form" onSubmit={saveData}>
        <InputText
          id="name"
          type="text"
          placeholder="nombre"
          onChange={handleChange}
        />
        <InputText
          id="phone"
          type="text"
          placeholder="celular"
          onChange={handleChange}
        />
        <InputText
          id="email"
          type="email"
          placeholder="e-mail"
          onChange={handleChange}
        />
        <InputText
          id="age"
          type="number"
          placeholder="edad"
          onChange={handleChange}
        />
        <InputText
          id="birthday"
          type="date"
          placeholder="cumple"
          onChange={handleChange}
        />

        <Button label="Guardar datos" onClick={saveData} type="submit" />
        <Button label="Volver" onClick={cancelForm} />
      </form>
    </>
  );
};

export default ContactoForm;
