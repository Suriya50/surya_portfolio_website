import React from "react";

const education = [
  {
    school: "Mary Immaculate Heart Matric Higher Sec School, Tiruvannamalai",
    degree: "SSLC - Xth (std)",
    year: "2019-2020",
    grade: "88%",
    description:
      "I completed my 10th standard from a reputed school with strong foundation in Mathematics, Science, and English. Actively participated in school activities, competitions, and improved confidence and communication skills.",
  },
  {
    school: "Mary Immaculate Heart Matric Higher Sec School, Tiruvannamalai",
    degree: "HSC - XIIth (BIO-MATHS)",
    year: "2021-2022",
    grade: "80%",
    description:
      "I completed my 12th standard focusing on core subjects. Improved analytical thinking, problem-solving skills, and participated in school events and group projects to enhance teamwork and leadership.",
  },
  {
    school: "Karan ARTS And Science College, Tiruvannamalai",
    degree: "BCA (Bachelor of Computer Applications)",
    year: "2022-2025",
    grade: "84%",
    description:
      "Currently pursuing BCA. Developed a strong interest in coding and software development. Actively doing coding practice, mini-projects, and group assignments to improve logical thinking and technical skills.",
  },
  {
    school: "SLA Institute, KK Nagar, Chennai",
    degree: "Full Stack Course",
    year: "2025",
    grade: "",
    description:
      "I am learning frontend development in an institute to strengthen my practical skills in web technologies. Gaining hands-on experience in HTML, CSS, JavaScript, Bootstrap, and React. The course includes practical training, live projects, and guidance from experienced mentors to understand real-world development processes.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="w-full bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 flex flex-col items-center py-16 px-6 md:px-20"
    >
      {/* Section Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 border-b-2 border-purple-400 pb-2">
        Education
      </h1>

      {/* Timeline / Cards */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-purple-300"></div>

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0; // alternate left-right

          return (
            <div
              key={edu.school}
              className={`mb-12 w-full flex flex-col md:flex-row items-center justify-between ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className={`bg-white p-4 md:p-6 md:w-5/12 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">{edu.school}</h2>
                <h3 className="text-gray-700 font-semibold text-sm md:text-base">{edu.degree}</h3>
                <h4 className="text-gray-500 text-sm md:text-sm">{edu.year} {edu.grade && `| Grade: ${edu.grade}`}</h4>
                <p className="mt-2 text-gray-600 text-xs md:text-sm">{edu.description}</p>
              </div>

              {/* Dot on timeline */}
              <div className="hidden md:flex w-5 h-5 bg-purple-500 rounded-full z-10 absolute left-1/2 transform -translate-x-1/2"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
