import React, { useState } from 'react';
import { 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  Headphones, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import deviceGuides from '../data/deviceGuides';

const InstallationGuide = () => {
  const [activeTab, setActiveTab] = useState(deviceGuides[0].id);
  const [openFaq, setOpenFaq] = useState(null);

  const activeDevice = deviceGuides.find(d => d.id === activeTab) || deviceGuides[0];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full pt-20 bg-[#060a14] min-h-screen text-gray-200">
      {/* Page Header */}
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1e] via-[#090d1a] to-[#060a14] border-b border-white/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5" /> 5-Minute Setup Center
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e01e26] via-[#c8102e] to-[#ff4d58]">Guide</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Select your streaming hardware below to load verified step-by-step setup guides, recommended player apps, and complete troubleshooting FAQs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Modern Hardware Selector Bar (TOP) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8102e] shadow-[0_0_10px_#c8102e] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Select Your Streaming Hardware:
              </span>
            </div>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Viewing: <strong className="text-white">{activeDevice.name}</strong>
            </span>
          </div>

          {/* Premium Device Buttons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {deviceGuides.map((device) => {
              const isActive = activeTab === device.id;
              return (
                <button
                  key={device.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(device.id);
                    setOpenFaq(null);
                  }}
                  className={`group relative flex items-center sm:flex-col sm:items-center sm:text-center gap-3 sm:gap-2.5 p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden text-left ${
                    isActive
                      ? 'bg-gradient-to-b from-[#1c0d16] via-[#140910] to-[#0d070b] border-[#c8102e] shadow-[0_4px_25px_rgba(200,16,46,0.35)] ring-1 ring-[#c8102e]/60 z-10'
                      : 'bg-[#0b101d] border-white/10 hover:border-white/20 hover:bg-[#101729] text-gray-300 hover:text-white'
                  }`}
                >
                  {/* Subtle top indicator bar on active */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8102e] to-transparent"></div>
                  )}

                  {/* Icon Container */}
                  <div className={`p-2.5 rounded-xl transition-all duration-300 shrink-0 ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#c8102e] to-[#990c23] text-white shadow-md shadow-[#c8102e]/40 scale-105' 
                      : 'bg-white/5 text-[#c8102e] group-hover:bg-white/10 group-hover:scale-105'
                  }`}>
                    {device.icon}
                  </div>

                  {/* Text Container */}
                  <div className="min-w-0 flex-grow">
                    <div className="flex items-center gap-1.5 sm:justify-center">
                      <span className={`text-xs sm:text-sm font-bold truncate block ${
                        isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {device.shortName}
                      </span>
                      {device.badge && (
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-[#c8102e] text-white hidden sm:inline shadow-sm">
                          {device.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-400 block truncate sm:mt-0.5">
                      {device.subtitle.split(',')[0]}
                    </span>
                  </div>

                  {/* Mobile active indicator checkmark */}
                  {isActive && (
                    <div className="sm:hidden ml-auto shrink-0 w-5 h-5 rounded-full bg-[#c8102e] text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Device Content Area (BELOW the buttons) */}
        <div className="bg-[#0b101e] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8102e]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Active Device Header Bar */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 bg-gradient-to-br from-[#c8102e] to-[#e01e26] rounded-2xl text-white shadow-lg shadow-[#c8102e]/30">
                {activeDevice.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    How to Set Up on {activeDevice.name}
                  </h2>
                  <span className="bg-[#c8102e]/15 text-[#ff4d58] border border-[#c8102e]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {activeDevice.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {activeDevice.subtitle}
                </p>
              </div>
            </div>

            {/* Quick Specs Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-[#111728] border border-white/10 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-sm">
                <Clock className="w-4 h-4 text-[#c8102e]" />
                <span className="text-gray-300">Est. Time: <strong className="text-white">{activeDevice.time}</strong></span>
              </div>
              <div className="bg-[#111728] border border-white/10 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#c8102e]" />
                <span className="text-gray-300">Player: <strong className="text-white">{activeDevice.recommendedApp.split('/')[0]}</strong></span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Installation Cards */}
          <div className="relative z-10 py-10">
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#c8102e]" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Step-by-Step Setup Guide
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeDevice.steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0f1629] border border-white/5 hover:border-white/15 rounded-xl p-5 transition-all duration-300 flex gap-4 group hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c8102e] to-[#e01e26] text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-md shadow-[#c8102e]/30 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#c8102e] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Pro Streaming Setup Box */}
          <div className="relative z-10 p-5 rounded-xl bg-gradient-to-r from-[#141d33] to-[#0f1728] border border-white/10 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#c8102e]/20 text-[#c8102e]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Recommended Streaming Setup</h4>
                <p className="text-xs text-gray-400">For buffer-free 4K live sports, connect via 5 GHz Wi-Fi or Ethernet cable with at least 25 Mbps bandwidth.</p>
              </div>
            </div>
            <Link
              to="/free-trial"
              className="text-xs font-bold text-white bg-[#c8102e] hover:bg-[#e01e26] px-4 py-2.5 rounded-lg transition-colors shrink-0 flex items-center gap-1.5 shadow-md shadow-[#c8102e]/30 hover:brightness-110 active:scale-95"
            >
              Test with 24H Trial <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 10 Device-Specific FAQs */}
          <div className="relative z-10 pt-6 border-t border-white/10">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#c8102e]" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Frequently Asked Questions for {activeDevice.name}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Everything you need to know about setting up, optimizing, and troubleshooting B1G IPTV and B1G player on {activeDevice.name}:
              </p>
            </div>

            <div className="space-y-3">
              {activeDevice.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-white/5 rounded-xl overflow-hidden bg-[#0d1322] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#c8102e] transition-colors cursor-pointer gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs text-[#c8102e] font-extrabold bg-[#c8102e]/10 px-2 py-0.5 rounded">
                          Q{index + 1}
                        </span>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#c8102e]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 whitespace-pre-line bg-[#090e1a]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 24/7 Live Assistance Card */}
          <div className="relative z-10 mt-12 p-6 rounded-2xl bg-[#080c17] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-[#c8102e]/10 rounded-2xl text-[#c8102e]">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Live Guided Setup Assistance?</h4>
                <p className="text-xs text-gray-400 mt-0.5">Our support team is available 24/7 on WhatsApp and email to walk you through setup step by step.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-white/5"
              >
                Contact Support
              </Link>
              <Link
                to="/free-trial"
                className="bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#c8102e]/30 hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                Get Free Trial <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
