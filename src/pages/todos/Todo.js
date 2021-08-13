import React from "react";

const Todo = (props) => {
  const { todo, onClick } = props;
  const { name, completed } = todo;
  return (
    <div
      className={`todo ${completed ? "completed" : ""}`}
      onClick={() => onClick(todo)}
    >
      {name}
    </div>
  );
};

export default Todo;
