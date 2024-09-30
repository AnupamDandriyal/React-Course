
import { useState } from 'react';
import './App.css'
import Button from './Components/Button'
import Display from './Components/Display'

function App() {

  const btns = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  const [value, setValue] = useState('');


  return (
    <div className="headcontainer">
      <p>Calculator</p>
      <Display value={value} />
      <Button btns={btns} setValue={setValue} value={value} />
    </div>
  )
}

export default App
