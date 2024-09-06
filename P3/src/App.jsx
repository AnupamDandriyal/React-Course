import { useState } from 'react'
import './App.css'
import Start from './Components/Start'
import GamePlay from './Components/GamePlay';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const gamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }
  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <Start toggle={gamePlay}/>
      }
      
    </>
  )
}

export default App
