
import React from 'react';
import Lips from './Lips';
import Foundation from './Foundation';
import Powder from './Powder';
import Eyeshadow from './Eyeshadow';



const ProductList = () => {
    return (
      <div className=" w-[1360px] h-[2456px]  ">
      <div className='mt-10'></div> <Lips/>
      <div className='mt-10'><Foundation/></div> 
       <div className='mt-10'><Powder/></div>
       <div className='pb-10 mt-10'>  <Eyeshadow/></div>
     
      </div>
    );
  };
  
  export default ProductList;