

const Header = () => {
  return (
    <div className="header mt-5 h-[34vw] m my-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative rounded-[20px] w-full">
      <div className="header-content animate-fadeInOnce absolute flex flex-col items-baseline left-[6vw] text-white gap-[1vw] max-w-[50%] bottom-[18%]">
      <h2 className='text-[max(3.8vw,22px)] leading-[65px] font-semibold'>Order your favourite food here</h2>
      <p>Choose from a diverse meny featuring a delectable array of dishers crafted with the finest chefs using their special ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience.</p>
      <button className="px-5 py-2 border mt-2 text-[max(1vw,13px)] rounded-[50px] bg-white text-[#727272] cursor-pointer ">View Menu</button>
      </div>
      
    </div>
  )
}

export default Header