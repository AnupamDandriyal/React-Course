import "./App.css";

import {  Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";


function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials/>} /> 
          <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
