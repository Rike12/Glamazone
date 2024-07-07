import React from 'react';
import './App.css';
import Star from './assets/star.png';
import Plus from './assets/plus.png';
import Minus from './assets/minus.png';
import Arrowr from './assets/circler.png';
import Arrowl from './assets/circlel.png';
import Frame1 from './assets/Foundation/frame1.png';
import Frame2 from './assets/Foundation/frame2.png';
import Frame3 from './assets/Foundation/frame3.png';
import Frame4 from './assets/Foundation/frame4.png';
import Frame5 from './assets/Foundation/frame5.png';
import Frame6 from './assets/Foundation/frame6.png';
import Frame7 from './assets/Foundation/frame7.png';
import Frame8 from './assets/Foundation/frame8.png';
import Frame9 from './assets/Foundation/frame9.png';
import Frame10 from './assets/Foundation/frame10.png';

const productList = [
  {
    id: 1,
    category: 'Foundation',
    name: 'Pro Filtr Soft Matte Longwear Liquid Foundation',
    image: Frame1,
    price: '₦32,865.32',
    colors: ['#AC520E', '#A52A2A', '#813405', '#772D00'],
  },
  {
    id: 2,
    category: 'Foundation',
    name: 'Studio Fix Fluid SPF 15 Foundation',
    image: Frame2,
    price: '₦39,999.99',
    colors: ['#C28865', '#CD5A14', '#A94000'],
  },
  {
    id: 3,
    category: 'Foundation',
    name: 'Clinique Stay-Matte Oil-Free Makeup Foundation CN74 Beige 30ml',
    image: Frame3,
    price: '₦69,895.65',
    colors: ['#DD813C', '#A95E31', '#BE500D', '#A52A2A'],
  },
  {
    id: 4,
    category: 'Foundation',
    name: 'IT Cosmetics CC+ Oil-Free Matte Foundation SPF40 Light Medium 32ml',
    image: Frame4,
    price: '₦77,063.44',
    colors: ['#DD813C', '#DF5F11', '#984411','#8A3C0C', '#A52A2A'],
  },
  {
    id: 5,
    category: 'Foundation',
    name: 'IT Cosmetics Your Skin But Better Foundation 30m',
    image: Frame5,
    price: '₦71,533.42',
    colors: ['#DF5F11', '#8A3C0C'],
  },
  {
    id: 6,
    category: 'Foundation',
    name: 'Pür Cosmetics 4-in-1 Liquid Foundation',
    image: Frame6,
    price: '₦39,999.99',
    colors: ['#DD813C', '#984411', '#8A3C0C','#592B00'],
  },
  {
    id: 7,
    category: 'Foundation',
    name: 'Hourglass Vanish Seamless Finish Foundation Stick',
    image: Frame7,
    price: '₦46,999.99',
    colors: ['#3B1F14', '#A9794A'],
  },
  {
    id: 8,
    category: 'Foundation',
    name: 'Giorgio Armani Luminous Silk Foundation',
    image: Frame8,
    price: '₦64,999.99',
    colors: ['#DD813C', '#984411', '#BE500D'],
  },
  {
    id: 9,
    category: 'Foundation',
    name: 'MAC Face and Body Foundation',
    image: Frame9,
    price: '₦28,999.99',
    colors: ['#DF5F11', '#BE500D', '#AC520E', '#DD813C'],
  },
  {
    id: 10,
    category: 'Foundation',
    name: 'Nars All Day Luminous Weightless Foundation',
    image: Frame10,
    price: '₦48,999.99',
    colors: ['#DF5F11', '#8A3C0C', '#DD813C','#DF5F11'],
  },
];

const Foundation = ({ product }) => {
  return (
    <div className="p-4 bg-white rounded-lg  h-[500px] flex flex-col justify-between">
      <div className="bg-[#FFD7BE] relative">
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
    <div className="p-4 relative">
      <h1 className="text-2xl font-semibold ml-16">Foundation</h1>
      <div className="relative flex items-center">
        <button className="absolute left-0 z-10 p-2">
          <img src={Arrowl} alt="Arrow Left" className="h-8" />
        </button>
        <div className="flex space-x-6 mx-10 overflow-x-hidden scrollbar-hide">
          {productList.map((product) => (
            <div key={product.id} className="min-w-[300px]">
              <Foundation product={product} />
            </div>
          ))}
        </div>
        <button className="absolute right-0 z-10 p-2">
          <img src={Arrowr} alt="Arrow Right" className="h-8" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
