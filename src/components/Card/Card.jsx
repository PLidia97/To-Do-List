import React, { useState } from "react";
import "./Card.css";
import Input from "../input/Input";
import Todo from "../Todo/Todo";

const Card = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="card">
      <h1>Get Things Done !</h1>
      <Input
        placeholderText="What is the task"
        buttonText="Add Task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) => (
        <Todo taskText={todo} key={index} />
      ))}
    </div>
  );
};

export default Card;
