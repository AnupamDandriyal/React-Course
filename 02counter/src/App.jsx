import { useState } from 'react'

import './App.css'

function App() {


  const [counter, setCounter] = useState(15);
  /*  let counter = 20; */
  const incVal = () => {
    setCounter(counter + 1);
  }

  const decVal = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>React Course</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incVal}>Add Value</button> {''}
      <button onClick={decVal}>Remove Value</button>
      <p>Footer: {counter}</p>
    
    </>
  )
}

export default App
