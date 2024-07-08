import React from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Twitter from './assets/twitter.png';
import Instagram from './assets/instagram.png';
import Facebook from './assets/facebook.png';

const Footer = () => {
  return (
    <div className="bg-[#4E3D42] px-24 py-4">
      <div className="flex justify-between items-start">
      <div className="flex">
  <img src={Logo} alt="Logo" className="h-8 " />
  <h1 className='logo text-[#EC5766] text-2xl'>Glamazone</h1>
   
  </div>
        <div className="flex flex-1 justify-center mr-20 pt-2">
          <div className="flex gap-32 justify-center items-start">
            <div className="text-white">
              <div className="text-md font-bold">Quick Links</div>
              <a className="my-1 block text-sm" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span></a>
              <a className="my-1 block text-sm" href="/#">Our Products <span className="text-teal-600 text-xs p-1"></span></a>
              <a className="my-1 block text-sm" href="/#">Favorites </a>
            </div>
            <div className="text-white">
              <div className="text-md font-bold">Contact</div>
              <a className="my-1 block text-sm" href="/#">Phone <span className="text-teal-600 text-xs p-1"></span></a>
              <a className="my-1 block text-sm" href="/#">Email <span className="text-teal-600 text-xs p-1"></span></a>
              <a className="my-1 block text-sm" href="/#">Address <span className="text-teal-600 text-xs p-1"></span></a>
            </div>
            <div className="text-white">
              <div className="text-md font-bold">Socials</div>
              <a className="my-1 block text-sm" href="/#">Instagram </a>
              <a className="my-1 block text-sm" href="/#">LinkedIn </a>
              <a className="my-1 block text-sm" href="/#">Whatsapp</a>
              <a className="my-1 block text-sm" href="/#">X</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-lg border-2 border-[#FBFFFC] rounded-md pb-4 bg-[#4E3D42]">
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
      <div className="">
        <div className="flex justify-between text-sm text-white">
          <div className="my-3">© 2024 Glamazone Inc</div>
          <div className="flex gap-2">
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
  );
};

export default Footer;
