import { useParams } from "react-router-dom"
import Navbar from "./Navbar"


const DisplayAlbum = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
    </>
  )
}

export default DisplayAlbum