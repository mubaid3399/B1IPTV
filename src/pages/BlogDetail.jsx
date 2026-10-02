import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Sparkles, Tag, HelpCircle, ChevronDown } from 'lucide-react';
import { blogs } from '../assets/blog.js';
import LazyImage from '../components/LazyImage';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const relatedPosts = blogs.filter(b => b.slug !== slug);

  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen text-gray-300">
      {/* Top Banner / Breadcrumb */}
      <div className="w-full py-12 px-6 bg-gradient-to-b from-[#0a0f1d] to-[#0e1424] border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-[#c8102e] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Guides
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-[#c8102e] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#c8102e]" /> {post.date}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-500" /> {post.readTime}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-gray-500" /> {post.author}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Featured Image */}
        <div className="w-full aspect-[16/9] max-h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] mb-12">
          <LazyImage 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="space-y-10">
          {post.sections && post.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide border-b border-white/10 pb-3">
                {sec.heading}
              </h2>
              <div className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-3 font-normal">
                {sec.body.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mr-2">
              <Tag className="w-3.5 h-3.5 text-[#c8102e]" /> Keywords & Topics:
            </span>
            {post.tags.map((tag, tIdx) => (
              <span 
                key={tIdx} 
                className="text-xs bg-white/5 hover:bg-white/10 text-gray-300 px-3 py-1.5 rounded-lg border border-white/5 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA Card: Try B1G IPTV Free Trial */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-[#12192e] to-[#0a0f1d] border border-[#c8102e]/30 shadow-[0_8px_30px_rgba(200,16,46,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold text-[#c8102e] tracking-widest uppercase flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Ready for 4K Streaming?
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Test B1G IPTV with a 24-Hour Free Trial
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Experience all 28,000+ live channels and 100,000+ on-demand movies with full B1G player support before committing.
            </p>
          </div>
          <Link
            to="/free-trial"
            className="bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-[0_4px_15px_rgba(200,16,46,0.4)] hover:brightness-110 active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            Start Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Article FAQs (5 Questions) right before Related Posts */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">
                <HelpCircle className="w-3.5 h-3.5" /> Common Questions
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                Frequently Asked <span className="text-[#c8102e]">Questions</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                Quick diagnostic answers and expert setup tips directly related to this topic.
              </p>
            </div>

            <div className="space-y-3">
              {post.faqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-white/5 rounded-2xl overflow-hidden bg-[#0b101e] transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm md:text-base font-bold text-white hover:text-[#c8102e] transition-colors cursor-pointer gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start gap-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5 ${
                          isOpen ? 'bg-[#c8102e] text-white' : 'bg-white/5 text-gray-400'
                        }`}>
                          Q{fIdx + 1}
                        </span>
                        <span className="leading-snug">{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 mt-0.5 ${
                          isOpen ? 'rotate-180 text-[#c8102e]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-1 bg-white/[0.01]">
                        <p className="pl-8 pt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">
              More Guides & Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(rel => (
                <Link
                  key={rel.id}
                  to={`/blogs/${rel.slug}`}
                  className="p-5 rounded-xl bg-[#111624] border border-white/5 hover:border-[#c8102e]/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#c8102e] uppercase tracking-wider block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="text-white font-bold text-base group-hover:text-[#c8102e] transition-colors leading-snug mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-white/5">
                    <span>{rel.date}</span>
                    <span className="text-[#c8102e] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
