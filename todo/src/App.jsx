import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Name from "./Components/Name";
import TodoItems from "./Components/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: 'Buy Milk',
      date: '2024-10-04'
    },
    {
      name: 'Go to College',
      date: '2024-10-05'
    },
    {
      name: 'Do PO PYQs',
      date: '2024-10-01'
    },
  ]);
  return (
    <center className="container">
      <Name/>
      <div className="container text-center">
        <AddTodo todoItems={todoItems} setTodoItems={setTodoItems} />
        <TodoItems todoItems={todoItems} setTodoItems={setTodoItems} />      
      </div>
    </center>
  );
}

export default App;
