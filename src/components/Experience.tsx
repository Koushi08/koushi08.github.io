import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Logistics Coordinator',
      company: 'Swadeshi Traveller',
      period: 'June 2022 – April 2023',
      description: 'Managed logistics for travel events, enhancing efficiency and customer satisfaction.',
    },
    {
      title: 'Youth Ambassador',
      company: 'Viral Fission',
      period: 'April 2021 – April 2022',
      description: 'Promoted campaigns, gaining experience in digital marketing and public relations.',
    },
    {
      title: 'Creative Head',
      company: 'YounifyKLH Radio',
      period: 'June 2019 – June 2020',
      description: 'Led creative content production, increasing engagement by 40%.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-indigo-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}