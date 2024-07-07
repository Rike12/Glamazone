//import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages

import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import Cart from './Cart';
import Foundation from './Foundation';





function App() {
  return (
    <>
    <Routes>
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/foundation' element={<Foundation/>} />
      
       
</Routes>
    </>
    
  );
}

export default App;
