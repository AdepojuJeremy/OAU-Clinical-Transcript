"use client";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    passwordVisible: false,
  },
  reducers: {
    setPasswordVisible: (state, {payload}) => {
      state.passwordVisible = payload
    }
  },
});

export default appSlice.reducer;
export const { setPasswordVisible } = appSlice.actions;
