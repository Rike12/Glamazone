import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/logo.png';
import Master from './assets/master.png';
import Visa from './assets/visa.png';
import Palpay from './assets/palpay.png';
import Apple from './assets/apple.png';
import Google from './assets/google.png';
import Home from './assets/home.png';
import './App.css';
import product1 from './assets/frame1.png';
import product2 from './assets/Foundation/frame1.png';
import product3 from './assets/Powder/frame1.png';











const Checkout = () => {


  return (
    <div className="bg-[#FFF4F4] h-[2500px] w-[1400px]  ">

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
      <Link to="/cart" className="text-[#060B0F] relative">
        Cart
       
      </Link>
      <Link to="#" className="text-[#060B0F] relative">
        Check Out
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
      </Link>
    </nav>
  </div>
</header>

 {/* Deelivery */}
      <h2 className="text-2xl font-bold mb-4 ml-8">Delivery Information</h2>
      <form className="grid grid-cols-1 gap-6 mb-6 ml-8 w-[1280px] ">
  <div className="flex space-x-8 mb-4 mt-6">
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

  <div className="flex space-x-8 mb-4">
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

  <div className="flex space-x-8">
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
  <div class="flex items-center space-x-2">
        <input type="checkbox" id="defaultAddress" class="form-checkbox h-4 w-4 text-pink-600"/>
        <label for="defaultAddress" class="text-gray-700">Set as default address</label>
    </div>
</form>

 {/* Payment */}
      <h2 className="text-2xl font-bold mb-4 ml-8">Payment Method</h2>
   <div className="  ml-8">
  <div className="mb-4 flex items-center gap-4 w-[1260px] border-b border-red-900 pb-3   ">
    <label className="flex items-center gap-4 ">
     <span className='flex gap-60'>
     <span className="text-lg font-medium flex gap-10"> <input type="radio" checked name="payment" className="form-radio text-red-500 w-6 h-6" /><p>Bank Transfer</p></span>
      <div className="flex space-x-4 ml-auto">
        <img src={Master} alt="Logo" className="h-8" />
        <img src={Visa} alt="Logo" className="h-8" />
      </div>
      </span>
    </label>
  </div>
  
  <div className="mb-4 flex items-center gap-4  w-[1260px] border-b border-red-900 pt-10 ">
    <label className="flex items-center gap-4 w-full">
     
     <span className='flex gap-44'>
     <span className="text-lg font-medium flex gap-16"> <input type="radio" checked name="payment" className="form-radio text-red-500 w-6 h-6 ring-2 border-pink-500 rounded-full" /><p>Third party Transfer</p></span>

      <div className="flex space-x-4 ml-auto mb-1">
        <img src={Palpay} alt="Logo" className="h-8" />
        <div className="flex items-center space-x-2">
          <span className="flex items-center space-x-1">
            <img src={Apple} alt="Logo" className="h-6" />
            <span className="font-bold">Pay</span>
          </span>
          <span className="flex items-center space-x-1">
            <img src={Google} alt="Logo" className="h-6" />
            <span className="font-bold text-lg">Pay</span>
          </span>
        </div>
      </div>
      </span>
    </label>
  </div>
  
  <div className="flex justify-between items-center  w-[1260px] border-b border-red-900 pt-10 ">
    <label className="flex items-center w-full">
      
      <span className='flex gap-64'>
      <span className="text-lg font-medium flex gap-10"> <input type="radio" checked name="payment" className="form-radio text-red-500 w-6 h-6 " /><p>Bank Transfer</p>
     
      </span>
      <div className="flex space-x-2">
        <img src={Home} alt="Home" className="h-8 mb-1" />
      </div>
      </span>
    </label>
  </div>
</div>


 {/* Summary */}
      <h2 className="text-2xl font-bold mb-4 ml-8">Order Summary</h2>
      <div className="mb-6">
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <div className="flex items-center">
            <img src="path/to/product1.png" alt="Product 1" className="h-12 w-12 mr-4" />
            <div>
              <h3 className="font-semibold">Item Name</h3>
              <p>Product description</p>
            </div>
          </div>
          <div>
            <p>₦20,000</p>
            <p>Quantity: 2</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-b pb-2 mb-2 ml-8 mr-20">
          <div className="flex items-center">
            <img src="path/to/product2.png" alt="Product 2" className="h-12 w-12 mr-4" />
            <div>
              <h3 className="font-semibold">Item Name</h3>
              <p>Product description</p>
            </div>
          </div>
          <div>
            <p>₦20,000</p>
            <p>Quantity: 2</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="path/to/product3.png" alt="Product 3" className="h-12 w-12 mr-4" />
            <div>
              <h3 className="font-semibold">Item Name</h3>
              <p>Product description</p>
            </div>
          </div>
          <div>
            <p>₦20,000</p>
            <p>Quantity: 2</p>
          </div>
        </div>
      </div>

      <div className="text-right font-bold text-xl mb-6">
        Grand Total = <span>₦124,075.96</span>
      </div>

      <Link to="/carddetails" className="text-[#060B0F] relative">
        
        
     <button className="w-[854px] py-3 bg-red-500 justify-center items-center text-white font-bold rounded-lg">Place Order</button>
     </Link>
  
    </div>
  );
};

export default Checkout;
