import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/asset.js';
import { CheckCircle2, Globe, Headset } from 'lucide-react';

const Hero = () => {
  return (
    <div 
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.bgImg01})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 text-left px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-start mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight max-w-3xl">
          B1G IPTV. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E01E26] to-[#B5121A]">
            A clearer way to choose 4K streaming.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl font-light leading-relaxed">
          Explore a premium catalogue of <strong className="text-white font-medium">28,000+ live channels</strong>, <strong className="text-white font-medium">100,000+ movies</strong> and <strong className="text-white font-medium">20,000+ series</strong>. Compare compatible devices and test the service for 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link 
            to="/free-trial" 
            className="bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white px-5 py-2.5 rounded-md text-xs md:text-sm font-semibold shadow-[0_4px_15px_rgba(224,30,38,0.4)] transition-all duration-300 hover:from-[#EE2830] hover:to-[#E01E26] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(224,30,38,0.6)] flex items-center justify-center w-full sm:w-auto"
          >
            Request 24-Hour Trial
          </Link>
          <Link 
            to="/pricing" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-md text-xs md:text-sm font-semibold transition-all duration-300 hover:bg-white/20 hover:-translate-y-1 flex items-center justify-center w-full sm:w-auto"
          >
            Plans from $15
          </Link>
        </div>

        {/* Feature row below buttons */}
        <div className="mt-10 flex flex-wrap justify-start gap-x-8 gap-y-4 text-xs md:text-sm text-gray-400 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#E01E26]" />
            Device-first testing
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#E01E26]" />
            Worldwide categories
          </span>
          <span className="flex items-center gap-2">
            <Headset className="w-5 h-5 text-[#E01E26]" />
            24/7 Support
          </span>
        </div>
      </div>
      
      {/* Bottom gradient to blend smoothly into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080d1d] to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
