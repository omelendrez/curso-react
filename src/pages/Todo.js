import React from "react";

const Todo = (props) => {
  const { todo } = props;
  const { name, completed } = todo;
  return <div className={`todo ${completed ? "completed" : ""}`}>{name}</div>;
};

export default Todo;
