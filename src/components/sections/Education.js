import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's Degree in Software Engineering",
      institution: "Al-Baath University",
      location: "Syria",
      duration: "2017 - 2022",
      icon: <FaGraduationCap className="text-white text-xl" />,
    },
    {
      id: 2,
      degree: "Academic Master in Web Science (MWS)",
      institution: "Syrian Virtual University",
      location: "Syria",
      duration: "October 2023 – Present",
      icon: <FaGraduationCap className="text-white text-xl" />,
    },
  ];

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Education</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {educationData.map((item, index) => (
              <div key={item.id} className="mb-8 relative pl-8 md:pl-0">
                {/* Timeline for medium and larger screens only */}
                {index !== educationData.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}

                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot for desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                  </div>

                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute left-0 top-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md relative overflow-hidden">
                      <h3 className="text-xl font-bold mb-5">{item.degree}</h3>
                      <div className="flex items-center mb-2 text-gray-600 dark:text-gray-300">
                        <FaUniversity className="mr-2 flex-shrink-0" />
                        <span>
                          {item.institution}, {item.location}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <FaCalendarAlt className="mr-2 flex-shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
