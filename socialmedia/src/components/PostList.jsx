import { useContext} from "react"
import Post from "./Post"
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div className="post-list-container" >
       {
          fetching && <LoadingSpinner />
        }
      <div className="welcomeMsg">
        {
        !fetching &&  (postList.length=== 0) && <WelcomeMsg />
        }
      </div>
      <div className="scrollable-posts" >
      {
        !fetching && postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
      </div>
     
      
    </div>
  )
}

export default PostList









