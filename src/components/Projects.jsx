import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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

  return (
    <section id="projects" className="relative py-20 px-4 max-w-7xl mx-auto overflow-hidden bg-primary min-h-[400px]">
      
      {/* Faint Background Text */}
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
        className="relative z-10 flex flex-col lg:flex-row items-start gap-12 mt-6"
      >
        {/* LEFT SIDE: Text & Controls */}
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

          {/* Filter Buttons */}
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

        {/* RIGHT SIDE: Super Small & Simple Grid (4 Columns on Desktop) */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 lg:mt-0">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              /* Removed the lift animation, keeps it completely static and simple */
              whileHover={{ 
                borderColor: "#00ff66",
                transition: { duration: 0.2 }
              }}
              className="glass rounded-xl border border-white/10 p-2.5 flex flex-col bg-secondary/90 shadow-[0_0_10px_rgba(0,255,102,0.05)] transition-all duration-300 cursor-default"
            >
              {/* Tiny Image Box */}
              <div className="relative w-full h-[100px] rounded-lg overflow-hidden mb-2 border border-accent/10">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>

              {/* Tiny Content Area */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  {/* Compressed Fonts */}
                  <h4 className="text-white text-xs font-bold mb-0.5">{project.title}</h4>
                  <p className="text-gray-400 text-[9px] leading-tight mb-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[7px] px-1 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tiny Action Buttons */}
                <div className="flex gap-1.5 mt-auto pt-2 border-t border-white/5">
                  <motion.a whileHover={{ scale: 1.05 }} href={project.link} target="_blank" className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-accent text-black rounded-lg text-[9px] font-semibold shadow-[0_0_10px_rgba(0,255,102,0.2)]">
                    <FaExternalLinkAlt size={8} /> Live Demo
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href={project.github} target="_blank" className="flex items-center justify-center px-2 py-1 border border-white/10 text-white rounded-lg text-[9px] hover:bg-white/5 transition-all">
                    <FaGithub size={12} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;