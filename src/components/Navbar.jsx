import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
import { assets } from '../assets/asset.js';
import LazyImage from '../components/LazyImage';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Reseller', path: '/reseller' },
  { name: 'Free Trial', path: '/free-trial' },
  { name: 'Installation Guide', path: '/installation-guide' },
  { name: 'Contact', path: '/contact' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'FAQs', path: '/faqs' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer on Escape key or when screen resizes to desktop
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full flex justify-between items-center px-4 md:px-12 py-4 md:py-5 transition-all duration-500 z-40 ${
          isScrolled 
            ? 'bg-[#0b0f19]/95 backdrop-blur-md !py-3 shadow-[0_4px_20px_rgba(0,0,0,0.6)] border-b border-white/5' 
            : 'bg-gradient-to-b from-black/80 to-transparent'
        }`}
      >
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-10">
          {/* Mobile Hamburger Menu Button (Menu bars) */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            className="lg:hidden p-2 -ml-1 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <LazyImage
              src={assets.logo}
              alt="B1G Logo"
              className="h-9 sm:h-10 md:h-11 cursor-pointer transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
            />
          </Link>
          
          {/* Desktop Navigation Links (Hidden on mobile, flex on lg and above) */}
          <ul className="hidden lg:flex gap-4 xl:gap-6 m-0 p-0 list-none">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={`text-sm font-medium transition-colors duration-300 py-1 border-b-2 ${
                      isActive 
                        ? 'text-white border-[#c8102e]' 
                        : 'text-[#e5e5e5] border-transparent hover:text-[#c8102e]'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <Link 
            to="/free-trial" 
            className="bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white px-3.5 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 rounded-md text-xs sm:text-sm font-semibold shadow-[0_4px_10px_rgba(224,30,38,0.3)] transition-all duration-300 hover:from-[#EE2830] hover:to-[#E01E26] hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(224,30,38,0.5)] shrink-0"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Backdrop Overlay for Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer - Slides from Left to Right */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[290px] sm:w-[320px] max-w-[85vw] h-full bg-[#0a0f1d] border-r border-white/10 z-50 shadow-[10px_0_35px_rgba(0,0,0,0.9)] flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header with Cross Bar to close */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#070b16]">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <LazyImage
              src={assets.logo}
              alt="B1G Logo"
              className="h-8 w-auto object-contain"
            />
            <span className="font-bold text-white text-base tracking-wide">
              B1G <span className="text-[#c8102e]">IPTV</span>
            </span>
          </Link>

          {/* Cross bar button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="p-2 -mr-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8102e]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="py-4 px-3 flex-grow overflow-y-auto space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#c8102e]/15 text-white border-l-4 border-[#c8102e]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? 'text-[#c8102e] translate-x-0.5' : 'text-gray-500'
                  }`} 
                />
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-white/10 bg-[#070b15]/80 flex flex-col gap-3">
          <Link
            to="/free-trial"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white py-3 rounded-lg text-sm font-semibold shadow-[0_4px_15px_rgba(200,16,46,0.35)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Get Started Free Trial
          </Link>
          <div className="flex items-center justify-center text-[11px] text-gray-400">
            <span>Instant Activation &bull; 24/7 Support</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
