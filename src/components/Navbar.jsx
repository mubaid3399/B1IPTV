import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/asset.js';
import LazyImage from '../components/LazyImage';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav 
      className={`fixed top-0 w-full flex justify-between items-center px-4 md:px-12 py-5 transition-all duration-500 z-50 ${
        isScrolled 
          ? 'bg-[#141414] !py-3 shadow-[0_4px_15px_rgba(0,0,0,0.5)]' 
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center gap-10">
        <Link to="/">
        <LazyImage
          src={assets.logo}
          alt="B1G Logo"
          className="h-10 md:h-11 cursor-pointer transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] drop-shadow-[0_0_4px_rgba(255,255,255,0.2)]"
        />
        </Link>
        
        {/* Hidden on mobile, flex on lg and above */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 m-0 p-0 list-none">
          {['Home', 'Pricing', 'Reseller', 'Free Trial', 'Installation Guide', 'Contact', 'Blogs', 'FAQs'].map((item) => (
            <li key={item}>
              <Link 
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-[#e5e5e5] text-sm font-medium transition-colors duration-300 hover:text-[#b3b3b3]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <Link 
          to="/free-trial" 
          className="bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-md text-sm font-semibold shadow-[0_4px_10px_rgba(224,30,38,0.3)] transition-all duration-300 hover:from-[#EE2830] hover:to-[#E01E26] hover:-translate-y-0.5 hover:shadow-[0_6px_15px_rgba(224,30,38,0.5)]"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
