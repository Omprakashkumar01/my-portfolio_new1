import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Server, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const interests = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Architecture',
      description: 'Building scalable and resilient cloud infrastructure on AWS'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'DevOps Automation',
      description: 'Streamlining CI/CD pipelines and infrastructure as code'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Container Orchestration',
      description: 'Managing containerized applications with Kubernetes'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Monitoring and optimizing system performance'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            About Me
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            I'm a passionate DevOps Engineer with expertise in cloud infrastructure, automation, and scalable system design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/img.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </motion.div>

          {/* About Text and Badges */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="space-y-6 lg:col-span-2"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With a strong foundation in computer science and hands-on experience in DevOps practices, 
                I specialize in building robust, scalable infrastructure solutions. My journey in technology 
                has led me to master cloud platforms, containerization, and automation tools.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm currently expanding my expertise in microservices architecture, service mesh technologies, 
                and advanced monitoring solutions. My goal is to help organizations achieve faster, more reliable 
                software delivery through modern DevOps practices.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Problem Solver', 'Team Player', 'Continuous Learner', 'Innovation Driven'].map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.2 + index * 0.15,
                  }}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-3"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};