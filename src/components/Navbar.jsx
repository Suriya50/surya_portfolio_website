import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = [
    { name: "home", offset: -80 },
    { name: "about", offset: -80 },
    { name: "skills", offset: -80 },
    { name: "education", offset: -80 },
    { name: "projects", offset: -80 },
    { name: "contact", offset: -80 }
  ];
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold tracking-tight cursor-pointer">
            <span className="text-blue-600">Port</span>
            <span className="text-purple-600">Folio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.name}
                smooth={true}
                duration={500}
                offset={link.offset}
                spy={true}
                activeClass="text-blue-600 font-semibold"
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-gray-700 capitalize hover:text-blue-600 cursor-pointer transition-all duration-300 rounded-lg hover:bg-blue-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.name}
              smooth={true}
              duration={500}
              offset={link.offset}
              spy={true}
              activeClass="text-blue-600 bg-blue-50 font-semibold"
              className="block px-6 py-4 text-base font-medium text-gray-700 capitalize hover:text-blue-600 hover:bg-blue-50 cursor-pointer transition-all duration-300 border-b border-gray-50 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;