import { useRef } from "react";
import { useDispatch } from "react-redux"


const Controls = () => {
  const inputVal = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: { num: inputVal.current.value } });
    inputVal.current.value = '';
  }

  const handleSub = () => {
    dispatch({ type: 'SUB', payload: { num: inputVal.current.value } });
    inputVal.current.value = '';
  }

  const privacyToggle = () => {
    dispatch({ type: 'PRIVATE' });
  }

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={handleDecrement} type="button" className="btn btn-primary">-1</button>
        <button onClick={handleIncrement} type="button" className="btn btn-success">+1</button>
        <button onClick={privacyToggle}  type="button" className="btn btn-danger">Privacy Toggle</button>
      </div>
      <br />
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input ref={inputVal} type="text" placeholder="Enter the value..." />
        <button onClick={handleAdd} type="button" className="btn btn-secondary">Add</button>
        <button onClick= {handleSub} type="button" className="btn btn-secondary">Subtract</button>
      </div>

    </>
  )
}

export default Controls