import { userList } from "../Data";
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    
  }
})

export default userSlice.reducer