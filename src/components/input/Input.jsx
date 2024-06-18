import { useState } from "react";
import React from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleImputValue = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleAddtask = () => {
    props.addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="task">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleImputValue}
      />
      <Button buttonText={props.buttonText} clickFunction={handleAddtask} />
    </div>
  );
};

export default Input;
