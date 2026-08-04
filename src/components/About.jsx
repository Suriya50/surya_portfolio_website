import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";
import aboutImage from "../assets/images/photo.png"; // Uses your actual photo

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const statData = [
    { value: "10+", label: "Projects" },
    { value: "Fresher", label: "Experience" },
    { value: "5+", label: "Certifications" },
    { value: "24/7", label: "Learning" },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden bg-primary">
      
      {/* FAINT BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[100px] md:text-[150px] font-extrabold text-white/[0.04] tracking-widest">
          ABOUT
        </h2>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* LEFT SIDE: Text, Tags & Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Badge - Fixed width to prevent clipping on mobile */}
          <div className="inline-block mx-auto lg:mx-0 mb-3 text-accent text-[10px] sm:text-xs font-semibold tracking-widest border border-accent/20 px-4 py-1 rounded-full bg-accent/5 whitespace-nowrap">
            GET TO KNOW ME
          </div>

          {/* Title (Small) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            About <span className="text-accent">Me</span>
          </h2>

          {/* Paragraphs (Made strictly text-xs sm:text-sm for complete crispness) */}
          <div className="mt-3 space-y-2 text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
            <p>
              I'm <span className="text-white font-medium">Surya</span>, a passionate{" "}
              <span className="text-accent font-medium"> Mern Full Stack Developer</span>{" "}
              who loves building modern web applications.
            </p>
            <p>
              I specialize in React, Node.js, Express, and MongoDB. I enjoy turning ideas into beautiful, functional, and high-performing websites.
            </p>
            <p>
              As a fresh graduate, I'm eager to learn, grow, and contribute to exciting projects with clean and efficient code.
            </p>
          </div>

          {/* Bullet Points (Made strictly text-xs sm:text-sm for crispness) */}
          <ul className="mt-4 space-y-1.5 text-gray-300 text-xs sm:text-sm mx-auto lg:mx-0 max-w-md">
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <FaCheck className="text-accent text-sm" /> <span className="text-white font-medium">BCA Graduate</span>
            </li>
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <FaCheck className="text-accent text-sm" /> Based in <span className="text-white font-medium">Chennai,Tamilnadu</span>
            </li>
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <FaCheck className="text-accent text-sm" /> <span className="text-white font-medium">Problem Solver</span>
            </li>
            <li className="flex items-center gap-3 justify-center lg:justify-start">
              <FaCheck className="text-accent text-sm" /> <span className="text-white font-medium">Lifelong Learner</span>
            </li>
          </ul>

          {/* Stats Grid with Premium Hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 max-w-md mx-auto lg:mx-0"
          >
            {statData.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,255,102,0.15)" }}
                className="text-center bg-secondary/50 backdrop-blur-sm rounded-xl p-3 border border-white/5 transition-all duration-300 cursor-default"
              >
                <div className="text-accent font-bold text-xs sm:text-sm">{stat.value}</div>
                <div className="text-gray-500 text-[9px] sm:text-[10px] mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block mt-6 px-6 py-2 bg-accent text-black font-semibold text-xs sm:text-sm rounded-full shadow-[0_0_20px_rgba(0,255,102,0.2)] hover:bg-opacity-80 transition-all duration-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>


        {/* RIGHT SIDE: Premium Floating Green Glass Portal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
        >
          <div className="relative w-[240px] md:w-[300px] h-[300px] md:h-[360px] flex items-center justify-center group">
            
            {/* 1. GLOWING GREEN GLASS BACKSIDE */}
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform group-hover:scale-110 transition-all duration-700 ease-in-out pointer-events-none" />
            <div className="absolute inset-4 bg-accent/10 blur-2xl rounded-full animate-pulse" />

            {/* 2. Main Glass Card */}
            <div className="relative w-full h-full glass rounded-[2.5rem] border border-accent/50 shadow-[0_0_50px_rgba(0,255,102,0.15)] flex items-center justify-center overflow-hidden group-hover:border-accent group-hover:shadow-[0_0_70px_rgba(0,255,102,0.3)] transition-all duration-500">
              
              {/* Glowing Neon Corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-xl opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-xl opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* 3. Floating Image Animation */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0], 
                  x: [0, 6, -6, 0] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[88%] h-[88%] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={aboutImage}
                  alt="Surya Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* 4. Decorative Glass Snippets */}
              <motion.div 
                animate={{ x: [0, 10, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-4 glass rounded-lg px-2 py-1 border border-white/5 flex flex-col gap-1"
              >
                <div className="w-10 h-1.5 bg-accent/50 rounded-full" />
                <div className="w-6 h-1.5 bg-white/20 rounded-full" />
              </motion.div>

              <motion.div 
                animate={{ x: [0, -8, 8, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-12 left-4 glass rounded-lg px-2 py-1 border border-white/5 flex flex-col gap-1"
              >
                <div className="w-8 h-1.5 bg-accent/50 rounded-full" />
                <div className="w-4 h-1.5 bg-white/20 rounded-full" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;