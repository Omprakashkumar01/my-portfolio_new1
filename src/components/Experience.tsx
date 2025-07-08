import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Experience: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={targetRef as React.RefObject<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
          >
            My journey in DevOps and cloud engineering
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 lg:left-1/2 lg:transform lg:-translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="space-y-8 sm:space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ml-12 sm:ml-16 lg:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">{experience.duration}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {experience.position}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium text-sm sm:text-base">{experience.company}</span>
                    </div>
                    
                    <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};