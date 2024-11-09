import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"


const Home = () => {
  const [category,setCategory] = useState('All')
  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </>
  )
}

export default Home