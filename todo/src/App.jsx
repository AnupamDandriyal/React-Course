import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Name from "./Components/Name";
import TodoItems from "./Components/TodoItems";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      name: 'Buy Milk',
      date: '4/10/2024'
    },
    {
      name: 'Go to College',
      date: '4/10/2024'
    },
    {
      name: 'Do PO PYQs',
      date: '1/10/2024'
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
