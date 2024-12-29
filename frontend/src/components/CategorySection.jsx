import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Title from './Title';
import { assets } from '../assets/assets'; // Import assets from the assets folder
import './CategorySection.css';


const categories = [
  { name: 'Men', image: assets.men, link: '/collection/men' },
  { name: 'Women', image: assets.women, link: '/collection/women' },
  { name: 'Kids', image: assets.Kids, link: '/collection/kids' },
  { name: 'Accessories', image: assets.Accessories, link: '/collection/accessories' },
  { name: 'Activewear', image: assets.Activewear, link: '/collection/activewear' },
  { name: 'Footwear', image: assets.footwear, link: '/collection/footwear' },
  { name: 'Luxe Edit', image: assets.Luxeedits, link: '/collection/luxe-edit' },
  { name: 'Global Store', image: assets.globalstore, link: '/collection/global-store' },
  // Add more categories as needed
];
const handleClick = () => {
  navigate('/collection'); // Navigate to the collection page
};
const CategorySection = () => {
  const [displayedCategories, setDisplayedCategories] = useState(categories);
  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 200;
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 200;
    }
  };

  return (
    <div className="category-section my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"SHOP BY"} text2={"CATEGORY"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-black">
          Explore our collection categorized for your convenience!
        </p>
      </div>

      {/* Category Carousel with Left and Right Arrows */}
      <div className="carousel-container relative">
        <button onClick={handlePrev} className="carousel-arrow left-0">
          &lt;
        </button>

        <div ref={carouselRef} className="category-carousel flex overflow-x-auto gap-4 py-4">
          {displayedCategories.map((category, index) => (
            <div key={index} className="category-item text-center">
              <Link to={category.link}>
                <div className="category-image-container">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="category-image"
                  />
                </div>
                <div className="category-name mt-2">{category.name}</div>
              </Link>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="carousel-arrow right-0">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
