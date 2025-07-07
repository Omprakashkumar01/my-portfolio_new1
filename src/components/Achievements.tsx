import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Target, Users, Code, Calendar } from 'lucide-react';
import { achievements, certifications } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Achievements: React.FC = () => {
  const { targetRef, isIntersecting } = useIntersectionObserver();

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

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      users: <Users className="w-8 h-8" />,
      code: <Code className="w-8 h-8" />,
      calendar: <Calendar className="w-8 h-8" />,
      award: <Award className="w-8 h-8" />,
      cpu: <Target className="w-8 h-8" />,
    };
    return iconMap[iconName] || <Trophy className="w-8 h-8" />;
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={targetRef as React.RefObject<HTMLDivElement>}
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Achievements & Certifications
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Recognition and continuous learning milestones
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {getIconComponent(achievement.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          >
            Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center w-full max-w-sm ${
                  cert.url ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (cert.url) {
                    window.open(cert.url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {cert.date}
                </p>
                {cert.url && (
                  <p className="text-xs text-blue-500 dark:text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to verify
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};