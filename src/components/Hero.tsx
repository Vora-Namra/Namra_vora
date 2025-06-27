import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode, FaMailBulk, FaCodeBranch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 pt-20 relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Full Stack
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 bg-clip-text text-transparent">
                  Developer
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Passionate about building scalable web applications and
                innovative solutions. Specializing in modern technologies like
                Java Spring Boot, MERN stack, and cloud-native development.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 border-0"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            {/* Social Links */}
            <div className="text-3xl space-x-4 flex gap-6 text-gray-600">
            <a href="https://github.com/Vora-Namra/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/namra-vora/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/Namra_Vora/" target="_blank" rel="noopener noreferrer">
            <FaCode />
            </a>
            <a href="mailto:voranamra625@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaMailBulk />
            </a>
            </div>
          </div>


          {/* Visual Element */}
          <div className="relative w-64 h-64 mx-auto">
            {/* Background gradient layer */}
            <div className="absolute inset-0 bg-gradient-to-r  to-red-500 rounded-full opacity-20"></div>

            {/* Foreground card with circular image */}
            <div className="relative z-10 bg-white dark:bg-gray-800 w-80 h-80 rounded-full  p-2 border border-gray-200 dark:border-gray-700 ">
              <img
                src="/namra (2).jpeg"
                alt="Namra Vora"
                className="w-full h-full object-cover rounded-full"
              />

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
