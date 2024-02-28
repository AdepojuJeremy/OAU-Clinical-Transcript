"use client";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    students: [],
    passwordVisible: false,
    
  },
  reducers: {
    setPasswordVisible: (state, {payload}) => {
      state.passwordVisible = payload
    },
    setStudents: (state, {payload}) => {
      state.students = payload
    } 
  },
});

export default appSlice.reducer;
export const { setPasswordVisible, setStudents } = appSlice.actions;
