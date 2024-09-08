import './App.css'
import Navbar from './Components/Navbar'
import { FiSearch } from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'

function App() {
  

  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-2'>
      <div className='flex relative flex-grow items-center'>
      <FiSearch className='text-3xl text-white absolute ml-1 cursor-pointer'/>
        <input type="text"
          className='border bg-transparent rounded-md 
          flex-grow h-10 text-white pl-9  pb-2' />
        
      </div>
      
        <AiFillPlusCircle className='text-white text-5xl cursor-pointer' />
    
      </div>
      
    </div>
  )
}

export default App
