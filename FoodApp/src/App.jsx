import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeorder/PlaceOrder";
import Footer from "./components/Footer";
import LoginPopUp from "./components/LoginPopUp";
import { useState } from "react";

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <div className="mt-24">
      {showLogin? <LoginPopUp/> : <></>}
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
