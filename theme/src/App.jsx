
import Logo from './assets/react.svg'
import './App.css'
import Darkmode from './Components/Darkmode/Darkmode'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Darkmode/>
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
