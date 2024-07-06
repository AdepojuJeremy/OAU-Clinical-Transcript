"use client";
import { createSlice } from "@reduxjs/toolkit";
import data from "../../_data/studentOne";
import students from "../../_data/students.js";

const appSlice = createSlice({
  name: "app",
  initialState: {
    //TODO: edit this
    students: students,
    passwordVisible: false,
    selectedStudentData: data,
    currentStudentClass: 1,
  },
  reducers: {
    setPasswordVisible: (state, { payload }) => {
      state.passwordVisible = payload;
    },
    setStudents: (state, { payload }) => {
      state.students = payload;
    },
    createNewStudent: (state, { payload }) => {
  
      state.students.push(payload);
      state.selectedStudentData = payload;


    },
    setSelectedStudentData: (state, { payload }) => {
 
      state.selectedStudentData = state.students.find((x) => x._id === payload);
    },
    updateClassInfo: (state, { payload }) => {
      if (state.currentStudentClass === 1) {
      }
    },
  },
});

export default appSlice.reducer;
export const {
  createNewStudent,
  setPasswordVisible,
  setStudents,
  setSelectedStudentData,
} = appSlice.actions;
