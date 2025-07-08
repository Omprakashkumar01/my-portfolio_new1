import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Skills: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [activeCategory, setActiveCategory] = useState('Languages');

  // Technology logo mapping
  const getTechnologyLogo = (skillName: string) => {
    const logoMap: { [key: string]: string } = {
      // Languages
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'Bash': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg',
      
      // Cloud & DevOps
      'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      'ArgoCD': 'https://raw.githubusercontent.com/argoproj/argo-cd/master/docs/assets/logo.png',
      'Prometheus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
      'Grafana': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
      'Ansible': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
      
      // Web & Frameworks
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      
      // Tools & Others
      'Git/GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      'DSA': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      'OOP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      'DBMS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    };
    
    return logoMap[skillName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
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
    <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
          >
            Technologies and tools I work with to build modern, scalable solutions
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {Object.keys(skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skills[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <img
                    src={getTechnologyLogo(skill.name)}
                    alt={skill.name}
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg';
                    }}
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Proficiency
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={isIntersecting ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};