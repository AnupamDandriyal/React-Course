import { useState } from 'react'

import './App.css'

function App() {

  let [color, setColor] = useState('olive');
  /* function changeColor(color) {
    setColor(color);
 } */
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>  
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='text-red-500 outline-none px-4 py-1 rounded-full shadow-lg m-1' onClick={() => {
            setColor('red')
          }}>Red</button>
          <button className='text-yellow-500 outline-none px-4 py-1 rounded-full shadow-lg m-1'  onClick={() => {
            setColor('yellow')
          }}>Yellow</button>
          <button className='text-green-500 outline-none px-4 py-1 rounded-full shadow-lg m-1'  onClick={() => {
            setColor('green')
          }}>Green</button>
        </div>
      </div>
   </div>
  )
}

export default App
