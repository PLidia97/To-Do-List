import React from "react";
import "./Card.css";
import Input from "../input/Input";
import Todo from "../Todo/Todo";

const Card = () => {
  return (
    <div className="card">
      <h1>Get Things Done !</h1>
      <Input placeholderText="What is the task" buttonText="Add Task" />
      {/* <Input placeholderText="Edit your task" buttonText="Edit Task" />
      <Input placeholderText="View your task" buttonText="View Task" /> */}
      <Todo taskText="Task 1" />
      <Todo taskText="Task 2" />
      <Todo taskText="Task 3" />
    </div>
  );
};

export default Card;
