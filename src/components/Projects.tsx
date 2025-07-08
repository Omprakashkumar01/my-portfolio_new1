import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Projects: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
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
            Featured Projects
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
          >
            A showcase of my recent work in DevOps, cloud infrastructure, and automation
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium"
                  >
                    <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium"
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};