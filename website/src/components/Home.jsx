import Hero from "./Hero"
import Header from './Header'
import About from "./About"
import Services from "./Services"

import Counter from "./Counter"
import Portfolio from "./Portfolio"


const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio/>
   
      
    </div>
  )
}

export default Home