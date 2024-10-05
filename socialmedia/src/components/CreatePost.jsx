import { useContext, useRef } from "react"
import { PostList } from "../store/post-list-store";



const CreatePost = () => {
  const userIDEl = useRef();
  const titleEl = useRef();
  const bodyEl = useRef();
  const tagsEl = useRef();
  const reactionsEl = useRef();

  const { addPost } = useContext(PostList);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('post button clicked')
    const userID = userIDEl.current.value;
    const title = titleEl.current.value;
    const body = bodyEl.current.value;
    const tags = tagsEl.current.value.split(/\s+/);
    const reactions = reactionsEl.current.value;

    userIDEl.current.value = '';
    titleEl.current.value = '';
    bodyEl.current.value = '';
    tagsEl.current.value = '';
    reactionsEl.current.value = '';
    

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reactions,
        userId: userID,
        tags: tags,
      }),
    })
      .then(res => res.json())
      .then((post)=>addPost(post))
  }


/*   fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'title',
      body: 'body',
      tags: 'tags',
      userId : 45,
    }),
  })
    .then(res => res.json())
    .then(console.log) */



  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>


        <div className="mb-3">
          <label htmlFor="userID" className="form-label">User ID</label>
          <input ref={userIDEl} type="text" className="form-control" id="userID" aria-describedby="userID" placeholder="user-0"/>
        </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input ref={titleEl} type="text" className="form-control" id="title" aria-describedby="title" placeholder="Add title to your post..."/>
        </div>
      

        <div className="mb-3">
          <label htmlFor="body" className="form-label">About Your Post</label>
          <textarea ref={bodyEl} style={{ overflowY: 'auto', resize: 'vertical' }}  rows={2} type="text" className="form-control" id="body" aria-describedby="body" placeholder="Add caption of your post..."/>
        </div>


        <div className="mb-3">
          <label htmlFor="tags" className="form-label">HashTags</label>
          <input ref={tagsEl} type="text" className="form-control" id="tags" aria-describedby="tags" placeholder="#newpost (add space after each tag)"/>
        </div>


        
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input ref={reactionsEl} type="number" className="form-control" id="reactions" aria-describedby="reactions" placeholder="No. of reactions on the post"/>
        </div>

        <button type="submit" className="btn btn-primary createBtn">Post</button>
      </form>
    </>
  )
}

export default CreatePost