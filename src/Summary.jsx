import React from 'react';
import product1 from './assets/frame1.png';
import product2 from './assets/Foundation/frame1.png';
import product3 from './assets/Powder/frame1.png';
import Plus from './assets/plus.png';
import Minus from './assets/minus.png';
import Delete from './assets/delete.png';

const ShoppingCart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
      price: 20422.41,
      quantity: 1,
      image: product1,
    },
    {
      id: 2,
      name: "Pro Filt'r Soft Matte Longwear Liquid Foundation",
      price: 32865.32,
      quantity: 2,
      image: product2,
    },
    {
      id: 3,
      name: 'Studio Fix Powder Plus Foundation',
      price: 37992.91,
      quantity: 1,
      image: product3,
    },
  ];

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="w-full md:w-[1400px]">
      <div className="p-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row gap-6 border-b-2 border-gray-300 py-2 mb-6 w-full">
            <div className="w-full md:w-1/6 bg-[#FFD7BE]">
              <img src={item.image} alt={item.name} className="w-full" />
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full md:w-[760px] pl-4">
              <div className="flex flex-col flex-1 mt-6">
                <span className="flex flex-col md:flex-row justify-between">
                  <h3 className="text-lg font-semibold mt-4 mb-6">{item.name}</h3>
                  <div className="flex items-center mt-4 md:mt-0">
                    <button className="text-gray-600 hover:text-gray-900 flex">
                      <img src={Minus} alt="Decrease quantity" />
                      <span className="mx-3 mt-3">{item.quantity}</span>
                      <img src={Plus} alt="Increase quantity" className="mt-2" />
                    </button>
                  </div>
                </span>
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex-1 flex flex-col">
                    <p>Total</p>
                    <h3 className="text-lg font-medium">₦{item.price}</h3>
                  </div>
                  <div className="flex-1 flex flex-col mt-4 md:mt-0">
                    <p>Total</p>
                    <h3 className="text-lg font-medium">₦{item.price}</h3>
                  </div>
                  <img src={Delete} alt="Delete item" className="w-4 h-4 mt-5 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-300 mt-24 mb-6 w-full">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Grand Total ({cartItems.length} items)</p>
          </div>
          <div>
            <p className="text-lg font-semibold">₦{getTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
