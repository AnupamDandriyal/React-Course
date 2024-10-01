import { createContext } from "react";

export const TodoItemContext = createContext({
  todoItems: [
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
  ],
  setTodoItems:()=>{},
})