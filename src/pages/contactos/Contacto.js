import React from "react";

const Contacto = (props) => {
  const { contacto } = props;
  return (
    <tr>
      <td>{contacto.name}</td>
      <td>{contacto.phone}</td>
      <td>{contacto.email}</td>
      <td>{contacto.age}</td>
      <td>{contacto.birthday}</td>
    </tr>
  );
};

export default Contacto;
