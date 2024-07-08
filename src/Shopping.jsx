import React from 'react';
import product1 from './assets/frame1.png';
import product2 from './assets/Foundation/frame1.png';
import product3 from './assets/Powder/frame1.png';
import Plus from './assets/plus.png';
import Minus from './assets/minus.png';
import Delete from './assets/delete.png';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
    price: '₦20,422.41',
    total: '₦20,422.41',
    quantity: 1,
    color: ['#EC5766'],
    image: product1,
  },
  {
    id: 2,
    name: 'Pro Filty Soft Matte Longwear Liquid Foundation',
    price: '₦32,065.32',
    total: '₦63,730.64',
    quantity: 2,
    color: ['#A52A2A'],
    image: product2,
  },
  {
    id: 3,
    name: 'Studio Fix Powder Plus Foundation',
    price: '₦37,992.91',
    total: '₦37,992.91',
    quantity: 1,
    color: ['#A52A2A'],
    image: product3,
  },
];

const Shopping = () => {
  const subtotal = products.reduce((acc, product) => acc + parseFloat(product.total.replace(/[^0-9.-]+/g, '')), 0).toFixed(2);

  return (
    <div className=" p-2 h-[800px] w-[1350px] mb-20 ">
      <h2 className="text-center text-2xl font-semibold">Shopping Cart</h2>
      <div className="w-full ml-4">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="bg-[#FFD7BE] p-2 h-[200px] w-[200px]" />
              <div className="flex flex-col flex-grow ml-3">
                <span className="font-medium text-[#130F10] w-2/5">{product.name}</span>
                <div className="flex space-x-2 mt-1">
                  <span>Color</span>
                  {product.color.map((color, index) => (
                    <div key={index} className="w-4 h-4 mt-1.5 rounded-full" style={{ backgroundColor: color }}></div>
                  ))}
                
                </div>
                <img src={Delete} alt="plus icon" className="mt-1 w-5" />
              </div>
            </div>

            <div className="flex flex-col items-end mr-10 mb-20 gap-10">
              <div className="flex items-center justify-between gap-20">
                <span className="flex flex-col">
                  <span className="flex">Price</span>
                  <span className="font-bold">{product.price}</span>
                </span>

                <div className="flex items-center">
                  <img src={Minus} alt="minus icon" className="w-6" />
                  <span className="mx-2">{product.quantity}</span>
                  <img src={Plus} alt="plus icon" className="mt-1 w-6" />
                </div>

                <span className="flex flex-col">
                  <span className="flex">Total</span>
                  <span className="font-bold">{product.total}</span>
                </span>
              </div>
            
            </div>
          </div>
        ))}

<div className="items-end flex flex-col justify-end space-x-3 mr-10  ">
        <span className="flex gap-24 pb-4 ">
          <p className="text-xl font-md">Subtotal:</p>
          <p className="font-bold">₦{subtotal}</p>
        </span>
        <button className="bg-red-400 text-white py-2 px-24 rounded-full">
          <a href="/checkout" className="text-[#060B0F]">Check Out</a>
        </button>
      </div>
      </div>

    
    </div>
  );
};

export default Shopping;
