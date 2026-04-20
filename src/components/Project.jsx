import React from "react";

// Import images
import ecommerceImg from "../assets/images/ecomerce.png";
import portfolioImg from "../assets/images/port.png";
import hospitalImg from "../assets/images/hosiptal.png";
import jsMasterImg from "../assets/images/javascript.png";
import rentalCarImg from "../assets/images/rental.png";
import v2cSurvivalImg from "../assets/images/survival.png";

// Project data with updated links
const projects = [
  {
    title: "Rental Car Service",
    description:
      "Complete car rental platform with vehicle listings, booking system and authentication.",
    image: rentalCarImg,
    technologies: ["React", "MongoDB", "Express"],
    link: "https://car-rental-react-project-sw18.vercel.app/",
  },
  {
    title: "V2C Survival Guide",
    description:
      "Survival guide app with emergency tips and location-based alerts.",
    image: v2cSurvivalImg,
    technologies: ["React", "Firebase", "Maps API"],
    link: "https://survival-guide-project.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing my projects and skills.",
    image: portfolioImg,
    technologies: ["React", "Tailwind"],
    link: "https://surya-portfolio-website-l25n.vercel.app/",
  },
  {
    title: "Hospital Management System",
    description:
      "Hospital system to manage patients, appointments and staff.",
    image: hospitalImg,
    technologies: ["MERN", "JWT", "Bootstrap"],
    link: "#", // You can update this when you have the link
  },
  {
    title: "Ecommerce App",
    description:
      "Modern ecommerce web app with product listings, shopping cart, and checkout functionality.",
    image: ecommerceImg,
    technologies: ["React", "Tailwind", "Node.js"],
    link: "#", // You can update this when you have the link
  },
  {
    title: "JavaScript Master Website",
    description:
      "Learning platform to practice JavaScript concepts and exercises.",
    image: jsMasterImg,
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://vercel.com/suriya50s-projects/js-website",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-20 px-6"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 border-b-4 border-blue-500 pb-2">
        My Projects
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>

              <p className="text-gray-600 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;