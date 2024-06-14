import React from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = (props) => {
  return (
    <div className="task">
      <input type="text" placeholder={props.placeholderText} />
      <Button buttonText={props.buttonText} />
    </div>
  );
};

export default Input;
