'use client'
import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    credentials: null,
    
  },
  reducers: {
   
    setCredentials(state,{payload}){
localStorage.setItem('userInfo', JSON.stringify(payload));
state.isLoggedIn = true;
state.credentials = payload;
},
clearCredentials(state){
  localStorage.removeItem('userInfo');
  state.isLoggedIn = false;
  state.credentials = null;
    }
    
  
  },
})

export default userSlice.reducer;

export const {setCredentials,clearCredentials,isLoggedIn,credentials} = userSlice.actions