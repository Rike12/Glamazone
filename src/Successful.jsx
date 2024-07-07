import React from 'react';
import Logo from './assets/logoo.png'


const Success = () => {
    return (
      <div className="flex flex-col min-h-screen bg-[#FFF4F4]">
        {/* Header */}
        <header className="flex mt-6 p-4">
        <img src={Logo} alt="Logo" className="h-8 " />
        </header>
        
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-grow text-center">
          <h1 className="text-5xl  text-[#000000] font-semibold font-Montserrat, sans-serif">Order successful</h1>
          <p className="mt-12  text-4xl font-Montserrat, sans-serif ">Thank you for Shopping at <span className="text-[#EC5766] font-dancing text-3xl">Glamazone</span></p>
          <p className="mt-6 text-4xl  font-Montserrat, sans-serif">Your order is on its way, and you'll be glowing in no time</p>
          <button 
            className="mt-12 px-20 py-3 bg-[#EC5766] text-white text-sm rounded-full hover:bg-white hover:text-[#EC5766] transition"
           
          > <a href="/product">  Back to Homepage</a>
          
          </button>
        </main>
        
        {/* Footer */}
        <footer className="flex justify-start p-4 text-sm text-gray-500">
          &copy; 2024 Glamazone Inc.
        </footer>
      </div>
    );
  }
  
  export default Success;