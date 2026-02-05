
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} className="text-purple-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-20 bg-gray-100"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 border-b-2 border-blue-400 pb-2">
        My Skills
      </h1>

      {/* Skills Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-6xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer"
          >
            {/* Skill Icon */}
            <div className="mb-4">{skill.icon}</div>
            {/* Skill Name */}
            <h2 className="text-gray-800 font-semibold text-lg">{skill.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
