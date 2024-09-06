import styled from 'styled-components'

const Rules = () => {
  return (
    <Main>
      <h2>How to play dice game</h2>
      <p>Select any number.</p>
      <p>Click on dice image.</p>
      <p>After clicking on dice if selected number is equal to dice number, you will get points as dice.</p>
      <p>If you get wrong guess then 2 points will be deducted.</p>
    </Main>
  )
}

export default Rules;

const Main = styled.div`
  background-color: #fbe3e3;
  padding:20px;
  margin-top:15px;
  border-radius: 5px;
  h2{
    font-size: 24px;
    margin-bottom: 24px;
  }
`