import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>

<p className='text-2xl font-medium text-[#D5006D]'>Subscribe now & get 20% off</p>
<p className='text-[#D5006D] mt-3'>Subscribe now and enjoy an exclusive 20% off on your first purchase!</p>


      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[#D5006D] pl-3'>
  <input
    className='w-full sm:flex-1 outline-none text-[#D5006D] placeholder-black'
    type="text"
    placeholder='Enter your email id'
    required
  />
  <button
    className='bg-[#D5006D] text-white text-xs px-10 py-4'
    type='submit'
  >
    SUBSCRIBE
  </button>
</form>


    </div>
  )
}

export default NewsletterBox
