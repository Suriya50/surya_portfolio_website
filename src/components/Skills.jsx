// components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiBootstrap,
} from "react-icons/si";

const skillsData = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Skills
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 text-sm mt-3">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {skillsData.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center border border-white/5 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-2 font-medium group-hover:text-white transition">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/20">
            <span className="text-lg">⚡</span>
            <span className="text-gray-300 text-xs sm:text-sm font-medium">
              MERN Stack
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-xs sm:text-sm">
              MongoDB • Express • React • Node.js
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;