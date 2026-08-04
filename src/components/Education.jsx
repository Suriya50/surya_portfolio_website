import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBook, FaMedal } from "react-icons/fa";

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const educationData = [
    {
      year: "2019-2020",
      title: "SSLC",
      school: "Mary Immaculate Heart Matric Hr. Sec. School",
      location: "Tiruvannamalai",
      grade: "88%",
      description: "Strong foundation in Mathematics, Science, and English.",
      icon: <FaMedal className="text-accent text-2xl md:text-4xl" />,
    },
    {
      year: "2021-2022",
      title: "Higher Secondary (HSC)",
      school: "Mary Immaculate Heart Matric Hr. Sec. School",
      location: "Tiruvannamalai",
      grade: "80%",
      description: "Focused on Bio-Maths. Developed strong analytical thinking.",
      icon: <FaBook className="text-accent text-2xl md:text-4xl" />,
    },
    {
      year: "2022-2025",
      title: "BCA - Computer Applications",
      school: "Karan Arts And Science College",
      location: "Tiruvannamalai",
      grade: "84%",
      description: "Strong interest in coding, development, and building mini-projects.",
      icon: <FaGraduationCap className="text-accent text-2xl md:text-4xl" />,
    },
  ];

  return (
    <section id="education" className="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden bg-primary min-h-[400px]">
      
      {/* FAINT BACKGROUND TEXT */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[80px] md:text-[180px] font-extrabold text-white/[0.03] tracking-widest">
          EDUCATION
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 mt-6"
      >
        
        {/* LEFT SIDE TEXT */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <div className="inline-block mb-3 text-accent text-[10px] font-semibold tracking-widest border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
            MY JOURNEY
          </div>
          <h2 className="text-3xl font-bold text-white">
            <span className="text-accent">Education</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
            A look at my academic background and the foundation of my knowledge.
          </p>
        </div>

        {/* RIGHT SIDE: 3 PREMIUM CARDS WITH PERFECTLY STRAIGHT ALIGNMENT */}
        {/* grid-cols-1 md:grid-cols-3 makes it beautifully responsive for mobile! */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8 lg:mt-0 relative">
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 0 40px rgba(0,255,102,0.25)" }}
              className={`relative w-full glass p-6 rounded-2xl border border-accent/30 shadow-[0_0_20px_rgba(0,255,102,0.05)] transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Top: Year Badge & Icon */}
              <div className="flex items-start justify-between mb-3">
                <div className="inline-block text-[10px] font-semibold bg-secondary/80 border border-accent/30 text-white px-2 py-1 rounded-full shadow-inner shadow-accent/5">
                  {edu.year}
                </div>
                <div className="p-2 rounded-xl bg-secondary/60 border border-accent/10 group-hover:border-accent/40 transition-all duration-300 backdrop-blur-sm">
                  {edu.icon}
                </div>
              </div>

              {/* Middle: Title, School, Location & Grade (Strictly Small Fonts) */}
              <div className="flex-1">
                <h4 className="text-white text-sm font-bold mb-0.5">
                  {edu.title}
                </h4>
                
                {/* School Name */}
                <p className="text-gray-400 text-[10px] md:text-xs leading-tight mb-0.5">
                  {edu.school}
                </p>
                
                {/* Location Line - Fixed the empty span bug */}
                <p className="text-gray-500 text-[9px] md:text-[10px] flex items-center gap-1 mb-1.5">
                  <span className="text-accent/70 text-[9px]">📍</span> {edu.location}
                </p>

                {/* Grade Badge */}
                <span className="text-accent/80 text-[10px] bg-accent/10 px-2 py-0.5 rounded-full inline-block">
                  {edu.grade}
                </span>
              </div>

              {/* Bottom: Description */}
              <p className="text-gray-500 text-[9px] md:text-[10px] leading-relaxed mt-3 border-t border-white/5 pt-2">
                {edu.description}
              </p>

              {/* Decorative neon bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent/40 rounded-br-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;