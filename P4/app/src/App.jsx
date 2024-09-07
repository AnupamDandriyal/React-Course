import styled from 'styled-components'
const App = () => {
  return <MainContainer>
    <Top>
      <div className="logo">
        <img src="/Foody Zone.svg" alt="logo" />
      </div>
      <div className="search">
        <input type="text" placeholder='Search Food...' />
      </div>
    </Top>
  </MainContainer>;
};

export default App;


const MainContainer = styled.div`
background-color: #323334;
`
const Top = styled.section``