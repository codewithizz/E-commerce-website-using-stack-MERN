<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
=======
import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
<<<<<<< HEAD
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const defaultImage = 'path/to/default-image.jpg'; // Replace with actual path to your default image

  return (
    <div className='border-t pt-14'>
=======

  const { products, currency, navigate, cartItems, updateQuantity } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    console.log(tempData);
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='border-t pt-14'>

>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
<<<<<<< HEAD
          const productData = products.find((product) => product._id === item._id);

          if (!productData) {
            console.error(`Product not found for ID: ${item._id}`);
            return null; // Skip rendering if product data is not found
          }

          return (
            <div
              key={index}
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                <img
                  className='w-16 sm:w-20'
                  src={productData.image?.[0] || defaultImage}
                  alt={productData.name || 'Product'}
                />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>
                      {currency}
                      {productData.price}
                    </p>
=======

          const productData = products.find((product) => product._id === item._id);

          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <input
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type='number'
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className='w-4 mr-4 sm:w-5 cursor-pointer'
                src={assets.bin_icon}
                alt='Remove'
              />
            </div>
          );
=======
              <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          )

>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
<<<<<<< HEAD
            <button
              onClick={() => navigate('/place-order')}
              className='bg-pink-700 hover:bg-pink-800 text-white text-sm my-8 px-8 py-3'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
=======
          <button 
    onClick={() => navigate('/place-order')} 
    className="bg-pink-700 hover:bg-pink-800 text-white text-sm my-8 px-8 py-3 transition-all duration-300"
>
    PROCEED TO CHECKOUT
</button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
