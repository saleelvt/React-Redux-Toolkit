import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: JSON.parse(localStorage.getItem('key',)) || null,
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    login: (state, action) => {
      state.users = action.payload;
      localStorage.setItem('key',JSON.stringify(state.users))
    },
  },
});
export default userSlice.reducer;
export const { login } = userSlice.actions;
