import { Book, Code2, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="text-purple-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Frontend Development</h3>
            <p className="text-gray-400">
              Experienced in building responsive web applications using React.js, Tailwind CSS, and other modern frameworks.
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-purple-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Backend Development</h3>
            <p className="text-gray-400">
              Proficient in Node.js, Express.js, and working with databases like MongoDB and MySQL.
            </p>
          </div>

          <div className="bg-black/50 p-6 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Book className="text-purple-500" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Continuous Learning</h3>
            <p className="text-gray-400">
              Always eager to learn new technologies and methodologies to solve challenging problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}