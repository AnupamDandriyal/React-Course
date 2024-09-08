import styled from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';
import SearchResult from './Components/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000"
const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedBtn,setSelectedBtn] = useState("all")
  
  useEffect(() => {
    const FoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json)
        setLoading(false);
      }
      catch (error) {
        setError('Unable to fetch data');
      }
    }
    FoodData();
  }, [])

  
  const searchFood = (e) => {
    const searchValue = e.target.value;
    if (searchValue == '') {
      setFilteredData(null)
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter)
};

  
const filteredFood = (type) => {
  if (type == 'all') {
    setFilteredData(data);
    setSelectedBtn('all');
    return
  }
  const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(type.toLowerCase())
  );

  setFilteredData(filter)
  setSelectedBtn(type);

  
}
  if (error) return <div>{error}</div>
  if(loading) return <div>loading....</div>


  const filterBtns = [
    {
      name: "All",
      type:"all"
    },
    {
      name: "Breakfast",
      type:"breakfast"
    },
    {
      name: "Lunch",
      type:"lunch"
    },
    {
      name: "Dinner",
      type:"dinner"
    }
  ]
  return (
    <>
      <Container>
          <TopContainer>
            <div className="logo">
              <img src="/Foody Zone.svg" alt="logo" />
            </div>
            <div className="search">
              <input onChange={searchFood} type="text" placeholder='Search Food...' />
            </div>
          </TopContainer>
        <FilterContainer>
          {
            filterBtns.map((value) => (
              <Button key={value.name} onClick={() => filteredFood(value.type)}>{value.name}</Button>
            ))
          }
          </FilterContainer>
        </Container>
      <SearchResult data={filteredData} />
    </>
    
  )
  
};

export default App;


export const Container = styled.div`
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
  .search{
    input{
      background-color: transparent;
      color:white;
      border:2px solid red;
      outline: none;
      padding:8px;
      min-width:150px;
      border-radius: 5px;
      &::placeholder{
        color:white;
      }
    }
  }
 
  


`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap:12px;
  margin-bottom: 40px;
`

export const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border:none;
  outline: none;
  cursor: pointer;
  color:white;
  &:hover{
    background-color: #f22f2f;
  }
`

