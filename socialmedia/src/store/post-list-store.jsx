import PropTypes from "prop-types";
import { createContext, useReducer,useState,useEffect } from "react";


export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => { },
  fetching:false
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
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);
 
 

  const addPost = (post) => {
  console.log('Recieved from the user end ', post)
  dispatchPostList({
    type: "ADD_POST",
    payload:post,
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
  
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
    .then(res => res.json())
      .then((data) => {
        console.log(data)
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    }
  },[])

return <PostList.Provider value={{
    postList,
    addPost,
    deletePost,
    fetching
  }}>
    {children}
  </PostList.Provider>
}





PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;













