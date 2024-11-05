import { FileText, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Jobify – AI-Powered Job Matching Platform',
      description: 'Led a team to develop a platform that matches job seekers with positions, improving CV generation by 25%.',
      tags: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
      year: '2024',
    },
    {
      title: 'Geospatial Database for Urban Traffic Management',
      description: 'Designed a database for traffic optimization, enhancing data processing efficiency by 30%.',
      tags: ['PostgreSQL', 'Python', 'GIS', 'Data Analysis'],
      year: '2023',
    },
    {
      title: 'EDITH – AI Personal Assistant',
      description: 'Contributed to core functionalities for an AI assistant, increasing productivity by 35%.',
      tags: ['Python', 'TensorFlow', 'NLP', 'Speech Recognition'],
      year: '2021',
    },
    {
      title: 'Smart Agriculture and IoT-Driven Irrigation System',
      description: 'Developed an IoT-based irrigation system, reducing water usage by 25%.',
      tags: ['IoT', 'Arduino', 'Python', 'Sensors'],
      year: '2023',
    },
    {
      title: 'Real-Time Currency Converter',
      description: 'Created an application for real-time currency conversions, improving response time by 40%.',
      tags: ['React', 'API Integration', 'Real-time Data'],
      year: '2022',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <FileText className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-gray-500 ml-2">
                  {project.year}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white rounded-full text-sm font-medium text-indigo-600 shadow-sm"
                  >
                    {tag}
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