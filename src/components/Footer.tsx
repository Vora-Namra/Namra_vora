import { Github, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-12 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-red-600/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Namra Vora
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer specializing in modern web technologies and scalable solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vora-namra"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
                <a
                  href="mailto:voranamra625@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Email"
                  title="Send me an email"
                >
                  <Mail size={20} />
                </a>

              <a
                href="https://linkedin.com/in/Namra-Vora"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#education', label: 'Education' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>voranamra625@gmail.com</p>
              <p>+91 7016304912</p>
              <p>Jamnagar Gujarat India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Made with ❤️ by Namra Vora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
