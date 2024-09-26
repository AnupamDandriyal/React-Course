
import './App.css'
import Create from './Components/Create'
import Home from './Components/Home/Home'
import Update from './Components/Update';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/create' element={<Create />}> </Route>
          <Route path='/edit/:id' element={<Update />}> </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
