
const Update = () => {
  return (
    <div className="d-flex vh-50 justify-content-center align-item-center mt-5">
      <div className="w-90 border bg-secondary test-white p-5">
        <h3 className="text_color">Update User</h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' className="form-control form-signin" placeholder="Enter Name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' className="form-control form-signin" placeholder="Enter Email" />
          </div>
          <br />
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update