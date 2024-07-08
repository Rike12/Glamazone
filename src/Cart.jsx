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
    <div className='bg-[#FFF4F4] h-[1400px] w-[1440px] flex flex-col'>
      {/* Header */}
      <header className="p-8 h-[140px] w-[2400px]">
  <div className="container flex gap-8">
    <div className="flex space-x-2">
      <img src={Logo} alt="Logo" className="h-8" />
      <h1 className='text-[#EC5766] text-2xl logo'>Glamazone</h1>
    </div>
    <nav className="flex space-x-16 mt-2 ml-80">
      <Link to="/" className="text-[#060B0F] relative">
        Our Products
      </Link>
      <Link to="#" className="text-[#060B0F] relative">
        Cart
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
      </Link>
      <Link to="/checkout" className="text-[#060B0F]">Check Out</Link>
    </nav>
  </div>
</header>


      {/* Hero */}
      <div className="flex  items-center justify-around   h-[350px] w-[1440px]  ">


      <div className="relative max-w-lg w-full mb-48 ">
          <img
            src={search}
            alt="Search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 ml-10 w-5 h-5"
          />
          <input
            type="text"
            className="border border-black bg-[#FFF4F4] rounded-full py-2  ml-10 pl-10 pr-4 focus:outline-none w-full"
          />
        </div>
        <div
          className="h-[350px] w-[1440px]   bg-no-repeat bg-contain  mr-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
       
      </div>

      {/* ShoppingCart */}
      <div className='mb-6'>
        <Shopping />
        </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
