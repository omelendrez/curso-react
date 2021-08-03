import React from "react";

const InputText = (props) => {
  const { onSubmit, onChange } = props;
  return (
    <form onSubmit={onSubmit}>
      <input className="todo-text" type="text" onChange={onChange} />
    </form>
  );
};

export default InputText;
