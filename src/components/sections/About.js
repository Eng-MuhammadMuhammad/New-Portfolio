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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Software Engineer | React Developer | UI/UX Designer
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Mohammad Mohammad – As a Software Engineer specializing in
                React.js, UI/UX Design (Figma), and WordPress Development, I
                combine technical expertise with a designer's eye to build fast,
                scalable, and visually compelling web applications. With 2+
                years of experience, I've developed e-commerce platforms, task
                management systems, and custom WordPress solutions—focusing on
                clean code, intuitive interfaces, and seamless user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Proficient in React, Next.js, JavaScript/TypeScript, Tailwind
                CSS, REST APIs, and PHP, I bridge the gap between frontend
                development and UI/UX design, ensuring both functionality and
                aesthetics align with modern standards. Currently pursuing a
                Master's in Web Science, I'm continuously expanding my skills in
                performance optimization, accessibility, and emerging web
                technologies to deliver cutting-edge digital solutions. Let's
                connect and create something great!
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="grid grid-cols-2 gap-5">
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
                    <strong>Specialization:</strong> React.Js Developer
                  </span>
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
