import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
  <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
  <div className='flex flex-col justify-center items-start gap-6'>
    <p className='font-semibold text-xl text-[#D5006D]'>Our Store</p>
    <p className='text-[#D5006D]'>95 Madison Avenue <br /> Suite 220, New York, USA</p>
    <p className='text-[#D5006D]'>Tel:(212) 555-0198 <br /> Email:  izzyvogue.store@gmail.com</p>
    <p className='font-semibold text-xl text-[#D5006D]'>Careers at Izzy Vogue</p>
    <p className='text-[#D5006D]'>Learn more about our teams and job openings.</p>
    <button className='border border-[#D5006D] px-8 py-4 text-sm hover:bg-[#D5006D] hover:text-white transition-all duration-500'>
      Explore Jobs
    </button>
  
</div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact
