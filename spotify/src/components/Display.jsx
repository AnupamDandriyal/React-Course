import { Routes,Route } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"

const Display = () => {
  return (
    <div className=" m-2 px-6 pt-4 rounded w-full bg-[#121212] overflow-auto lg:w[75%] lg:ml-0">
      <Routes>
        <Route path='/' element={<DisplayHome />}></Route>
        <Route path='/album/:id' element={<DisplayAlbum/>}></Route>
      </Routes>  
    </div>
  )
}

export default Display