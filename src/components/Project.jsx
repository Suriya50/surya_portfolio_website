// components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import villageImg from "../assets/images/village.png.jpeg";
import familyVaultImg from "../assets/images/vault.png";
import rentalCarImg from "../assets/images/rental.png";
import survivalImg from "../assets/images/survival.png";
import jsMasterImg from "../assets/images/javascript.png";

const projectsData = [
  {
    title: "Village Citizen Management",
    description: "Citizen record & village development system",
    image: villageImg,
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://citizen-management-system-vjah.vercel.app",
    github: "https://github.com/Suriya50/village-management",
  },
  {
    title: "Family Vault",
    description: "Secure family document storage",
    image: familyVaultImg,
    tech: ["React", "Express", "MongoDB"],
    link: "https://family-vault-vfmj.vercel.app",
    github: "https://github.com/Suriya50/family-vault",
  },
  {
    title: "Car Rental",
    description: "Vehicle booking & authentication",
    image: rentalCarImg,
    tech: ["React", "MongoDB", "Express"],
    link: "https://car-rental-react-project-sw18.vercel.app/",
    github: "https://github.com/Suriya50/car-rental",
  },
  {
    title: "Survival Guide",
    description: "Emergency tips & alerts",
    image: survivalImg,
    tech: ["React", "Node.js", "Maps API"],
    link: "https://survival-guide-project.vercel.app/",
    github: "https://github.com/Suriya50/survival-guide",
  },
  {
    title: "JavaScript Master",
    description: "Interactive JS learning platform",
    image: jsMasterImg,
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://js-website-ten.vercel.app",
    github: "https://github.com/Suriya50/js-master",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
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
              Projects
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -5 }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-28 sm:h-32">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>
              </div>

              <div className="p-2.5 sm:p-3">
                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-[8px] sm:text-[10px] line-clamp-1 mt-0.5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mt-1.5">
                  {project.tech.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-[6px] sm:text-[8px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-cyan-400 border border-purple-500/20"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="text-[6px] sm:text-[8px] px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex gap-1.5 mt-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[8px] sm:text-[10px] font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={8} /> Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center px-2 py-1 bg-white/10 text-gray-300 text-[8px] sm:text-[10px] font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <FaGithub size={12} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;