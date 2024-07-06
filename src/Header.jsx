import React from 'react';

import Logoo from './assets/logoo.png';


const Header = () => {
  return (



<div>

<header class="bg-pink-50 py-6">
<div class="container mx-auto flex justify-between items-center">
  <div class="flex items-center">
  <img src={Logoo} alt="Logo" className="h-8 " />
   
  </div>
  <nav class="flex space-x-4">
    <a href="#" class="text-gray-700 hover:text-red-400">Home</a>
    <a href="#" class="text-gray-700 hover:text-red-400">About Us</a>
    <a href="#" class="text-gray-700 hover:text-red-400 relative">
      Our Products
      <span class="absolute bottom-0 left-0 w-full h-0.5 bg-red-400"></span>
    </a>
    <a href="#" class="text-gray-700 hover:text-red-400">Contact Us</a>
  </nav>
  <div class="flex space-x-4">
    <a href="#" class="bg-[#EC5766] text-white px-10 text-md py-2 rounded-full hover:bg-white hover:text-[#EC5766]">Shop now</a>
    <a href="/signup" class="border border-[#EC5766] text-md text-[#EC5766] px-10 py-2 rounded-full hover:bg-[#EC5766] hover:text-white">Sign up</a>
  </div>
</div>
</header>
</div>

  );
};

export default Header;