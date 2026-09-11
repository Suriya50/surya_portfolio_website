import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBook, FaMedal, FaMapMarkerAlt, FaCheck, FaTrophy, FaStar, FaChartLine } from "react-icons/fa";

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const educationData = [
    {
      year: "2019 - 2020",
      title: "SSLC",
      subtitle: "Secondary School Certificate",
      school: "Mary Immaculate Heart Matric Hr. Sec. School",
      location: "Tiruvannamalai",
      grade: "88%",
      gradeLabel: "Excellent",
      description: "Built a strong foundation in Mathematics, Science, and English. Developed critical thinking and problem-solving skills.",
      subjects: ["Mathematics", "Science", "English", "Social Science"],
      achievement: "Top 10% of the class",
      icon: <FaMedal className="text-accent text-base md:text-lg" />,
      color: "from-purple-500/20 to-purple-500/5"
    },
    {
      year: "2021 - 2022",
      title: "Higher Secondary (HSC)",
      subtitle: "Bio-Maths Stream",
      school: "Mary Immaculate Heart Matric Hr. Sec. School",
      location: "Tiruvannamalai",
      grade: "80%",
      gradeLabel: "Very Good",
      description: "Specialized in Biology and Mathematics. Sharpened analytical thinking which later fueled my passion for programming.",
      subjects: ["Biology", "Mathematics", "Physics", "Chemistry"],
      achievement: "Strong analytical skills",
      icon: <FaBook className="text-accent text-base md:text-lg" />,
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      year: "2022 - 2025",
      title: "BCA",
      subtitle: "Bachelor of Computer Applications",
      school: "Karan Arts And Science College",
      location: "Tiruvannamalai",
      grade: "84%",
      gradeLabel: "First Class",
      description: "Immersed in programming, web development, and database management. Built multiple mini-projects that sparked my journey into full-stack development.",
      subjects: ["C++", "Java", "Web Dev", "DBMS", "OS", "Networks"],
      achievement: "7+ real-world projects built",
      icon: <FaGraduationCap className="text-accent text-base md:text-lg" />,
      color: "from-violet-500/20 to-violet-500/5"
    },
  ];

  const highlights = [
    { icon: FaTrophy, value: "84%", label: "BCA Score", color: "text-yellow-400" },
    { icon: FaStar, value: "7+", label: "Projects Built", color: "text-accent" },
    { icon: FaChartLine, value: "10+", label: "Technologies", color: "text-accent-2" },
    { icon: FaCheck, value: "3", label: "Degrees Earned", color: "text-green-400" },
  ];

  return (
    <section id="education" className="relative py-20 px-4 max-w-6xl mx-auto overflow-hidden bg-primary min-h-[400px]">

      {/* Faint Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[160px] font-extrabold text-white/[0.03] tracking-widest">
          EDUCATION
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
            🎓 MY JOURNEY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[11px] sm:text-xs md:text-sm max-w-lg mx-auto lg:mx-0">
            A look at my academic background and the foundation of my knowledge.
          </p>
        </div>

        {/* ===== 3 EDUCATION CARDS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{
                y: -6,
                borderColor: "#8b5cf6",
                boxShadow: "0 0 30px rgba(139,92,246,0.25)",
                transition: { duration: 0.3 }
              }}
              className="relative glass rounded-2xl border border-accent/20 p-4 md:p-5 transition-all duration-300 flex flex-col overflow-hidden"
            >

              {/* Gradient Background Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Top Row: Year Badge + Icon */}
              <div className="relative flex items-start justify-between mb-3">
                <div>
                  <div className="inline-block text-[9px] md:text-[10px] font-bold bg-accent/15 border border-accent/40 text-accent px-2.5 py-0.5 rounded-full">
                    {edu.year}
                  </div>
                  <p className="text-gray-500 text-[8px] md:text-[9px] mt-1.5 uppercase tracking-widest font-medium">
                    {edu.subtitle}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-secondary/80 border border-accent/30 shadow-[0_0_12px_rgba(139,92,246,0.2)] flex-shrink-0">
                  {edu.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="relative text-white text-sm md:text-base font-bold mb-1.5 leading-tight">
                {edu.title}
              </h3>

              {/* School Name */}
              <p className="relative text-gray-300 text-[10px] md:text-[11px] leading-snug mb-1">
                {edu.school}
              </p>

              {/* Location */}
              <p className="relative text-gray-500 text-[9px] md:text-[10px] flex items-center gap-1 mb-2.5">
                <FaMapMarkerAlt className="text-accent/70 text-[8px]" /> {edu.location}
              </p>

              {/* Grade + Achievement */}
              <div className="relative flex flex-wrap items-center gap-1.5 mb-3">
                <span className="gradient-text text-sm md:text-base font-bold border border-accent/30 px-2 py-0.5 rounded-lg bg-accent/5">
                  {edu.grade}
                </span>
                <span className="text-accent/80 text-[8px] md:text-[9px] font-semibold uppercase tracking-wider">
                  ★ {edu.gradeLabel}
                </span>
              </div>

              {/* Description */}
              <p className="relative text-gray-400 text-[10px] md:text-[11px] leading-relaxed mb-3 flex-grow">
                {edu.description}
              </p>

              {/* Subject Tags */}
              <div className="relative mb-2.5">
                <p className="text-accent text-[9px] font-bold uppercase tracking-widest mb-1.5">
                  Key Subjects
                </p>
                <div className="flex flex-wrap gap-1">
                  {edu.subjects.map((sub, i) => (
                    <span
                      key={i}
                      className="text-[8px] md:text-[9px] px-1.5 py-0.5 rounded-full bg-secondary/60 text-gray-300 border border-white/10 hover:border-accent/50 transition-colors duration-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement Footer */}
              <div className="relative flex items-center gap-1.5 pt-2.5 border-t border-white/5 mt-auto">
                <FaTrophy className="text-yellow-400 text-[9px] md:text-[10px]" />
                <span className="text-gray-400 text-[9px] md:text-[10px] font-medium">
                  {edu.achievement}
                </span>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl pointer-events-none" />

            </motion.div>
          ))}
        </div>

        {/* ===== ACADEMIC HIGHLIGHTS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <div className="text-center mb-4">
            <h3 className="text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              ⚡ Academic Highlights
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + (idx * 0.08) }}
                  whileHover={{
                    y: -4,
                    borderColor: "#8b5cf6",
                    boxShadow: "0 0 22px rgba(139,92,246,0.28)",
                    transition: { duration: 0.2 }
                  }}
                  className="glass rounded-xl border border-accent/20 p-3 flex flex-col items-center text-center transition-all duration-300"
                >
                  <Icon className={`${item.color} text-base md:text-lg mb-1.5`} />
                  <div className="gradient-text font-bold text-base md:text-lg mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-[8px] md:text-[9px] uppercase tracking-wider">
                    {item.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Education;