import { useContext } from "react";
import Todo from "./Todo";
import PropTypes from 'prop-types';
import { TodoItemContext } from "../store/todo-items-store";

const TodoItems = () => {
  const contextObj = useContext(TodoItemContext)
  const todoItems = contextObj.todoItems;
  const setTodoItems = contextObj.setTodoItems;
  return (
    <>
      {
        todoItems.map((item,i) => (
          <Todo key={i} msg={item.name} date={item.date} setTodoItems={setTodoItems}/>
        ))
      }

    </>
  )
};



TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf( // Validating that itemList is an array of objects
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Each item should have a required 'name' (string)
      date: PropTypes.string.isRequired, // Each item should have a required 'date' (string)
    })
  ).isRequired,
  setTodoItems : PropTypes.func.isRequired,
};


export default TodoItems