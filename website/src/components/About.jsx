import {about} from './data/dummydata'
const About = () => {
  return (
   
    <div className="about">
          {about.map((val,i) => (
            <div className="flex" key={i}>
              <div className="left">
                <img src={val.cover} alt="profile" />
              </div>
              <div className="right">
                <h1>About Me</h1>
                <div className="desc">
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                </div>
                <div className="btns">
                <button className="contactBtn">
                  Contact Me
                </button>
                <button className="primaryBtn">Download CV</button>
                </div>
              </div>
            </div>
          ))}
        </div> 
  )
}

export default About