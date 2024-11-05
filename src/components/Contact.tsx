import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:ktummala@islander.tamucc.edu"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors mb-4">
              <Mail className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-center">
              ktummala@islander.tamucc.edu
            </p>
          </a>

          <a
            href="tel:+12792346618"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors mb-4">
              <Phone className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (279) 234-6618</p>
          </a>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors mb-4">
              <MapPin className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 text-center">Corpus Christi, TX</p>
          </div>
        </div>
      </div>
    </section>
  );
}