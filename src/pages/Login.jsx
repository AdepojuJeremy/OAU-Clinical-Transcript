import React from 'react'
import {Link} from 'react-router-dom'
import HeaderOne from '../components/custom/HeaderOne'
import CardWithForm from '../components/custom/LoginForm' 

function Login() {
  return (
    <div className="relative min-h-screen w-full bg-backgroundColor">
    <HeaderOne />
    <main
      id="page-content"
      className="pt-[10rem] w-full flex items-center justify-center flex-col flex-1 pb-8"
    >
      <div className="w-[80%] min-w-[300px] max-w-[800px] ">
        <CardWithForm />
      </div>

     
    </main>
  </div>
  )
}

export default Login