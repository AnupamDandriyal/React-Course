import { blog } from "./data/dummydata"

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <h1>Blogs</h1>
        <div className="grid3">
        {
          blog.map((item) => (
            <div key={item.id} className="box">
              <div className="img">
                <img src={item.cover} alt="blog" />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <label>
                  By {item.author} {item.date}
                </label>
                <p>{ item.desc}</p>
              </div>
            </div>
          ))
        }
        </div>
       
      </div>
    </div>
  )
}

export default Blog