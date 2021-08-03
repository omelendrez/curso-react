import React, { useState, useEffect } from "react";
import Header from "../components/Headers";
import InputText from "./InputText";
import CleanButton from "./CleanButton";
import TodosList from "./TodosList";
import "./todos.css";

const defaultTodos = [];

const Todos = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [completedList, setCompletedList] = useState([]);
  const [text, setText] = useState("");

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
    const newList = todos.filter((todo) => !todo.completed);
    setTodos(newList);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length,
      name: text,
    };
    const newList = [...todos, newTodo];
    setTodos(newList);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Header title="Todos" />

      <InputText onSubmit={addTodo} onChange={textChange} />

      <CleanButton
        disabled={completedList.length === 0}
        onClick={handleClickButton}
      />

      <TodosList todos={todos} onClick={handleClick} />
    </>
  );
};

export default Todos;
