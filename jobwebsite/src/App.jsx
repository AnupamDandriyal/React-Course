
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Navbar/Pricing';
import Solutions from './Components/Navbar/Solutions'
import Products from './Components/Navbar/Products'
import Login from './Components/Navbar/Login';
import Started from './Components/Navbar/Started';



import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/products" element={ <Products />}></Route>
          <Route path="/solutions" element={<Solutions />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/get-started" element={<Started />}></Route> 
        </Routes>
    </Router>
    </>
 
  )
}

export default App
