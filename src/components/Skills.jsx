import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, 
  FaNodeJs, FaPython, FaGithub, FaDocker,
  FaCode, FaGlobe 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, 
  SiPostman, SiVercel
} from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skillGroups = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JS", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
      ]
    },
    {
      title: "Tools & Deployment",
      items: [
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
        { name: "Render", icon: <FaGlobe className="text-white" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden bg-primary min-h-[400px]">
      
      {/* Faint Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[160px] font-extrabold text-white/[0.03] tracking-widest">
          SKILLS
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col lg:flex-row items-start gap-12 mt-10"
      >
        {/* Left Text */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <div className="inline-block mb-3 text-accent text-[10px] font-semibold tracking-widest border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
            MY EXPERTISE
          </div>
          <h2 className="text-3xl font-bold text-white">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
            I work with a variety of technologies to build awesome and scalable solutions.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-block mt-6 px-5 py-2 border border-accent/50 text-white text-xs font-semibold rounded-full hover:bg-accent/10 transition-all"
          >
            View All Skills →
          </motion.a>
        </div>

        {/* RIGHT SIDE: 4 Separate Vertical Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-5 lg:gap-6 mt-6 lg:mt-0">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="w-full glass rounded-2xl p-4 border border-accent/30 shadow-[0_0_20px_rgba(0,255,102,0.05)] hover:shadow-[0_0_30px_rgba(0,255,102,0.15)] transition-all duration-300"
            >
              {/* Cart Title */}
              <h4 className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                {group.title}
              </h4>
              
              {/* 
                SKILLS ROW - PACKED TIGHTLY with no empty spaces 
                - gap-1 (instead of gap-3) creates the tightly packed look
                - Smaller w-[55px] and h-[55px] makes it a "small size car"
              */}
              <div className="flex flex-row flex-wrap items-center gap-1 md:gap-2">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: (idx * 0.15) + (i * 0.05) }}
                    whileHover={{ 
                      y: -3, 
                      borderColor: "#00ff66",
                      boxShadow: "0 0 15px rgba(0,255,102,0.2)",
                      transition: { duration: 0.2 }
                    }}
                    /* Small size cards: 55px on mobile, 70px on desktop */
                    className="w-[55px] h-[55px] md:w-[70px] md:h-[70px] glass rounded-xl flex flex-col items-center justify-center border border-accent/20 hover:border-accent transition-all duration-300 cursor-default"
                  >
                    <div className="text-lg md:text-xl mb-0.5 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    {/* Smaller font to match the smaller boxes */}
                    <span className="text-white text-[7px] md:text-[8px] font-medium whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;