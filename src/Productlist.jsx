
import React from 'react';
import Lips from './Lips';
import Foundation from './Foundation';
import Powder from './Powder';
import Eyeshadow from './Eyeshadow';



const ProductList = () => {
    return (
      <div  className="w-[1400px] h-[2456px]">
      <div className='lg:mt-10'> <Lips/></div>
      <div className='lg:mt-10'><Foundation/></div> 
       <div className='lg:mt-10'><Powder/></div>
       <div className='lg:pb-10 lg:mt-10'>  <Eyeshadow/></div>
     
      </div>
    );
  };
  
  export default ProductList;