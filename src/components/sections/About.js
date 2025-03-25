import React from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">
                Software Engineer & UI/UX Designer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm Mohammad Mohammad, a passionate Software Engineer
                specializing in Web Development with React JS and UI/UX Design
                using Figma. With over 2 years of experience, I've worked on a
                variety of projects ranging from e-commerce platforms to task
                management systems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm dedicated to creating clean, efficient, and user-friendly
                web applications that provide exceptional user experiences. My
                combined expertise in both development and design allows me to
                bridge the gap between aesthetics and functionality.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaUser className="text-primary mr-2" />
                  <span>
                    <strong>Name:</strong> Mohammad Mohammad
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-2" />
                  <span>
                    <strong>Nationality:</strong> Syrian
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-2" />
                  <span>
                    <strong>Experience:</strong> 2+ Years
                  </span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-primary mr-2" />
                  <span>
                    <strong>Specialization:</strong> React JS, UI/UX
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-52 h-52 md:w-64 md:h-64 bg-primary text-white rounded-full flex items-center justify-center text-4xl font-bold">
                    MM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
