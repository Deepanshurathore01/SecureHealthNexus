import React from "react";
import rightmg from '../assets/Images/rightimg.png';
import dgroup from '../assets/Images/gggg.png';
import health from '../assets/Images/Health.jpg';
import secure from '../assets/Images/secure.jpg';
import blood from '../assets/Images/boold.AVIF';
import Chatbot from "./Chatbot";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <header className=" pb-5 w-full h-full" id="head">
        <nav className="container mx-auto flex items-center justify-between py-7 px-4">
          <div className="text-4xl font-bold text-white">
            SecureHealth<span className="text-[#3DBAA1]">Nexus</span>
          </div>
          <ul className="flex space-x-6 text-2xl text-white ">
            <li>
              <a href="#home" className="hover:text-[#3DBAA1] hover:underline">Home</a>
            </li>
            <li>
              <a href="#service" className="hover:text-[#3DBAA1] hover:underline">Services</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#3DBAA1] hover:underline">About Us</a>
            </li>
           
          </ul>
          <div className="flex gap-2">
            <Link to="/appointment">
          <button className="btn bg-[#3DBAA1] text-xl text-white py-2 px-4 rounded">Book an appointment</button></Link>
          <Link to="/register">
          <button className="btn bg-[#3DBAA1] text-xl text-white py-2 px-4 rounded">Sign Up</button></Link>
          </div>
          
        </nav>

        <div className="container w-full px-2 flex flex-col lg:flex-row items-center mt-2  mx-auto" id="home">
          <div className="lg:w-1/2">
            <h1 className="flex iteam-center justify-center text-6xl px-4 pt-15 font-bold mb-4">Providing an Exceptional Patient Experience</h1>
            <p className="text-gray-400 text-2xl px-4 mb-6">
              Welcome, where exceptional patient experiences are our priority. With compassionate care, state-of-the-art
              facilities, and a patient-centered approach, we're dedicated to your well-being.
            </p>
            <button className="btn bg-[#3DBAA1] text-2xl text-white py-2 px-4 rounded ml-4">See Services</button>
          </div>
          <div className="img flex justify-center items-center mx-auto">
            <img className="w-full h-1/2 mx-auto inline-block" src={rightmg} alt="" />
          </div>
        </div>
      </header>

      <section className="container mx-auto mt-10" id="service">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold">Our Special Services</h2>
          <p className="text-gray-700 pt-2">Delivering unparalleled service tailored to your unique needs.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow ">
            <span className="text-blue-600 text-4xl"><i className="ri-microscope-line"></i></span>
            <img src={blood} alt="" />
            <h4 className="text-xl font-bold mt-4">Laboratory Test</h4>
            <p className="text-gray-700 mt-2">Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing.</p>
            <a href="#" className="text-blue-600 mt-4 block">Learn More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <span className="text-blue-600 text-4xl"><i className="ri-mental-health-line"></i></span>
            <img src={health} alt="" />
            <h4 className="text-xl font-bold mt-4">Health Check</h4>
            <p className="text-gray-700 mt-2">Thorough assessments help you stay proactive about your health.</p>
            <a href="#" className="text-blue-600 mt-4 block">Learn More</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <span className="text-blue-600 text-4xl"><i className="ri-hospital-line"></i></span>
            <img src={secure} alt="" />
            <h4 className="text-xl font-bold mt-4">Secure Family</h4>
            <p className="text-gray-700 mt-2">A Secure Family with golden smile.</p>
            <a href="#" className="text-blue-600 mt-4 block">Learn More</a>
          </div>
        </div>
      </section>

      <section className=" p-6 mt-20 flex flex-col lg:flex-row border m-2 " id="about">
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="text-5xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 text-md">
          Welcome to SecureHealth Nexus, your trusted partner in health and wellness. Our mission is to provide reliable, expert-backed information to help you make informed decisions about your well-being.
          </p>
          <p className="text-gray-700 mb-4 text-md">
          Through carefully curated articles and guides, we cover essential topics in health, lifestyle, and wellness, offering practical tips to improve your quality of life. At SecureHealth Nexus, we believe that small, positive changes can lead to a healthier, happier you. Let us be your guide on this journey to better health!
          </p>
          <p className="text-gray-700 text-md">
            Small changes can lead to significant improvements in your quality of life. We're here to guide you to a healthier
            and happier you.
          </p>
          <button className="btn bg-[#3DBAA1] text-xl text-white py-2 px-4 rounded mt-2">Explore More</button>
        </div>
        <div className="flex items-center justify-center mx-auto w-1/2 h-80">
          <img src={dgroup} alt="About Us" className="rounded-lg h-92 object-cover " />
        </div>
      </section>

      {/* chat bot section */}
     <Chatbot />

      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-3xl mb-2 font-bold text-white">
            SecureHealth<span className="text-[#3DBAA1]">Nexus</span>
          </div>

        {/* Links and Contact Details */}
        <div className="flex flex-wrap md:justify-between">
          {/* Links Section */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-400">123 Health St., Wellness City</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@securehealthnexus.com</p>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} SecureHealth Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;
