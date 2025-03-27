import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "React Developer",
      company: "TUV Tech",
      duration: "April 2025 (1 Month, Completed)",
      location: "Remote",
      description:
        "Developed a seamless shopping mobile online store, offering the latest trends, top-quality essentials, and unbeatable deals—all at your fingertips, anytime, anywhere!.",
      skills: [
        "React.js",
        "E-commerce",
        "UI/UX Design",
        "Tailwind",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      id: 2,
      role: "React Developer",
      company: "Future Learn",
      duration: "March 2025 - April 2025 (1 Month, Completed)",
      location: "Remote",
      description:
        "Developed a comprehensive blog platform offering technical news, updates, and insights for tech enthusiasts and professionals.",
      skills: [
        "React.js",
        "TypeScript",
        "UI/UX Design",
        "Vite",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      id: 3,
      role: "React Developer & UI/UX Designer",
      company: "Employee-Task-Management-Platform",
      duration: "February 2025 - March 2025 (1 Month, Ongoing)",
      location: "Remote",
      description:
        "Leading development of a task management platform with an intuitive interface for task assignment and tracking.",
      skills: [
        "React.js",
        "TypeScript",
        "UI/UX Design",
        "Vite",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
    },
    {
      id: 4,
      role: "UI/UX Designer & React.js Front-End Developer",
      company: "Modern Solutions",
      duration: "January 2025 - February 2025 (2 Weeks)",
      location: "Remote",
      description:
        "Designed and developed an expense tracking app with a clean, intuitive interface.",
      skills: [
        "React.js",
        "UI/UX Design",
        "JavaScript",
        "CSS",
        "HTML",
        "Responsive Design",
        "Figma",
      ],
    },
    {
      id: 5,
      role: "React Frontend Developer & Layouts Designer (UI/UX)",
      company: "Stolen Bikes Investigation | SBI",
      duration: "December 2024 - January 2025 (1 Month)",
      location: "Damascus, Syria",
      description:
        "Built a web app for reporting and managing stolen bike cases.",
      skills: [
        "API Handling",
        "UI/UX Design",
        "React.js",
        "Web Development",
        "JavaScript",
        "CSS",
        "HTML",
      ],
    },
    {
      id: 6,
      role: "UI/UX Designer & Front-End Developer",
      company: "Modern Shopping | Light Store",
      duration: "August 2024 - October 2024 (2 Months)",
      location: "Damascus, Syria",
      description:
        "Worked on a shopping platform for light products, optimizing UI and integrating APIs.",
      skills: [
        "E-commerce",
        "UI/UX Design",
        "React.js",
        "Web Development",
        "JavaScript",
        "CSS",
        "HTML",
      ],
    },
    {
      id: 7,
      role: "UI/UX Designer & Front-End Developer",
      company: "Todo Application",
      duration: "May 2024 - July 2024 (2 Months)",
      location: "Damascus, Syria",
      description: "Developed a responsive task management app using React.js.",
      skills: ["React.js", "UI/UX Design", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 8,
      role: "UI/UX Designer & Front-End Developer",
      company: "Clothes Store | Men & Women",
      duration: "January 2024 - April 2024 (4 Months)",
      location: "Damascus, Syria",
      description:
        "Designed an e-commerce platform for clothing with modern design trends and payment integration.",
      skills: [
        "E-commerce",
        "React.js",
        "Web Design",
        "CSS",
        "HTML",
        "User Interface",
        "JavaScript",
      ],
    },
    {
      id: 9,
      role: "UI/UX Designer & Front-End Developer",
      company: "Innovative Syrian Solutions",
      duration: "July 2023 - December 2023 (6 Months)",
      location: "Aleppo, Syria",
      description:
        "Designed responsive interfaces for e-commerce and corporate websites.",
      skills: [
        "UI/UX Design",
        "React.js",
        "HTML",
        "CSS",
        "Prototyping",
        "E-commerce",
        "Figma",
      ],
    },
    {
      id: 10,
      role: "UI/UX Designer & Front-End Developer",
      company: "Syrian Tech Solutions",
      duration: "January 2023 - June 2023 (6 Months)",
      location: "Damascus, Syria",
      description:
        "Led design and development of user-friendly interfaces with API integration.",
      skills: [
        "UI/UX Design",
        "React.js",
        "Front-End Development",
        "Web Development",
        "Figma",
        "Sketch",
      ],
    },
    {
      id: 11,
      role: "UI/UX Designer & Front-End Developer",
      company: "NTT Data Business Solution",
      duration: "October 2022 - November 2023 (1 Year 1 Month)",
      location: "Remote (Germany)",
      description:
        "Designed user-friendly websites with a focus on usability and accessibility.",
      skills: [
        "UI/UX Design",
        "Front-End Development",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Prototyping",
        "User Research",
        "Accessibility",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div> */}

          <div className="flex flex-col items-center text-center w-full mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 relative border-l-4 border-primary">
                  <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    {item.company}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
