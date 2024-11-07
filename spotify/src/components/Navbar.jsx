import { assets } from "../assets/assets"


const Navbar = () => {
  return (
    <>
       <div className="w-full flex justify-between font-semibold items-center">
      <div className="flex items-center gap-2">
        <img className="w-8 cursor-pointer rounded-2xl bg-black p-2" src={assets.arrow_left} alt="arrows" />

        <img className="w-8 cursor-pointer rounded-2xl bg-black p-2" src={assets.arrow_right} alt="arrows" />
      </div>

      <div className="flex items-center gap-4">
        <p className="bg-white text-black font-bold cursor-pointer px-4 py-1 rounded-2xl hidden md:block">Explore Premium</p>
        <p className="bg-white text-black font-bold cursor-pointer px-4 py-1 rounded-2xl hidden md:block">Install App</p>
        <p className="bg-yellow-600 text-white w-8 h-8 font-bold  rounded-2xl flex items-center justify-center">A</p>
      </div>
      </div>  
      <div className="flex items-center gap-3 mt-4">
        <div className="bg-white cursor-pointer text-black px-3 font-semibold py-1 rounded-2xl">All</div>
        <div className="font-semibold bg-slate-950 px-3 py-1 rounded-2xl cursor-pointer">Music</div>
        <div className="font-semibold cursor-pointer bg-slate-950 px-3 py-1 rounded-2xl ">Podcast</div>

      </div>
    </>
   
  )
}

export default Navbar