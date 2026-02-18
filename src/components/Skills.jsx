import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaBootstrap, 
  FaNodeJs,
  FaDatabase 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb 
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" /> },
  { name: "Express", icon: <SiExpress size={40} className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      {/* Title with decorative underline */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block border-b-4 border-blue-400 pb-2 px-4">
          My Skills
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Technologies I work with to build amazing web applications
        </p>
      </div>

      {/* Skills Grid - Responsive layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-7xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center transform transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-blue-200"
          >
            {/* Skill Icon with animation */}
            <div className="mb-2 sm:mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            
            {/* Skill Name with responsive text */}
            <h2 className="text-gray-800 font-semibold text-sm sm:text-base md:text-lg text-center">
              {skill.name}
            </h2>
            
            {/* Hover effect indicator */}
            <div className="w-0 group-hover:w-8 h-0.5 bg-blue-400 mt-2 transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Additional Info - Optional */}
      <div className="mt-10 sm:mt-12 md:mt-16 text-center">
        <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto bg-white/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
          <span className="font-semibold text-blue-600">MERN Stack:</span> MongoDB • Express • React • Node.js
        </p>
      </div>
    </section>
  );
};

export default Skills;