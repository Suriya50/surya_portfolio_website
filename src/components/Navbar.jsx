import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  // 1. SET DEFAULT TO DARK MODE
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'];

  // 2. PREMIUM ACTIVE SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.toLowerCase());
      let current = 'home';
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) { 
            current = sec;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // 3. FIXED THEME TOGGLE (Removes .light if dark, Adds .light if light)
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      // If we want Dark Mode, we ensure the .light class is REMOVED
      root.classList.remove('light');
    } else {
      // If we want Light Mode, we ADD the .light class
      root.classList.add('light');
    }
  }, [isDark]);

  // 4. CLOSE MENU ON LINK CLICK
  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl glass rounded-full px-4 py-2.5 flex items-center justify-between transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Logo */}
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex items-center gap-1 text-lg font-bold text-foreground cursor-pointer"
        >
          <span className="text-accent">&lt;</span>SURYA_/<span className="text-accent">&gt;</span>
        </motion.a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <motion.a
                key={link}
                href={`#${id}`}
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(id)}
                className={`relative px-4 py-1.5 text-xs font-medium transition-all duration-300 rounded-full border border-transparent
                  ${isActive 
                    ? 'text-accent border border-accent/60 bg-accent/10 shadow-[0_0_15px_rgba(0,255,102,0.15)]' 
                    : 'text-gray-400 hover:text-accent hover:border-accent/20'
                  }
                `}
              >
                {link}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavPill" 
                    className="absolute inset-0 rounded-full -z-10 bg-accent/5 blur-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Theme Toggle */}
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isDark ? 0 : 180 }}
            transition={{ duration: 0.4, type: "spring" }}
            onClick={() => setIsDark(!isDark)} 
            className="p-1.5 sm:p-2 rounded-full bg-secondary/50 hover:bg-secondary text-gray-400 hover:text-accent border border-white/5 transition-all duration-300"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Let's Connect Button (Hidden on mobile to save space) */}
          <motion.a 
            href="#contact" 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,255,102,0.4)" }} 
            whileTap={{ scale: 0.95 }} 
            className="hidden sm:flex items-center gap-1.5 px-5 py-2 bg-accent text-black font-medium text-sm rounded-full transition-all duration-300"
          >
            Let's Connect
            <Send size={14} />
          </motion.a>

          {/* MOBILE SIDEBAR TOGGLE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="flex md:hidden p-1.5 rounded-full bg-secondary/50 text-gray-400 hover:text-accent border border-white/5 transition-all duration-300"
          >
            <Menu size={20} />
          </motion.button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR BACKDROP & MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            
            {/* Glass Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs glass z-50 p-6 flex flex-col gap-6 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1.5 rounded-full bg-secondary/50 text-gray-400 hover:text-accent border border-white/5 transition-all duration-300"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Sidebar Navigation Links */}
              <div className="flex flex-col gap-2 mt-4">
                {navLinks.map((link, i) => {
                  const id = link.toLowerCase();
                  const isActive = activeSection === id;
                  return (
                    <motion.a
                      key={link}
                      href={`#${id}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.03, x: 5 }}
                      onClick={() => handleLinkClick(id)}
                      className={`relative px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl border border-transparent
                        ${isActive 
                          ? 'text-accent border border-accent/60 bg-accent/10 shadow-[0_0_15px_rgba(0,255,102,0.15)]' 
                          : 'text-gray-400 hover:text-accent hover:border-accent/20'
                        }
                      `}
                    >
                      {link}
                    </motion.a>
                  );
                })}
              </div>

              {/* Sidebar Bottom Actions */}
              <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-white/5">
                {/* Mobile Theme Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Toggle Theme</span>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    animate={{ rotate: isDark ? 0 : 180 }}
                    onClick={() => setIsDark(!isDark)} 
                    className="p-2 rounded-full bg-secondary/50 text-gray-400 hover:text-accent border border-white/5 transition-all duration-300"
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.button>
                </div>
                
                {/* Mobile CTA Button */}
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,102,0.4)" }} 
                  whileTap={{ scale: 0.95 }} 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-black font-medium text-sm rounded-xl transition-all duration-300"
                >
                  Let's Connect
                  <Send size={16} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;