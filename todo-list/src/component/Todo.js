import React from "react";
import "./Todo.css";

const Todo = ({ todo }) => {
  return (
    <div className="todo-container">
      <p className="todo-id">ID: {todo.id}</p>
      <p className="todo-title">Title: {todo.title}</p>
    </div>
  );
};

export default Todo;
