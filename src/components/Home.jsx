// Home.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload } from "react-icons/fa";
import photo from "../assets/images/photo.png";
import resumePDF from "../assets/images/Resumee.pdf"; // Import resume from assets

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center py-16 sm:py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:justify-between md:items-center md:gap-8 lg:gap-12">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-3 sm:space-y-4 text-center md:text-left order-2 md:order-1">
          <h2 className="text-base sm:text-lg md:text-xl text-gray-700 font-medium tracking-wide">
            Hello, I'm
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Surya S
          </h1>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-purple-700 transition-transform duration-300 hover:translate-x-1">
            MERN Full Stack Developer
          </h3>

          <p className="text-gray-700 mt-3 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            I create modern, responsive, and interactive web interfaces.
            <br className="hidden sm:block" />
            Skilled in React, Tailwind CSS, and JavaScript.
            <br className="hidden sm:block" />
            Passionate about building user-friendly websites.
          </p>

          {/* Only Download Resume Button */}
          <div className="mt-4 sm:mt-6 flex justify-center md:justify-start">
            <a
              href={resumePDF}
              download="Resumee.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-5 sm:mt-6">
            <a
              href="https://github.com/Suriya50"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2.5 sm:p-3 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={18} className="text-gray-800 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-s-132356357?"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2.5 sm:p-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} className="text-blue-700 sm:w-5 sm:h-5" />
            </a>
            <a
              href="mailto:suryazzx6@gmail.com"
              className="bg-white p-2.5 sm:p-3 rounded-full shadow-md hover:bg-red-100 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={18} className="text-red-500 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.instagram.com/itz_me__surya.s?"
              target="_blank"
              rel="noreferrer"
              className="bg-white p-2.5 sm:p-3 rounded-full shadow-md hover:bg-pink-100 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={18} className="text-pink-500 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Right Image Section - Fixed Alignment */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center order-1 md:order-2">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* Gradient Border Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            
            {/* Inner Circle with Image */}
            <div className="absolute inset-1 bg-white rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={photo}
                alt="Surya S - MERN Full Stack Developer"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;