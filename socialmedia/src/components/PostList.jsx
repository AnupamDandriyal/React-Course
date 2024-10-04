import { useContext, useEffect, useState} from "react"
import Post from "./Post"
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
 /*  const [dataFetched, setDataFetched] = useState(false)
  if (!dataFetched) {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
      .then((data) => {
        console.log(data)
        addInitialPosts(data.posts);
      });
    setDataFetched(true)
  } */
  const [fetching,setFetching] = useState(false)
  useEffect(() => {
    setFetching(true);
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
      .then((data) => {
        console.log(data)
        addInitialPosts(data.posts);
        setFetching(false);
      });
  },[])

  return (
    <div className="post-list-container">
       {
          fetching && <LoadingSpinner />
        }
      <div className="welcomeMsg">
        {
        !fetching &&  (postList.length=== 0) && <WelcomeMsg />
        }
      </div>
      <div className="scrollable-posts">
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









