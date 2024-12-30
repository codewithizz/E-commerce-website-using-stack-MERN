import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      <div>
      
    <img className='mb-5 w-32' src={assets.logo} alt="" />
    <p className='w-full md:w-2/7 text-justify text-[#D5006D] pr-11'>
        Your destination for timeless luxury and contemporary style for Men, Women, and Kids. 
        Discover premium collections featuring elegant apparel, accessories, bags, and footwear designed to make a statement. 
        Explore our Hidden Gems, celebrating artisanal craftsmanship and unique handmade creations perfect for every occasion. 
        Stay ahead of the curve with versatile, comfortable, and trend-setting styles tailored for modern living. 
        At Izzy Vogue, sustainability matters—shop eco-conscious designs delivered in eco-friendly packaging.
    </p>
</div>


        <div>
    <p className='text-xl font-medium mb-5 text-[#D5006D]'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-[#D5006D]'>
        <li>
            Home
            <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] mt-1'/>
        </li>
        <li>
            About us
            <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] mt-1'/>
        </li>
        <li>
            Delivery
            <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] mt-1'/>
        </li>
        <li>
            Privacy policy
            <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] mt-1'/>
        </li>
    </ul>
</div>


        <div>
        <p className='text-xl font-medium mb-5 text-[#D5006D]'>GET IN TOUCH</p>
<ul className='flex flex-col gap-1 text-[#D5006D]'>
    <li>(212) 555-0198</li>
    <li>izzyvogue.store@gmail.com</li>


          </ul>
        </div>

      </div>

      <div>
    <hr className='border-none h-[1.5px] bg-[#FBB6D0]' />
    <p className='py-5 text-sm text-center text-[#D5006D]'>Copyright 2024@izzyvogue.com - All Right Reserved.</p>
</div>

    </div>
  )
}

export default Footer
