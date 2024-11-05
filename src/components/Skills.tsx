import {
  TerminalSquare,
  Database,
  Globe,
  Cloud,
  Brain,
  Server,
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: TerminalSquare,
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'C', 'R'],
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: ['React.js', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'SQL', 'PostgreSQL'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Git', 'Docker'],
    },
    {
      icon: Brain,
      title: 'AI & ML',
      skills: ['TensorFlow.js', 'Machine Learning', 'Data Analysis'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}