import { services } from "./data/dummydata"

  

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h1>Services</h1>
        <div className="grid3">
        {services.map((item, i)=>(
        <div key={i} className='box'>
            <i>{item.icon}</i>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
        </div>
        ))}
        </div>
        
      </div>

    </section>
  )
}

export default Services