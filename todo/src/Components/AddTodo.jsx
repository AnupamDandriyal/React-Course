import { useRef } from 'react';
import styles from './AddTodo.module.css';
import PropTypes from 'prop-types'
import {MdOutlineNoteAdd } from 'react-icons/md'

const AddTodo = ({ todoItems ,setTodoItems }) => {
  const todoName= useRef();
  const todoDate = useRef();
  const add = () => {
    let newItem;
    
    if (todoName === '' || todoDate === '') {
      alert('Please Provide the Name or Date!');
    }
    else {
      const name =todoName.current.value;
      const date = todoDate.current.value;
      newItem = { name, date };
    const isDuplicate = todoItems.some(item => item.name === newItem.name && item.date === newItem.date);
    if (!isDuplicate) {
      setTodoItems([...todoItems, newItem]);
    }
    else {
      alert('Already Exists');
    }
      todoName.current.value = '';
      todoDate.current.value = ''
    }
    
  }
  return (
    <div className="row">
    <div className="col-6">
        <input ref={todoName} className={styles.todoInput} type="text" placeholder="Enter Todo here" />
    </div>
    <div className="col-4">
        <input ref={todoDate} className={styles.todoInput} type="date" />
    </div>
    <div onClick={()=>add()} className="col-2">
      <button type="button" className="btn btn-success">
      <MdOutlineNoteAdd />
      </button>
    </div>
  </div>
  )
}

AddTodo.propTypes = {
  todoItems: PropTypes.array.isRequired,
  setTodoItems:PropTypes.func.isRequired,
}

export default AddTodo


