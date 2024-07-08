//import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages


import Signup from './Signup';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import LoginPage from './Login';
import Carddetails from './Carddetails';
import Success from './Successful';
import Summary from './Summary';




function App() {
  return (
    <>
    <Routes>
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/logim' element={<LoginPage />} />
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/carddetails' element={<Carddetails/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/summary' element={<Summary/>} />
       
</Routes>
    </>
    
  );
}

export default App;
