"use client";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    setCredentials(state, { payload }) {
      localStorage.setItem("userInfo", JSON.stringify(payload));
      state.isLoggedIn = true;
      state.token = payload;
    },
    clearCredentials(state) {
      localStorage.removeItem("userInfo");
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export default userSlice.reducer;

export const { setCredentials, clearCredentials, isLoggedIn, token } =
  userSlice.actions;
