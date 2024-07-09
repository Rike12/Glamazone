import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';
import './App.css';
import search from './assets/search.png';
import backgroundImage from './assets/tray.png';
import Footer from './Footer';
import Shopping from './Shopping';

const Cart = () => {
  return (
    <div className='bg-[#FFF4F4] h-full w-full overflow-y-hidden overflow-x-hidden'>
      {/* Header */}
      <header className="p-8 h-[140px] max-w-[1440px]">
        <div className="container flex flex-wrap gap-8 lg:w-[800px]">
          <div className="flex space-x-2">
            <img src={Logo} alt="Logo" className="h-8" />
            <h1 className='text-[#EC5766] text-2xl logo'>Glamazone</h1>
          </div>
          <nav className="flex flex-wrap space-x-4 md:space-x-16 mt-2 md:ml-80">
            <Link to="/" className="text-[#060B0F] relative">
              Our Products
            </Link>
            <Link to="#" className="text-[#060B0F] relative">
              Cart
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
            </Link>
            <Link to="/checkout" className="text-[#060B0F] relative">
              Check Out
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="flex  items-center justify-around max-w-[1440px]  px-4">
      <div className="relative w-full md:max-w-lg mb-8 md:mb-48">
        <img
          src={search}
          alt="Search icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 ml-4 md:ml-10 w-5 h-5"
        />
        <input
          type="text"
          className="border border-black bg-[#FFF4F4] rounded-full py-2 ml-4 md:ml-10 pl-10 pr-4 focus:outline-none w-full"
          placeholder="Search..."
        />
      </div>
      <div
        className="flex items-center  h-[250px] md:h-[350px] w-[1440px] bg-no-repeat bg-contain bg-center bg-contain md:mb-0 pr-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>

      {/* ShoppingCart */}
      <div className='mb-6 max-w-[1440px] mx-auto px-4'>
        <Shopping />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
