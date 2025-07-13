import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://github.com/Omprakashkumar01',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://www.linkedin.com/in/om-prakash-kumar-557b18228/',
      label: 'LinkedIn'
    },
    {
      icon: <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'https://medium.com/@omjsr29',
      label: 'Medium'
    },
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: 'mailto:omjsr29@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Om Prakash Kumar</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
              DevOps Engineer passionate about building scalable cloud infrastructure and automating deployment pipelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 hover:bg-gray-700 p-2.5 sm:p-3 rounded-full transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-800 pt-6 sm:pt-8 text-gray-300"
          >
            <p className="flex items-center justify-center gap-2 text-sm sm:text-base">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" /> by Om Prakash Kumar
            </p>
            <p className="mt-2 text-xs sm:text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};