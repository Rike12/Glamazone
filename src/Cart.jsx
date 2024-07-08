import React from 'react';
import Logo from './assets/logo.png';
import './App.css';
import search from './assets/search.png';
import backgroundImage from './assets/tray.png';
import Footer from './Footer';
import Shopping from './Shopping';

const Cart = () => {
  return (
    <div className='bg-[#FFF4F4] min-h-screen flex flex-col'>
      {/* Header */}
      <header className="p-8">
        <div className="container flex gap-8">
          <div className="flex space-x-2">
            <img src={Logo} alt="Logo" className="h-8" />
            <h1 className='text-[#EC5766] text-2xl logo'>Glamazone</h1>
          </div>
          <nav className="flex space-x-16 mt-2 ml-80">
            <a href="/product" className="text-[#060B0F] relative">
              Our Products
            </a>
            <a href="#" className="text-[#060B0F] relative">
              Cart
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
            </a>
            <a href="/checkout" className="text-[#060B0F]">Check Out</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="flex  items-center px-8">
      <div className="relative max-w-lg w-full  ml-10 mb-40">
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
        <div
          className="w-full h-96 bg-no-repeat bg-contain "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
       
      </div>

      {/* ShoppingCart */}
      <div className="flex-grow">
        <Shopping />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
