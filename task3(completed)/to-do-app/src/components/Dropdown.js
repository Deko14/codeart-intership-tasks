import { getTodos } from "./apiCalls/api";

function Dropdown(props) {
  function allTodos() {
    getTodos().then((data) => props.setTodos(data));
  }

  function finishedTodos() {
    const finished = [];
    props.todos.forEach((todo) => {
      if (todo.completed === true) finished.push(todo);
    });
    props.setTodos(finished);
  }

  function unfinishedTodos() {
    const unfinished = [];
    props.todos.forEach((todo) => {
      if (todo.completed === false) unfinished.push(todo);
    });
    props.setTodos(unfinished);
  }

  return (
    <div className="dropdown">
      <button className="todo-sort-button">Sort</button>
      <div className="dropdown-content">
        <button onClick={allTodos}>All</button>
        <button onClick={finishedTodos}>Finished</button>
        <button onClick={unfinishedTodos}>Unfinished</button>
      </div>
    </div>
  );
}

export default Dropdown;
