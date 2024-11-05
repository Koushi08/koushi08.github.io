import { BookOpen } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <BookOpen className="h-8 w-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">Publications</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Smart Agriculture and Automatic Irrigation System Using IoT
          </h3>
          <p className="text-gray-600 mb-4">
            Co-authored research paper published in CRC Press, 2024
          </p>
          <a
            href="https://doi.org/10.1201/9781003489436"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <span>Read Publication</span>
            <BookOpen className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}