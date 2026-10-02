import React from 'react';
import { SiNetflix, SiHbomax, SiAppletv, SiYoutubetv } from 'react-icons/si';

const logos = [
  { 
    name: 'Netflix', 
    icon: <SiNetflix className="w-24 h-24" />, 
    color: 'hover:text-[#E50914]' 
  },
  { 
    name: 'Disney+', 
    icon: (
      <svg className="w-28 h-28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.15 9.77c-1.39-1.25-3.32-2.14-5.26-2.14C2.31 7.63.15 9.7.15 12.39c0 3.03 2.5 5.56 5.61 5.56 2.5 0 4.67-1.42 5.37-3.71.55-1.78.26-3.41-.98-4.47zM5.56 16.7c-2.16 0-3.9-1.84-3.9-4.11 0-2.01 1.55-3.6 3.48-3.6 1.48 0 2.87.68 3.75 1.76-.02.04-.61 2.38-3.33 5.95z"/>
        <path d="M12.92 10.95c-.32 0-.58.26-.58.58v4.94c0 .32.26.58.58.58h1.16c.32 0 .58-.26.58-.58v-4.94c0-.32-.26-.58-.58-.58h-1.16zM15.48 8.87c0 .53.43.96.96.96.53 0 .96-.43.96-.96 0-.53-.43-.96-.96-.96-.53 0-.96.43-.96.96zm-.43 2.08c-.32 0-.58.26-.58.58v4.94c0 .32.26.58.58.58h1.16c.32 0 .58-.26.58-.58v-4.94c0-.32-.26-.58-.58-.58h-1.16zM20.21 11.23h-1.36v-1.36c0-.32-.26-.58-.58-.58h-1.16c-.32 0-.58.26-.58.58v1.36h-1.36c-.32 0-.58.26-.58.58v1.16c0 .32.26.58.58.58h1.36v1.36c0 .32.26.58.58.58h1.16c.32 0 .58-.26.58-.58v-1.36h1.36c.32 0 .58-.26.58-.58v-1.16c0-.32-.26-.58-.58-.58z"/>
      </svg>
    ), 
    color: 'hover:text-white' 
  },
  { 
    name: 'Prime Video', 
    icon: (
      <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.66 12.35c-1.37.76-3.23 1.25-5.32 1.25-3.08 0-5.71-1.07-7.23-2.73-.24-.26-.16-.62.13-.8.29-.18.73-.27.97.02 1.25 1.51 3.51 2.37 6.13 2.37 2.07 0 3.73-.42 5.03-1.02.26-.12.63.1.58.4-.04.22-.16.4-.29.51zm8.38-2.61c-1.87 0-3.39-1.52-3.39-3.39s1.52-3.39 3.39-3.39 3.39 1.52 3.39 3.39-1.52 3.39-3.39 3.39z"/>
      </svg>
    ), 
    color: 'hover:text-[#00A8E1]' 
  },
  { 
    name: 'HBO Max', 
    icon: <SiHbomax className="w-24 h-24" />, 
    color: 'hover:text-[#5116AC]' 
  },
  { 
    name: 'Hulu', 
    icon: (
      <svg className="w-28 h-28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.2 16.7h-3.4v-4.5c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3v4.5H7.8V6.4H4.4v10.3c0 2 1.6 3.6 3.6 3.6h9.7c2 0 3.6-1.6 3.6-3.6v-3.7z"/>
      </svg>
    ), 
    color: 'hover:text-[#1CE783]' 
  },
  { 
    name: 'Apple TV+', 
    icon: <SiAppletv className="w-20 h-20" />, 
    color: 'hover:text-white' 
  },
  { 
    name: 'YouTube TV', 
    icon: <SiYoutubetv className="w-24 h-24" />, 
    color: 'hover:text-[#FF0000]' 
  }
];

const StreamingLogos = () => {
  return (
    <div className="w-full bg-[#080d1d] py-10 border-b border-white/5 overflow-hidden relative flex flex-col items-center">
      <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2 uppercase tracking-[0.3em]">
        All Your Favorite Platforms In One Subscription
      </p>
      
      {/* Gradient masks for smooth edge fading */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#080d1d] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#080d1d] to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrolling container */}
      <div className="animate-scroll">
        {/* We map twice to create the infinite scrolling illusion */}
        {[...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className={`flex justify-center items-center px-12 md:px-20 text-[#2a3044] transition-colors duration-500 cursor-default select-none ${logo.color}`}
            title={logo.name}
          >
            {logo.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamingLogos;
