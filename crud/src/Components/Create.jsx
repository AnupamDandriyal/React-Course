import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Redux/userReducer";

const Create = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  console.log(user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == '' || email == '') {
      alert("Please provide the data");
    }
    else {
      dispatch(addUser({ id: user[user.length - 1].id + 1, name, email }));
      alert('New User Added!');
      navigate('/')
    }
    
  }

 /*  const success = (e) => {
    e.preventDefault();
   
  } */
  return (
    <div className="d-flex vh-50 justify-content-center align-item-center mt-5 ">
      <div className="w-90 border bg-secondary test-white p-5">
        <h3 className="text_color">Add New User</h3>
        <form /* onSubmit={handleSubmit} */>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" name='name' className="form-control form-signin" placeholder="Enter Name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name='email' className="form-control form-signin" placeholder="Enter Email" />
          </div>
          <br />
          <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create