import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub, FaExternalLinkAlt, FaShieldAlt, FaUsers, FaCompass,
  FaCar, FaTasks, FaShoppingBag, FaCheck
} from "react-icons/fa";

// Import your project images
import villageImg from "../assets/images/system.png";
import familyVaultImg from "../assets/images/fam.png";
import rentalCarImg from "../assets/images/car.png";
import survivalImg from "../assets/images/guide.png";
import taskTrackerImg from "../assets/images/taskk.png";
import ecommerceImg from "../assets/images/dress.png";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [category, setCategory] = useState("all");

  const allProjects = [
    {
      title: "Task Tracker",
      description: "Smart task management tool for teams with chat & video support.",
      image: taskTrackerImg,
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      category: "fullstack",
      features: [
        "Role-based access control",
        "Task assignment & tracking",
        "Real-time chat with Socket.IO",
      ],
      icon: <FaTasks />,
      iconBg: "from-indigo-500 to-violet-600",
      link: "https://task-tracker-fl88.vercel.app/",
      github: "https://github.com/Suriya50/task_tracker",
      decorativeText: "Better Teamwork",
    },
    {
      title: "Village Management",
      description: "A panchayat-level system to manage citizen data, families and members.",
      image: villageImg,
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      category: "fullstack",
      features: [
        "Panchayat admin login & roles",
        "Family/member CRUD & search",
        "Optimized for 500+ families",
      ],
      icon: <FaUsers />,
      iconBg: "from-emerald-500 to-teal-600",
      link: "https://citizen-management-system-vjah.vercel.app",
      github: "https://github.com/Suriya50/citizen_management_system",
      decorativeText: "Stronger Villages",
    },
    {
      title: "Family Vault",
      description: "Securely store and manage important documents with cloud storage.",
      image: familyVaultImg,
      tech: ["React", "Vite", "Tailwind CSS", "Express.js"],
      category: "fullstack",
      features: [
        "JWT auth & bcrypt security",
        "Upload, view & share docs",
        "Cloudinary cloud storage",
      ],
      icon: <FaShieldAlt />,
      iconBg: "from-blue-500 to-indigo-600",
      link: "https://family-vault-vfmj.vercel.app",
      github: "https://github.com/Suriya50/family_vault",
      decorativeText: "Your Documents Safe",
    },
    {
      title: "V2C / Survival Guide",
      description: "A beginner-friendly guide for Chennai newcomers with essential resources.",
      image: survivalImg,
      tech: ["HTML", "CSS", "JavaScript", "React"],
      category: "frontend",
      features: [
        "Rooms / PG accommodation",
        "Part-time job listings",
        "Food & travel guide",
      ],
      icon: <FaCompass />,
      iconBg: "from-violet-500 to-purple-600",
      link: "https://survival-guide-project.vercel.app/",
      github: "https://github.com/Suriya50/survival-guide",
      decorativeText: "New City New Journey",
    },
    {
      title: "RentRide",
      description: "Book your favorite car easily and travel with comfort.",
      image: rentalCarImg,
      tech: ["React", "Tailwind CSS", "LocalStorage"],
      category: "frontend",
      features: [
        "Browse available cars",
        "Book & manage bookings",
        "User authentication",
      ],
      icon: <FaCar />,
      iconBg: "from-blue-500 to-cyan-600",
      link: "https://car-rental-react-project-sw18.vercel.app/",
      github: "https://github.com/Suriya50/car_rental_react_project",
      decorativeText: "Drive Your Dreams",
    },
    {
      title: "LuxWeave",
      description: "A stylish clothing eCommerce platform for boys & girls.",
      image: ecommerceImg,
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      category: "fullstack",
      features: [
        "Admin & customer panel",
        "Cart & location search",
        "Secure authentication",
      ],
      icon: <FaShoppingBag />,
      iconBg: "from-pink-500 to-rose-600",
      link: "https://luxweave-ecommerce.vercel.app/",
      github: "https://github.com/Suriya50/Luxweave_ecommerce",
      decorativeText: "Trendy Looks Everyday",
    },
  ];

  const filteredProjects = category === "all"
    ? allProjects
    : allProjects.filter((p) => p.category === category);

  return (
    <section id="projects" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden bg-primary min-h-[400px]">

      {/* Faint Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[160px] font-extrabold text-white/[0.03] tracking-widest">
          PROJECTS
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
        <div className="mb-8 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-block mb-3 text-accent text-[10px] font-semibold tracking-widest border border-accent/30 px-3 py-1 rounded-full bg-accent/5">
              💼 MY PROJECTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Building <span className="gradient-text">Real Solutions</span>
            </h2>
            <p className="mt-2 text-gray-400 text-[11px] sm:text-xs md:text-sm max-w-lg mx-auto lg:mx-0">
              Here are some of the projects I've built to learn, practice and solve real-world problems.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-accent-2 text-xs italic font-light opacity-80">Small Steps</p>
            <p className="text-accent text-base italic font-light opacity-80">Big Dreams</p>
          </div>
        </div>

        {/* ===== FILTERS ===== */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
          {["all", "frontend", "fullstack"].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-all duration-300 border ${
                category === cat
                  ? "bg-gradient-to-r from-accent to-accent-2 text-white border-transparent shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                  : "bg-secondary/50 text-gray-400 border-white/10 hover:border-accent/50 hover:text-white"
              }`}
            >
              {cat === "all" ? "All Projects" : cat === "frontend" ? "Frontend" : "Full Stack"}
            </motion.button>
          ))}
        </div>

        {/* ===== 3-COLUMN PROJECT GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                y: -5,
                borderColor: "#8b5cf6",
                boxShadow: "0 0 30px rgba(139,92,246,0.25)",
                transition: { duration: 0.3 }
              }}
              className="group relative glass rounded-2xl border border-accent/20 overflow-hidden transition-all duration-300 flex flex-col"
            >

              {/* ===== IMAGE MOCKUP ===== */}
              <div className="relative w-full p-3">
                {/* Handwritten text */}
                <div className="absolute top-1.5 right-3 z-30 pointer-events-none">
                  <span className="text-accent-2 text-[8px] md:text-[9px] italic font-light opacity-80 whitespace-nowrap">
                    ✨ {project.decorativeText}
                  </span>
                </div>

                {/* Mockup Container */}
                <div className="relative w-full h-[140px] sm:h-[150px] rounded-lg overflow-hidden border border-accent/20 shadow-[0_0_15px_rgba(139,92,246,0.12)]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.iconBg} opacity-30`} />
                  <div className="absolute inset-0 bg-primary/65" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative w-full h-full object-contain object-center p-2 group-hover:scale-105 transition-transform duration-700 z-10"
                    loading="lazy"
                  />

                  {/* LIVE Badge */}
                  <div className="absolute top-1.5 left-1.5 z-20 flex items-center gap-1 bg-black/75 backdrop-blur-sm border border-green-400/40 rounded-full px-1.5 py-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                    </span>
                    <span className="text-green-400 text-[7px] font-bold tracking-wider">LIVE</span>
                  </div>
                </div>
              </div>

              {/* ===== CONTENT ===== */}
              <div className="px-3.5 pb-3.5 flex flex-col flex-grow">

                {/* Icon + Title */}
                <div className="flex items-start gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${project.iconBg} shadow-[0_0_12px_rgba(139,92,246,0.25)] flex-shrink-0`}>
                    <span className="text-white text-xs">{project.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white text-[12px] md:text-sm font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-[9px] md:text-[10px] leading-snug mt-0.5 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span
                      key={i}
                      className="text-[7.5px] px-1.5 py-0.5 rounded-full bg-secondary/60 text-gray-300 border border-white/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-[7.5px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30 font-medium">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Features Checklist (Top 3) */}
                <div className="space-y-1 mb-3">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <FaCheck className="text-green-400 text-[7px] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-[9px] md:text-[10px] leading-snug line-clamp-1">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto pt-2.5 border-t border-white/5">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 bg-gradient-to-r from-accent to-accent-2 text-white rounded-lg text-[10px] font-semibold shadow-[0_0_12px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
                  >
                    <FaExternalLinkAlt size={9} /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex items-center justify-center px-3 py-1.5 border border-white/10 text-white rounded-lg hover:border-accent/60 hover:bg-accent/10 transition-all duration-300"
                  >
                    <FaGithub size={13} />
                  </motion.a>
                </div>
              </div>

              {/* Decorative Neon Corners */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/40 rounded-tr-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/40 rounded-bl-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            </motion.div>
          ))}

        </div>

        {/* ===== BOTTOM CTA ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-500 text-[10px] md:text-xs mb-3 italic">More projects coming soon...</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Suriya50"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/60 backdrop-blur-sm border border-accent/30 text-white text-[11px] md:text-xs font-semibold rounded-full hover:border-accent/60 hover:bg-accent/10 transition-all duration-300"
          >
            <FaGithub size={13} /> View All on GitHub
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Projects;