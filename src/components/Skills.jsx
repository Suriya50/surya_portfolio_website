import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs,
  FaPython, FaGithub, FaDocker, FaCode, FaServer, FaDatabase,
  FaCheck, FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiVercel, SiRender } from "react-icons/si";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const sections = [
    {
      id: 1,
      title: "Frontend Development",
      subtitle: "I build responsive and interactive user interfaces using modern web technologies.",
      icon: <FaCode className="text-accent text-base md:text-lg" />,
      items: [
        { name: "HTML5", sub: "Structure & Semantics", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", sub: "Styling & Layout", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", sub: "Interactivity & Logic", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "React.js", sub: "Components & Hooks", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", sub: "Utility-First CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Bootstrap", sub: "Responsive Design", icon: <FaBootstrap className="text-purple-500" /> },
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      subtitle: "I build secure and scalable server-side applications using Node.js and Express.js.",
      icon: <FaServer className="text-accent text-base md:text-lg" />,
      items: [
        { name: "Node.js", sub: "Runtime Environment", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", sub: "Web Framework", icon: <SiExpress className="text-gray-300" /> },
        { name: "Python", sub: "Backend Scripting", icon: <FaPython className="text-blue-400" /> },
      ],
      keyConcepts: [
        "Authentication (JWT)",
        "Password Hashing (bcrypt)",
        "Middleware & Routing",
        "Error Handling",
        "MVC Architecture",
        "File Upload (Multer)",
      ]
    },
    {
      id: 3,
      title: "Database & Tools",
      subtitle: "I work with databases to manage data efficiently and use modern tools to improve development workflow.",
      icon: <FaDatabase className="text-accent text-base md:text-lg" />,
      items: [
        { name: "MongoDB", sub: "NoSQL Database", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", sub: "Relational Database", icon: <SiMysql className="text-blue-400" /> },
      ],
      toolsTitle: "Tools & Others",
      tools: [
        { name: "Git", sub: "Version Control", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", sub: "Code Hosting", icon: <FaGithub className="text-white" /> },
        { name: "VS Code", sub: "Code Editor", icon: <FaCode className="text-blue-500" /> },
        { name: "Postman", sub: "API Testing", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vercel", sub: "Frontend Deploy", icon: <SiVercel className="text-white" /> },
        { name: "Render", sub: "Backend Deploy", icon: <SiRender className="text-white" /> },
        { name: "Docker", sub: "Containerization", icon: <FaDocker className="text-blue-500" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden bg-primary min-h-[400px]">

      {/* Faint Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[160px] font-extrabold text-white/[0.03] tracking-widest">
          SKILLS
        </h2>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-accent-2/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >

        {/* ===== HEADER ===== */}
        <div className="mb-8 text-center lg:text-left">
          <div className="inline-block mb-3 text-accent text-[10px] font-semibold tracking-widest border border-accent/30 px-3 py-1 rounded-full bg-accent/5">
            ⚡ MY SKILLS
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[11px] sm:text-xs md:text-sm max-w-lg mx-auto lg:mx-0">
            The technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* ===== 3 STACKED SECTIONS ===== */}
        <div className="flex flex-col gap-5 md:gap-6">

          {sections.map((section, sIdx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: sIdx * 0.15 }}
              className="glass rounded-2xl p-4 md:p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >

              {/* Section Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-accent/10 border border-accent/20">
                    {section.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-[10px] md:text-xs max-w-xl">
                  {section.subtitle}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {section.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: (sIdx * 0.15) + (i * 0.04) }}
                    whileHover={{
                      y: -3,
                      borderColor: "#8b5cf6",
                      boxShadow: "0 0 18px rgba(139,92,246,0.28)",
                      transition: { duration: 0.2 }
                    }}
                    className="bg-secondary/50 backdrop-blur-sm rounded-xl p-2.5 md:p-3 border border-white/10 cursor-default transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="text-xl md:text-2xl mb-1">
                      {skill.icon}
                    </div>
                    <span className="text-white text-[9px] md:text-[11px] font-bold whitespace-nowrap">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 text-[7px] md:text-[9px] mt-0.5 leading-tight">
                      {skill.sub}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Key Concepts (Backend only) */}
              {section.keyConcepts && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <h4 className="text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-2.5">
                    Key Concepts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                    {section.keyConcepts.map((concept, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: (sIdx * 0.15) + (i * 0.05) }}
                        className="flex items-center gap-2 text-gray-300 text-[10px] md:text-[11px]"
                      >
                        <FaCheck className="text-accent text-[8px] md:text-[9px] flex-shrink-0" />
                        <span>{concept}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Others */}
              {section.tools && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <h4 className="text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-2.5">
                    {section.toolsTitle}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                    {section.tools.map((tool, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (sIdx * 0.15) + (i * 0.04) }}
                        whileHover={{
                          y: -3,
                          borderColor: "#8b5cf6",
                          boxShadow: "0 0 15px rgba(139,92,246,0.25)",
                          transition: { duration: 0.2 }
                        }}
                        className="bg-secondary/50 backdrop-blur-sm rounded-lg p-2 border border-white/10 cursor-default transition-all duration-300 flex flex-col items-center text-center"
                      >
                        <div className="text-lg md:text-xl mb-1">
                          {tool.icon}
                        </div>
                        <span className="text-white text-[8px] md:text-[10px] font-bold whitespace-nowrap">
                          {tool.name}
                        </span>
                        <span className="text-gray-500 text-[6px] md:text-[8px] mt-0.5 leading-tight">
                          {tool.sub}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default Skills;