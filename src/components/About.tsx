import { Film, Car, Video, Smile, Music, Code } from 'lucide-react';

export default function About() {
  const interests = [
    {
      icon: Film,
      title: 'Movie Buff',
      description: 'Deep love for movies and exploring diverse genres',
    },
    {
      icon: Car,
      title: 'Scenic Drives',
      description: 'Enjoy peaceful drives with views of nature',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Creative outlet for storytelling through video',
    },
    {
      icon: Smile,
      title: 'Memes & Humor',
      description: 'Creating memes to bring laughter to life',
    },
    {
      icon: Music,
      title: 'Music Lover',
      description: 'Finding inspiration across different genres',
    },
    {
      icon: Code,
      title: 'Tech & Coding',
      description: 'Always learning new tools and coding projects',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}