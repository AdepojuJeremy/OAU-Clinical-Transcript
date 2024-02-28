"use client";
import { createSlice } from "@reduxjs/toolkit";
import data from "@/_data/students.json"
const appSlice = createSlice({
  name: "app",
  initialState: {
    //TODO: edit this
    students: data ?? [],
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
