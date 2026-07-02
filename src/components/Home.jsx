// components/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import photo from "../assets/images/photo.png";
import resumePDF from "../assets/images/Surya_S resume.pdf";

// Floating Particles Background
const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        color: `hsl(${Math.random() * 60 + 220}, 80%, 60%)`,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    draw();
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />;
};

// Floating MERN Icons - Fully Responsive
const FloatingIcons = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const icons = [
    { Icon: FaReact, color: "#61DBFB", label: "React" },
    { Icon: FaNodeJs, color: "#68A063", label: "Node.js" },
    { Icon: SiMongodb, color: "#4DB33D", label: "MongoDB" },
    { Icon: SiExpress, color: "#FFFFFF", label: "Express" },
  ];

  // Responsive positions
  const getPositions = () => {
    if (isMobile) {
      return [
        { top: "-8%", left: "-6%" },
        { top: "-8%", right: "-6%" },
        { bottom: "-8%", left: "-6%" },
        { bottom: "-8%", right: "-6%" },
      ];
    } else if (isTablet) {
      return [
        { top: "-5%", left: "-8%" },
        { top: "-5%", right: "-8%" },
        { bottom: "-5%", left: "-8%" },
        { bottom: "-5%", right: "-8%" },
      ];
    } else {
      return [
        { top: "-8%", left: "-12%" },
        { top: "-8%", right: "-12%" },
        { bottom: "-8%", left: "-12%" },
        { bottom: "-8%", right: "-12%" },
      ];
    }
  };

  const positions = getPositions();
  const size = isMobile ? "w-8 h-8" : "w-10 h-10";
  const iconSize = isMobile ? "text-sm" : "text-2xl";
  const labelSize = isMobile ? "text-[6px]" : "text-[10px]";
  const padding = isMobile ? "p-1.5" : "p-2";

  return (
    <>
      {icons.map(({ Icon, color, label }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            delay: i * 0.4,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute flex flex-col items-center z-20"
          style={positions[i]}
        >
          <div
            className={`${padding} ${size} bg-[#0a0a1a]/80 backdrop-blur-sm rounded-full border border-white/10 shadow-xl flex items-center justify-center`}
            style={{ boxShadow: `0 0 20px ${color}44` }}
          >
            <Icon className={`${iconSize}`} style={{ color }} />
          </div>
          <span className={`${labelSize} text-gray-400 mt-0.5 font-medium whitespace-nowrap`}>
            {label}
          </span>
        </motion.div>
      ))}
    </>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#150a2a] to-[#0a1a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-cyan-400 text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3"
          >
            🚀 Welcome to my Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <span className="text-white">Surya </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              S
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-cyan-400 mt-1 h-7 sm:h-9 md:h-12"
          >
            <Typewriter
              options={{
                strings: [
                  "MERN Full Stack Developer",
                  "React Developer",
                  "Node.js Developer",
                  "Frontend Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
                pauseFor: 2000,
              }}
            />
          </motion.div>

          {/* Three Lines */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2"
          >
            <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm <span className="text-cyan-400 font-medium">Surya</span>, a passionate developer
              dedicated to building modern web applications.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I specialize in creating <span className="text-purple-400">responsive</span>,{" "}
              <span className="text-purple-400">user-friendly</span>, and{" "}
              <span className="text-purple-400">high-performance</span> websites.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I'm a fresh graduate with strong skills in{" "}
              <span className="text-cyan-400 font-medium">MERN Stack</span>.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mt-4 sm:mt-5"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePDF}
              download
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/50 transition-all duration-300 text-[10px] sm:text-sm"
            >
              <FaDownload size={12} /> Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-[10px] sm:text-sm"
            >
              Contact Me →
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex gap-2 sm:gap-3 justify-center lg:justify-start mt-4 sm:mt-5"
          >
            {[
              { icon: FaGithub, href: "https://github.com/Suriya50" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/surya-s-132356357" },
              { icon: FaWhatsapp, href: "https://wa.me/917868943703" },
              { icon: FaEnvelope, href: "mailto:suryazzx6@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.15, y: -2 }}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 sm:p-2.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <social.icon className="text-gray-300 hover:text-cyan-400 text-xs sm:text-base" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image with Floating Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2 flex justify-center order-1 lg:order-2 relative w-full"
        >
          <div className="relative group">
            {/* Floating Icons Container - Positioned absolutely */}
            <div className="absolute inset-0 pointer-events-none">
              <FloatingIcons />
            </div>

            {/* Glow Effects */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse"></div>
            <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500"></div>

            {/* Profile Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl mx-auto"
            >
              <img
                src={photo}
                alt="Surya S"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-purple-500/20"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 sm:-inset-4 rounded-full border border-cyan-500/10"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;