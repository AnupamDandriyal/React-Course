import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/assets";


const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  return (
    <>
      <Navbar />
      <div className="flex gap-8 mt-10 flex-col md:flex-row md:items-end">
        <img className="rounded w-48" src={albumData.image} alt="image" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="spotify" />
            <b> Spotify </b>
            &bull; 1,646,735 likes
            &bull; <b>50 Songs </b>
            &bull; About 2 hr 25 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 text-[#a7a7a7]">
        <p><b className="mr-5 ml-2">#</b>Title</p>
        <p className="ml-9">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="clock-icon" />
      </div>
      <hr />
      {
        songsData.map((item, i) => (
          <div key={i} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 text-[#a7a7a7] items-center hover:bg-[#ffffff2b]">
            <p className="text-white">
              <b className="mr-4 text-[#a7a7a7]">{i + 1}</b>
              <img className="inline w-10 mr-5" src={item.image} alt="image" />
              {item.name}
            </p>
            <p>{albumData.name}</p>
            <p>5 days ago</p>
            <p className="m-auto">{item.duration}</p>

          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum