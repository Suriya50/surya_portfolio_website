import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import photo from "../assets/images/demoo.png"; // Place your 3D/Profile image here
import resumePDF from "../assets/images/surya_resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-5 pt-32 pb-10 overflow-hidden bg-primary"
    >
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mx-auto">
        
        {/* LEFT SIDE: Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          {/* 1. Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] sm:text-xs font-bold mb-3"
          >
             MERN FULL STACK DEVELOPER
          </motion.div>

          {/* 2. Name - Reduced Size */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white"
          >
            Hi, I'm Surya <br />
            <span className="text-accent">I Build Digital</span> Experiences.
          </motion.h1>

          {/* 3. Automatic Typewriter Effect (Made smaller for crispness) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-accent text-sm sm:text-base font-semibold h-8 mt-1"
          >
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React Developer", "Problem Solver"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </motion.div>

          {/* 4. Small Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-gray-400 text-xs sm:text-sm max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            A passionate Full Stack Developer dedicated to creating modern, fast, and user-friendly web applications.
          </motion.p>

          {/* 5. Action Buttons (Small font) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mt-5"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2 bg-accent text-black text-xs sm:text-sm font-semibold rounded-full hover:bg-opacity-80 transition-all shadow-[0_0_15px_rgba(0,255,102,0.25)]"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePDF}
              download
              className="px-5 py-2 border border-accent/50 text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-accent/10 transition-all flex items-center gap-1.5"
            >
              <FaDownload size={12} /> Download Resume
            </motion.a>
          </motion.div>

          {/* 6. Stats Grid with Hover Effect and Small Font */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 max-w-md mx-auto lg:mx-0"
          >
            {[
              { val: "Fresher", label: "Years Learning" },
              { val: "7+", label: "Projects" },
              { val: "10+", label: "Technologies" },
              { val: "100%", label: "Dedication" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0, 255, 102, 0.15)" }}
                className="text-center bg-secondary/50 backdrop-blur-sm rounded-xl p-3 border border-white/5 cursor-default transition-all duration-300"
              >
                <div className="text-accent font-bold text-xs sm:text-sm">{stat.val}</div>
                <div className="text-gray-500 text-[9px] sm:text-[10px] mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* 7. Premium Glass Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center lg:justify-start gap-3 mt-5"
          >
            {[
              { icon: FaGithub, link: "https://github.com/Suriya50" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/surya-s-132356357" },
              { icon: FaWhatsapp, link: "https://wa.me/917868943703" },
              { icon: FaEnvelope, link: "mailto:suryazzx6@gmail.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, borderColor: "#00ff66", backgroundColor: "rgba(0,255,102,0.1)" }}
                href={s.link}
                target="_blank"
                className="flex items-center justify-center p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-accent transition-all duration-300"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>


        {/* RIGHT SIDE: Circular 3D Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center mt-6 lg:mt-0 relative"
        >
          <div className="relative group">
            {/* Glowing Green Portal Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[350px] md:h-[350px] rounded-full bg-accent/5 blur-2xl" />
            
            {/* Floating Circular Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-accent/40 shadow-[0_0_40px_rgba(0,255,102,0.15)] group-hover:shadow-[0_0_60px_rgba(0,255,102,0.3)] transition-all duration-500 bg-secondary"
            >
              <img
                src={photo}
                alt="Surya S"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;