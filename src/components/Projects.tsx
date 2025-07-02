import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'StudyNotion (Ed-Tech)',
      description: 'Full-stack platform for students to buy courses via Razorpay and watch video lectures. Instructors can manage courses, prices, and track revenue via dashboard.',
      tech: ['React', 'Node.js', 'Express.js', 'Razorpay', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/paridhi2306/Ed_Tech_Project',
      
    },
    {
      title: 'Monthly Challenges Platform',
      description: 'Dynamic web app offering monthly challenges to boost engagement. Users can create, edit, delete challenges with Spring Boot backend and AWS infrastructure.',
      tech: ['React', 'Spring Boot', 'AWS S3', 'RDS', 'EC2'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/paridhi2306/monthly_challenges',
      
    },
    {
      title: 'AI Email Writer Assistant',
      description: 'AI-powered email reply generator using Gemini API with Chrome extension integration for Gmail. Backend handles requests with comprehensive error handling.',
      tech: ['React', 'Spring Boot', 'Gemini API', 'Chrome Extension'],
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/paridhi2306/email_writer_assistant',
      
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Projects</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-black rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-base mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full
                               hover:bg-purple-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a 
                    href={project.github} 
                    className="text-white hover:text-purple-500 transition-colors flex items-center gap-2"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={22} />
                    <span className="text-sm">View Code</span>
                  </a>
                  
                    
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}