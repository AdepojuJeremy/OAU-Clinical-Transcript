"use client";
import { createSlice } from "@reduxjs/toolkit";
import data from "@/_data/studentOne.js";
import students from "@/_data/students.js"


const appSlice = createSlice({
  name: "app",
  initialState: {
    //TODO: edit this
    students: students ?? [],
    passwordVisible: false,
    selectedStudentData: data ?? {}
    
  },
  reducers: {
    setPasswordVisible: (state, {payload}) => {
      state.passwordVisible = payload
    },
    setStudents: (state, {payload}) => {
      state.students = payload
    } ,
    setSelectedStudentData: (state, {payload}) => {
      state.selectedStudentData = payload
    } 
  },
});

export default appSlice.reducer;
export const { setPasswordVisible, setStudents ,setSelectedStudentData} = appSlice.actions;
