import React from "react";
import Compra from "./Compra";
import "./compras.css";

const ComprasList = (props) => {
  const { compras, onDelete, onEdit } = props;
  return (
    <div className="compras">
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Frecuencia</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {compras.map((compra, index) => (
            <Compra
              key={index}
              compra={compra}
              onDelete={onDelete}
              onEdit={onEdit}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComprasList;
