import Post from "./Post"


const PostList = () => {
  return (
    <div style={{ display: 'flex',gap:'15px'}}>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default PostList