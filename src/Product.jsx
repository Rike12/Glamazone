import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const Product = ({ cartCount }) => {
  return (
    <div className=" h-screen bg-[#FFF4F4]">
      <Header className="h-16" />
      <Hero className=" " cartCount={cartCount} />
      <Footer className="h-16" />
    </div>
  );
};

export default Product;
