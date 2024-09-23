import { useState } from 'react';
import './App.css';
import { LuRefreshCw } from "react-icons/lu";
import Button from '@mui/material/Button';

function App() {

  const [isRotating,setIsRotating] = useState(false)
  const [count, setCount] = useState(0);
  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  }

  const decrement = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      alert("Counters doesn't accept th negative numbers!!!")
    }
  }

  const handleRefresh = () => {
    setIsRotating(true);
    setTimeout(() => {
      window.location.reload();
      setIsRotating(false)
    },1000)
  }
  return (
    <div className="app">
      <div className="container">
        <div className="right">
          <LuRefreshCw onClick={handleRefresh} cursor='pointer' fontSize='25px'
            className={isRotating ?'rotate' : '' }
          />
        </div>
        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_heading">{count}</h3>
          </div>
        </div>
        <form>
          <div className="button_collection">
            <Button onClick={increment} className='btn_one' variant="contained">+</Button>
            <Button onClick= {decrement} className='btn_two' variant="contained">-</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
