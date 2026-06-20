// components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaCode } from "react-icons/fa";

const educationData = [
  {
    school: "Mary Immaculate Heart Matric Higher Sec School",
    degree: "SSLC (Xth Standard)",
    year: "2019-2020",
    grade: "88%",
    description: "Strong foundation in Mathematics, Science, and English.",
    icon: <FaGraduationCap />,
  },
  {
    school: "Mary Immaculate Heart Matric Higher Sec School",
    degree: "HSC (XIIth - Bio-Maths)",
    year: "2021-2022",
    grade: "80%",
    description: "Focused on core subjects. Developed analytical thinking.",
    icon: <FaGraduationCap />,
  },
  {
    school: "Karan Arts And Science College",
    degree: "BCA (Bachelor of Computer Applications)",
    year: "2022-2025",
    grade: "84% (Pursuing)",
    description: "Strong interest in coding. Built mini-projects.",
    icon: <FaGraduationCap />,
  },
  {
    school: "SLA Institute, Chennai",
    degree: "Full Stack Development Course",
    year: "2025",
    grade: "",
    description: "Hands-on training in MERN stack, live projects.",
    icon: <FaCode />,
  },
];

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section 
      id="education" 
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Education
            </span>
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-2 sm:mt-3 rounded-full"></div>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3">My academic journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400"></div>
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-3 sm:left-4 top-0 w-0.5 h-full bg-gradient-to-b from-purple-400 via-cyan-400 to-purple-400"></div>

          {educationData.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row mb-6 sm:mb-8 last:mb-0 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline dot - desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-[#0a0a1a] shadow-lg shadow-cyan-400/20 z-10"></div>
                {/* Timeline dot - mobile */}
                <div className="md:hidden absolute left-3 sm:left-4 transform -translate-x-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full border-2 border-[#0a0a1a] shadow-lg shadow-cyan-400/20 z-10"></div>

                {/* Card container */}
                <div className={`ml-8 sm:ml-10 md:ml-0 w-full md:w-5/12 ${isLeft ? "md:pr-6" : "md:pl-6"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-5 border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    {/* Header with icon, year, grade */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <div className="text-purple-400 text-base sm:text-lg">{edu.icon}</div>
                      <span className="text-[10px] sm:text-xs bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-400/20">
                        {edu.year}
                      </span>
                      {edu.grade && (
                        <span className="text-[10px] sm:text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20">
                          {edu.grade}
                        </span>
                      )}
                    </div>

                    {/* School name */}
                    <h3 className="text-white text-xs sm:text-sm md:text-base font-bold leading-tight">
                      {edu.school}
                    </h3>

                    {/* Degree */}
                    <h4 className="text-cyan-400 text-[10px] sm:text-xs md:text-sm font-semibold mb-1.5 sm:mb-2">
                      {edu.degree}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-purple-500/20">
            <span className="text-base sm:text-lg">🎓</span>
            <span className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">
              Fresh Graduate • Eager to Learn & Grow
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;