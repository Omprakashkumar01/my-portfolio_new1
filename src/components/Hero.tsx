import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
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
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-gray-900/30" />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Name, animated text, intro, buttons */}
        <div className="w-full md:w-3/5 text-center md:text-left mb-12 md:mb-0 mt-0 md:mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 whitespace-nowrap">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Om Prakash Kumar
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8">
            <span ref={typedTextRef} className="border-r-2 border-blue-400 pr-1"></span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl">
            Passionate about building scalable cloud infrastructure and automating deployment pipelines. 
            Transforming complex systems into efficient, reliable solutions.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://github.com/Omprakashkumar01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/om-prakash-kumar-557b18228/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1SDinmSlCav170hNvGEWaiSVT3rDMpYP4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-600 dark:border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={scrollToNext}
              className="animate-bounce text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Right Side: Profile Image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <motion.img
            src="/img.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            animate={floatAnimation}
            transition={floatTransition}
          />
        </div>
      </div>
    </section>
  );
};