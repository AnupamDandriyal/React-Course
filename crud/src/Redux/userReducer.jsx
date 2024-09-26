import { userList } from "../Data";
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {

    addUser: (state, action) => {
      state.push(action.payload)
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id);
    },

    updateUser: (state,action) => {
      const { id, name, email } = action.payload;
      const uu = state.find(user => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    }
  }
})

export const {deleteUser,addUser,updateUser}= userSlice.actions

export default userSlice.reducer