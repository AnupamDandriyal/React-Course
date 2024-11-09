import { assets } from "../assets/assets";
import { useState } from "react";
import { PiHandbagFill } from "react-icons/pi";

import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="h-20  flex items-center justify-between   ">
      <img className="w-[150px] cursor-pointer logo" src={assets.logo} alt="logo" />
      <ul className="navbar-menu flex gap-8 font-semibold text-gray-300 cursor-pointer text-[18px]">
        <li onClick={()=>setMenu('home')} className={menu==='home' ? 'active':''}>home</li>
        <li onClick={()=>setMenu('menu')} className={menu==='menu' ? 'active':''}>menu</li>
        <li onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app' ? 'active':''}>mobile-app</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us' ? 'active':''}>contact us</li>
      </ul>
      <div className="navbar-right flex items-center gap-[40px]">
        <FiSearch className="text-3xl text-gray-500" />
        <div className="navbar-search-icon">
          <div className="relative">
          <PiHandbagFill className="text-3xl text-gray-500 " />
          <div className="dot absolute w-[10px] h-[10px] bg-red-500 rounded-[10px] top-[1px] right-[-2px]"></div>
          </div>
         
        </div>
        <button className="border border-red-500 py-[10px] px-[20px] rounded-3xl cursor-pointer text-[#49557e] text-[16px] font-semibold hover:bg-[#fff4f2] hover:text-red-500 transition-[0.3s]">
          sign-in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
