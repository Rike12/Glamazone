
import React from 'react';
import Lips from './Lips';
import Foundation from './Foundation';
import Powder from './Powder';
import Eyeshadow from './Eyeshadow';



const ProductList = () => {
    return (
      <div  className="lg:w-[1400px] md:w-[600px] sm:w-[400px] h-[2456px]">
      <div className='lg:mt-10 lg:w-[1400px] md:w-[600px] sm:w-[400px]'> <Lips/></div>
      <div className='lg:mt-10'><Foundation/></div> 
       <div className='lg:mt-10'><Powder/></div>
       <div className='lg:pb-10 lg:mt-10'>  <Eyeshadow/></div>
     
      </div>
    );
  };
  
  export default ProductList;