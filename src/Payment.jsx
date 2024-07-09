import React from 'react';
import Master from './assets/master.png';
import Visa from './assets/visa.png';
import Palpay from './assets/palpay.png';
import Apple from './assets/apple.png';
import Google from './assets/google.png';
import Home from './assets/home.png';





const Payment = () => {
    return (
        <div className='mt-20'>
<h2 className="text-2xl font-bold  mb-10">Payment Method</h2>
<div>
<div className="mb-4 flex items-center gap-4 w-full border-b-2 border-gray-300 pt-3">
    <label className="flex items-center gap-28 w-[600px]">
      <span className="flex justify-between gap-20">
      <label className="relative flex items-center p-3  rounded-full cursor-pointer">
      <input name="description" type="radio"
  className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-red-800 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
  id="react_version4" />
  <span
    className="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
    </svg>
  </span>
</label>

        <span className="text-xl flex items-center gap-2 mb-2">
          <p>Card Payment</p>
        </span>
      </span>
     
      
        <div className="flex items-center space-x-4 ml-16 mb-2">
          <span className="flex items-center space-x-1 ">
            <img src={Master} alt="Apple Pay" className="h-14 w-16" />
            
          </span>
          <span className="flex items-center space-x-1">
            <img src={Visa} alt="Google Pay" className="h-14 w-16" />
           
          </span>
        </div>
     
    </label>
  </div>

  <div className="mb-4 flex items-center gap-4 w-full border-b-2 border-gray-300 pt-3">
    <label className="flex items-center gap-28 w-[600px]">
      <span className="flex justify-between gap-20">
      <label class="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer">
      <input name="description" type="radio"
  class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-red-800 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
  id="react_version4" />
  <span
    class="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
    </svg>
  </span>
</label>

        <span className="text-xl flex items-center gap-2 w-[200px]">
          <p>Third Party Payment</p>
        </span>
      </span>
      <div className="flex space-x-8 ml-6">
        <img src={Palpay} alt="Palpay" className="h-8" />
        <span className="flex items-center space-x-1 ">
            <img src={Apple} alt="Apple Pay" className="h-6" />
            <span className="font-bold">Pay</span>
          </span>
          <span className="flex items-center space-x-1 pl-10">
            <img src={Google} alt="Google Pay" className="h-6" />
            <span className="font-bold text-lg">Pay</span>
          </span>
        
      </div>
    </label>
  </div>

  <div className="mb-4 flex items-center gap-4 w-full border-b-2 border-gray-300 pt-3">
    <label className="flex items-center gap-28 w-[600px]">
      <span className="flex justify-between gap-20">
      <label class="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer">
      <input name="description" type="radio"
  class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-red-800 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
  id="react_version4" />
  <span
    class="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
    </svg>
  </span>
</label>

        <span className="text-xl flex items-center gap-40">
          <p> Bank Transfer</p>
          <div className="flex space-x-4">
        <img src={Home} alt="Palpay" className="h-8 ml-10" />
        
        
      </div>
        </span>
      </span>
      
    </label>
  </div>
</div>

        </div>
      
  );
};

export default Payment;