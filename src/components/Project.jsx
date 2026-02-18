import React from "react";

// ✅ Import images from assets folder
import ecommerceImg from "../assets/images/ecomerce.png";
import weatherImg from "../assets/images/whether.png";
import portfolioImg from "../assets/images/port.png";
import womenSafetyImg from "../assets/images/women.png";
import hospitalImg from "../assets/images/hosiptal.png";
import jsMasterImg from "../assets/images/javascript.png";

// Project data
const projects = [
  {
    title: "Ecommerce App",
    description:
      "Modern ecommerce web app with product listings, shopping cart, and checkout functionality. Built with React and Tailwind CSS.",
    image: ecommerceImg,
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application fetching data from APIs, showing temperature, forecast, and weather conditions dynamically.",
    image: weatherImg,
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my skills, projects, and experience. Built with React and Tailwind CSS for modern responsive design.",
    image: portfolioImg,
    link: "#",
  },
  {
    title: "Women Safety App",
    description:
      "Mobile-first app enhancing safety for women with SOS alerts, location tracking, and emergency contacts.",
    image: womenSafetyImg,
    link: "#",
  },
  {
    title: "Hospital Management System",
    description:
      "Web-based hospital management system to manage patient records, appointments, and staff schedules efficiently.",
    image: hospitalImg,
    link: "#",
  },
  {
    title: "JavaScript Master Website",
    description:
      "Comprehensive JavaScript learning website with tutorials, examples, and exercises to master JS fundamentals and advanced topics.",
    image: jsMasterImg,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      {/* Section Title with Decoration */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block border-b-4 border-blue-400 pb-2 px-4">
          My Projects
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          Here are some of my recent works that showcase my skills and experience
        </p>
      </div>

      {/* Projects Grid - Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col h-full"
          >
            {/* Project Image with Overlay */}
            <div className="relative w-full h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transform transition duration-500"
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Details - Flexible height */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h2>
              
              {/* Description with responsive text */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              {/* Technologies Used - Optional enhancement */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                  React
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                  Tailwind
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                  JavaScript
                </span>
              </div>
              
              {/* View Project Button */}
              <a
                href={project.link}
                className="inline-block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium text-center hover:from-blue-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button - Optional */}
      <div className="mt-10 sm:mt-12 md:mt-16 text-center">
        <a
          href="#contact"
          className="inline-block bg-transparent border-2 border-blue-500 text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
        >
          Want to work together? Let's talk
        </a>
      </div>
    </section>
  );
};

export default Projects;