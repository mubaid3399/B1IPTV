import React from 'react';
import { assets } from '../assets/asset.js';
import { Link } from 'react-router-dom';

const sportsLeagues = [
  { short: "NFL", full: "National Football League" },
  { short: "NBA", full: "Basketball Association" },
  { short: "UFC", full: "Pay-Per-View Events" },
  { short: "MLB", full: "Major League Baseball" },
  { short: "NHL", full: "National Hockey League" },
  { short: "NCAA", full: "College Sports" },
];

const LiveSportsSection = () => {
  return (
    <section 
      className="relative w-full min-h-[60vh] flex items-center py-16 bg-fixed bg-cover bg-center bg-no-repeat border-b border-white/5"
      style={{ backgroundImage: `url(${assets.bgImg02})` }}
    >
      {/* Dark gradient overlay for text readability (strong black on left, fading to right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent"></div>
      
      {/* Extra overlay for mobile where the image might clash with text */}
      <div className="absolute inset-0 bg-black/40 md:hidden"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start w-full">
        
        {/* Text Side */}
        <div className="w-full md:w-3/5 lg:w-1/2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Live Sports & <br />
            <span className="text-[#c8102e]">Global Leagues</span>
          </h2>
          
          {/* Sports Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {sportsLeagues.map((league, index) => (
              <div 
                key={index} 
                className="bg-[#181818]/90 backdrop-blur-sm border-l-4 border-[#c8102e] rounded-md px-4 py-2.5 flex items-center gap-3 shadow-lg transition-transform hover:-translate-x-1 cursor-default"
              >
                <span className="text-white font-bold text-base md:text-lg tracking-wide">{league.short}</span>
                <span className="text-gray-300 text-[10px] sm:text-xs font-medium tracking-wide">{league.full}</span>
              </div>
            ))}
          </div>
          
          <Link 
            to="/pricing" 
            className="inline-block bg-[#c8102e] text-white px-6 py-2.5 rounded-md text-xs md:text-sm font-bold tracking-widest hover:bg-[#a00c24] transition-colors uppercase shadow-lg shadow-[#c8102e]/20"
          >
            Explore Sports Packages
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default LiveSportsSection;
