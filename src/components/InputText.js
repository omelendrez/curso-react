import React from "react";

const InputText = (props) => {
  const { onSubmit, onChange, value, placeholder, id } = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        className="todo-text"
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        id={id}
      />
    </form>
  );
};

export default InputText;
