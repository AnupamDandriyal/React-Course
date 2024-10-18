
import './App.css'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <div className='bg-black h-screen w-full text-white'>
      <div className='h-[90%] flex'>
        <Sidebar/>
      </div>
      <Player/>
    </div>

  )
}

export default App
