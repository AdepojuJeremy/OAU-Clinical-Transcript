'use client'
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false
  },
  reducers: {
  }
})

export default userSlice.reducer;
export const {theme, font} = userSlice.actions