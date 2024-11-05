import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      school: 'Texas A&M University, Corpus Christi',
      degree: 'MS in Computer Science',
      date: 'Expected May 2025',
      description: 'Focusing on advanced computer science concepts and software development.',
    },
    {
      school: 'KL University, Hyderabad',
      degree: 'BTech in Electronics and Communication Engineering',
      date: 'Graduated May 2023',
      description: 'Developed strong foundation in engineering principles and technical problem-solving.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.school}
                </h3>
                <span className="text-indigo-600 font-medium">
                  {edu.date}
                </span>
              </div>
              <h4 className="text-lg text-gray-700 mb-2">{edu.degree}</h4>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}