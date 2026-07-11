// components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer } from "react-icons/fa";

// Import your project images
import villageImg from "../assets/images/village.png.jpeg";
import familyVaultImg from "../assets/images/vault.png";
import rentalCarImg from "../assets/images/rental.png";
import survivalImg from "../assets/images/survival.png";
import connectImg from "../assets/images/connect.png.jpeg";
import taskTrackerImg from "../assets/images/tracker.png";
import ecommerceImg from "../assets/images/ecommercee.png"; // Update path

// Optional: import logos for the cards (if you have them)
// import frontendLogo from "../assets/images/frontend-logo.png";
// import fullstackLogo from "../assets/images/fullstack-logo.png";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState(null); // 'frontend' | 'fullstack' | null

  // ─── Project Data ────────────────────────────────────────────────
  const frontendProjects = [
    {
      title: "Survival Guide",
      description: "Emergency tips & alerts with maps",
      image: survivalImg,
      tech: ["React", "Tailwind", "Maps API"],
      link: "https://survival-guide-project.vercel.app/",
      github: "https://github.com/Suriya50/survival-guide",
    },
    {
      title: "Car Rental",
      description: "Vehicle booking & authentication",
      image: rentalCarImg,
      tech: ["React", "Tailwind", "MongoDB"],
      link: "https://car-rental-react-project-sw18.vercel.app/",
      github: "https://github.com/Suriya50/car-rental",
    },
  ];

  const fullstackProjects = [
    {
      title: "Family Vault",
      description: "Secure family document storage",
      image: familyVaultImg,
      tech: ["React", "Express", "MongoDB"],
      link: "https://family-vault-vfmj.vercel.app",
      github: "https://github.com/Suriya50/family-vault",
    },
    {
      title: "Village Management",
      description: "Citizen record & development system",
      image: villageImg,
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://citizen-management-system-vjah.vercel.app",
      github: "https://github.com/Suriya50/village-management",
    },
    {
      title: "Task Tracker",
      description: "Full-stack task management with auth",
      image: taskTrackerImg,
      tech: ["React", "Express", "MongoDB"],
      link: "https://task-tracker-fl88.vercel.app/",
      github: "https://github.com/Suriya50/task-tracker",
    },
    {
      title: "Connect Chat",
      description: "Real-time messaging with Socket.io",
      image: connectImg,
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://mineconnect-project-fm4h.vercel.app",
      github: "https://github.com/Suriya50/connect-chat",
    },
    {
      title: "Luxweave E-commerce",
      description: "Full-featured online store with cart & payments",
      image: ecommerceImg,
      tech: ["React", "Express", "MongoDB", "Stripe"],
      link: "https://luxweave-ecommerce.vercel.app/",
      github: "https://github.com/Suriya50/luxweave-ecommerce",
    },
  ];

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  // ─── Render project grid ────────────────────────────────────────
  const renderProjectGrid = (projects) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 mt-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
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
              <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-400 transition line-clamp-1">
                {project.title}
              </h4>
              <p className="text-gray-400 text-[10px] sm:text-xs line-clamp-1 mt-0.5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mt-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-cyan-400 border border-purple-500/20"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <div className="flex gap-1.5 mt-2">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[9px] sm:text-xs font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={9} /> Live
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center px-2.5 py-1 bg-white/10 text-gray-300 text-[9px] sm:text-xs font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <FaGithub size={13} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  // ─── Main Render ────────────────────────────────────────────────
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
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
          <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
            Tap a category to explore my work
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* ─── FRONTEND CARD ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
              ${
                activeCategory === "frontend"
                  ? "border-purple-500/60 bg-purple-500/10 shadow-2xl shadow-purple-500/20"
                  : "border-white/10 bg-white/5 hover:border-purple-500/30 hover:bg-white/10"
              }`}
            onClick={() => toggleCategory("frontend")}
          >
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            <div className="relative p-4 sm:p-5">
              {/* ── Header: Big styled text ── */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {/* Optional logo image */}
                    {/* <img src={frontendLogo} alt="Frontend" className="h-8 w-auto" /> */}
                    <FaCode className="text-purple-400 text-xl" />
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      FRONTEND
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                      Projects
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-[10px] text-gray-500 tracking-wider">
                      BUILD · DESIGN · DEPLOY
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: activeCategory === "frontend" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 flex-shrink-0"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded projects */}
              <AnimatePresence>
                {activeCategory === "frontend" && renderProjectGrid(frontendProjects)}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* ─── FULL STACK CARD ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`group relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden
              ${
                activeCategory === "fullstack"
                  ? "border-cyan-500/60 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20"
                  : "border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10"
              }`}
            onClick={() => toggleCategory("fullstack")}
          >
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

            <div className="relative p-4 sm:p-5">
              {/* ── Header: Big styled text ── */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    {/* <img src={fullstackLogo} alt="Full Stack" className="h-8 w-auto" /> */}
                    <FaServer className="text-cyan-400 text-xl" />
                    <span className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      FULL STACK
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                      Projects
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-[10px] text-gray-500 tracking-wider">
                      &lt;/&gt; DEVELOP · BUILD · DEPLOY
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: activeCategory === "fullstack" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 flex-shrink-0"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Expanded projects */}
              <AnimatePresence>
                {activeCategory === "fullstack" && renderProjectGrid(fullstackProjects)}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-500 text-xs mt-5"
        >
          {activeCategory
            ? "Click again to collapse"
            : "Click a card above to explore projects"}
        </motion.p>
      </div>
    </section>
  );
};

export default Projects;