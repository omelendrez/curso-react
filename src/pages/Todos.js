import React, { useState } from "react";
import Header from "../components/Headers";
import Todo from "./Todo";
import "./todos.css";

const defaultTodos = [
  {
    id: 0,
    name: "Hacer las compras",
  },
  {
    id: 1,
    name: "Pagar alquiler",
  },
  {
    id: 2,
    name: "Lavar la ropa",
  },
  {
    id: 3,
    name: "Ir al gimnasio",
  },
  {
    id: 4,
    name: "Pagar alquiler",
  },
  {
    id: 5,
    name: "Pagar alquiler",
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(defaultTodos);

  const handleClick = (item) => {
    const newItem = { ...item, completed: !item.completed };
    const newTodos = todos.map((todoItem) => {
      if (newItem.id === todoItem.id) {
        todoItem = newItem;
      }
      return todoItem;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Header title="Todos" />
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default Todos;
