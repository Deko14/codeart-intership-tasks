import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Todo from "./Todo";
import { getTodos } from "./apiCalls/api";

function TodoList() {
  // const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  if (todos.length === 0) {
    // setIsLoading(true);
    getTodos().then((data) => setTodos(data));
    // setIsLoading(false);
  }

  function removeTodo(id) {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  }

  function completeTodo(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  // if (loading) {
  //   return (
  //     <>
  //       <p>Loading...</p>
  //     </>
  //   );
  // }

  return (
    <>
      <h1>To-Do`s</h1>
      <Dropdown todos={todos} setTodos={setTodos} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </>
  );
}

export default TodoList;
