import React from "react";
import Header from "../components/Headers";
import Todo from "./Todo";
import "./todos.css";

const todos = [
  {
    name: "Hacer las compras",
    completed: false,
  },
  {
    name: "Pagar alquiler",
    completed: true,
  },
  {
    name: "Lavar la ropa",
    completed: false,
  },
  {
    name: "Ir al gimnasio",
    completed: false,
  },
];

const Todos = () => {
  return (
    <>
      <Header title="Todos" />
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} color="rojo" />
        ))}
      </div>
    </>
  );
};

export default Todos;
