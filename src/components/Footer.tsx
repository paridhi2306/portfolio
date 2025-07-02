import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Paridhi Rathod. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com" 
               target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/paridhi-rathod"
               target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:Paridhimr23@gmail.com"
               className="text-gray-400 hover:text-purple-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}