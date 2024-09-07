import styled from 'styled-components'
import { useState } from 'react';

const BASE_URL = "http://localhost:9000/"
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(null)
  const FoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    catch(error) {
      setError('Unable to fetch data');
    }
  
  }

/*   FoodData(); */
  return <Container>
    <TopContainer>
      <div className="logo">
        <img src="/Foody Zone.svg" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder='Search Food...' />
      </div>
    </TopContainer>
    <FilterContainer>
      <Button>All</Button>
      <Button>BreakFast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
    <FoodCardContainer>
      <FoodCards>

      </FoodCards>
    </FoodCardContainer>
  </Container>;
};

export default App;


const Container = styled.div`
  background-color: #323334;
  max-width: 100vw;
  margin:0 auto;
`
const TopContainer = styled.section`
  min-height:140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 55px;

  input{
    background-color: transparent;
    color:white;
    border:2px solid red;
    outline: none;
    padding:8px;
    min-width:150px;
    border-radius: 5px;
  }
`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap:12px;
  margin-bottom: 40px;
`

const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border:none;
  outline: none;
  cursor: pointer;
  color:white
`

const FoodCardContainer = styled.section`
  background-image:url('/bg.png');
  width:100%;
  height:calc(100vh - 210px);
  background-size:cover;
  background-repeat:no-repeat`

const FoodCards = styled.div``