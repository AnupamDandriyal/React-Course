import PropTypes from "prop-types";
import { useContext } from "react";
import { AiFillLike } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {PostList as PostListData} from '../store/post-list-store'

const Post = ({ post }) => {
  
  const {deletePost} = useContext(PostListData)
  return (
    <>
      <div className="card" style={{ width: '40%',margin:'25px auto'}}>
        <div className="card-body">
          <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete">
          <MdDelete />
          </span> 
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {
            post.tags.map((tag,i) =>(
              <span key={i} style={{marginRight:'5px'}} className="badge text-bg-primary">{tag}</span>
            ))
          }
          <br />
          <div className="alert alert-primary reactions" role="alert">
            <AiFillLike/> {post.reactions.likes || post.reactions}
          </div>
          
        </div>
    </div >
      

    </>
  )
}


Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post