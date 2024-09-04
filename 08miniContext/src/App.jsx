import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Profile />
    </>
  )
}

export default App
