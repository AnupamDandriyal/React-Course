import Todo from "./Todo";
import PropTypes from 'prop-types';

const TodoItems = ({ todoItems,setTodoItems }) => {
  return (
    <>
      {
        todoItems.map((item) => (
          <Todo key={item.name} msg={item.name} date={item.date} todoItems={todoItems} setTodoItems={setTodoItems}/>
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