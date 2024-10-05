import PropTypes from "prop-types";
import { createContext, useReducer } from "react";


export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => { },
  addInitialPosts:()=>{}
});

const PostListProvider = ({ children }) => {

  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
      newPostList=currPostList.filter(post=>post.id !==action.payload.postID)
    }
    else if (action.type === 'ADD_POST') {
      newPostList = [action.payload, ...currPostList];
    }
    else if (action.type === 'ADD_INITIAL_POSTS') {
      newPostList = action.payload.posts
    }
    return newPostList;
}
const [postList, dispatchPostList] = useReducer(postListReducer,[]);

  const addPost = (post) => {
  console.log(`Recieved from server ${post}`)
  dispatchPostList({
    type: "ADD_POST",
    payload:
    {post}
  })
  }
  

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    })
  }
  


const deletePost = (postID) => {
  dispatchPostList({
    type: 'DELETE_POST',
    payload:{postID}
  })

}

return <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
    addInitialPosts
  }}>
    {children}
  </PostList.Provider>
}





PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;













