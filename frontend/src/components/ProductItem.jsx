import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

<<<<<<< HEAD
const ProductItem = ({ id, image, name, price, originalPrice }) => {
=======
const ProductItem = ({ id, image, name, price }) => {
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399

  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>

      <div className=' overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
      
    </Link>
  )
}

export default ProductItem
