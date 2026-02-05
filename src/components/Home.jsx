import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:flex md:justify-between md:items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-2 sm:space-y-3">
          <h2 className="text-md sm:text-lg text-gray-700 font-medium">Hello, I'm</h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Surya S</h1>
          <h3 className="text-md sm:text-lg font-semibold text-purple-700 mt-1 transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1">
            Frontend Developer
          </h3>

          <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base max-w-sm md:max-w-md leading-relaxed">
            I create modern, responsive, and interactive web interfaces.
            <br />
            Skilled in React, Tailwind CSS, and JavaScript.
            <br />
            Passionate about building user-friendly websites.
          </p>

          <div className="mt-3">
            <a
              href="/images/resume.png.jpg"
              download
              className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm"
            >
              Download Resume
            </a>
          </div>

          <div className="flex space-x-2 sm:space-x-4 mt-3">
            <a href="https://github.com/Suriya50" target="_blank" rel="noreferrer" className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-110">
              <FaGithub size={16} className="text-gray-800" />
            </a>
            <a href="https://www.linkedin.com/in/surya-s-132356357?" target="_blank" rel="noreferrer" className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-blue-100 transition-transform transform hover:scale-110">
              <FaLinkedin size={16} className="text-blue-700" />
            </a>
            <a href="mailto:suryazzx6@gmail.com" className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-red-100 transition-transform transform hover:scale-110">
              <FaEnvelope size={16} className="text-red-500" />
            </a>
            <a href="https://www.instagram.com/itz_me__surya.s?" target="_blank" rel="noreferrer" className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-pink-100 transition-transform transform hover:scale-110">
              <FaInstagram size={16} className="text-pink-500" />
            </a>
          </div>
        </div>

        {/* Right Circle */}
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center">
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-56 md:h-56 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Surya
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
