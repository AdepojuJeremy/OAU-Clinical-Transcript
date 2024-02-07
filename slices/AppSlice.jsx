import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    passwordVisible:false
  },
  reducers: {
  },
});

export default appSlice.reducer;
export const {} = appSlice.actions;
