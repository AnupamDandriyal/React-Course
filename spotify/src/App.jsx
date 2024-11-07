
import './App.css'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { useContext } from 'react'
import { PlayerContext } from './components/context/PlayerContext'

function App() {

const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='bg-black h-screen w-full text-white'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio src={track.file} ref={audioRef} preload='auto'></audio>
    </div>

  )
}

export default App
