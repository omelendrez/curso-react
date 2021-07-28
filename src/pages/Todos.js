import React, { useState, useEffect } from "react";
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
  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    const completed = todos.filter((todo) => todo.completed === true);
    setCompletedList(completed);
  }, [todos]);

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

  const handleClickButton = (e) => {
    console.log(completedList);
  };

  return (
    <>
      <Header title="Todos" />
      <button
        className="btn"
        disabled={completedList.length === 0}
        onClick={handleClickButton}
      >
        Limpiar
      </button>
      <div className="todos">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onClick={handleClick} />
        ))}
      </div>
    </>
  );
};

export default Todos;
