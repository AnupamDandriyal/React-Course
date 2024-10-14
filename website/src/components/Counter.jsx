import { project } from "./data/dummydata"
import CountUp from 'react-countup'
const Counter = () => {
  return (
    <div className="counter">
      <div className="container">
      <div className="grid4">
        {project.map((item, i)=>(
        <div key={i} className='box'>
            <i>{item.icon}</i>
            <h1><CountUp enableScrollSpy duration={2} end={item.num} /></h1>
            <p>{item.title}</p>
        </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Counter