import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import TodoList from "./components/TodoList";
import User from "./components/User";

function App() {
  return (
    <div className="todo-app">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
