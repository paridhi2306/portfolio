

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black text-white py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Paridhi <span className="text-purple-500">Rathod</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            An aspiring software developer with proven skills in JavaScript and MERN Stack. Always eager to
            learn new methodologies and solve challenging problems. Finished several web development projects
            and continuously learning new technologies.
          </p>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-500 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
