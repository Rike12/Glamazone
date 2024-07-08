import React from 'react';
import Logo from './assets/logo.png';
import './App.css';






const Checkout = () => {
  return (
    <div className="bg-pink-100 min-h-screen p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
      <header className="pb-20">
        <div className="container flex gap-8">
          <div className="flex space-x-2">
            <img src={Logo} alt="Logo" className="h-8" />
            <h1 className='text-[#EC5766] text-2xl logo'>Glamazone</h1>
          </div>
          <nav className="flex space-x-14 mt-2 ml-20">
            <a href="/product" className="text-[#060B0F] relative">
              Our Products
            </a>
            <a href="#" className="text-[#060B0F] relative">
              Cart
            </a>
            <a href="/checkout" className="text-[#060B0F]">Check Out</a>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC5766]"></span>
          </nav>
        </div>
      </header>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-10">Delivery information</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-2 border rounded" />
            <input type="text" placeholder="Phone Number" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <input type="text" placeholder="Country" className="p-2 border rounded" />
            <input type="text" placeholder="State/Province/Region" className="p-2 border rounded" />
            <input type="text" placeholder="Zip Code" className="p-2 border rounded" />
            <textarea placeholder="Address" className="col-span-1 sm:col-span-2 p-2 border rounded"></textarea>
          </form>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Card Payment</span>
              <img src="visa.png" alt="Visa" className="h-6" />
              <img src="mastercard.png" alt="MasterCard" className="h-6" />
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Third-party payment</span>
              <img src="paystack.png" alt="Paystack" className="h-6" />
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" className="form-radio" />
              <span>Bank Transfer</span>
              <img src="bank.png" alt="Bank" className="h-6" />
            </label>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center space-x-4">
                <img src="product1.png" alt="Product" className="h-16" />
                <div>
                  <p>Beauty Glow Skin Long Lasting Makeup</p>
                  <p className="text-gray-600">NGN 68,483.45</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center space-x-4">
                <img src="product2.png" alt="Product" className="h-16" />
                <div>
                  <p>On-the-Go Beauty Foundation</p>
                  <p className="text-gray-600">NGN 13,999.89</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>2</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center space-x-4">
                <img src="product3.png" alt="Product" className="h-16" />
                <div>
                  <p>Glow & Puff Premium Powder Brush</p>
                  <p className="text-gray-600">NGN 12,999.00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex justify-between items-center p-4 border-t">
          <div>
            <span className="text-xl font-semibold">Grand Total</span>
            <span className="text-2xl font-bold text-pink-500 ml-2">NGN 124,075.96</span>
          </div>
          <button className="px-4 py-2 bg-pink-500 text-white rounded"><a href="/carddetails"></a>Place Order</button>
        </footer>
      </div>
    </div>
  );
};

export default Checkout;
