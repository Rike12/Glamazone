import React, { useRef } from 'react';
import './App.css';
import Star from './assets/star.png';
import Plus from './assets/plus.png';
import Minus from './assets/minus.png';
import Arrowr from './assets/right.png';
import Frame1 from './assets/shadow/frame1.png';
import Frame2 from './assets/shadow/frame2.png';
import Frame3 from './assets/shadow/frame3.png';
import Frame4 from './assets/shadow/frame4.png';
import Frame5 from './assets/shadow/frame5.png';
import Frame6 from './assets/shadow/frame6.png';
import Frame7 from './assets/shadow/frame7.png';
import Frame8 from './assets/shadow/frame8.png';
import Frame9 from './assets/shadow/frame9.png';
import Frame10 from './assets/shadow/frame10.png';

const productList = [
  {
    id: 1,
    category: 'Eyeshadow',
    name: 'Clarins Ombre 4 Couleurs Eyeshadow Palette 08 Amber Gradation 4.2g',
    image: Frame1,
    price: '₦89,048.50',
    
  },
  {
    id: 2,
    category: 'Eyeshadow',
    name: 'Bellapierre Cosmetics Eyeshadow Palette 35 Colors Emerald City',
    image: Frame2,
    price: '₦69,498.51',
    
  },
  {
    id: 3,
    category: 'Eyeshadow',
    name: 'M.A.C Cosmetics Powder Kiss Soft Matte Eye Shadow My Tweedy 1.5g',
    image: Frame3,
    price: '₦52,545.32',
    
  },
  {
    id: 4,
    category: 'Eyeshadow',
    name: 'Sisley Paris Phyto-Eye Twist Waterproof Long Lasting Eyeshadow 18 Fawn 1.5g',
    image: Frame4,
    price: '₦22,845.92',
   
  },
  {
    id: 5,
    category: 'Eyeshadow',
    name: 'Dr. Hauschka Eyeshadow 08 Golden Topaz 1.4g',
    image: Frame5,
    price: '₦52,545.32',
   
  },
  {
    id: 6,
    category: 'Eyeshadow',
    name: 'CHANEL Ombre Première Longwear Powder Eyeshadow 36 Désert Rouge 2.2g',
    image: Frame6,
    price: '₦56,615.86',
  
  },
  {
    id: 7,
    category: 'Eyeshadow',
    name: 'Lancôme Hypnôse Eyeshadow Palette 01 French Nude 4g',
    image: Frame7,
    price: '₦116,880.19',
  },
  {
    id: 8,
    category: 'Eyeshadow',
    name: 'Guerlain Ombres G Multi-Effect Eyeshadow Quad 011 Imperial Moon',
    image: Frame8,
    price: '₦133,362.88',
    
  },
  {
    id: 9,
    category: 'Eyeshadow',
    name: 'Anastasia Beverly Hills Cosmos Eyeshadow Palette',
    image: Frame9,
    price: '₦126,889.27',
   
  },
  {
    id: 10,
    category: 'Eyeshadow',
    name: 'Flormar Eyeshadow Palette 006 Felt Cute 9g',
    image: Frame10,
    price: '₦27,347.38',
   
  },
];






const Eyeshadow = ({ product }) => {


    

      
  return (
    <div className="  rounded-lg  h-[500px] ml-4 flex flex-col justify-between">
      <div className="  bg-[#FFD7BE] relative">
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

      

      <button className="mt-4 bg-[#EC5766] text-white py-2 px-8 rounded-full">Add to cart</button>
    </div>
  );
};

const ProductList = () => {
  

  return (
    <div className="relative">
     
     <div className='flex justify-between'>
      <h1 className="text-2xl mb-4 font-medium ml-10">Eyeshadow</h1>
      <button className="absolute right-6 z-10">
          <img src={Arrowr} alt="Arrow Right" className="h-8" />
        </button>
        </div>
      <div className="relative flex items-center">
        
        <div  className="flex space-x-6 mx-5 overflow-x-hidden scrollbar-hide">
          {productList.map((product) => (
            <div key={product.id} className="min-w-[300px]">
              <Eyeshadow product={product} />
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default ProductList;
