import React from "react";
import Button from "../../components/Button";
import "./contacto.css";

const Contacto = (props) => {
  const { contacto, onDelete, index, onEdit } = props;
  return (
    <tr>
      <td>{contacto.name}</td>
      <td>{contacto.phone}</td>
      <td>{contacto.email}</td>
      <td>{contacto.age}</td>
      <td>{contacto.birthday}</td>
      <td className="buttons">
        <Button label="trash" onClick={() => onDelete(index)} />
        <Button label="edit" onClick={() => onEdit(index)} />
      </td>
    </tr>
  );
};

export default Contacto;
