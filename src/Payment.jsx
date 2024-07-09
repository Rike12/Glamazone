import React from 'react';
import Master from './assets/master.png';
import Visa from './assets/visa.png';
import Palpay from './assets/palpay.png';
import Apple from './assets/apple.png';
import Google from './assets/google.png';
import Home from './assets/home.png';

const Payment = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold mb-10">Payment Method</h2>
      <div>
        <div className="mb-4 flex items-center gap-4 w-full border-b-2 border-gray-300 pt-3">
          <label className="flex items-center sm:gap-6 md:gap-28 lg:gap-20 xl:gap-28 w-full">
            <span className="flex justify-between lg:w-[600px] md:w-[500px] sm:w-[400px] sm:gap-10 md:gap-20 lg:gap-20 xl:gap-28">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer">
                <input
                  name="description"
                  type="radio"
                  className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-red-800 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                  id="react_version4"
                />
                <span className="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <span className="text-xl flex items-center gap-2 mb-2">
                <p>Card Payment</p>
              </span>
              <div className="flex items-center space-x-4 sm:ml-4 md:ml-16 lg:ml-16 xl:ml-16 mb-2">
                <span className="flex items-center space-x-1">
                  <img src={Master} alt="Apple Pay" className="h-14 lg:w-16 sm:w-8 md:w-12" />
                </span>
                <span className="flex items-center space-x-1">
                  <img src={Visa} alt="Google Pay" className="h-14 lg:w-16 sm:w-8 md:w-12" />
                </span>
              </div>
            </span>
          </label>
        </div>

        <div className="mb-4 flex items-center gap-4 w-full border-b-2 border-gray-300 pt-3">
          <label className="flex items-center sm:gap-6 md:gap-28 lg:gap-20 xl:gap-28 w-full">
            <span className="flex justify-between lg:w-[360px] md:w-[260px] sm:w-[160px]  sm:gap-10 md:gap-20 lg:gap-20 xl:gap-28">
              <label className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer">
                <input
                  name="description"
                  type="radio"
                  className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-red-800 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                  id="react_version4"
                />
                <span className="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <span className="text-xl flex items-center gap-2 w-[200px]">
                <p>Third Party Payment</p>
              </span>
            </span>
            <div className="flex space-x-4 sm:ml-4 md:ml-6 lg:ml-6 xl:ml-6">
              <img src={Palpay} alt="Palpay" className="h-8" />
              <span className="flex items-center space-x-1">
                <img src={Apple} alt="Apple Pay" className="h-6" />
                <span className="font-bold">Pay</span>
              </span>
              <span className="flex items-center space-x-1">
                <img src={Google} alt="Google Pay" className="h-6" />
                <span className="font-bold text-lg">Pay</span>
              </span>
            </div>
          </label>
        </div>

        <div className="mb-4 flex items-center gap-4 w-full border-b-2 border-gray-300 pt-3">
          <label className="flex items-center sm:gap-6 md:gap-28 lg:gap-20 xl:gap-28 w-full">
            <span className="flex justify-between lg:w-[500px] md:w-[400px] sm:w-[400px] sm:gap-10 md:gap-20 lg:gap-20 xl:gap-28">
              <label className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer">
                <input
                  name="description"
                  type="radio"
                  className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-red-800 text-red-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-500 checked:before:bg-red-500 hover:before:opacity-10"
                  id="react_version4"
                />
                <span className="absolute text-red-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <span className="text-xl flex items-center gap-40  md:mr-4 ">
                <p> Bank Transfer</p>
                <div className="flex space-x-4 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4">
                  <img src={Home} alt="Palpay" className="h-8" />
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
