import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData({
          ...item,
          originalPrice: item.originalPrice || item.OrignalPrice || item.price, // Handle alternative names or fallback
        });
        setImage(item.image[0]);
        return null;
      }
    });
  };
  
<<<<<<< HEAD
=======
  

>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 border-[#D5006D] pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>  {/* -------- Product Row ---------- */}

        {/* -------- Product Images ---------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img 
                key={index} 
                onClick={() => setImage(item)} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                src={item} 
                alt={`Product Image ${index + 1}`} 
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="Selected Product" />
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

          {/* Updated Pricing Section */}
          <div className='mt-5'>
<<<<<<< HEAD
            <p className='text-3xl font-medium text-black inline-block'>
              {currency}{productData.price}
            </p>
            {productData.originalPrice && (
              <span className='ml-2 text-sm text-gray-500 line-through'>
                {currency}{productData.originalPrice}
              </span>
            )}
          </div>
=======
  <p className='text-3xl font-medium text-black inline-block'>
    {currency}{productData.price}
  </p>
  {productData.originalPrice && (
    <span className='ml-2 text-sm text-gray-500 line-through'>
      {currency}{productData.originalPrice}
    </span>
  )}
</div>
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
          <p className='mt-2 text-lg text-green-500'>
            Save {currency}{(productData.originalPrice - productData.price).toFixed(0)}!
          </p>

          <p className='mt-5 text-black md:w-4/5 text-justify'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
<<<<<<< HEAD
              {/* Render S, M, L, XL size buttons */}
              {['S', 'M', 'L', 'XL'].map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setSize(item)} 
                  className={`border py-2 px-4 ${item === size ? "bg-[#D5006D] text-white border-[#D5006D]" : "bg-[#F1F1F1] text-black border-[#D5006D]"} hover:bg-[#D5006D] hover:text-white`}>
=======
              {productData.sizes.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setSize(item)} 
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}>
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => addToCart(productData._id, size)} 
            className='bg-[#D5006D] text-white px-8 py-3 text-sm active:bg-[#C1005B] hover:bg-[#D5006D]'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5 border-t-2 border-[#D5006D]' />

          <div className='text-sm text-blsck mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews Section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border-2 border-[#D5006D] px-5 py-3 text-sm text-black'>Description</b>
          <p className='border-2 border-[#D5006D] px-5 py-3 text-sm text-black'>Reviews (195)</p>
        </div>
        <div className='flex flex-col gap-4 border-2 border-[#D5006D] px-6 py-6 text-sm text-black'>
          <p className='text-justify'>
            Izzy Vogue isn't just a clothing brand—it's a lifestyle. We are committed to offering a collection that celebrates individual expression through carefully curated, high-quality fashion. Our mission is to make premium, sustainable fashion accessible for everyone, creating pieces that are not only timeless but also environmentally responsible.
          </p>
          <p>
            Our store offers a range of products from clothing to accessories that complement your personal style. Whether you're looking for something elegant or trendy, each product is crafted to provide comfort, quality, and versatility.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className=' opacity-0'></div>;
};

export default Product;
