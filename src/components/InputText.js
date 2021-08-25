import React from "react";

const InputText = (props) => {
  const { onChange, value, placeholder, id, type } = props;
  return (
    <input
      className="todo-text"
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      id={id}
      required
    />
  );
};

export default InputText;
