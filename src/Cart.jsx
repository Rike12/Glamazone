import React from 'react';
import Logoo from './assets/logoo.png';
import search from './assets/search.png';
import backgroundImage from './assets/tray.png';
import Footer from './Footer';

const Cart = () => {
  return (
    <div className='bg-[#FFF4F4] h-screen '>

      {/* Header */}
      <header className="py-8 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logoo} alt="Logo" className="h-8" />
          </div>
          <div className='flex justify-between items-center'>
            <nav className="flex gap-12 justify-between items-center ml-48">
              <a href="#" className="text-[#060B0F] hover:text-[#EC5766] font-semibold">Home</a>
              <a href="#" className="text-[#060B0F] hover:text-[#EC5766] font-semibold">About Us</a>
              <a href="#" className="text-[#060B0F] hover:text-[#EC5766] font-semibold">Our Products</a>
              <a href="#" className="text-[#060B0F] hover:text-[#EC5766] font-semibold">Contact Us</a>
            </nav>
          </div>
          <div className="flex gap-10 mr-10">
            <a href="#" className="bg-[#EC5766] text-white px-6 py-2 text-md rounded-full hover:bg-white hover:text-[#EC5766]">Shop now</a>
            <a href="/signup" className="border border-[#EC5766] text-[#EC5766] px-6 py-2 rounded-full hover:bg-[#EC5766] hover:text-white">Sign up</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="flex mt-4">
        <div
          className="absolute w-full h-full bg-no-repeat bg-contain ml-4"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="relative max-w-lg w-full ml-10 mt-24">
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
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Cart;
