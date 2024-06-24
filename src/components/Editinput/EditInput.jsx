import { useState } from "react";
import React from "react";
import "./EditInput.css";
import Button from "../Button/Button";

const EditInput = (props) => {
  const [inputValue, setInputValue] = useState(props.todoDesc);
  const handleImputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleEditTask = () => {
    props.editTodo(inputValue, props.id);
  };

  return (
    <div className="task">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleImputValue}
      />
      <Button buttonText={props.buttonText} clickFunction={handleEditTask} />
    </div>
  );
};

export default EditInput;
