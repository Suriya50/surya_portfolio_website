// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const links = ["home", "about", "skills", "education", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Check which section is in view
      const scrollPosition = window.scrollY + 120;
      
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(links[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Smooth scroll function with fallback
  const scrollTo = (id) => {
    // Close mobile menu
    setIsOpen(false);
    
    // Get the element
    const element = document.getElementById(id);
    
    if (element) {
      // Calculate offset for navbar
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      // Use smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      // Fallback: try to find section by class or data attribute
      console.log(`Element with id "${id}" not found`);
      
      // Alternative: find by data-section attribute
      const altElement = document.querySelector(`[data-section="${id}"]`);
      if (altElement) {
        const navbarHeight = 70;
        const elementPosition = altElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
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
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollTo("home")}
            className="text-xl sm:text-2xl font-bold cursor-pointer"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              Surya
            </span>
            <span className="text-white">.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1 lg:gap-2">
            {links.map((link) => (
              <motion.button
                key={link}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollTo(link)}
                className={`px-3 lg:px-4 py-1.5 text-xs lg:text-sm font-medium capitalize transition-all duration-300 rounded-lg hover:bg-white/5 relative group ${
                  activeLink === link
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-400"
                }`}
              >
                {link}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 ${
                    activeLink === link ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </motion.button>
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
                <button
                  key={link}
                  onClick={() => {
                    scrollTo(link);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 text-sm font-medium capitalize transition ${
                    activeLink === link
                      ? "text-cyan-400 bg-white/5"
                      : "text-gray-400 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;