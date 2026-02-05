import React from "react";

const About = () => {
  return (
    <section
      id="about" // ✅ must match Navbar link
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 flex flex-col items-center py-16 px-6 md:px-20"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 border-b-2 border-purple-400 pb-2">
        About Me
      </h1>

      <p className="text-gray-700 text-sm md:text-base max-w-3xl leading-relaxed text-justify bg-white p-8 rounded-lg shadow-lg transition-transform duration-500 hover:translate-y-1 hover:shadow-2xl">
        Hi, I'm Surya, a passionate Frontend Developer dedicated to creating clean, responsive, and
        interactive web applications. I specialize in HTML, CSS, JavaScript, and React, and I love turning
        creative ideas into real-world projects that provide seamless user experiences across all devices.

        <br /><br />

        My focus is on writing efficient, maintainable, and accessible code while continuously learning new
        technologies to  the grow as a developers.

        <br /><br />

        I believe that great websites combine design, functionality,
        and performance, and my goal is to deliver digital experiences that are both visually appealing and
        easy to use.
      </p>
    </section>
  );
};

export default About;
