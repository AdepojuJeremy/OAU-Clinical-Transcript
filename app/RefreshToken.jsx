'use client'

import React from 'react'
import { useDispatch } from "react-redux";
import { restoreToken } from './GlobalRedux/slices/UserSlice';
import { useEffect } from 'react';

function RefreshToken({children}) {
    const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("userInfo");
    token && dispatch(restoreToken(token));
  }, []);
  return (
    <>{children}</>
  )
}

export default RefreshToken