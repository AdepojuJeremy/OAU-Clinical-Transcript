import React from 'react'

function HeaderOne() {
  return (
    <nav className='absolute inset-x-0 flex justify-center items-center py-10 text-[30px]'>
      <div className='w-[90%] flex justify-between items-center'>
      <div className="logo"><img src="./oaulogo.png" alt="oaulogo" /></div>
        <ul className="navitems flex gap-4 text-primaryBlue font-bold">
            <li>About</li>
            <span className='text-oauOrange'>/</span>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default HeaderOne