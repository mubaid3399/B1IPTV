import React, { useState } from 'react';
import { Mail, MonitorPlay, Zap, ShieldCheck } from 'lucide-react';
import { assets } from '../assets/asset.js';
import LazyImage from '../components/LazyImage';

const FreeTrial = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'smart-tv',
    app: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic goes here (e.g., API call or WhatsApp redirect)
    alert("Free trial request sent successfully! Please check your email or WhatsApp in a few minutes.");
  };

  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen">
      {/* Page Header */}
      <div 
        className="relative w-full text-center py-24 px-6 bg-cover bg-center border-b border-white/10"
        style={{ backgroundImage: `url(${assets.freeTrialBanner})` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
            No Credit Card Required
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get Your 24-Hour <span className="text-[#c8102e]">Free Trial</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Test our premium streaming service risk-free. Experience crystal-clear 4K quality, over 28,000 live channels, and a massive VOD library before committing to a paid plan.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Side: Benefits & Info */}
        <div className="flex flex-col justify-center">
          
          {/* Main Content Image */}
          <div className="w-full mb-10 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(200,16,46,0.15)] border border-white/10 group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d1d]/80 via-transparent to-transparent z-10"></div>
            <LazyImage 
              src={assets.freeTrialBanner} 
              alt="Premium IPTV Streaming" 
              className="w-full object-cover aspect-video transform transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why test our service?</h2>
          <div className="flex flex-col gap-8">
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#c8102e]/10 rounded-lg border border-[#c8102e]/20 shrink-0">
                <Zap className="w-6 h-6 text-[#c8102e]" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Instant Delivery</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your trial login details are generated automatically and sent straight to your email inbox or WhatsApp immediately after you submit the request. No waiting around.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#c8102e]/10 rounded-lg border border-[#c8102e]/20 shrink-0">
                <MonitorPlay className="w-6 h-6 text-[#c8102e]" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">Test on Your Device</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ensure full compatibility with your Smart TV, Firestick, PC, or Smartphone. Use your favorite IPTV player like Tivimate or Smarters Pro to experience our service exactly how you want.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#c8102e]/10 rounded-lg border border-[#c8102e]/20 shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#c8102e]" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-2">100% Risk-Free</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We will never ask for your payment or credit card details for a free trial. It's completely free, safe, and entirely obligation-free.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Request Form */}
        <div className="bg-[#111111] p-6 md:p-8 rounded-xl border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Subtle Red Gradient Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#c8102e] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 relative z-10">Request Trial Details</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
            <div>
              <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Your Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Email Address (For Delivery)</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#181818] border border-white/10 rounded-md pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Your Device</label>
                <select 
                  className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                  onChange={e => setFormData({...formData, device: e.target.value})}
                >
                  <option value="smart-tv">Smart TV (Samsung/LG)</option>
                  <option value="firestick">Amazon Firestick</option>
                  <option value="pc">PC / Mac / Browser</option>
                  <option value="smartphone">Smartphone / Tablet</option>
                  <option value="mag">MAG Box</option>
                  <option value="other">Other Device</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Preferred App (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g., Tivimate, Smarters"
                  className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                  onChange={e => setFormData({...formData, app: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#c8102e] text-white py-3.5 rounded-md font-bold text-sm tracking-wider hover:bg-[#a00c24] transition-colors mt-4 shadow-lg shadow-[#c8102e]/20 uppercase"
            >
              Get Free Trial Now
            </button>
            
            <p className="text-gray-500 text-[11px] text-center mt-2">
              By requesting a trial, you agree that you are testing the service for personal use. No credit card required.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default FreeTrial;
