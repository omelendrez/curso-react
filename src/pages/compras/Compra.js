import React from "react";
import Button from "../../components/Button";

const Compra = (props) => {
  const { compra, onDelete, index, onEdit } = props;
  return (
    <tr>
      <td>{compra.producto}</td>
      <td>{compra.cantidad}</td>
      <td>{compra.precio}</td>
      <td>{compra.frecuencia}</td>

      <td className="buttons">
        <Button label="fa fa-trash" onClick={() => onDelete(index)} />
        <Button label="fa fa-edit" onClick={() => onEdit(index)} />
      </td>
    </tr>
  );
};

export default Compra;
