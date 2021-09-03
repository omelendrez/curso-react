import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    if (props.location.state) {
      setForm(props.location.state);
    }
  }, [props]);

  const [form, setForm] = useState(initForm);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.id]: e.target.value };
    setForm(newForm);
  };

  const saveData = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("contactos") || "[]");
    data.push(form);
    localStorage.setItem("contactos", JSON.stringify(data));
    setRedirect(true);
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
          value={form.name}
        />
        <InputText
          id="phone"
          type="text"
          placeholder="celular"
          onChange={handleChange}
          value={form.phone}
        />
        <InputText
          id="email"
          type="email"
          placeholder="e-mail"
          onChange={handleChange}
          value={form.email}
        />
        <InputText
          id="age"
          type="number"
          placeholder="edad"
          onChange={handleChange}
          value={form.age}
        />
        <InputText
          id="birthday"
          type="date"
          placeholder="cumple"
          onChange={handleChange}
          value={form.birthday}
        />

        <Button label="Guardar datos" onClick={saveData} type="submit" />
        <Button label="Volver" onClick={cancelForm} />
      </form>
    </>
  );
};

export default ContactoForm;
