import React from 'react';
import './App.css';
import Star from './assets/star.png';
import Plus from './assets/plus.png';
import Minus from './assets/minus.png';
import Arrowr from './assets/right.png';
import Frame1 from './assets/Powder/frame1.png';
import Frame2 from './assets/Powder/frame2.png';
import Frame3 from './assets/Powder/frame3.png';
import Frame4 from './assets/Powder/frame4.png';
import Frame5 from './assets/Powder/frame5.png';
import Frame6 from './assets/Powder/frame6.png';
import Frame7 from './assets/Powder/frame7.png';
import Frame8 from './assets/Powder/frame8.png';
import Frame9 from './assets/Powder/frame9.png';
import Frame10 from './assets/Powder/frame10.png';

const productList = [
  {
    id: 1,
    category: 'Powder',
    name: 'Studio Fix Powder Plus Foundation',
    image: Frame1,
    price: '₦37,992.91',
    colors: ['#AC520E', '#A52A2A', '#813405'],
  },
  {
    id: 2,
    category: 'Powder',
    name: 'Hourglass Vanish Airbrush Pressed Powder-Translucent Deep',
    image: Frame2,
    price: '₦52,545.32',
    colors: ['#C28865', '#CD5A14', '#A94000'],
  },
  {
    id: 3,
    category: 'Powder',
    name: 'IT Cosmetics Bye Bye Pores Press Powder 9.0g',
    image: Frame3,
    price: '₦83,430.50',
    colors: ['#DD813C', '#A95E31', '#BE500D', '#A52A2A'],
  },
  {
    id: 4,
    category: 'Powder',
    name: 'Clinique Almost Powder Foundation SPF15 05 Medium 10g',
    image: Frame4,
    price: '₦68,307.11',
    colors: ['#DD813C', '#DF5F11', '#984411','#8A3C0C'],
  },
  {
    id: 5,
    category: 'Powder',
    name: 'Dr. Hauschka Colour Correcting Powder 02 Calming 8g',
    image: Frame5,
    price: '₦82,603.95',
    colors: ['#DF5F11', '#8A3C0C'],
  },
  {
    id: 6,
    category: 'Powder',
    name: 'Clinique Blended Face Powder Invisible Blend 25g',
    image: Frame6,
    price: '₦69,895.65',
    colors: ['#DD813C', '#984411', '#8A3C0C','#592B00'],
  },
  {
    id: 7,
    category: 'Powder',
    name: 'Clarins Ever Matte Loose Powder 01 Universal Light 15g',
    image: Frame7,
    price: '₦86,352.51',
    colors: ['#3B1F14', '#A9794A'],
  },
  {
    id: 8,
    category: 'Powder',
    name: 'Shiseido Future Solution LX Total Radiance Loose Powder 13g',
    image: Frame8,
    price: '₦224,154.90',
    colors: ['#DD813C', '#984411', '#BE500D'],
  },
  {
    id: 9,
    category: 'Powder',
    name: 'Shiseido Synchro Skin Invisible Silk Pressed Powder 10g',
    image: Frame9,
    price: '₦93,568.73',
    colors: ['#DF5F11', '#BE500D', '#AC520E', '#DD813C'],
  },
  {
    id: 10,
    category: 'Powder',
    name: 'Guerlain Terracotta Matte The Sculpting Powder Medium 10g',
    image: Frame10,
    price: '₦79,584.27',
    colors: ['#DF5F11', '#8A3C0C', '#DD813C','#DF5F11'],
  },
];

const Powder = ({ product }) => {
  return (
    <div className=" rounded-lg ml-4 h-[500px] flex flex-col justify-between">
      <div className="bg-[#FFD7BE] relative ">
        <img src={product.image} className="" alt={product.name} />
        <img src={Star} alt="Star" className="h-8 absolute top-2 right-2 m-2" />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h2 className="text-md text-[#4E3D42] font-medium">{product.name}</h2>
      </div>

      <div className="flex justify-between ">
        <div>
          <p className="text-[#4E3D42] font-medium">Price</p>
          <p className="text-lg font-semibold">{product.price}</p>
        </div>
        <div className="flex items-center mt-3">
          <img src={Minus} alt="minus icon" className="w-6" />
          <span className="mx-2 text-md font-semibold py-2">1</span>
          <img src={Plus} alt="plus icon" className="mt-1 w-6" />
        </div>
      </div>

      <div className="mt-2">
        <span className="block text-sm font-medium">Colors</span>
        <div className="flex space-x-2 mt-1">
          {product.colors.map((color, index) => (
            <div key={index} className="w-5 h-5 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>
      <button className="mt-4 bg-[#EC5766] text-white py-2 px-8 rounded-full">Add to cart</button>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className=" relative">
     <div className='flex justify-between'>
      <h1 className="text-2xl mb-4 font-medium ml-10">Powder</h1>
      <button className=" mr-20"> 
          <img src={Arrowr} alt="Arrow Right" className="h-8" />
        </button>
        </div>
      <div className="relative flex items-center">
       
        <div className="flex space-x-6 mx-5 overflow-x-hidden scrollbar-hide">
          {productList.map((product) => (
          <div key={product.id} className="min-w-[310px]">
              <Powder product={product} />
            </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default ProductList;
