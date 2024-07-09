import React from 'react';
import backgroundImage from './assets/hero.png'; 
import search from './assets/search.png';
import "./App.css";

const Hero = () => {
  return (
    <div>
      <section
        className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[560px] xl:min-h-screen bg-repeat-x bg-contain"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4 sm:pl-8 md:pl-16 lg:pl-24">
          <div className="text-[16px] sm:text-[18px] md:text-[20px] text-left tracking-wide text-black font-medium mb-4 sm:mb-6 md:mb-8 mt-12">
            <p>
              Start your beauty journey with{' '}
              <span className="text-[#EC5766] font-dancing text-xl sm:text-2xl">Glamazone</span>
            </p>
            <p>All Things Beauty</p>
          </div>
          <div className="text-[#000000] font-normal mt-8 sm:mt-16 text-left italic text-[16px] sm:text-[18px] md:text-[20px]">
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
              className="border border-black rounded-full py-2 pl-10 focus:outline-none w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
