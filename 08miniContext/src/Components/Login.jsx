import React, { useState, useContext} from 'react'
import UserContext from '../Context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})
  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='UserName'
      />
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login