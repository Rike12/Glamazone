import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import Cart from "./assets/cart.png";
import eight from "./assets/eight.png";
import "./App.css";

const Header = () => {
  return (
    <div>
      <header className="p-8">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-8" />
            <h1 className="text-[#EC5766] text-2xl logo">Glamazone</h1>
          </div>
          <nav className="flex space-x-16">
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
      </header>
    </div>
  );
};

export default Header;
