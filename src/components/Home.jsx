import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaDownload, FaMapMarkerAlt, FaCircle, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import resumePDF from "../assets/images/surya_ats_resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-10 overflow-hidden bg-primary"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-2/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full mx-auto text-center">

        {/* ===== Availability Badge ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/40 text-accent text-[10px] font-bold mb-4"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
          </span>
          AVAILABLE FOR HIRE
        </motion.div>

        {/* ===== Greeting ===== */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 text-xs sm:text-sm mb-1"
        >
          Hello, I'm
        </motion.p>

        {/* ===== Name ===== */}
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
        >
          Surya S <span className="inline-block animate-wave"></span>
        </motion.h1>

        {/* ===== Main Role ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-3"
        >
          <span className="gradient-text">MERN Stack Developer</span>
        </motion.h2>

        {/* ===== Animated Typewriter ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center h-6 sm:h-7 mb-4"
        >
          <span className="text-accent-2 text-sm sm:text-base md:text-lg font-mono">
            <Typewriter
              options={{
                strings: [
                  "React Developer",
                  "Frontend Engineer",
                  "MERN Full Stack Developer",
                  "Node.js Developer",
                  "Open to Software Engineering",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 30,
                pauseFor: 1500,
                cursor: "|",
                cursorClassName: "text-accent",
              }}
            />
          </span>
        </motion.div>

        {/* ===== Description ===== */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-gray-400 text-[11px] sm:text-xs md:text-sm max-w-xl mx-auto leading-relaxed mb-4"
        >
          A passionate <span className="text-accent font-medium">BCA graduate</span> and self-taught developer 
          who has engineered <span className="text-white font-medium">7+ real-world applications</span> using the MERN stack.
        </motion.p>

        {/* ===== Location + Status Row ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-5 text-[10px] sm:text-[11px] text-gray-500"
        >
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-accent/80" size={10} /> Tamil Nadu, India
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="flex items-center gap-1">
            <FaCircle className="text-green-400" size={6} /> Immediate Joiner
          </span>
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <span className="flex items-center gap-1">
            <FaCircle className="text-green-400" size={6} /> Open to Relocation
          </span>
        </motion.div>

        {/* ===== CTA Buttons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap justify-center gap-2.5 mb-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-5 py-2.5 bg-gradient-to-r from-accent to-accent-2 text-white text-xs font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            ✨ View My Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resumePDF}
            download
            className="px-5 py-2.5 border border-accent/50 text-white text-xs font-semibold rounded-full hover:bg-accent/10 transition-all flex items-center gap-1.5"
          >
            <FaDownload size={12} /> Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-5 py-2.5 border border-white/20 text-white text-xs font-semibold rounded-full hover:bg-white/5 transition-all"
          >
            📩 Contact
          </motion.a>
        </motion.div>

        {/* ===== Tech Stack Row ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center items-center gap-4 sm:gap-6 mb-6"
        >
          {[
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Express", icon: <SiExpress className="text-gray-300" /> },
            { name: "React", icon: <FaReact className="text-cyan-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          ].map((tech, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group">
              <div className="p-2 rounded-lg bg-secondary/60 border border-white/10 group-hover:border-accent/60 group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
                <span className="text-lg sm:text-xl">{tech.icon}</span>
              </div>
              <span className="text-gray-500 text-[9px] font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ===== Stats Grid ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto mb-6"
        >
          {[
            { val: "6+", label: "Projects Built" },
            { val: "10+", label: "Technologies" },
            { val: "100%", label: "Dedication" },
            { val: "24/7", label: "Learning" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3, boxShadow: "0 0 20px rgba(139,92,246,0.25)" }}
              className="text-center bg-secondary/50 backdrop-blur-sm rounded-lg p-2.5 border border-accent/20 cursor-default transition-all duration-300"
            >
              <div className="gradient-text font-bold text-sm sm:text-base">{stat.val}</div>
              <div className="text-gray-500 text-[8px] sm:text-[9px] mt-0.5 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Social Icons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2.5"
        >
          {[
            { icon: FaGithub, link: "https://github.com/Suriya50", label: "GitHub" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/surya-s-132356357", label: "LinkedIn" },
            { icon: FaWhatsapp, link: "https://wa.me/917868943703", label: "WhatsApp" },
            { icon: FaEnvelope, link: "mailto:suryazzx6@gmail.com", label: "Email" },
          ].map((s, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -3, borderColor: "#8b5cf6", backgroundColor: "rgba(139,92,246,0.1)" }}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex items-center justify-center p-2.5 rounded-full border border-white/10 text-gray-400 hover:text-accent transition-all duration-300"
            >
              <s.icon size={15} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Home;