import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, 
  FaNodeJs, FaPython, FaGithub, FaDocker,
  FaServer, FaCogs, FaCloud, FaDatabase, FaTable, 
  FaCode, FaGlobe 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, 
  SiPostman, SiVercel
} from "react-icons/si";

const Cube3D = ({ title, items, inView, delay }) => {
  const [size, setSize] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 38;
    return 60;
  });

  useEffect(() => {
    const checkSize = () => {
      setSize(window.innerWidth < 768 ? 38 : 60);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const totalWidth = size * 2;
  const positions = ['front', 'back', 'right', 'left', 'top', 'bottom'];
  const transforms = {
    front: `rotateY(0deg) translateZ(${size}px)`,
    back: `rotateY(180deg) translateZ(${size}px)`,
    right: `rotateY(90deg) translateZ(${size}px)`,
    left: `rotateY(-90deg) translateZ(${size}px)`,
    top: `rotateX(90deg) translateZ(${size}px)`,
    bottom: `rotateX(-90deg) translateZ(${size}px)`,
  };

  return (
    <div className="flex flex-col items-center group/cube w-[96px] md:w-[160px]">
      <h4 className="text-accent text-[9px] md:text-[11px] font-bold uppercase tracking-widest mb-1 h-5 md:h-6 flex items-center justify-center">
        {title}
      </h4>
      
      <div className="relative w-full flex justify-center" style={{ height: totalWidth }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: 45, rotateY: 45 }}
          animate={inView ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.8, delay: delay }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative" style={{ width: totalWidth, height: totalWidth }}
        >
          <div className="cube-spin-x w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
            <div className="cube-spin-y w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              
              {items.map((item, i) => (
                <div
                  key={i}
                  className="absolute inset-0 glass border border-accent/30 rounded-xl flex flex-col items-center justify-center shadow-[0_0_10px_rgba(0,255,102,0.05)] group-hover/cube:border-accent group-hover/cube:shadow-[0_0_25px_rgba(0,255,102,0.2)] transition-all duration-300"
                  style={{
                    transform: transforms[positions[i]],
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="text-xl md:text-3xl group-hover/cube:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-white text-[7px] md:text-[10px] font-medium mt-1 opacity-80 whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </motion.div>
        
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-[15px] rounded-[100%] border border-accent/40 shadow-[0_0_20px_rgba(0,255,102,0.2)] blur-[2px]" />
      </div>
    </div>
  );
};

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
        { name: "Server", icon: <FaServer className="text-white" /> },
        { name: "Cogs", icon: <FaCogs className="text-white" /> },
        { name: "Cloud", icon: <FaCloud className="text-blue-300" /> },
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "Database", icon: <FaDatabase className="text-white" /> },
        { name: "Table", icon: <FaTable className="text-white" /> },
        { name: "Disk", icon: <FaServer className="text-white" /> },
        { name: "Storage", icon: <FaCloud className="text-white" /> },
      ]
    },
    {
      title: "Tools",
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
        className="relative z-10 flex flex-col lg:flex-row items-center gap-10 mt-10"
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

        {/* Right Side: 4 Cubes Responsive 2x2 Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 place-items-center">
          {skillGroups.map((group, index) => (
            <Cube3D 
              key={index}
              title={group.title}
              items={group.items}
              inView={inView}
              delay={index * 0.15} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;