import React from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Twitter from './assets/twitter.png';
import Instagram from './assets/instagram.png';
import Facebook from './assets/facebook.png';

const Footer = () => {
  return (
    <div className="bg-[#4E3D42] px-4 md:px-16 lg:px-24 pt-10 w-full lg:w-[1440px] h-auto lg:h-[540px]">
      <div className='w-full lg:w-[1200px] h-auto lg:h-[480px]'>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex mb-4 lg:mb-0 lg:mr-40">
            <img src={Logo} alt="Logo" className="h-8" />
            <h1 className='logo text-[#EC5766] text-2xl ml-2'>Glamazone</h1>
          </div>
          
        </div>
        <div className="flex flex-col lg:flex-row justify-between  lg:w-[700px]  lg:gap-20 lg:ml-64">
          <div className="text-white text-center lg:text-left lg:ml-8">
            <div className="text-md font-bold">Quick Links</div>
            <a className="my-1 block text-sm" href="/#">About Us</a>
            <a className="my-1 block text-sm" href="/">Our Products</a>
            <a className="my-1 block text-sm" href="/#">Favorites</a>
          </div>
          <div className="text-white text-center lg:text-left lg:ml-10">
            <div className="text-md font-bold">Contact</div>
            <a className="my-1 block text-sm" href="/#">Phone</a>
            <a className="my-1 block text-sm" href="/#">Email</a>
            <a className="my-1 block text-sm" href="/#">Address</a>
          </div>
          <div className="text-white text-center lg:text-left lg:ml-20">
            <div className="text-md font-bold">Socials</div>
            <a className="my-1 block text-sm" href="/#">Instagram</a>
            <a className="my-1 block text-sm" href="/#">LinkedIn</a>
            <a className="my-1 block text-sm" href="/#">Whatsapp</a>
            <a className="my-1 block text-sm" href="/#">X</a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 lg:hidden">
          <div className="w-full md:w-[660px] h-[200px] border-2 border-[#FBFFFC] rounded-md pt-8 bg-[#4E3D42]">
            <h2 className="text-white text-lg font-semibold text-center mt-4 mb-2">Subscribe to our Newsletter</h2>
            <form className="px-8">
              <div className="mb-2">
                <label htmlFor="email" className="block text-gray-200 text-sm mb-1">Email:</label>
                <div className="flex gap-4">
                  <input type="email" id="email" className="flex-1 p-2 bg-transparent text-white border-t border-b border-gray-400 outline-none" />
                  <button type="submit" className="bg-[#EC5766] text-white py-2 px-6 rounded hover:bg-white hover:text-[#EC5766]">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center mt-4">
          <div className="w-[660px] h-[200px] border-2 border-[#FBFFFC] rounded-md pt-8 bg-[#4E3D42]">
            <h2 className="text-white text-lg font-semibold text-center mt-4 mb-2">Subscribe to our Newsletter</h2>
            <form className="px-8">
              <div className="mb-2">
                <label htmlFor="email" className="block text-gray-200 text-sm mb-1">Email:</label>
                <div className="flex gap-4">
                  <input type="email" id="email" className="flex-1 p-2 bg-transparent text-white border-t border-b border-gray-400 outline-none" />
                  <button type="submit" className="bg-[#EC5766] text-white py-2 px-6 rounded hover:bg-white hover:text-[#EC5766]">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-[1240px] lg:h-[25px] md:pb-10 mt-10 lg:mr-20">
          <div className="flex flex-col lg:flex-row justify-between text-sm text-white pt-10 pb-10">
            <div className="mb-4 lg:mb-0 text-center lg:text-left">© 2024 Glamazone Inc</div>
            <div className="flex justify-center lg:justify-start gap-2">
              <a href="/#" className="mx-1">
                <img src={Instagram} alt="Instagram" className="w-4" />
              </a>
              <a href="/#" className="mx-1">
                <img src={Twitter} alt="Twitter" className="w-4" />
              </a>
              <a href="/#" className="mx-1">
                <img src={Facebook} alt="Facebook" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
