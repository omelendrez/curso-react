import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Headers";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { log } from 'utils/helpers';

const CompraForm = (props) => {
  const initForm = {
    id: uuidv4(),
    producto: "",
    cantidad: "",
    precio: "",
    frecuencia: "",
    birthday: "",
  };

  useEffect(() => {
    if (props.location.state.producto) {
      setForm(props.location.state);
    }
  }, [props]);

  const [form, setForm] = useState(initForm);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.id]: e.target.value };
    setForm(newForm);
  };

  const saveCompra = (e) => {
    e.preventDefault();
    let compras = JSON.parse(localStorage.getItem("compras") || "[]");
    if (compras.find((compra) => compra.id === form.id)) {
      compras = compras.map((compra) =>
        compra.id === form.id ? form : compra
      );
    } else {
      compras.push(form);
    }
    localStorage.setItem("compras", JSON.stringify(compras));
    log.success('Registro guardado')
    setRedirect(true);
  };

  const cancelForm = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/compras" />;
  }

  return (
    <>
      <Header title="Nuevo compra" />
      <form className="compra-form" onSubmit={saveCompra}>
        <InputText
          id="producto"
          type="text"
          placeholder="producto"
          onChange={handleChange}
          value={form.producto}
        />
        <InputText
          id="cantidad"
          type="text"
          placeholder="cantidad"
          onChange={handleChange}
          value={form.cantidad}
        />
        <InputText
          id="precio"
          type="text"
          placeholder="precio"
          onChange={handleChange}
          value={form.precio}
        />
        <InputText
          id="frecuencia"
          type="text"
          placeholder="frecuencia"
          onChange={handleChange}
          value={form.frecuencia}
        />

        <div className="buttons">
          <Button label="fa fa-save" onClick={saveCompra} type="submit" />
          <Button label="fa fa-chevron-left" onClick={cancelForm} />
        </div>
      </form>
    </>
  );
};

export default CompraForm;
