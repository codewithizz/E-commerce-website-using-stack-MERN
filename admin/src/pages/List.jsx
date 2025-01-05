import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products.reverse());
      }
      else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {

      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2 text-[#d5006d]'>All Products List</p>
      <div className='flex flex-col gap-2'>

        {/* ------- List Table Title ---------- */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border border-[#d5006d] bg-[#fce4ec] text-sm'>
          <b className='text-[#d5006d]'>Image</b>
          <b className='text-[#d5006d]'>Name</b>
          <b className='text-[#d5006d]'>Category</b>
          <b className='text-[#d5006d]'>Price</b>
          <b className='text-center text-[#d5006d]'>Action</b>
        </div>

        {/* ------ Product List ------ */}

        {
          list.map((item, index) => (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-[#d5006d] text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg text-[#d5006d] hover:text-white hover:bg-[#d5006d] px-2 rounded-full transition duration-300'>
                X
              </p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List
