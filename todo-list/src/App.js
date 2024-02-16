import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoPage from "./component/TodoPage";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return <TodoPage todos={todos}/>;
};

export default App;
