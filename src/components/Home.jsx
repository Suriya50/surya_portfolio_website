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
      className="relative min-h-screen w-full flex items-center justify-center px-5 pt-28 pb-8 sm:pt-32 sm:pb-12 overflow-hidden bg-primary"
    >
      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-10 mx-auto">
        
        {/* LEFT SIDE: Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          {/* 1. Badge (Even Smaller) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-[8px] sm:text-[10px] font-bold mb-2"
          >
             MERN FULL STACK DEVELOPER
          </motion.div>

          {/* 2. Name (Reduced to small size) */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white"
          >
            Hi, I'm Surya  <br />
            <span className="text-accent">MERN Stack Developer</span> | Eager to Contribute
          </motion.h1>

          {/* 3. Automatic Typewriter Effect (Small font) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-accent text-xs sm:text-sm md:text-base font-semibold h-6 sm:h-8 mt-1"
          >
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React Developer", "Entry-Level Engineer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 2000,
              }}
            />
          </motion.div>

          {/* 4. Job-Focused Subtext (Super crisp small font) */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-gray-400 text-[10px] sm:text-xs max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Passionate MERN Stack fresher with multiple real-world projects. 
            Strong foundation in modern web technologies, clean coding practices, 
            and a drive to grow as a software engineer in a dynamic team.
          </motion.p>

          {/* 5. Action Buttons (Small font) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-4 py-1.5 bg-accent text-black text-[10px] sm:text-xs font-semibold rounded-full hover:bg-opacity-80 transition-all shadow-[0_0_15px_rgba(0,255,102,0.25)]"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePDF}
              download
              className="px-4 py-1.5 border border-accent/50 text-white text-[10px] sm:text-xs font-semibold rounded-full hover:bg-accent/10 transition-all flex items-center gap-1.5"
            >
              <FaDownload size={11} /> Download Resume
            </motion.a>
          </motion.div>

          {/* 6. Stats Grid with Hover Effect and Extra Small Font */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mt-5 max-w-md mx-auto lg:mx-0"
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
                className="text-center bg-secondary/50 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/5 cursor-default transition-all duration-300"
              >
                <div className="text-accent font-bold text-xs sm:text-sm">{stat.val}</div>
                <div className="text-gray-500 text-[8px] sm:text-[10px] mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* 7. Premium Glass Social Icons (Reduced icon size) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center lg:justify-start gap-2 sm:gap-3 mt-4"
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
                className="flex items-center justify-center p-2 rounded-full border border-white/10 text-gray-400 hover:text-accent transition-all duration-300"
              >
                <s.icon size={15} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>


        {/* RIGHT SIDE: Circular 3D Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center mt-4 lg:mt-0 relative"
        >
          <div className="relative group">
            {/* Glowing Green Portal Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[320px] md:h-[320px] rounded-full bg-accent/5 blur-2xl" />
            
            {/* Floating Circular Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-accent/40 shadow-[0_0_40px_rgba(0,255,102,0.15)] group-hover:shadow-[0_0_60px_rgba(0,255,102,0.3)] transition-all duration-500 bg-secondary"
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