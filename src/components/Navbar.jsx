// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoText, setLogoText] = useState("Surya.");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // ✅ Dynamic logo change
      if (isScrolled) {
        setLogoText("Portfolio");
      } else {
        setLogoText("Surya.");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["home", "about", "skills", "education", "projects", "contact"];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* ✅ Dynamic Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="text-xl sm:text-2xl font-bold cursor-pointer"
          >
            <motion.span
              key={logoText}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400"
            >
              {logoText}
            </motion.span>
          </ScrollLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 lg:gap-2">
            {links.map((link) => (
              <ScrollLink
                key={link}
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-cyan-400"
                className="px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium capitalize text-gray-400 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-white/5 cursor-pointer relative group"
              >
                {link}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300"></span>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="py-2 max-h-[70vh] overflow-y-auto">
              {links.map((link) => (
                <ScrollLink
                  key={link}
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-cyan-400 bg-white/5"
                  onClick={handleLinkClick}
                  className="block w-full text-left px-6 py-3 text-sm font-medium capitalize text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition"
                >
                  {link}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;