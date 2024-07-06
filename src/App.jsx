//import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages

import Login from './Login';
import Signup from './Signup';
import Footer from './Footer'




function App() {
  return (
    <>
    <Routes>
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/footer' element={<Footer />} />
       
</Routes>
    </>
    
  );
}

export default App;
