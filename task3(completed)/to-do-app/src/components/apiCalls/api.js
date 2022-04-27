export const getTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => {
      return response.json();
    }
  );
};

// useEffect(() => {
//     // setIsLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((data) => {
//         const todos = [...data];
//         props.setTodos(todos);
//       });
//   }, []);
