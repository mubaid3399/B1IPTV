import React from 'react';
import { assets } from '../assets/asset.js';
import { Link } from 'react-router-dom';
import { Film, Tv, PlayCircle, Star } from 'lucide-react';

const MoviesShowsSection = () => {
  return (
    <section 
      className="relative w-full min-h-[60vh] flex items-center py-16 bg-fixed bg-cover bg-center bg-no-repeat border-b border-white/5"
      style={{ backgroundImage: `url(${assets.geminiGeneratedImage})` }}
    >
      {/* Dark gradient overlay for text readability (strong black on left, fading to right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent"></div>
      
      {/* Extra overlay for mobile where the image might clash with text */}
      <div className="absolute inset-0 bg-black/50 md:hidden"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start w-full">
        
        {/* Text Side */}
        <div className="w-full md:w-3/5 lg:w-1/2">
          <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
            Endless Entertainment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Movies & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              TV Shows
            </span>
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base font-light mb-8 leading-relaxed max-w-lg">
            Dive into a massive library of over <strong className="text-white font-medium">100,000 movies</strong> and <strong className="text-white font-medium">20,000+ series</strong>. From timeless classics to the latest cinematic releases, updated daily in breathtaking 4K UHD.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full max-w-md">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                <Film className="w-4 h-4 text-[#c8102e]" />
              </div>
              <span className="text-gray-200 font-medium text-xs md:text-sm">Latest Blockbusters</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                <Tv className="w-4 h-4 text-[#c8102e]" />
              </div>
              <span className="text-gray-200 font-medium text-xs md:text-sm">Binge-Worthy Series</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                <PlayCircle className="w-4 h-4 text-[#c8102e]" />
              </div>
              <span className="text-gray-200 font-medium text-xs md:text-sm">Daily Updates</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                <Star className="w-4 h-4 text-[#c8102e]" />
              </div>
              <span className="text-gray-200 font-medium text-xs md:text-sm">4K & HDR Quality</span>
            </div>
          </div>
          
          <Link 
            to="/free-trial" 
            className="inline-block bg-[#c8102e] text-white px-6 py-2.5 rounded-md text-xs md:text-sm font-bold tracking-widest hover:bg-[#a00c24] transition-colors uppercase shadow-lg shadow-[#c8102e]/20"
          >
            Start Watching Now
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default MoviesShowsSection;
