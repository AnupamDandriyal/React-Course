import PropTypes from 'prop-types';
import { useContext } from 'react';
import {MdDelete } from 'react-icons/md'
import { TodoItemContext } from '../store/todo-items-store';

const Todo = ({ msg, date }) => {
  const contextObj = useContext(TodoItemContext)
  const todoItems = contextObj.todoItems;
  const setTodoItems = contextObj.setTodoItems;
  const deleteTodo = (date,msg) => {
    const updateTodo = todoItems.filter(item =>item.name!==msg ||item.date !== date);
    setTodoItems(updateTodo);
  }

  return (
    <div className="row">
          <div className="col-6">
        <p>{ msg}</p>
          </div>
          <div className="col-4">
        <p>{date}</p>
          </div>
          <div className="col-2">
            <button onClick={()=>deleteTodo(date,msg)} type="button" className="btn btn-danger">
            <MdDelete />
            </button>
          </div>
        </div>
  )
}

Todo.propTypes = {
  msg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  todoItems: PropTypes.array.isRequired,
  setTodoItems: PropTypes.func.isRequired
}


export default Todo;


