import Navbar from "./Navbar"
import { albumsData } from "../assets/assets"
import AlbumItems from "./AlbumItems";
import { songsData } from "../assets/assets";
import SongItems from "./SongItems";


const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="font-bold text-2xl my-4">Featured Charts</h1>
        <div className=" flex overflow-auto">
        {albumsData.map((item, i) => (
          <AlbumItems key={i} name={item.name} image = {item.image} desc = {item.desc} id = {item.id}  />
        ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-2xl my-4">Today&apos;s Biggest Hits</h1>
        <div className=" flex overflow-auto">
        {songsData.map((item, i) => (
          <SongItems key={i} name={item.name} image = {item.image} desc = {item.desc} id = {item.id}  />
        ))}
        </div>
      </div>
      
    </>
  )
}

export default DisplayHome