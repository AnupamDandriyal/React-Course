import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import Name from "./Components/Name";
import TodoItems from "./Components/TodoItems";
import { TodoItemContext } from "./store/todo-items-store";

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
    <TodoItemContext.Provider value={{ todoItems:todoItems,setTodoItems:setTodoItems }}>
      <center className="container">
        <Name/>
        <div className="container text-center">
          <div className="addTodo">
            <AddTodo />
          </div>
          <TodoItems />      
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
