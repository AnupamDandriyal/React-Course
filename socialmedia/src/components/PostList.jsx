import { useContext } from "react"
import Post from "./Post"
import {PostList as PostListData} from '../store/post-list-store'

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div style={{ display: 'flex', gap: '25px', flexWrap:'wrap' }}>
      {
        postList.map((post) => (
          <Post key={post.id} post={post} />
        ))
      }
      
    </div>
  )
}

export default PostList