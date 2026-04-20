// Skills.jsx
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs,
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={45} className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt size={45} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={45} className="text-yellow-500" /> },
  { name: "React", icon: <FaReact size={45} className="text-blue-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={45} className="text-purple-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={45} className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={45} className="text-green-600" /> },
  { name: "Express", icon: <SiExpress size={45} className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb size={45} className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Title */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 inline-block border-b-4 border-blue-400 pb-2 px-4">
          My Skills
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto">
          Technologies I work with to build amazing web applications
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6 md:gap-7 lg:gap-8 w-full max-w-7xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white p-5 sm:p-6 md:p-7 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-blue-200"
          >
            <div className="mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h2 className="text-gray-800 font-semibold text-base sm:text-lg md:text-xl text-center">
              {skill.name}
            </h2>
            <div className="w-0 group-hover:w-8 h-0.5 bg-blue-400 mt-2 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 sm:mt-14 md:mt-16 text-center">
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full">
          <span className="font-semibold text-blue-600">MERN Stack:</span> MongoDB • Express • React • Node.js
        </p>
      </div>
    </section>
  );
};

export default Skills;