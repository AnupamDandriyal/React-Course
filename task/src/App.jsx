import {useState,useEffect} from 'react'
import './App.css'

function App() {
  let [userData,setUserData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users',{signal})
      .then(response => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
        /* alert(error); */
      }) 
    return () => {
      controller.abort();
    }
  },[])
  return (
    <center>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          <h1>UserData</h1>
          <ul className="list-group">
            {userData.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name} - {user.email} - {user.phone}
              </li>
            ))}
          </ul>
        </>
      )}
    </center>
  )
}

export default App
