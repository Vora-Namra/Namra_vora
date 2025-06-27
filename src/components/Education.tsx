import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Dharmsinh Desai University",
      period: "2023 - present",
      gpa: "8.75/10",
      description: "Exploring modern technologies and frameworks such as the MERN stack, Spring Boot, Next.js, and AI/ML, with a focus on building real-world, scalable applications.",
      
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic, Jamnagar",
      period: "2020 - 2023",
      gpa:"9.07/10",
      description: "Developed a strong foundation in core computer science fundamentals including programming, data structures, operating systems, and networking.",
    }
  ];

  

  const courses = [
    "AWS Cloud Practitioner",
    "AWS Machine Learning Foundations",
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50 dark:from-gray-900 dark:via-pink-900/10 dark:to-blue-900/10 relative overflow-hidden">
      {/* Background gradient decorations */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-r from-red-300/20 to-yellow-300/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies 
            and industry best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols- gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
                      {edu.gpa && (
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                  
                </Card>
              ))}
            </div>


            {/* Recent Courses */}
            <div>
              <div className="flex items-center mb-6 mt-10">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Courses</h3>
              </div>
              
              <Card className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
