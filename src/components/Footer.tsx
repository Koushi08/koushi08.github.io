import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-lg font-semibold">Kumar Datta Tummala</span>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}