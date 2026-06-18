// components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Me
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "10+", label: "Projects" },
                { value: "Fresher", label: "Experience" },
                { value: "5+", label: "Certifications" },
                { value: "24/7", label: "Learning" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/5 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I'm <span className="font-bold text-cyan-400">Surya</span>, a passionate{" "}
              <span className="font-bold text-cyan-400">MERN Full Stack Developer</span>{" "}
              who loves building modern web applications.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              I specialize in React, Node.js, Express, MongoDB, and modern frontend
              technologies. I enjoy turning ideas into beautiful, functional websites.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              As a fresh graduate, I'm eager to learn, grow, and contribute to
              exciting projects. I focus on writing clean, efficient, and
              maintainable code.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Quick Learner", "Team Player", "Problem Solver", "Creative"].map(
                (tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-cyan-400 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;