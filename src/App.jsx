//import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages

import Login from './Login'
import Signup from './Signup'

function App() {
  return (
    <>
    <Routes>
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        
       
</Routes>
    </>
    
  );
}

export default App;
