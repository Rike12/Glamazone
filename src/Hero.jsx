import React from 'react';
import backgroundImage from './assets/hero.png'; 
import search from './assets/search.png';
import "./App.css";

const Hero = () => {
  return (
    <section className="relative h-[560px] bg-repeat-x pb-20 bg-contain" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
        <div className="text-[16px] sm:text-[18px] md:text-[20px] text-center tracking-wide text-black font-medium mb-10 mt-12">
          <p>
            Start your beauty journey with{' '}
            <span className="text-[#EC5766] font-dancing text-xl sm:text-2xl">Glamazone</span>
          </p>
          <p>All Things Beauty</p>
        </div>
        <div className="text-[#000000] font-normal mt-8 sm:mt-16 text-center italic text-[16px] sm:text-[18px] md:text-[20px]">
          <p>Explore our collections, indulge in some self-care,</p>
          <p>and embrace your inner glam! We can't wait to</p>
          <p>be a part of your beauty story.</p>
        </div>
        <div className="relative mt-8 sm:mt-14 mb-10">
          <img
            src={search}
            alt="Search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5"
          />
          <input
            type="text"
            className="border border-black rounded-full py-2 px-4 focus:outline-none w-full max-w-xs sm:max-w-lg"
            placeholder="Search..."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
