import React from "react";

const InputText = (props) => {
  const { onSubmit, onChange, value } = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        className="todo-text"
        type="text"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default InputText;
