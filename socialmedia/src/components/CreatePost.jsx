

const CreatePost = () => {
  return (
    <>
      <form className="create-post">


        <div className="mb-3">
          <label htmlFor="userID" className="form-label">User ID</label>
          <input type="text" className="form-control" id="userID" aria-describedby="userID" placeholder="user-0"/>
        </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Add title to your post..."/>
        </div>
      

        <div className="mb-3">
          <label htmlFor="description" className="form-label">About Your Post</label>
          <textarea style={{ overflowY: 'auto', resize: 'vertical' }}  rows={2} type="text" className="form-control" id="description" aria-describedby="description" placeholder="Add caption of your post..."/>
        </div>


        <div className="mb-3">
          <label htmlFor="tags" className="form-label">HashTags</label>
          <input type="text" className="form-control" id="tags" aria-describedby="tags" placeholder="#newpost (add space after each tag)"/>
        </div>

        <button type="submit" className="btn btn-primary createBtn">Create +</button>
      </form>
    </>
  )
}

export default CreatePost