import React from 'react';
import Card from './assets/card.png';
import './App.css';

const CreditCardForm = () => {
  return (
    <div className="w-[1210px] h-[300px]  mx-auto mt-20 p-8 border border-gray-300 rounded-md">
      <form>
        <div className="mb-4 mt-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="cardNumber">
            Card Number
          </label>
          <div className="mt-1 flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-[#68686B] bg-gray-50 text-gray-500 sm:text-sm">
            <img src={Card} alt="card image" className="h-8" />
            </span>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="flex-1 min-w-0 block w-full px-3 py-2  text-[#858885] rounded-r-md border border-[#68686B] focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="0000 0000 0000 0000"
            />
          </div>
        </div>
        
        <div className="flex space-x-24 mb-4 mt-12">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700" htmlFor="cvc">
              Security Code
            </label>
            <input
              type="text"
              id="cvc"
              name="cvc"
              className="mt-1 block w-[520px] px-3 py-2 text-[#858885] border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="CVC"
            />
          </div>
          <div className="flex-1 ">
            <label className="block text-sm font-medium text-gray-700" htmlFor="expiration">
              Expiration
            </label>
            <input
              type="text"
              id="expiration"
              name="expiration"
              className="mt-1 block w-[520px] px-3 text-[#858885] py-2 border border-[#68686B] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="MM/YY"
            />
          </div>
        </div>
        <div className="flex items-start mb-4">
          <div className="flex items-center h-5">
            <input
              id="saveCard"
              name="saveCard"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-5 text-sm">
            <label htmlFor="saveCard" className="">
              Save card details
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreditCardForm;



