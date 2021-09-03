import React from "react";
import Contacto from "./Contacto";
import "./contactos.css";

const ContactosList = (props) => {
  const { contactos, onDelete } = props;
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <Contacto
              key={index}
              contacto={contacto}
              onDelete={onDelete}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactosList;
