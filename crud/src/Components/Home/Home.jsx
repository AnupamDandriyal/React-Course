import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <div className="container" style={{ marginTop: '2rem' }}>
      <h2 className="mb-5">Simple Crud App With Redux</h2>
      <Link className="btn btn-primary my-3 p-2">Create +</Link>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <td>01</td>
          <td>Amit</td>
          <td>amit04@gmail.com</td>
          <td>
            <Link className="btn btn-primary btn-sm">Edit</Link>
            <Link className="btn btn-danger btn-sm">Delete</Link>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default Home