//import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages

import Login from './Login';
import Signup from './Signup';
import Product from './Product';
import Success from './Successful';





function App() {
  return (
    <>
    <Routes>
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/success' element={<Success/>} />
       
</Routes>
    </>
    
  );
}

export default App;
