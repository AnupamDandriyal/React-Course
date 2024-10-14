import "./App.css";
import Header from "./components/common/Header";
import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

