import React from "react";
import Todo from "./Todo";

const TodosList = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onClick={onClick} />
      ))}
    </div>
  );
};

export default TodosList;
