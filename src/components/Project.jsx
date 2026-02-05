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
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6 md:px-20"
    >
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 border-b-2 border-blue-400 pb-2">
        Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            {/* Project Image */}
            <div className="w-full h-36 md:h-40 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transform transition duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-3 md:p-4 flex flex-col justify-between">
              <h2 className="text-lg md:text-base font-semibold text-gray-800 mb-1">
                {project.title}
              </h2>
              <p className="text-gray-600 text-xs md:text-sm mb-3">
                {project.description}
              </p>
              <a
                href={project.link}
                className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm font-medium text-center hover:bg-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
