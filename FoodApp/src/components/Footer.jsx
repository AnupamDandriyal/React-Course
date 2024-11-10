import { assets } from "../assets/assets"


const Footer = () => {
  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px]">
      <div className="footer-content mb-5 w-full grid grid-cols-custom-2-1-1 gap-[80px]">
      <div className="left flex flex-col items-start gap-[20px] ">
        <img className="mt-[-10px]" src={assets.logo} alt="logo" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ipsam esse ea explicabo ipsum iste doloribus. Officia numquam perspiciatis nisi hic nesciunt libero ipsum id.</p>
        <div className="social-icons flex gap-3">
          <img className="w-7 h-7 cursor-pointer hover:bg-red-500 rounded-full hover:scale-125" src={assets.facebook_icon} alt="social-media" />
          <img className="w-7 h-7 cursor-pointer hover:scale-125 hover:bg-red-500 rounded-full" src={assets.twitter_icon} alt="social-media" />
          <img className="w-7 h-7 cursor-pointer hover:scale-125 hover:bg-red-500 rounded-full" src={assets.linkedin_icon} alt="social-media" />
        </div>
      </div>

      <div className="center flex flex-col items-start gap-[20px]">
        <h2 className="font-semibold text-xl text-white">COMPANY</h2>
        <ul className="">
          <li className="block mb-10px cursor-pointer hover:text-red-500 hover:scale-105">Home</li>
          <li className="block mb-10px cursor-pointer hover:text-red-500 hover:scale-105">About Us</li>
          <li className="block mb-10px cursor-pointer hover:text-red-500 hover:scale-105">Delivery</li>
          <li className="block mb-10px cursor-pointer hover:text-red-500 hover:scale-105">Privacy Policy</li>
        </ul>
      </div>
      <div className="right flex flex-col items-start gap-[20px]">
        <h2 className="font-semibold text-xl text-white">GET IN TOUCH</h2>
        <ul>
          <li className="cursor-pointer hover:text-red-500">+12 456-753-8235</li>
          <li className="cursor-pointer hover:text-red-500">reachus@tomato@delgo.in</li>
        </ul>
      </div>
      </div>
      <hr className=" w-full"/>
      <p className="copyright font-extralight text-sm m-[-15px]">
        Copyright 2024 &copy; Tomato.com - All Rights Reserved.
      </p>
    </div>
    
  )
}

export default Footer