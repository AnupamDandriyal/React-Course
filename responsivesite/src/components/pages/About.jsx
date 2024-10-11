import { about } from "../data/dummydata"

const About = () => {
  return (
    <>
       <section className="about">
        <div className="container">
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
                <button className="btn">
                  Contact Me
                </button>
                <button className="primaryBtn">Download CV</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default About