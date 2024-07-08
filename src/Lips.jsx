import React, { useRef } from 'react';
import './App.css';
import Star from './assets/star.png';
import Plus from './assets/plus.png';
import Minus from './assets/minus.png';
import Arrowr from './assets/circler.png';
import Arrowl from './assets/circlel.png';
import Frame1 from './assets/frame1.png';
import Frame2 from './assets/frame2.png';
import Frame3 from './assets/frame3.png';
import Frame4 from './assets/frame4.png';
import Frame5 from './assets/frame5.png';
import Frame6 from './assets/frame6.png';
import Frame7 from './assets/frame7.png';
import Frame8 from './assets/frame8.png';
import Frame9 from './assets/frame9.png';
import Frame10 from './assets/frame10.png';

const productList = [
  {
    id: 1,
    category: 'Lips',
    name: 'Flormar Healthy Glow Dewy Lip Lacquer 03 Lively 6.5ml',
    image: Frame1,
    price: '₦20,422.41',
    colors: ['#EC5766', '#EC57B0', '#813405', '#810505', '#DA0000', '#C900CD'],
  },
  {
    id: 2,
    category: 'Lips',
    name: 'Dior Addict Lip Glow Oil, 015 Cherry',
    image: Frame2,
    price: '₦32,865.32',
    colors: ['#EC5766', '#EC57B0', '#DA0000'],
  },
  {
    id: 3,
    category: 'Lips',
    name: 'Channel Rouge Allure Velvet Luminous Matte Lip Colour 57 3.5g',
    image: Frame3,
    price: '₦105,499.41',
    colors: ['#FF001A', '#EC57B0', '#FF3E3E', '#DA0000'],
  },
  {
    id: 4,
    category: 'Lips',
    name: 'Essence Tinted Kiss Hydrating Lip Tint 02 Mauvelous 4ml',
    image: Frame4,
    price: '₦7,422.41',
    colors: ['#FF0000', '#E30000', '#FF5959', '#B80202'],
  },
  {
    id: 5,
    category: 'Lips',
    name: 'Shiseido VisionAiry Gel Lipstick 203 Night Rose 1.6g',
    image: Frame5,
    price: '₦47,327.71',
    colors: ['#FF001A', '#FF006B', '#864145','#DA0000', '#FF929D'],
  },
  {
    id: 6,
    category: 'Lips',
    name: 'Clarins Joli Rouge Satin Lipstick 787 Camellia Nude 3.5g',
    image: Frame6,
    price: '₦69,999.99',
    colors: ['#FF001A', '#B3746C', '#EC5766','850918'],
  },
  {
    id: 7,
    category: 'Lips',
    name: 'Shiseido TechnoSatin Gel Lipstick 411 Scarlet Cluster 3.3g',
    image: Frame7,
    price: '₦71,064,91',
    colors: ['#FF001A', '#EE008F'],
  },
  {
    id: 8,
    category: 'Lips',
    name: 'Eveline Cosmetics Diamond Glow Lip Luminizer 4.5ml',
    image: Frame8,
    price: '₦9,044.41',
    colors: ['#EC5766', '#F4B3CA', '#FF3E3E'],
  },
  {
    id: 9,
    category: 'Lips',
    name: 'Estée Lauder Pure Color Desire Lipstick 305 Dont Stop 3.1g',
    image: Frame9,
    price: '₦72,281.91',
    colors: ['#850918', '#EE0000', '#EE0000', '410000'],
  },
  {
    id: 10,
    category: 'Lips',
    name: 'Laka Bonding Glow Lipstick 204 Have 3.7g',
    image: Frame10,
    price: '₦39,681.15',
    colors: ['#F0898D', '#970000', '#FF3E3E','#C46F57'],
  },
];






const Lips = ({ product }) => {


    

      
  return (
    <div className="rounded-lg ml-4   h-[500px] flex flex-col justify-between">
      <div className=" bg-[#FFD7BE] relative h-[350px] w-[300px]  ">
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
    <div className="relative">
      <h1 className="text-2xl font-semibold mb-2 text-center">Our products</h1>
      <h1 className="text-2xl mb-4 font-medium ml-10">Lips</h1>
      <div className="relative flex items-center">
        <button className="absolute left-0 z-10 p-2">
          <img src={Arrowl} alt="Arrow Left" className="h-8" />
        </button>
        <div  className="flex space-x-6 mx-5 overflow-x-hidden scrollbar-hide">
          {productList.map((product) => (
            <div key={product.id} className="min-w-[300px]">
              <Lips product={product} />
            </div>
          ))}
        </div>
        <button  className="absolute right-0 z-10 p-2">
          <img src={Arrowr} alt="Arrow Right" className="h-8" />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
