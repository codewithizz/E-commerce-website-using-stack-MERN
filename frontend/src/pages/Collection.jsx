<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
=======
import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
<<<<<<< HEAD
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
=======

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {

    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(a => a !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

<<<<<<< HEAD
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
=======
    setFilterProducts(productsCopy)

  }

  const sortProduct = async () => {

>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
<<<<<<< HEAD
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-[#d5006d]'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-[#d5006d]'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        {/* Category Filter */}
        <div className={`border border-[#d5006d] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-[#d5006d]'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> <span className='text-[#d5006d]'>Men</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> <span className='text-[#d5006d]'>Women</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> <span className='text-[#d5006d]'>Kids</span>
            </p>
          </div>
        </div>
        
        {/* SubCategory Filter */}
        <div className={`border border-[#d5006d] pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-[#d5006d]'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> <span className='text-[#d5006d]'>Topwear</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> <span className='text-[#d5006d]'>Bottomwear</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Activewear'} onChange={toggleSubCategory} /> <span className='text-[#d5006d]'>Activewear</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Footwear'} onChange={toggleSubCategory} /> <span className='text-[#d5006d]'>Footwear</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Accessories'} onChange={toggleSubCategory} /> <span className='text-[#d5006d]'>Accessories</span>
          </p>
          </div>
=======

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])
 

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-pink-700">
 


      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS<img className={`h-3 sm:hidden ${showFilter ? ' rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></p>

        {/* Category Filter */}
        <div className={`border border-[#D5006D] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
  <p className='mb-3 text-sm font-medium text-[#D5006D]'>CATEGORIES</p>
  <div className='flex flex-col gap-2 text-sm font-light text-[#D5006D]'>
    <p className='flex gap-2'>
      <input className='w-3' value={"Men"} onChange={toggleCategory} type="checkbox" />
      Men
    </p>
    <p className='flex gap-2'>
      <input className='w-3' value={"Women"} onChange={toggleCategory} type="checkbox" />
      Women
    </p>
    <p className='flex gap-2'>
      <input className='w-3' value={"Kids"} onChange={toggleCategory} type="checkbox" />
      Kids
    </p>
  </div>
</div>


        {/* Sub Category Filter */}
        <div className={`border border-[#D5006D] pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
  <p className='mb-3 text-sm font-medium text-[#D5006D]'>TYPE</p>
  <div className='flex flex-col gap-2 text-sm font-light text-[#D5006D]'>
    <p className='flex gap-2'>
      <input className='w-3' value={"Topwear"} onChange={toggleSubCategory} type="checkbox" />
      Topwear
    </p>
    <p className='flex gap-2'>
      <input className='w-3' value={"Bottomwear"} onChange={toggleSubCategory} type="checkbox" />
      Bottomwear
    </p>
    <p className='flex gap-2'>
      <input className='w-3' value={"Footwear"} onChange={toggleSubCategory} type="checkbox" />
      Footwear
    </p>
    <p className='flex gap-2'>
      <input className='w-3' value={"Accessories"} onChange={toggleSubCategory} type="checkbox" />
      Accessories
    </p>
    <p className='flex gap-2'>
      <input className='w-3' value={"Activewear"} onChange={toggleSubCategory} type="checkbox" />
      Activewear
    </p>
  </div>


>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399

        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
<<<<<<< HEAD
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          
          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-[#d5006d] text-[#d5006d] text-sm px-2'>
            <option value="relavent" className='text-[#d5006d]'>Sort by: Relavent</option>
            <option value="low-high" className='text-[#d5006d]'>Sort by: Low to High</option>
            <option value="high-low" className='text-[#d5006d]'>Sort by: High to Low</option>
          </select>
=======
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product Sort */}
          <select
  onChange={(e) => setSortType(e.target.value)}
  className='border-2 border-[#D5006D] text-[#D5006D] text-sm px-2'
  name=""
  id=""
>
  <option value="relavent">Sort by: Relavent</option>
  <option value="low-high">Sort by: Low to High</option>
  <option value="high-low">Sort by: High to Low</option>
</select>

>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, index) => (
<<<<<<< HEAD
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
=======
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
            ))
          }
        </div>
      </div>
<<<<<<< HEAD

    </div>
  );
};

export default Collection;
=======
    </div>
  )
}

export default Collection
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
