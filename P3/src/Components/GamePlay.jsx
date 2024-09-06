import styled from 'styled-components'
import TotalScore from "./TotalScore"
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../Styles/Button'
import Rules from './Rules'
const GamePlay = () => {
  const [score,setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState('');
  const [showRules,setShowRules] = useState(false)

  const resetScore = () => {
    setScore(0);
  }

  const setDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    let rno = Math.floor(Math.random() * 6 + 1)
    setCurrentDice(rno);
    if (selectedNumber == rno) {
      setScore(prev => prev + rno)
    }
    else {
      setScore(prev => prev-2)
    }
    setSelectedNumber(undefined)
  }
  return (
    <Container>
       <Top>
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} /> 
      </Top>
      <RollDice currentDice={currentDice} setDice={setDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={()=>
          setShowRules((prev)=>!prev)}>{showRules ? 'Hide' : 'Show'} Rules</Button>
      </div>
      {showRules && <Rules />}
    </Container>
   
  )
}

export default GamePlay

const Container = styled.div`
  max-width: 1280px;
  margin:0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:15px;
  }
`

const Top = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  margin:0 auto;
  padding-top:30px;
  align-items: center;


`