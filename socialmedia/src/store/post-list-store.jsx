import PropTypes from "prop-types";
import { createContext, useReducer } from "react";


export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost:()=>{},
});
const PostListProvider = ({ children }) => {

  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
      newPostList=currPostList.filter(post=>post.id !==action.payload.postID)
    }
    return newPostList;
}
const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);

const addPost = () => {
  
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
  }}>
    {children}
  </PostList.Provider>
}

const DEFAULT_POST_LIST = [
  {
  id: '1',
  title: 'Going to mountains',
  body: 'Hi Friends, I am going to mountain trip for my vacations. Hope to enjoy a lot. Peace out!',
  reactions: 0,
  userID: 'user-4',
  tags: ['vacations','mountains','selflove','rejuvanate','relax','peace']
  },
  {
    id: '2',
    title: 'Happy Birthday to me',
    body: 'Hi Friends, Todya i turned 22 and so i seek blessings of your all. Sending love and hugs, Peace out!',
    reactions: 5,
    userID: 'user-1',
    tags: ['birthday','newbeginning','growth','goodluck','wishes']
  }
];




PostListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostListProvider;

