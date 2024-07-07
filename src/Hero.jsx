import React from 'react';
import backgroundImage from './assets/hero.png'; 
import cart from './assets/cart.png';
import star from './assets/star.png';
import search from './assets/search.png';

const Hero = ({ cartCount }) => {
  return (
    <section
      className="relative h-[550px]  bg-repeat-x pb-20 bg-contain"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="ml-8 max-w-md pt-20">
        <div className="flex justify-start items-center space-x-4 mb-8">
          <div className="relative">
            <img src={cart} alt="Cart" className="w-8 h-8" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <img src={star} alt="Favorite" className="w-8 h-8" />
        </div>

        <div className="relative w-full mb-4">
          <img
            src={search}
            alt="Search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            className="border border-gray-300 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none"
          />
        </div>

        <div className="text-gray-600 mb-4 ml-4 text-center italic text-md">
          <p>Explore our collections, indulge in some self-care,</p>
          <p>and embrace your inner glam! We can't wait to be</p>
          <p>a part of your beauty story.</p>
        </div>
      </div>

      <div className="absolute bottom-40 right-36 text-lg text-center text-gray-700">
        <p>
          Start your beauty journey with{' '}
          <span className="text-[#EC5766] font-dancing text-2xl logo">Glamazone</span>
        </p>
        <p>All Things Beauty</p>
      </div>
    </section>
  );
};

export default Hero;
