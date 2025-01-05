import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between border-b-2 border-pink-600'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button 
            onClick={() => setToken('')} 
            className='bg-pink-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-pink-700 transition-all'>
            Logout
        </button>
    </div>
  )
}

export default Navbar
