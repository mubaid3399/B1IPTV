import React from 'react';

const row1 = [
  'https://static.tvmaze.com/uploads/images/original_untouched/610/1525272.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/143/358967.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/490/1226764.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/477/1194981.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/498/1245275.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/0/73.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/82/206879.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/69/174906.jpg'
];

const row2 = [
  'https://static.tvmaze.com/uploads/images/original_untouched/189/474715.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/0/137.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/448/1121792.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/0/184.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/0/154.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/48/122260.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/642/1606113.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/445/1114097.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/444/1111710.jpg',
  'https://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg'
];

// Duplicate for infinite scrolling seamless loop
const extendedRow1 = [...row1, ...row1];
const extendedRow2 = [...row2, ...row2];

const MovieMarquee = () => {
  return (
    <section className="w-full py-16 bg-[#111111] border-b border-white/5 overflow-hidden">
      <div className="text-center mb-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Trending <span className="text-[#c8102e]">Now</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2">Latest cinematic releases added daily to our collection.</p>
      </div>

      <div className="flex flex-col gap-6 relative w-full overflow-hidden">
        
        {/* Row 1 (Moves Left) */}
        <div className="w-full relative flex">
          {/* Edge Gradients for fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-scroll gap-4 px-2">
            {extendedRow1.map((path, idx) => (
              <img 
                key={`r1-${idx}`}
                src={path}
                alt="Movie Poster"
                loading="lazy"
                className="w-32 sm:w-40 md:w-48 aspect-[2/3] object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/10 shrink-0 transition-all duration-300 hover:scale-105 hover:border-[#c8102e] hover:shadow-[0_4px_20px_rgba(200,16,46,0.3)] cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Row 2 (Moves Right) */}
        <div className="w-full relative flex">
          {/* Edge Gradients for fade effect */}
          <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-scroll-right gap-4 px-2">
            {extendedRow2.map((path, idx) => (
              <img 
                key={`r2-${idx}`}
                src={path}
                alt="Movie Poster"
                loading="lazy"
                className="w-32 sm:w-40 md:w-48 aspect-[2/3] object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/10 shrink-0 transition-all duration-300 hover:scale-105 hover:border-[#c8102e] hover:shadow-[0_4px_20px_rgba(200,16,46,0.3)] cursor-pointer"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MovieMarquee;
