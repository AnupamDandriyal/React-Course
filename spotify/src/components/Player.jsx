import { useContext } from "react"
import { assets } from "../assets/assets"
import { PlayerContext } from "./context/PlayerContext"

const Player = () => {
  const {seekBarRef,seekBgRef,playStatus,play,pause,track,time,previous,next,seekSong} = useContext(PlayerContext)
  return (
    <div className=" flex h-[10%] justify-between items-center px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="song" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>


      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="controls" />
          <img onClick={previous} className="w-4 cursor-pointer" src={assets.prev_icon} alt="controls" />
          {
            playStatus ? 
            <img onClick={pause} className="w-4 cursor-pointer" src={assets.pause_icon} alt="controls" />
            :      
          <img onClick={play} className="w-4 cursor-pointer" src={assets.play_icon} alt="controls" />
              
          }
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="controls" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="controls" />
        </div>
        <div className="flex gap-5 items-center">
          <p>{time.currenTime.minute}:{time.currenTime.second}</p>
          <div ref={seekBgRef} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr ref={seekBarRef} className="bg-green-500 h-1 w-0 rounded-full border-none"/>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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