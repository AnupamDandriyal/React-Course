import styled from 'styled-components'

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
  const diceNo = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError('');
  }
 
  return (
      <Select>
       <p className='error'>{error}</p>
        <div className="dices">
        {
            diceNo.map((value,i)=>(
              <Box
                isSelected = {value==selectedNumber}
                onClick={()=> numberSelectorHandler(value)}
                key={i}>{value}</Box>
            ))
        }
        </div>
      <p>Select Number</p>
    </Select>
    
    
  )
}

export default NumberSelector

const Box = styled.div`
  width:72px;
  height:72px;
  border:2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:3px;
  font-size: 24px;
  font-weight:700;
  background-color: ${(props) => props.isSelected ? 'black' : 'white'} ;
  color: ${(props)=> props.isSelected ? 'white' : 'black'}
`
const Select = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p{
    font-weight: 700;
    font-size:24px
  }
  .error{
    color:orangered
  }
  div{
    display:flex;
    flex-direction: column;
  }
  .dices{
    display: flex;
    flex-direction: row;
    gap:24px
  }
`