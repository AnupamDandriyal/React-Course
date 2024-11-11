import { assets } from "../assets/assets";
import { useState } from "react";
import { PiHandbagFill } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import '../index.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="h-20 flex items-center justify-between w-[80%] m-auto">
      <img className="w-[150px] cursor-pointer logo" src={assets.logo} alt="logo" />
      <ul className="navbar-menu flex gap-8 font-semibold text-gray-300 cursor-pointer text-[18px]">
        <Link to={'/'} onClick={()=>setMenu('home')} className={menu==='home' ? 'active':''}>home</Link>
        <a href="#menu" onClick={()=>setMenu('menu')} className={menu==='menu' ? 'active':''}>menu</a>
        <a href='#app' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app' ? 'active':''}>mobile-app</a>
        <a href="#footer" onClick={()=>setMenu('contact-us')} className={menu==='contact-us' ? 'active':''}>contact us</a>
      </ul>
      <div className="navbar-right flex items-center gap-[40px]">
        <FiSearch className=" img text-3xl text-gray-500" />
        <div className="navbar-search-icon">
          <div className="relative">
          <PiHandbagFill className="img text-3xl text-gray-500 " />
          <div className="dot absolute w-[10px] h-[10px] bg-red-500 rounded-[10px] top-[1px] right-[-2px]"></div>
          </div>
         
        </div>
          <button onClick={()=>setShowLogin(true)} className="border border-red-500 py-[10px] px-[20px] rounded-3xl cursor-pointer text-[#49557e] text-[16px] font-semibold hover:bg-[#fff4f2] hover:text-red-500 transition-[0.3s]">sign-in
        </button>
      </div>
      </div>
     
    </div>
  );
};

Navbar.proptypes = {
  setShowLogin:PropTypes.func.isRequired,
}
export default Navbar;
