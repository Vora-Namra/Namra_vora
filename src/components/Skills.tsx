import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-yellow-300/30 to-orange-300/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable, 
            high-performance applications across the full stack.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Node.js", "Java", "Spring Boot", "MongoDB", "PostgreSQL",
            "Prisma", "TypeScript", "Docker", "AWS", "Python", "Next.js",
            "Express.js", "REST APIs", "JWT", "JavaScript", "Tailwind CSS",
          ].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200 hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
