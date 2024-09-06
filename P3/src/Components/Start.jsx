import styled from 'styled-components'
import { Button } from '../Styles/Button'

const Start = ({ toggle }) => {
  return (
    <Container>
      <img src="/img/Dices.png" alt="Dices" />
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Start

const Container = styled.div`
max-width:1180px;
margin:0 auto;
display:flex;
height:100vh;
align-items: center;

.content{
  display: flex;
  flex-direction: column;
  align-items:flex-end;
}

.content h1{
  font-size: 5rem;
  font-weight:800;
  white-space: nowrap;
}
`

