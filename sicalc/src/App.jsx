
import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState('');
  const [time, setTime] = useState('');
  const [rate, setRate] = useState('');
  
  const calcSi = (e) => {
    e.preventDefault();
    if (amount === '' || time === '' || rate === '') {
      alert("Please provide the data!!")
    }
    else {
      let SI = amount * rate * time * .01;
      setValue(SI.toFixed(2));
    }
  
  }

  const resetValues = (e) => {
    e.preventDefault();
    setValue(0);
    setAmount('');
    setRate('');
    setTime('');
  }

  return (
    <div className="container">
      <h1>Simple Interest Calculator </h1>
      <p>Calculate your Simple Interest Easily</p>
      <div className="result">
        <h3 className="value">₹ {value} </h3>
        <p>Total Simple Interest</p>
      </div>
      <form>
        <div className="entry">
          <label htmlFor="principal">Principal Amount</label>
          <input onChange={(e)=>setAmount(e.target.value)} type="number" placeholder='₹ Princicpal amount' value={amount} />
        </div>

        <div className="entry">
          <label htmlFor="interest">Rate</label>
          <input onChange={(e)=>setRate(e.target.value)}  type="number" placeholder='Rate of interest (p.a) %' value={rate}/>
        </div>

        <div className="entry">
          <label htmlFor="time">Period</label>
          <input onChange={(e)=>setTime(e.target.value)}  type="number" placeholder='Time period (yrs)' value={time}/>
        </div>

        <div className="btns">
          <button onClick={calcSi} type='submit' className='dark'>Calculate</button>
          <button onClick={resetValues}>Reset</button>
        </div>

      </form>
   </div>
  )
}

export default App
