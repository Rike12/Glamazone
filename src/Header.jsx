import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import Cart from "./assets/cart.png";
import eight from "./assets/eight.png";
import productIcon from "./assets/lip.png"; 
import cartIcon from "./assets/cart.png"; 
import favoriteIcon from "./assets/star.png"; 
import closeIcon from "./assets/close.png";  
import "./App.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 md:p-8 bg-[#FFF4F4]">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-20">
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-[#060B0F]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className="flex gap-2 mr-40">
            <img src={Logo} alt="Logo" className="h-8" />
            <h1 className="text-[#EC5766] text-2xl logo">Glamazone</h1>
          </div>
        </div>
        <nav className="hidden md:flex space-x-16 mr-40">
          <Link to="#" className="text-[#060B0F] relative">
            Our Products
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
          </Link>
          <Link to="/cart" className="text-[#060B0F] relative">
            Cart
          </Link>
          <Link to="/checkout" className="text-[#060B0F]">
            Check Out
          </Link>
        </nav>
        <div className="relative inline-block">
          <img src={Cart} alt="Cart icon" className="w-5 h-5" />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <img src={eight} alt="Notification icon" className="w-3 h-3" />
          </span>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFF4F4] shadow-md mt-4 p-6 relative">
          <button className="absolute top-4 left-4 focus:outline-none" onClick={toggleMenu}>
            <img src={closeIcon} alt="Close menu" className="w-6 h-6"/>
          </button>
          
          <nav className="flex flex-col space-y-4 mt-10">
            <Link to="#" className="flex items-center text-[#060B0F]" onClick={toggleMenu}>
              <img src={productIcon} alt="Products" className="w-5 h-5 mr-2"/>
              Products
            </Link>
            <Link to="/cart" className="flex items-center text-[#060B0F]" onClick={toggleMenu}>
              <img src={cartIcon} alt="Shopping cart" className="w-5 h-5 mr-2"/>
              Shopping cart
            </Link>
            <Link to="/checkout" className="flex items-center text-[#060B0F]" onClick={toggleMenu}>
              <img src={favoriteIcon} alt="Favorites" className="w-5 h-5 mr-2"/>
              Favorites
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
