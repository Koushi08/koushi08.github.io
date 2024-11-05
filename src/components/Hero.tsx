import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-4">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
        style={{
            backgroundImage: 'url(src/components/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      />
      
      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="profile-image w-40 h-40 mx-auto mb-8 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden backdrop-blur-sm">
          <img
            src="src/components/profile.jpg"
            alt="Kumar Datta Tummala"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
          Kumar
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 tracking-wide">
          Hi! I'm <span className="text-white">Kumar Datta Tummala</span>. People call me <span className="text-white">Kumar</span>.
          <br />
          I <span className="text-white">code</span>, I <span className="text-white">create</span>, and I <span className="text-white">innovate</span>.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Koushi08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/kumardatta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/kumardatta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="mailto:ktummala@islander.tamucc.edu"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>

        <p className="text-gray-400 text-lg">
          Corpus Christi, TX
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/20 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}