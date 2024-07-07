import React from 'react';

import Logo from './assets/logo.png';
import Cart from './assets/cart.png';
import eight from './assets/eight.png';
import './App.css';


const Header = () => {
  return (



<div>

<header className=" py-6">
<div className="container mx-auto flex justify-between items-center">
  <div className="flex">
  <img src={Logo} alt="Logo" className="h-8 " />
  <h1 className='logo text-[#EC5766] text-2xl'>Glamazone</h1>
   
  </div>
  <nav className="flex space-x-16 justify-between">
    
    <a href="#" className="text-[#060B0F]  relative">
      Our Products
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-400"></span>
    </a>
    <a href="#" className="text-[#060B0F] ">Cart</a>
    <a href="#" className="text-[#060B0F] ">Check Out</a>
   
  </nav>
  <div className="relative inline-block">
  <img
    src={Cart}
    alt="Cart icon"
    className="w-5 h-5"
  />
  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
    <img
      src={eight}
      alt="Notification icon"
      className="w-3 h-3"
    />
  </span>
</div>

</div>
</header>
</div>

  );
};

export default Header;