import { Button } from '@mui/material';
import './App.css'
import { useState } from 'react';

function App() {
  const [age, setAge] = useState();
  const [input, setInput] = useState();


  const calcAge = (e) => {
    e.preventDefault();
    if (input === '') {
      alert("Please provide your date of birth!")
    }
    else {
      const curr = new Date();
      const inputAge = new Date(input);
      /* setAge(5)
      console.log(curr.getFullYear());
      console.log(inputAge.getFullYear()); */
      setAge(curr.getFullYear()-inputAge.getFullYear())
    }
  
  }

  const resetVal = () => {
    setAge('');
    setInput('');
  }

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <p>The Age Calculator can determine the age or interval between two dates.
        The calculated image will be displayed in years.
      </p>
      <div className="datafield">
      <div className="left">
        <h2>Date of Birth</h2>
          <input type="date" onChange={(e) => setInput(e.target.value)} value={input} />
        <div className="btns">
          <Button onClick={calcAge} type='submit' variant="contained">Calculated Age</Button>
          <Button onClick={resetVal} variant="contained">Reset</Button>
        </div>
      </div>
      <div className="right">
          <h2>Your Age is</h2>
          <h1>{age}</h1>
      </div>
      </div>
      
      
   </div>
  )
}

export default App
