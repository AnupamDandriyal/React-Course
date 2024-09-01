/* import { useState } from 'react' */

import './App.css'
import Card from './card'

function App() {
 

  return (
    <>
      <h1 className='text-5xl bg-blue-400 p-5 rounded-md'>Tailwind Props</h1>
      <Card userName="Harpreet Singh" Designation="SDE, California" />
      <Card userName="Manav Talreja" Designation="Data Engineer, Texas" />
      <Card userName = "Sanvi Hegde" Designation = "Data Analyst, Sweden" />
    </>
  )
}

export default App
