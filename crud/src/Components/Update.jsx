import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/userReducer";


const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  const [uname, setName] = useState(existingUser ? existingUser.name : '');
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : '');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email:uemail
    }));
    alert("User is Updated!")
    navigate('/')
  }


  return (
    <div className="d-flex vh-50 justify-content-center align-item-center mt-5">
      <div className="w-90 border bg-secondary test-white p-5">
        <h3 className="text_color">Update User</h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={uname} type="text" name='name' className="form-control form-signin" placeholder="Enter Name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} value={uemail} type="email" name='email' className="form-control form-signin" placeholder="Enter Email" />
          </div>
          <br />
          <button onClick={handleSubmit} className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update