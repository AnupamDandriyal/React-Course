import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/userReducer';


const store = configureStore({
  reducer: {
    users: userReducer
  } 
})

export default store;