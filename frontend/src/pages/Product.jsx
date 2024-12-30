import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className='border-t-2 border-[#D5006D] pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- Product Images------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {
                productData.image.map((item, index) => (
                  <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                ))
              }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl text-[#D5006D] mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3.5' src={assets.star_icon} alt="Star" />
            <img className='w-3.5' src={assets.star_icon} alt="Star" />
            <img className='w-3.5' src={assets.star_icon} alt="Star" />
            <img className='w-3.5' src={assets.star_icon} alt="Star" />
            <img className='w-3.5' src={assets.star_dull_icon} alt="Star Dull" />
            <p className='pl-2'>(195)</p>
          </div>
          <p className='mt-5 text-3xl font-medium  text-[#D5006D]'>{currency}{productData.price}</p>
          <p className='mt-5 text-[#D5006D] md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8  text-[#D5006D]'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {/* Render S, M, L, XL size buttons */}
              {['S', 'M', 'L', 'XL'].map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setSize(item)} 
                  className={`border py-2 px-4 ${item === size ? "bg-[#D5006D] text-white border-[#D5006D]" : "bg-[#F1F1F1] text-black border-[#D5006D]"} hover:bg-[#D5006D] hover:text-white`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, size)} className='bg-[#D5006D] text-white px-8 py-3 text-sm active:bg-[#D5006D]'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 border-t-2 border-[#D5006D]' />
          <div className='text-sm text-[#D5006D] mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Review Section ------------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border  border-[#D5006D] px-5 py-3 text-sm text-[#D5006D]'>Description</b>
          <p className='border  border-[#D5006D] px-5 py-3 text-sm text-[#D5006D]'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border  border-[#D5006D]  px-6 py-6 text-sm text-[#D5006D]'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* --------- display related products ---------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
