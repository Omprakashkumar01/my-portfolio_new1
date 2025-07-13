import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';

export const Hero: React.FC = () => {
  const typedTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const texts = [
      'DevOps Engineer',
      'Cloud Enthusiast',
      'Automation Expert',
      'Infrastructure Architect'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeText = () => {
      const currentText = texts[textIndex];
      const displayText = isDeleting 
        ? currentText.substring(0, charIndex - 1)
        : currentText.substring(0, charIndex + 1);
      
      if (typedTextRef.current) {
        typedTextRef.current.textContent = displayText;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
      
      charIndex += isDeleting ? -1 : 1;
      
      setTimeout(typeText, isDeleting ? 100 : 150);
    };
    
    typeText();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation for the image (like floating on water)
  const floatAnimation = {
    y: [0, -8, 0, -4, 0], // Gentle up and down motion only
  };
  const floatTransition = {
    duration: 4,
    repeat: Infinity,
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-gray-900/30" />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Name, animated text, intro, buttons */}
        <div className="w-full lg:w-3/5 text-center lg:text-left mb-8 lg:mb-0 mt-8 lg:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              Om Prakash Kumar
            </span>
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 h-8">
            <span ref={typedTextRef} className="border-r-2 border-blue-400 pr-1"></span>
          </div>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0">
            Passionate about building scalable cloud infrastructure and automating deployment pipelines. 
            Transforming complex systems into efficient, reliable solutions.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 lg:gap-4 mb-8 lg:mb-12 mobile-button-group">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base touch-target"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://github.com/Omprakashkumar01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base touch-target"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/om-prakash-kumar-557b18228/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base touch-target"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://medium.com/@omjsr29"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base touch-target"
            >
              <ExternalLink className="w-4 h-4" />
              Medium
            </a>
            <a
              href="https://drive.google.com/file/d/1SDinmSlCav170hNvGEWaiSVT3rDMpYP4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 text-sm sm:text-base touch-target"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={scrollToNext}
              className="animate-bounce text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Right Side: Profile Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.img
            src="/img.jpg"
            alt="Profile"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            animate={floatAnimation}
            transition={floatTransition}
          />
        </div>
      </div>
    </section>
  );
};