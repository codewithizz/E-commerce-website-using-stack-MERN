import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { assets } from '../assets/assets'; // Assuming assets holds the images

const Hero = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const [currentImage, setCurrentImage] = useState(0); // State to track the current image in the slideshow

    // Function to handle the click and navigate to the collection page
    const handleClick = () => {
        navigate('/collection'); // Navigate to the collection page
    };

    // Function to handle dot click and navigate to the specific poster
    const handleDotClick = (index) => {
        setCurrentImage(index); // Set the current image based on the clicked dot
    };

    // Auto-slideshow function to change images every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % 3); // Cycle through images
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <div className="relative mt-6">
            {/* Slideshow of posters */}
            <img 
                className='w-full h-auto object-cover' 
                src={assets[`poster${currentImage + 1}`]} // Dynamically select poster1, poster2, or poster3
                alt={`Poster ${currentImage + 1}`} 
                onClick={handleClick} // Attach the onClick event for the slideshow
                style={{
                    imageRendering: 'auto', // Ensure the image renders with high quality
                    width: '100%', // Ensure it fills the container
                    height: 'auto', // Maintain the aspect ratio
                }}
            />
            
            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[0, 1, 2].map((index) => (
                    <span 
                        key={index} 
                        className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-white' : 'bg-gray-500'} cursor-pointer`} 
                        onClick={() => handleDotClick(index)} // Click on dot to change image
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
