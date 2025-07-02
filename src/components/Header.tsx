import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white">Paridhi<span className="text-purple-500">.</span></a>
          
        
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/paridhi2306" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-purple-500 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://shorturl.at/fHXsT" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:paridhimr23@gmail.com"
               className="text-gray-300 hover:text-purple-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-purple-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/paridhi2306" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-purple-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://shorturl.at/fHXsT" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-purple-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Paridhimr23@gmail.com"
                 className="text-gray-300 hover:text-purple-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}