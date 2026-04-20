// About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      {/* Heading */}
      <div className="w-full max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 inline-block border-b-4 border-purple-400 pb-2 px-4">
          About Me
        </h1>
      </div>

      {/* Content Card */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 sm:p-8 md:p-10">
          
          {/* Introduction */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            Hi, I'm <span className="font-semibold text-purple-600">Surya</span>, a passionate{" "}
            <span className="font-semibold text-purple-600">MERN Full Stack Developer</span>{" "}
            dedicated to creating clean, responsive, and interactive web applications. 
            I specialize in HTML, CSS, JavaScript, and React, and I love turning creative 
            ideas into real-world projects that provide seamless user experiences across all devices.
          </p>

          {/* Divider with Icon */}
          <div className="flex items-center justify-center my-8 sm:my-10">
            <div className="w-16 sm:w-20 h-0.5 bg-purple-300 rounded-full"></div>
            <div className="mx-4 sm:mx-5 text-purple-400 text-xl sm:text-2xl">✦</div>
            <div className="w-16 sm:w-20 h-0.5 bg-purple-300 rounded-full"></div>
          </div>

          {/* Focus Section */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify mb-8 sm:mb-10">
            My focus is on writing <span className="font-medium text-purple-600">efficient, maintainable, and accessible code</span>{" "}
            while continuously learning new technologies to grow as a developer. I believe in the power of 
            clean code and attention to detail to create exceptional user experiences.
          </p>

          {/* Philosophy Section */}
          <div className="bg-purple-50 rounded-lg p-5 sm:p-6 md:p-7 border-l-4 border-purple-400">
            <p className="text-gray-800 text-base sm:text-lg md:text-xl italic">
              "I believe that great websites combine design, functionality, and performance. 
              My goal is to deliver digital experiences that are both visually appealing and easy to use."
            </p>
          </div>

          {/* Skills Highlight */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center">
            {["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "Express"].map((skill) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-purple-600 rounded-full text-xs sm:text-sm font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;