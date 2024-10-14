import Hero from "./Hero"

import About from "./About"
import Services from "./Services"

import Counter from "./Counter"
import Portfolio from "./Portfolio"
import Testimonials from "./Testimonials"
import Blog from "./Blog"
import Contact from "./Contact"


const Home = () => {
  return (
    <div className="homeContainer">
      <Hero />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact/>
      
    </div>
  )
}

export default Home