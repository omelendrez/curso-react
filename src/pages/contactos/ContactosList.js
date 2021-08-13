import React from "react";
import Contacto from "./Contacto";

const ContactosList = (props) => {
  const { contactos } = props;
  return (
    <div className="contactos">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Cumpleaños</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => (
            <Contacto contacto={contacto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactosList;
