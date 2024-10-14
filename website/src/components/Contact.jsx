import { contact } from "./data/dummydata"


const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="content">
          <div className="right">
            <form> 
              <div className="flex">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="subject" />
              <textarea name="" id="" cols='30' rows='10'></textarea>
              <button className="primaryBtn">Submit</button>
            </form>
          </div>
          <div className="left">
            {contact.map((item, i) => (
              <div key={i} className="box">
                <i>{item.icon}</i>
                <p>{item.text1}</p>
                <p>{item.text2}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact