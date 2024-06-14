import React from "react";
import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="todo">
      <p>{props.taskText}</p>
      <div className="icons"></div>
    </div>
  );
};

export default Todo;
