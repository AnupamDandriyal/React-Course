import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from "../../Redux/userReducer";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* console.log(users); */

  const deleteId = (id) => {
    dispatch(deleteUser);
    console.log(id);
    navigate(0);
  }
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h2 className="mb-5">Simple Crud App With Redux</h2>
      <Link to='/create' className="btn btn-primary my-3 p-2">Create +</Link>
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody >
          {
            users.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                  <button onClick={()=>deleteId(user.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
            
              </tr>
            ))
         }
        </tbody>
      </table>
    </div>
  )
}

export default Home

/* 47:30 */