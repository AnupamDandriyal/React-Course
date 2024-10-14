
import { portfolio } from "./data/dummydata"
import { Visibility } from "@mui/icons-material"


const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="grid3">
          {portfolio.map((item, i) => (
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