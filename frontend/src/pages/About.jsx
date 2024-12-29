import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
  <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
  <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
    <p className='text-justify'>
      At <span className='text-[#D5006D]'>Izzy Vogue</span>, we believe that fashion is more than just clothing—it's a way of expressing your unique personality and embracing the art of self-expression. Our journey began with a passion for redefining online shopping and providing an elevated experience that blends luxury, comfort, and convenience. Founded on the idea of bringing the world of high-end fashion and lifestyle products to your fingertips, <span className='text-[#D5006D]'>Izzy Vogue</span> was created to be your ultimate destination for all things style.
    </p>
    <p className='text-justify'>
      From the very beginning, our vision has been to curate a carefully selected collection of premium-quality products that speak to diverse tastes, lifestyles, and preferences. We take great pride in offering an extensive range of fashion, beauty, home essentials, and accessories—each handpicked from trusted brands and artisans that embody innovation, craftsmanship, and attention to detail. Whether you're searching for chic apparel, luxurious handbags, elegant footwear, or unique home décor, you'll find it at <span className='text-[#D5006D]'>Izzy Vogue</span>, where every piece tells a story.
    </p>
    <p className='text-justify'>
      At <span className='text-[#D5006D]'>Izzy Vogue</span>, we're not just about keeping up with trends; we’re about creating timeless style that lasts and allows you to express your true self. Thank you for choosing us to be part of your fashion journey.
    </p>
  

  </div>
</div>

          
      


      

      <div className='flex flex-col md:flex-row text-sm mb-20'>
  
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 bg-[#F8BBD0] text-center'>
  <h2 className='text-[#D5006D] text-2xl font-semibold text-center'>
    Our Vision
    <span className='block h-1 w-28 bg-[#D5006D] mt-2 mx-auto'></span>
  </h2>
  <p className='text-black'>
    Bring inspiration and joy to people, everywhere, everyday.
  </p>
</div>

  
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1 bg-[#F8BBD0] text-center'>
  <h2 className='text-[#D5006D] text-2xl font-semibold'>
    Our Mission
    <span className='block h-1 w-28 bg-[#D5006D] mt-2 mx-auto'></span>
  </h2>
  <p className='black'>
    To create a world where our consumers have access to a finely curated, authentic assortment of products and services that delight and elevate the human spirit.
  </p>
</div>







      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
