import React from 'react';
import backgroundImage from './assets/hero1.png'; 
import search from './assets/search.png';

const Hero = ({  }) => {
  return (
    <div>
    <section
      className="relative h-[566px]  bg-repeat-x pb-20 bg-contain"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mb-80 max-w-md pt-20 ">
       

      <div className="relative max-w-lg w-full ml-10 mt-40 mb-10">
          <img
            src={search}
            alt="Search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            className="border border-black bg-[#FFF4F4] rounded-full py-2 pl-10 pr-4 focus:outline-none w-full"
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
          <span className="text-[#EC5766] font-dancing text-xl">Glamazone</span>
        </p>
        <p>All Things Beauty</p>
      </div>
    </section>

   
    </div>
  );
};

export default Hero;
