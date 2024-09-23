
import './App.css';
import { BsTwitterX } from "react-icons/bs";

function App() {
 

  return (
    <>
      <div className="logo-box">
        <div className="logo">
          <BsTwitterX />
        </div>
        <h2>Sign In to Twitter</h2>
        <button>
          <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png" alt="google" />
          Sign in with Google
        </button>

        <button>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAUVBMVEX///9mZmZeXl5iYmJXV1daWlqlpaXBwcH8/Py0tLRubm6rq6vw8PCIiIiBgYHc3Nz29vbQ0NCfn590dHTj4+OQkJDq6upSUlKWlpbHx8e6urpx1ZffAAABmElEQVRIib2W65KDIAyFIQQvULRg1db3f9AFu91tazTQmd38ZOabE5KTgBB/GX3dfECdg9bzuZyrUUkJ5YoVyhimmLM6cepayvlVT2pfyDVq5coztbByWCoo7noQSrnLekNwpZy4pUz1WMyJBUHLupwTfbD5ZTnVYXTXZfo5aHrrBjM42x9hF4egYgAae0kHfgQNqZvqMGuL3x1PxURTBaV/D2Kdup0hcVq+hFLy7UCeKG4EyYUyxHy1muViDtsSTchz4AhB934hQo8y3zTzguR0WV4QSQsYPtGO4k58aYA0jud7gRMF1nzzgeJEy4PyU5BedRmg+hREcqZyikOukZ5vhyLXXYYBdhrJW3XHcxlTJXVLgEuGAyQSds1ZAJGstiQ/VynAbJqS49ZEbl71c1au1Bq4ZtSVtHpWefSN6MiYI0lwObYjBTMKS5suxsAki+RjlZI9Hi6kE03hj6657f3zNZ9JBc9PK+xd8B4WHxAOwYYOH485w6VfUdSBuavvhWh8iN8HgJmYiw0aKv/ygPaLbcm18b/xBf8tD08u8Xy+AAAAAElFTkSuQmCC" alt="apple" />
          Sign in with Google
        </button>
        <div className="ordiv">
          <div className="or">Or</div>
        </div>

        <form>
          <input type="text" placeholder='Phone or email or username' />
          <button className='next'>Next</button>
          <button>Forgot Password</button>
        </form>
        <p> Don't have an account? <a href='#'>Sign up</a> </p>
      </div>
    </>
  )
}

export default App
