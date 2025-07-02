export default function Skills() {
  const skills = {
    'Frontend': ['React.js', 'Bootstrap', 'Tailwind CSS', 'Material UI'],
    'Backend': ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    'Languages': ['C++', 'Java', 'JavaScript', 'TypeScript'],
    'Tools': ['Git', 'GitHub', 'VS Code', 'Postman'],
    'Soft Skills': ['Adaptability', 'Analytical Thinking', 'Communication', 'Teamwork']
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-purple-500 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}