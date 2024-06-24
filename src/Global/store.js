'use client'
import {configureStore} from "@reduxjs/toolkit";
import appReducer from './slices/AppSlice'
import userReducer from './slices/UserSlice'

const store = configureStore({
  reducer : {
    user : userReducer,
    app : appReducer,
  }
})

export default store;