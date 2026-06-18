// components/Articles.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt } from "react-icons/fa";

const articlesData = [
  {
    title: "Why I love JavaScript",
    link: "https://example.com",
    description: "Exploring the beauty and power of JavaScript",
  },
  {
    title: "The Future of Web Development",
    link: "https://example.com",
    description: "What's next in the world of web technologies",
  },
  {
    title: "The Importance of Clean Code",
    link: "https://example.com",
    description: "Writing code that's maintainable and readable",
  },
];

const Articles = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="articles" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0a1f] to-[#0a0a1a]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
              Articles
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {articlesData.map((article, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/5 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <h3 className="text-white font-bold text-sm sm:text-base group-hover:text-cyan-400 transition">
                {article.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">{article.description}</p>
              <div className="flex items-center gap-1 mt-3 text-cyan-400 text-xs font-medium">
                View Article <FaExternalLinkAlt size={10} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;