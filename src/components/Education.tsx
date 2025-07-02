export default function Education() {
  const education = [
    {
      degree: 'MCA Computer Applications',
      institution: 'Sardar Patel Institute of Technology, Mumbai',
      duration: 'Aug 2024 – Sep 2026'
    },
    {
      degree: 'BSc Computer Science',
      institution: 'Govt. Holkar Science College, Indore',
      duration: 'Aug 2021 – May 2024',
      grade: 'CGPA: 7.3'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Jawahar Navodaya Vidyalaya, Multhan, Dhar (M.P)',
      duration: '2020 – 2021',
      grade: '92%'
    },
    {
      degree: 'Senior Secondary',
      institution: 'Jawahar Navodaya Vidyalaya, Multhan, Dhar (M.P)',
      duration: '2018 – 2019',
      grade: '89.2%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500/30"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative pl-12 pb-12">
                <div className="absolute left-0 top-2 w-8 h-8 bg-purple-500/10 border-2 border-purple-500 rounded-full"></div>
                
                <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                  <p className="text-purple-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.duration}</p>
                  {edu.grade && (
                    <p className="text-gray-400 text-sm mt-1">{edu.grade}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}