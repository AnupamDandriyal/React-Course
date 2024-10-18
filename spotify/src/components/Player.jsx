import { songsData } from "../assets/assets"
import { assets } from "../assets/assets"

const Player = () => {
  return (
    <div className=" flex h-[10%] justify-between items-center px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="song" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>


      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="controls" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="controls" />
          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="controls" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="controls" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="controls" />
        </div>
        <div className="flex gap-5 items-center">
          <p>00:35</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr  className="bg-green-500 h-1 w-[10%] rounded-full border-none"/>
          </div>
          <p>03:23</p>
        </div>
      </div>


      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="controls" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="controls" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="controls" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="controls" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="controls" />
        <div className="w-20 bg-slate-50 h-1 rounded" ></div>
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="controls" />

      </div>
    </div>
  )
}

export default Player