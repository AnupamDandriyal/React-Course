import { useState } from 'react';
import styles from './AddTodo.module.css';
import PropTypes from  'prop-types'

const AddTodo = ({ todoItems ,setTodoItems }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const add = () => {
    let newItem = { name, date };
    console.log(newItem);
    const isDuplicate = todoItems.some(item => item.name === newItem.name && item.date === newItem.date);
    if (!isDuplicate) {
      setTodoItems([...todoItems, newItem]);
    }
    else {
      alert('Already Exists');
    }
    setName('');
    setDate('');
  }
  return (
    <div className="row">
    <div className="col-6">
      <input onChange={(e)=>setName(e.target.value)} className={styles.todoInput} type="text" placeholder="Enter Todo here" value={name} />
    </div>
    <div className="col-4">
        <input onChange={(e)=>setDate(e.target.value)} className={styles.todoInput} type="date" value={date} />
    </div>
    <div onClick={()=>add()} className="col-2">
      <button type="button" className="btn btn-success">
        Add
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


