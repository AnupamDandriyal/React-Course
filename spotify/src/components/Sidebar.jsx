import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full flex-col gap-2 p-2 hidden lg:flex ">
      <div className=" flex flex-col gap-4 justify-around bg-[#121212] rounded p-3">
        <div className=' pl-4 flex items-center cursor-pointer' >
          <img className='w-[55px]' src="/Spotify.svg" alt="" />
          <p className='font-bold text-green-500 text-[19px] ml-[-5px]'>Spotify</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6' src={assets.home_icon} alt="home" />
          <p className='font-bold'>Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className='w-6' src={assets.search_icon} alt="search" />
          <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='h-[85%] flex flex-col gap-4 bg-[#121212] rounded p-4'>
        <div className='flex justify-between'>
          <div className='flex gap-2 items-center'>
          <img className='w-7' src={assets.stack_icon} alt="stack" />
          <p className='font-semibold'>Your Library</p>
          </div>

          <div className='flex gap-3 items-center'>
            <img className='w-4' src={assets.arrow_icon} alt="" />
            <img className='w-4' src={assets.plus_icon} alt="" />
          </div>   
        </div>
        <div className='flex flex-col bg-[#242424] rounded font-semibold items-start justify-start p-4'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>it&apos;s easy we will help you </p>
          <button className='px-4 py-1.5 rounded-full bg-white font-bold text-black text-[15px] mt-4'>Create Playlist</button>
        </div>

        <div className='flex flex-col bg-[#242424] rounded font-semibold items-start justify-start p-4'>
          <h1>Lets&apos;s find some podcasts to follow</h1>
          <p className='font-light'>We&apos;ll keep you update on new episodes!</p>
          <button className='font-bold px-4 py-1.5 rounded-full bg-white text-black text-[15px] mt-4'>Browse Podcast</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar