import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hustlr",
      description: "New Gen AI-Powered Job-Portal with extensive features which helps Applicant to get their dream Job & Employer to Hire a worthy applicant.",
      image: "/hustlr.png",
      technologies: ["Java", "Spring Boot", "React", "Mongodb", "Tailwind","Redux","mantine","Spring-Security","Docker"],
      liveUrl: "https://hustlr-zm97.onrender.com/",
      githubUrl: "https://github.com/Vora-Namra/Hustlr",
      featured: true
    },
    {
      title: "SkillSync",
      description:"AI powered platform designed to guide users through the career development process with AI-driven insights and tools. From onboarding and industry analysis to resume generation, quizzes, and cover letters & centralizes all aspects of career planning into an intuitive, personalized experience.",
      image:"/skillsync.png",
      technologies: ["Next.js", "Postgres", "Prisma", "Gemini", "Shadcn UI", "Tailwind CSS", "Clerk","Tailwind CSS"],
      liveUrl: "https://skill-sync-eta-dusky.vercel.app",
      githubUrl: "https://github.com/Vora-Namra/SkillSync",
      featured: true
    },
    {
      title: "Medium",
      description: "A sleek blogging platform with secure authentication, real-time validation, profile management, and full blog CRUD. Includes AI-powered content generation and enhancement, toast notifications, and a responsive, mobile-friendly interface.",
      image: "./medium.png",
      technologies: ["Hono.js", "Cloudflare", "React", "PostgreSQL", "Prisma", "Tailwind CSS","Gemini","Typescript"],
      liveUrl: "https://medium-rho-seven.vercel.app/",
      githubUrl: "https://github.com/Vora-Namra/Medium",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-yellow-900/20 relative overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-red-400/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            system architecture, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-4 mb-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                    <a href={project.liveUrl} className="flex items-center space-x-2">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                    <a href={project.githubUrl} className="flex items-center space-x-2">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
