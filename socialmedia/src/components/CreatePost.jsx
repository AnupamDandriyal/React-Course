
/* import { PostList } from "../store/post-list-store"; */

import { Form, redirect } from "react-router-dom"

const CreatePost = () => {


  /* const { addPost } = useContext(PostList); */





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
      <Form method="POST" className="create-post" >


        <div className="mb-3">
          <label htmlFor="userID" className="form-label">User ID</label>
          <input name='userId' type="text" className="form-control" id="userID" aria-describedby="userID" placeholder="user-0"/>
        </div>


        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input name='title' type="text" className="form-control" id="title" aria-describedby="title" placeholder="Add title to your post..."/>
        </div>
      

        <div className="mb-3">
          <label htmlFor="body" className="form-label">About Your Post</label>
          <textarea name='body' style={{ overflowY: 'auto', resize: 'vertical' }}  rows={2} type="text" className="form-control" id="body" aria-describedby="body" placeholder="Add caption of your post..."/>
        </div>


        <div className="mb-3">
          <label htmlFor="tags" className="form-label">HashTags</label>
          <input name='tags' type="text" className="form-control" id="tags" aria-describedby="tags" placeholder="#newpost (add space after each tag)"/>
        </div>


        
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input name='reactions' type="number" className="form-control" id="reactions" aria-describedby="reactions" placeholder="No. of reactions on the post"/>
        </div>
          <button type="submit" className="btn btn-primary createBtn">Post</button>

      </Form>
    </>
  )
}

export async function createPostAction ( data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(' ');
  console.log(postData);
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then(res => res.json())
    .then((post) => {
      console.log(post)
    }
  )
  return redirect('/');
}
export default CreatePost