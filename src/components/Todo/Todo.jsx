import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
  return (
    <div className="todo">
      <p>{props.taskText}</p>
      <div className="icons">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => props.editTask(props.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => props.deleteTask(props.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
