
import Post from "./Post"
import WelcomeMsg from "./WelcomeMsg";
import { useLoaderData } from "react-router-dom";


const PostList = () => {
  const postList = useLoaderData();
  return (
    <div className="post-list-container" >
       
      <div className="welcomeMsg">
        {
         (postList.length=== 0) && <WelcomeMsg />
        }
      </div>
      <div className="scrollable-posts" >
      {
         postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
      </div>
     
      
    </div>
  )
}

export const postLoader = () => {
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
    .then((data) => {
      return (data.posts);
    });
}

export default PostList









