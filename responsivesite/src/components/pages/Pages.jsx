import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";
import About from "./About";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages;
