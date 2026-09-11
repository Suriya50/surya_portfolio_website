import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa";
import aboutImage from "../assets/images/photo.png";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const statData = [
    { value: "7+", label: "Projects" },
    { value: "Fresher", label: "Experience" },
    { value: "10+", label: "Technologies" },
    { value: "24/7", label: "Learning" },
  ];

  const techStack = [
    { key: "frontend", items: ["React", "Tailwind CSS", "JavaScript"] },
    { key: "backend", items: ["Node.js", "Express.js", "Python"] },
    { key: "database", items: ["MongoDB", "MySQL"] },
    { key: "tools", items: ["Git", "Docker", "Vercel", "Postman"] },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden bg-primary">

      {/* FAINT BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[100px] md:text-[150px] font-extrabold text-white/[0.03] tracking-widest">
          ABOUT
        </h2>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-accent-2/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

        {/* ===== LEFT SIDE: Text Content ===== */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-block mx-auto lg:mx-0 mb-3 text-accent text-[10px] sm:text-xs font-semibold tracking-widest border border-accent/30 px-4 py-1 rounded-full bg-accent/5 whitespace-nowrap">
             GET TO KNOW ME
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            About <span className="gradient-text">Me</span>
          </h2>

          {/* Introduction */}
          <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
            I'm <span className="text-white font-semibold">Surya</span>, a passionate{" "}
            <span className="text-accent font-semibold">MERN Full Stack Developer</span>{" "}
            based in Chennai, India. I love transforming ideas into clean, scalable, and
            user-focused web applications that solve real problems.
          </p>

          <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto lg:mx-0">
            My journey began with curiosity about how websites work — today I build them end-to-end,
            from pixel-perfect UIs in React to secure REST APIs in Node.js. I'm driven by writing
            clean, maintainable code and growing as an engineer every single day.
          </p>

          <p className="mt-3 text-gray-500 text-[11px] sm:text-xs leading-relaxed max-w-lg mx-auto lg:mx-0 italic">
            "Currently seeking a full-time SDE role where I can contribute, learn fast, and ship meaningful products."
          </p>

          {/* Bullet Points */}
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm mx-auto lg:mx-0 max-w-md">
            <li className="flex items-center gap-2.5 justify-center lg:justify-start">
              <div className="p-1 rounded-full bg-accent/15 border border-accent/30">
                <FaCheck className="text-accent text-[9px]" />
              </div>
              <span className="text-gray-300">BCA Graduate</span>
            </li>
            <li className="flex items-center gap-2.5 justify-center lg:justify-start">
              <div className="p-1 rounded-full bg-accent/15 border border-accent/30">
                <FaCheck className="text-accent text-[9px]" />
              </div>
              <span className="text-gray-300">Chennai, Tamil Nadu</span>
            </li>
            <li className="flex items-center gap-2.5 justify-center lg:justify-start">
              <div className="p-1 rounded-full bg-accent/15 border border-accent/30">
                <FaCheck className="text-accent text-[9px]" />
              </div>
              <span className="text-gray-300">Problem Solver</span>
            </li>
            <li className="flex items-center gap-2.5 justify-center lg:justify-start">
              <div className="p-1 rounded-full bg-accent/15 border border-accent/30">
                <FaCheck className="text-accent text-[9px]" />
              </div>
              <span className="text-gray-300">Lifelong Learner</span>
            </li>
          </ul>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 max-w-md mx-auto lg:mx-0"
          >
            {statData.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "0 0 20px rgba(139,92,246,0.25)" }}
                className="text-center bg-secondary/50 backdrop-blur-sm rounded-xl p-3 border border-accent/20 transition-all duration-300 cursor-default"
              >
                <div className="gradient-text font-bold text-sm sm:text-base">{stat.value}</div>
                <div className="text-gray-500 text-[9px] sm:text-[10px] mt-0.5 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-2 text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
          >
            Let's Talk 
          </motion.a>
        </motion.div>


        {/* ===== RIGHT SIDE: Small Image Card + Code Block ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col items-center gap-3"
        >

          {/* ===== SMALL IMAGE CARD ===== */}
          <div className="relative w-full max-w-[220px] sm:max-w-[240px]">

            {/* Glow behind card */}
            <div className="absolute -inset-2 bg-accent/20 blur-2xl rounded-full opacity-60 pointer-events-none" />

            {/* The Card */}
            <div className="relative glass rounded-2xl border border-accent/40 shadow-[0_0_30px_rgba(139,92,246,0.2)] overflow-hidden transition-all duration-500 hover:border-accent hover:shadow-[0_0_50px_rgba(139,92,246,0.35)]">

              {/* Neon Corner Accents */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent/60 rounded-tl-2xl z-20" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent/60 rounded-tr-2xl z-20" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent/60 rounded-bl-2xl z-20" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent/60 rounded-br-2xl z-20" />

              {/* Image with floating animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full aspect-[4/5] overflow-hidden"
              >
                <img
                  src={aboutImage}
                  alt="Surya Portrait"
                  className="w-full h-full object-cover object-top"
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10 pointer-events-none" />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-2.5 left-3 right-3 z-20">
                  <p className="text-white font-bold text-sm">Surya S</p>
                  <p className="text-accent text-[9px] font-medium tracking-wide">
                    MERN Stack Developer
                  </p>
                </div>

                {/* Small status dot - Top Right */}
                <div className="absolute top-2 right-2 z-20 flex items-center gap-1 bg-black/70 backdrop-blur-md border border-green-400/40 rounded-full px-2 py-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                  </span>
                  <span className="text-green-400 text-[7px] font-bold tracking-wider">OPEN</span>
                </div>
              </motion.div>
            </div>
          </div>


          {/* ===== CODE SYNTAX BLOCK (Below Image) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-[320px] glass rounded-2xl border border-accent/30 overflow-hidden shadow-[0_0_25px_rgba(139,92,246,0.15)]"
          >

            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-secondary/70 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-gray-500 text-[9px] font-mono ml-2">
                developer.js
              </span>
            </div>

            {/* Code Body */}
            <div className="p-3 font-mono text-[10px] leading-relaxed">
              <div className="flex">
                <span className="text-purple-400">const</span>
                <span className="text-white ml-1.5">developer</span>
                <span className="text-gray-500 ml-1">=</span>
                <span className="text-accent-2 ml-1.5">{"{"}</span>
              </div>

              {techStack.map((stack, idx) => (
                <div key={idx} className="flex pl-4 mt-0.5 flex-wrap">
                  <span className="text-cyan-400">{stack.key}</span>
                  <span className="text-gray-500 mx-1">:</span>
                  <span className="text-accent-2">[</span>
                  {stack.items.map((item, i) => (
                    <React.Fragment key={i}>
                      <span className="text-green-400">"{item}"</span>
                      {i < stack.items.length - 1 && <span className="text-gray-500">, </span>}
                    </React.Fragment>
                  ))}
                  <span className="text-accent-2">]</span>
                  {idx < techStack.length - 1 && <span className="text-gray-500">,</span>}
                </div>
              ))}

              <div className="flex">
                <span className="text-accent-2">{"}"}</span>
              </div>

              <div className="flex items-center mt-1.5">
                <span className="text-purple-400">developer</span>
                <span className="text-gray-500 mx-1">.</span>
                <span className="text-yellow-400">build</span>
                <span className="text-gray-500">()</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-1.5 h-3 bg-accent ml-1.5"
                />
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;