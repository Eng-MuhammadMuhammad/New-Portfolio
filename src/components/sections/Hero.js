import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Mohammad Mohammad</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          Software Engineer | React Developer | UI/UX Designer
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
          I create modern, responsive web applications with a focus on user experience and clean code.
          With over 2 years of experience in web development and design.
        </p>
        
        <div className="flex justify-center space-x-4 mb-8">
          <a 
            href="https://www.linkedin.com/in/muhammad-muhammad-217640173" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:muhammadhaidarmuhammad@gmail.com"
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
