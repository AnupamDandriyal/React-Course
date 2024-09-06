import styled from 'styled-components'


const RollDice = ({currentDice,setDice}) => {
  
 
  return (
    <DiceContainer>
      <div className="dice"
        onClick = {setDice}
      >
      <img src={`/img/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
 /*  margin-top:15px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    font-size: 21px;
    font-weight: 550;
  }

  .dice{
    cursor: pointer;
  }
`