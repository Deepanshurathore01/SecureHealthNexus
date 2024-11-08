import React from 'react';
import logo from '../assets/Images/logo.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-lg ">
      <img className='w-24 ml-6' src={logo} alt="Healthcare" />
      

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 gap-3">
        <a href="#Doctors" className="text-gray-700 hover:text-[#2C978D] text-bold transition duration-300 text-2xl">Doctors</a>
        <a href="#Services" className="text-gray-700 hover:text-[#2C978D] transition duration-300 text-2xl">Services</a>
        <a href="#patient" className="text-gray-700 hover:text-[#2C978D] transition duration-300 text-2xl">Patient & Visitors</a>
        <a href="#locations"className="text-gray-700 hover:text-[#2C978D] transition duration-300 text-2xl" >Locations</a>
        
      </nav>

      {/* Login Button */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-[#2C978D] text-white rounded-lg hover:bg-blue-700 transition duration-300 mr-3">Book an Appointment</button>
        <button className="px-4 py-2 bg-[#2C978D] text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
