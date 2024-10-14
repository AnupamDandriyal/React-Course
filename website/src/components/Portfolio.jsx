import {useState} from 'react'
import { portfolio } from "./data/dummydata"
import { Visibility } from "@mui/icons-material"

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))];

const Portfolio = () => {
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  const filterItems = (category) => {
    if (category === 'all') {
      setList(portfolio);
    }
    else {
      const newItems = portfolio.filter((item) => item.category === category);
      setList(newItems)
    }
   

  }
  return (
    <div className="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="filterBtns">
          {category.map((category, i) => (
            <button key={i} className='primaryBtn'
            onClick={()=>filterItems(category)}>{category}</button>
          ))}
        </div>
        <div className="grid3">
          {list.map((item, i) => (
            <div key={i} className="box">
              <img src={item.cover} alt="cover" />
              <div className="overlay">
                <h3>{item.title}</h3>
                <span>{item.name}</span>
                <Visibility />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio