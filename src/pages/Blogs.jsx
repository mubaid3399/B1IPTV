import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogs } from '../assets/blog.js';
import LazyImage from '../components/LazyImage';

const Blogs = () => {
  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen">
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1d] to-[#111111] border-b border-white/5">
        <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
          Latest News & Guides
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          B1G IPTV <span className="text-[#c8102e]">Blog</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Stay updated with expert troubleshooting guides, setup walkthroughs, and streaming tips for B1G IPTV and B1G player.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {blogs.map(post => (
            <article key={post.id} className="bg-[#111111] border border-white/5 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
              <Link to={`/blogs/${post.slug}`} className="w-full h-56 overflow-hidden relative block">
                <div className="absolute top-4 left-4 bg-[#c8102e] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-wider z-10">
                  {post.category}
                </div>
                {/* Fallback color if image is missing */}
                <div className="w-full h-full bg-[#181818] absolute inset-0"></div>
                <LazyImage 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover relative z-0 transform transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c8102e]" />
                    {post.date}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {post.readTime}
                    </span>
                  )}
                </div>

                <Link to={`/blogs/${post.slug}`}>
                  <h2 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#c8102e] transition-colors leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blogs/${post.slug}`}
                  className="text-[#c8102e] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:text-white transition-colors mt-auto w-fit group/btn"
                >
                  Read Article <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Blogs;
