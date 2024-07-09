import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';
import './App.css';
import Summary from './Summary';
import Payment from './Payment';




const Checkout = () => {
  return (
    <div className="bg-[#FFF4F4] w-[1350px] h-[1860px] overflow-x-hidden overflow-y-auto ">
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
    
      </Link>
   
      <Link to="/checkout" className="text-[#060B0F] relative">
        Check Out
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
      </Link>
    </nav>
  </div>
</header>

      {/* Delivery */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>
        <form className="grid grid-cols-1 gap-6 mb-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4 mt-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="number">
                Phone Number
              </label>
              <div className="mt-1 flex">
                <span className="flex items-center px-3 rounded-l-md border border-r-0 border-[#68686B] bg-gray-50 text-gray-500 sm:text-sm">
                  +234
                </span>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="flex-1 block w-full px-3 py-2 text-[#858885] rounded-r-md border border-[#68686B] focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="mt-1 block w-full px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Address"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="zipcode">
                Zip Code
              </label>
              <input
                type="text"
                id="zipcode"
                name="zipcode"
                className="mt-1 block w-full px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Zip Code"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <input
              type="text"
              placeholder="Country"
              className="flex-1 block w-full px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              placeholder="State/Province/Region"
              className="flex-1 block w-full px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <input
              type="text"
              placeholder="City"
              className="flex-1 block w-full px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="defaultAddress" className="form-checkbox h-4 w-4 text-pink-600"/>
            <label htmlFor="defaultAddress" className="text-gray-700">Set as default address</label>
          </div>
        </form>

        {/* Payment */}
        <Payment/>
        {/* Summary */}
        <h2 className="text-xl font-bold mt-8">Order Summary</h2>
        <Summary />

        <div className="flex justify-center mt-8">
          <Link to="/carddetails" className=" ">
            <button className="w-[800px] py-2 bg-red-500 text-white font-bold rounded-full">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
