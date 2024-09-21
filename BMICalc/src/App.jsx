import { useState } from 'react'

import './App.css'

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState(''); 
  const [bmi, setBMI] = useState();
  const [result, setResult] = useState(null);

  const reload = () => {
    window.location.reload()
  }

  let calcBMI = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0 || weight == '' || height == '') {
      alert('Please enter the valid data!')
    }
    else {
      let bmi = ((weight) / (height * height)) * 703
      setBMI(`Your BMI is : ${bmi.toFixed(2)}`);

      if (bmi < 25) {
        setResult('You are: underweight');
      }
      else if (bmi >= 25 && bmi < 30) {
        setResult('You are: healthy')
      }
      else {
        setResult('You are: over-weight')
      }
    }
    
  }

  return (
    <div className='container'>
      <h1>BMI Calculator</h1>
      <form onSubmit={calcBMI}>
        <div>
          <label htmlFor="weight">Weight (lbs): </label>
          <input type="text" name='weight' placeholder='Weight in pounds' value={weight}
            onChange={(e)=>setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height (in): </label>
          <input type="text" name='height' placeholder='Height in inches' value={height}
             onChange={(e)=>setHeight(e.target.value)}
          />
        </div>
        <div className='btns'>
          <button className='submit' type='submit'>Submit</button>
          <button type='submit' onClick={reload}>ReLoad</button>
        </div>
        
        <div>
          <h3>{bmi} </h3>
          <p>{result}</p>
        </div>
      </form>
    </div>
  )
}

export default App
