import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import photo from "../assets/images/photo.png";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center py-12 sm:py-16 md:py-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:justify-between md:items-center md:gap-8 lg:gap-12">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-2 sm:space-y-3 text-center md:text-left">
          <h2 className="text-base sm:text-lg md:text-xl text-gray-700 font-medium tracking-wide">
            Hello, I'm
          </h2>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Surya S
          </h1>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-700 transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1">
            MERN Full Stack Developer
          </h3>

          <p className="text-gray-700 mt-2 text-xs sm:text-sm md:text-base max-w-sm sm:max-w-md mx-auto md:mx-0 leading-relaxed">
            I create modern, responsive, and interactive web interfaces.
            <br className="hidden sm:block" />
            Skilled in React, Tailwind CSS, and JavaScript.
            <br className="hidden sm:block" />
            Passionate about building user-friendly websites.
          </p>

          <div className="mt-1 sm:mt-4">
            <a
              href={photo}
              download="Surya_Resume.pdf"
              className="inline-block bg-blue-500 text-white px-4 sm:px-2 py-1.5 sm:py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-2 sm:space-x-3 mt-3 sm:mt-4">
            <a
              href="https://github.com/Suriya50"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={16} className="text-gray-800 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-s-132356357?"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} className="text-blue-700 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:suryazzx6@gmail.com"
              className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-red-100 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={16} className="text-red-500 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.instagram.com/itz_me__surya.s?"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2 sm:p-2.5 rounded-full shadow-md hover:bg-pink-100 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={16} className="text-pink-500 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Right Image Circle */}
        <div className="md:w-1/2 mt-6 sm:mt-8 md:mt-0 flex justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            {/* Gradient Border Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            
            {/* Inner Circle with Image */}
            <div className="absolute inset-1 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={photo}
                alt="Surya S - MERN Full Stack Developer"
                className="w-120 h-90 object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-gray-400 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;