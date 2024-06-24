import React from 'react'
import {Link} from 'react-router-dom'
import HeaderOne from './custom/HeaderOne'
import CardWithForm from './custom/LoginForm' 

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

      <p className="font-crimson font-bold text-lg pt-8 ">
        Forgot Password?{" "}
        <Link href="#" className="text-oauOrange pl-4">
          reset
        </Link>
      </p>
    </main>
  </div>
  )
}

export default Login