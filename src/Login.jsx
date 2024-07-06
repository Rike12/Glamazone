import React, { useState } from 'react';
import Face from './assets/face.png';
import Logo from './assets/logo.png';
import Google from './assets/google.png';
import Apple from './assets/apple.png';
import Eye from './assets/eye.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;

    // Check if input is numeric
    if (!/^\d*$/.test(value)) {
      setPasswordError('Password must be numeric only');
    } else {
      setPasswordError('');
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login with hardcoded credentials (demo purposes only)
    const validEmail = 'user@example.com';
    const validPassword = '123456'; // Numeric password

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      return;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      return;
    } else if (!/^\d*$/.test(password)) {
      setPasswordError('Password must be numeric only');
      return;
    } else {
      setPasswordError('');
    }

    // Check credentials
    if (email === validEmail && password === validPassword) {
      // Redirect to dashboard (demo: for actual implementation, use proper authentication)
      history.push('/dashboard');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#FFF4F4]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div>
          <img src={Logo} alt="Logo" className="h-8" />
        </div>
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li className="text-md text-black font-semibold transition-transform transform hover:-translate-y-1 hover:scale-70 hover:text-[#EC5766] hover:font-bold">
              <a href="#" className="menu-link">
                Home
              </a>
            </li>
            <li className="text-md text-black font-semibold transition-transform transform hover:-translate-y-1 hover:scale-70 hover:text-[#EC5766] hover:font-bold">
              <a href="#" className="menu-link">
                About Us
              </a>
            </li>
            <li className="text-md text-black font-semibold transition-transform transform hover:-translate-y-1 hover:scale-70 hover:text-[#EC5766] hover:font-bold">
              <a href="#" className="menu-link">
                Our Products
              </a>
            </li>
            <li className="text-md text-black font-semibold transition-transform transform hover:-translate-y-1 hover:scale-70 hover:text-[#EC5766] hover:font-bold">
              <a href="#" className="menu-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF4F4] rounded-lg shadow-lg p-8 sm:p-12 lg:p-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:block">
            <img src={Face} alt="Login Image" className="h-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#EC5766] mb-6">
              Log in to your account
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`mt-1 block w-full px-3 py-2 bg-[#FFF4F4] border border-[#858885] rounded-md focus:ring-red-500 focus:border-red-500 ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password (numeric only)"
                  id="password"
                  className={`mt-1 block bg-[#FFF4F4] px-3 py-2 w-full p-2 border border-[#858885] rounded-md focus:ring-red-500 focus:border-red-500 pr-10 ${
                    passwordError ? 'border-red-500' : ''
                  }`}
                  pattern="[0-9]*" // Ensure only numeric input
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={Eye}
                    alt="Eye Icon"
                    className="h-5 w-5"
                  />
                </span>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>

              {loginError && (
                <p className="text-red-500 text-xs mt-1">{loginError}</p>
              )}

              <div className="flex items-center justify-end">
                <a href="#" className="text-sm text-[#EC5766] hover:underline">
                  Forgot Password
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#EC5766] text-white rounded-md shadow hover:bg-red-600"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center">
              <div className="my-4 mt-12 mb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  or
                </p>
              </div>
              <button className="mt-4 w-full  flex gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50">
                <span>
                  <img src={Google} alt=" Google Icon" className="" />
                </span>
                <span className="font-bold text-[#1E1E1E]">
                  Continue with Google
                </span>
              </button>
              <button className="mt-4 w-full py-2 flex gap-2  px-4 border border-gray-300 rounded-md shadow-sm flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50">
                <span>
                  <img src={Apple} alt="Apple icon" className="" />
                </span>
                <span className="font-bold text-[#1E1E1E]">
                  Continue with Apple
                </span>
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-[#1E1E1E]">
                Don't have an account?{' '}
                <a href="#" className="text-[#EC5766] font-semibold">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
