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
      className="w-full min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 flex flex-col items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      {/* Section Title with Decoration */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block border-b-4 border-purple-400 pb-2 px-4">
          Education
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          My academic journey and professional development
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Mobile: Simple Stack Layout */}
        <div className="md:hidden space-y-5 sm:space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 overflow-hidden border-l-4 border-purple-400"
            >
              {/* Card Header with Gradient */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 sm:p-5">
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                  {edu.school}
                </h2>
                <h3 className="text-purple-700 font-semibold text-sm sm:text-base">
                  {edu.degree}
                </h3>
              </div>
              
              {/* Card Body */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs sm:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                  {edu.grade && (
                    <span className="text-xs sm:text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {edu.grade}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Timeline Layout (hidden on mobile) */}
        <div className="hidden md:block relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 rounded-full"></div>

          {/* Education Entries */}
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center justify-between mb-12 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-5/12 bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden ${
                    isLeft ? "mr-8" : "ml-8"
                  }`}
                >
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-5">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                      {edu.school}
                    </h2>
                    <h3 className="text-purple-700 font-semibold text-base">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                      {edu.grade && (
                        <span className="text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {edu.grade}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Year Badge on Timeline */}
                <div
                  className={`absolute ${
                    isLeft ? "left-[calc(50%+30px)]" : "right-[calc(50%+30px)]"
                  } transform -translate-y-1/2 top-1/2 bg-white px-3 py-1 rounded-full shadow-md text-xs font-medium text-purple-600 border border-purple-200`}
                >
                  {edu.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement Badge - Optional */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
          <span className="text-yellow-500 text-lg sm:text-xl">🎓</span>
          <span className="text-gray-700 text-xs sm:text-sm font-medium">
            Consistently maintained 80%+ throughout academic career
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;