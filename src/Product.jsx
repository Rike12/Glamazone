import React from 'react';
import Header from './Header';
import Hero from './Hero'
import Footer from './Footer';
import ProductList from './Productlist';

const Product = () => {
  return (
    <div className=" h-full bg-[#FFF4F4]">
      <Header/>
      <Hero/>
      <ProductList/>
      <Footer/>

    </div>
  );
};

export default Product;
