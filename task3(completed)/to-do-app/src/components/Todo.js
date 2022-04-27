import React from "react";
import { Link } from "react-router-dom";
import { RiCloseCircleLine, RiToggleLine, RiToggleFill } from "react-icons/ri";

function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.completed ? "todo-row complete" : "todo-row"}
    >
      <Link to={`/user/${todo.userId}`}>
        <div key={todo.id}>{todo.title}</div>
      </Link>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
          name="deleteButton"
        />
        {todo.completed ? (
          <RiToggleLine
            onClick={() => completeTodo(todo.id)}
            className="toggle-icon"
          />
        ) : (
          <RiToggleFill
            onClick={() => completeTodo(todo.id)}
            className="toggle-icon"
          />
        )}
      </div>
    </div>
  ));
}

export default Todo;
