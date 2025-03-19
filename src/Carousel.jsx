import React, { useState, useEffect } from 'react';
import './assets/css/local.css';
import './assets/css/input.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatically change slides (AUTO-SWIPE FEATURE)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides); // Go to the next slide, loop back to 0
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, [totalSlides]);

  return (
    <div className=" carousel ">
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        <div className="relative ">
          {/* Carousel items */}
          {['Unfinished.jpg', 'carousel 2.jpg', 'carousel 3.jpg', 'carousel 4.jpg', 'carousel 5.jpg'].map(
            (image, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${
                  currentSlide === index ? '' : 'hidden'
                }`}
                data-carousel-item
              >
                <img
                  src={`/images/${image}`}
                  className=" relative md:h-[300px] md:w-11/12 max-md:w-10/12 max-md:h-[310px] left-10 w-full"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            )
          )}
        </div>

        {/* Carousel Buttons */}
        <div className=" absolute  z-30 bottom-1  space-x-3 flex justify-center w-full md:ml-5 ">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-black' : 'bg-gray-400'
              }`}
              aria-current={currentSlide === index ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className='opacity-100 transition-opacity hover:opacity-50 cursor-pointer'>
      <p className="relative left-10 font-title">Peran Game Dalam Membuat Lingkungan Nyaman</p>
      <p className="relative left-10 font-title text-[10px] text-[#706969]">12 jam lalu</p>
      </div>
    </div>
  );
};

export default Carousel;
