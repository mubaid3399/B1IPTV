import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/asset.js';
import { Monitor, Smartphone, Tv, Laptop, ArrowRight } from 'lucide-react';

const CompatibleDevices = () => {
  return (
    <section className="w-full bg-[#040814] py-24 px-6 md:px-12 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          <span className="text-[#E01E26] text-xs font-bold tracking-widest uppercase mb-3">
            Stream Anywhere
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Compatible With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              All Your Devices
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Whether you are at home or on the go, B1G IPTV travels with you. Enjoy crystal-clear 4K streaming on your Smart TV, smartphone, tablet, laptop, or Firestick without any extra boxes.
          </p>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-10 w-full max-w-md mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                <Tv className="w-5 h-5 text-[#E01E26]" />
              </div>
              <span className="text-gray-300 font-semibold text-sm md:text-base">Smart TVs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                <Laptop className="w-5 h-5 text-[#E01E26]" />
              </div>
              <span className="text-gray-300 font-semibold text-sm md:text-base">Laptops</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                <Smartphone className="w-5 h-5 text-[#E01E26]" />
              </div>
              <span className="text-gray-300 font-semibold text-sm md:text-base">Mobiles</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/10">
                <Monitor className="w-5 h-5 text-[#E01E26]" />
              </div>
              <span className="text-gray-300 font-semibold text-sm md:text-base">PCs & Macs</span>
            </div>
          </div>

          {/* Button linking to Installation Guide */}
          <div>
            <Link
              to="/installation-guide"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#E01E26] to-[#b3141b] text-white font-medium text-sm md:text-base rounded-xl shadow-lg shadow-[#E01E26]/25 hover:shadow-[#E01E26]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <span>Installation Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Image Side with clickable link */}
        <Link 
          to="/installation-guide"
          className="w-full lg:w-1/2 relative group perspective block cursor-pointer"
          aria-label="View Installation Guide for Compatible Devices"
        >
          {/* Subtle glow behind image */}
          <div className="absolute inset-0 bg-[#E01E26] rounded-3xl blur-[100px] opacity-20 transition-opacity duration-700 group-hover:opacity-40 -z-10"></div>
          
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-white/10 to-transparent">
            <img 
              src={assets.devicesMockup} 
              alt="Compatible Devices Mockup - B1G IPTV Installation Guide" 
              className="w-full h-auto object-cover rounded-[1.4rem] shadow-2xl shadow-black/50 transform transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Quick hover badge */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-gray-200 shadow-xl group-hover:border-[#E01E26]/60 group-hover:text-white transition-all">
              <span>View Setup Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E01E26] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default CompatibleDevices;
