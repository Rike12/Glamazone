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
    <div className="bg-pink-100 p-8 min-h-screen">
      <div className="container mx-auto p-6 rounded-lg shadow-lg">
        {cartItems.map(item => (
          <div key={item.id} className="flex gap-20 border-b py-4">
            <div className="w-1/6 bg-[#FFD7BE]">
              <img src={item.image} alt={item.name} className="w-full" />
            </div>
            
            <div className="flex justify-between w-full pl-4 border-4">
              <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <button className="text-gray-600 hover:text-gray-900  flex">
                    <img src={Minus} alt="Decrease quantity" />
                    <span className="mx-3 mt-3">{item.quantity}</span>
                    <img src={Plus} alt="Increase quantity" className="mt-2" />
                  </button>
                </div>
                <img src={Delete} alt="Delete item" className="w-4 h-4 mr-8 mt-3 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
  
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="text-lg font-semibold ml-20">Grand Total ({cartItems.length} items)</p>
          </div>
          <div>
            <p className="text-lg font-semibold">₦{getTotal()}</p>
          </div>
        </div>
  
        <div className="text-right">
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
