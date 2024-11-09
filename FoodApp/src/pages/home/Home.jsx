import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu"
import Header from "../../components/Header"
import FoodDisplay from "../../components/FoodDisplay"


const Home = () => {
  const [category,setCategory] = useState('All')
  return (
    <>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  )
}

export default Home