import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import your project images
import villageImg from "../assets/images/village.png.jpeg";
import familyVaultImg from "../assets/images/vault.png";
import rentalCarImg from "../assets/images/rental.png";
import survivalImg from "../assets/images/survival.png";
import connectImg from "../assets/images/connect.png.jpeg";
import taskTrackerImg from "../assets/images/tracker.png";
import ecommerceImg from "../assets/images/ecommercee.png";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [category, setCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const allProjects = [
    {
      title: "Survival Guide",
      description: "Emergency tips & alerts with maps",
      image: survivalImg,
      tech: ["React", "Tailwind", "Maps API"],
      category: "frontend",
      link: "https://survival-guide-project.vercel.app/",
      github: "https://github.com/Suriya50/survival-guide",
    },
    {
      title: "Car Rental",
      description: "Vehicle booking & authentication",
      image: rentalCarImg,
      tech: ["React", "Tailwind", "MongoDB"],
      category: "frontend",
      link: "https://car-rental-react-project-sw18.vercel.app/",
      github: "https://github.com/Suriya50/car-rental",
    },
    {
      title: "Family Vault",
      description: "Secure family document storage",
      image: familyVaultImg,
      tech: ["React", "Express", "MongoDB"],
      category: "fullstack",
      link: "https://family-vault-vfmj.vercel.app",
      github: "https://github.com/Suriya50/family-vault",
    },
    {
      title: "Village Management",
      description: "Citizen record & development system",
      image: villageImg,
      tech: ["React", "Node.js", "MongoDB"],
      category: "fullstack",
      link: "https://citizen-management-system-vjah.vercel.app",
      github: "https://github.com/Suriya50/village-management",
    },
    {
      title: "Task Tracker",
      description: "Full-stack task management with auth",
      image: taskTrackerImg,
      tech: ["React", "Express", "MongoDB"],
      category: "fullstack",
      link: "https://task-tracker-fl88.vercel.app/",
      github: "https://github.com/Suriya50/task-tracker",
    },
    {
      title: "Connect Chat",
      description: "Real-time messaging with Socket.io",
      image: connectImg,
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "fullstack",
      link: "https://mineconnect-project-fm4h.vercel.app",
      github: "https://github.com/Suriya50/connect-chat",
    },
    {
      title: "Luxweave E-commerce",
      description: "Full-featured online store with cart & payments",
      image: ecommerceImg,
      tech: ["React", "Express", "MongoDB", "Stripe"],
      category: "fullstack",
      link: "https://luxweave-ecommerce.vercel.app/",
      github: "https://github.com/Suriya50/luxweave-ecommerce",
    },
  ];

  const filteredProjects = category === "all" 
    ? allProjects 
    : allProjects.filter((p) => p.category === category);

  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) handleNext();
    else if (info.offset.x > 50) handlePrev();
  };

  return (
    <section id="projects" className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden bg-primary">
      
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[180px] font-extrabold text-white/[0.03] tracking-widest">
          PROJECTS
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 mt-6"
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-block mb-3 text-accent text-[10px] font-semibold tracking-widest border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
            MY WORK
          </div>
          <h2 className="text-3xl font-bold text-white">
            <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
            Here are some of the projects I've worked on. Each project is a unique piece of development and creativity.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-5">
            {["all", "frontend", "fullstack"].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-semibold transition-all duration-300 border ${
                  category === cat
                    ? "bg-accent text-black border-accent shadow-[0_0_15px_rgba(0,255,102,0.3)]"
                    : "bg-secondary/50 text-gray-400 border-white/10 hover:border-accent/50 hover:text-white"
                }`}
              >
                {cat === "all" ? "All" : cat === "frontend" ? "Frontend" : "Full Stack"}
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: 3D Carousel */}
        <div className="w-full lg:w-2/3 h-[400px] md:h-[520px] relative flex items-center justify-center mt-6 lg:mt-0">
          <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
            
            <button onClick={handlePrev} className="absolute left-2 md:-left-6 z-20 p-2 rounded-full glass border border-accent/30 text-accent hover:bg-accent/20 transition-all">
              <FaArrowLeft size={14} />
            </button>
            <button onClick={handleNext} className="absolute right-2 md:-right-6 z-20 p-2 rounded-full glass border border-accent/30 text-accent hover:bg-accent/20 transition-all">
              <FaArrowRight size={14} />
            </button>

            <motion.div 
              drag="x" 
              dragConstraints={{ left: 0, right: 0 }} 
              onDragEnd={handleDragEnd}
              className="relative w-full h-full flex items-center justify-center"
            >
              <AnimatePresence initial={false}>
                {filteredProjects.map((project, index) => {
                  const offset = (index - currentIndex + filteredProjects.length) % filteredProjects.length;
                  let translateX = 0;
                  let scale = 0.75;
                  let rotateY = 0;
                  let zIndex = 5;
                  let opacity = 0.8;
                  let rotateX = 20;

                  if (offset === 0) {
                    translateX = 0; scale = 1.1; zIndex = 10; opacity = 1; rotateX = 0;
                  } else if (offset === 1 || offset === -(filteredProjects.length - 1)) {
                    translateX = 140; scale = 0.8; rotateY = -15; zIndex = 8;
                  } else if (offset === -1 || offset === (filteredProjects.length - 1)) {
                    translateX = -140; scale = 0.8; rotateY = 15; zIndex = 8;
                  } else {
                    opacity = 0; zIndex = 1;
                  }

                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ x: translateX, scale: scale, rotateY: rotateY, rotateX: rotateX, opacity: opacity, zIndex: zIndex }}
                      /* UPDATED: Medium premium hover - subtle scale & glow */
                      whileHover={{ 
                        scale: 1.04, 
                        boxShadow: "0 0 30px rgba(0,255,102,0.4)", 
                        borderColor: "#00ff66",
                        transition: { duration: 0.3 }
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      /* UPDATED: Medium Card Size */
                      className="absolute w-[220px] md:w-[280px] h-[360px] md:h-[460px] glass rounded-2xl border-2 border-accent/30 p-4 flex flex-col bg-secondary/90 shadow-[0_0_20px_rgba(0,255,102,0.1)]"
                      style={{ transformOrigin: "center center" }}
                    >
                      {/* UPDATED: Medium Image Box Size */}
                      <div className="relative w-full h-[160px] md:h-[210px] rounded-xl overflow-hidden mb-3 border border-accent/40 shadow-[0_0_20px_rgba(0,255,102,0.15)]">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                      </div>

                      <div className="flex flex-col flex-grow justify-between">
                        <div>
                          {/* UPDATED: Crisp Medium Fonts */}
                          <h4 className="text-white text-sm md:text-base font-bold mb-1">{project.title}</h4>
                          <p className="text-gray-400 text-[11px] md:text-xs leading-tight mb-2">{project.description}</p>

                          <div className="flex flex-wrap gap-1 mb-2">
                            {project.tech.slice(0, 3).map((t) => (
                              <span key={t} className="text-[8px] md:text-[10px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-auto pt-2 border-t border-white/5">
                          <motion.a whileHover={{ scale: 1.05 }} href={project.link} target="_blank" className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-accent text-black rounded-lg text-[11px] md:text-xs font-semibold shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                            <FaExternalLinkAlt size={10} /> Live Demo
                          </motion.a>
                          <motion.a whileHover={{ scale: 1.05 }} href={project.github} target="_blank" className="flex items-center justify-center px-3 py-2 border border-white/10 text-white rounded-lg text-[11px] md:text-xs hover:bg-white/5 transition-all">
                            <FaGithub size={14} />
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[20px] rounded-[100%] border border-accent/40 shadow-[0_0_50px_rgba(0,255,102,0.3)] blur-sm" />
          </div>

          <div className="absolute bottom-4 text-[10px] text-gray-500 font-medium">
            {currentIndex + 1} / {filteredProjects.length}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;