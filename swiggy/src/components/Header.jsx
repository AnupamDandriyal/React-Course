import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";

const Header = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const handleSideToggle = () => {
    setSideToggle(!sideToggle);
    console.log(sideToggle);
  }

  const links = [
    { name: 'Search', icon: <FaSearch /> },
    { name: 'Offers', icon: <BiSolidOffer />,supscript:'New'},
    { name: 'Help', icon: <IoMdHelpCircleOutline/> },
    { name: 'Sign In', icon: <FaRegUserCircle /> },
    { name: 'Cart', icon: <MdOutlineShoppingCart />,supscript:(4) }]
  return (
    <>
      <div className="black-overlay w-full h-full fixed duration-500"  style={{ opacity: sideToggle ? 1 : 0, visibility: sideToggle ? 'visible' : 'hidden' }} onClick={handleSideToggle}></div>
      <div className=" p-[25px] flex-col w-[450px] bg-white h-full absolute duration-[600ms]" style={{ left: sideToggle ? '0%' : '-100%' }}>
        <IoClose onClick={handleSideToggle} className=" mb-[50px] cursor-pointer hover:text-orange-400 text-[25px] text-gray-400 " />

        <input type="text" placeholder="Search for area,street name.." className=" mb-[25px] shadow-md w-[100%] h-[45px] pl-[10px] rounded-[5px]" />


        <button className=" w-full gap-[10px] items-center flex text-left p-[15px] border shadow-lg rounded-[5px] mb-[15px]">
        <MdGpsFixed/>
          <div className="flex-col">
            <span className="font-bold"> Get current location</span>
            <p className="text-gray-300">Using GPS</p>
          </div>
        </button>
        

        <button className="w-full gap-[10px] items-start flex text-left p-[15px] border shadow-lg rounded-[5px]">
        <FaClockRotateLeft/>
          <div className="flex-col">
            <h4 className="text-gray-300">RECENT SEARCHES</h4>
            <div className="m-[10px]"><span className="font-bold"> Shalini Food Corner</span>
              <p className="text-gray-300">Ranipur More, Devpura, Haridwar, India</p></div>
            <hr />
            <div className="m-[10px]"><span className="font-bold">Food Truck</span>
              <p className="text-gray-300">Arya Nagar Chowk, Jwalapur, Haridwar, India</p></div>
            
          </div>
         </button>
      </div>
    <header className="shadow-xl">
     
      <div className="w-[85%] my-0 mx-auto flex justify-between items-center ">
        <div id="logo" className="flex justify-center gap-[25px]">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9tbetGkd0-WiWKXHyMHq2D4pGBAKxTvY2g&s" alt="logo" className="w-[80px] cursor-pointer" />
          <div id="address" className="flex items-center text-[18px]">
            <span className="font-bold underline cursor-pointer hover:text-orange-400" >Brahampuri</span>
            <p>&nbsp;Haridwar, Uttarakhand,India</p>
            <FaChevronDown onClick={handleSideToggle} className="text-orange-400 cursor-pointer ml-[5px]"/>
          </div>
        </div>

          <div id="navlinks" className="flex gap-[45px] text-gray-400 font-semibold text-[18px] items-center ">
            {links.map((link, i) => (
              <a key={i} className="flex gap-[8px] items-center hover:text-orange-400" href="#"><div className="text-[22px]" >{link.icon}</div>{link.name}<sup className="text-[10px] text-orange-400 font-bold">{link.supscript}</sup></a>
            ))}
          </div>
      </div>
    </header>
    </>
    
  )
}

export default Header