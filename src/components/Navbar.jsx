import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = ["home", "about", "skills", "education", "projects", "contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight cursor-pointer">
          <span className="text-blue-500">Port</span>
          <span className="text-purple-600">Folio</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base font-medium text-gray-600">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              className="capitalize hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {links.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-4 py-3 capitalize hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
