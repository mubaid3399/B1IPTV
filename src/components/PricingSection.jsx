import React, { useState } from 'react';
import PricingCard from './PricingCard';

const standardPlans = [
  {
    title: "1 Year",
    price: "60",
    isPopular: true,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "39,000+ VODs",
      "5,000+ Series",
      "HD & 4K Quality",
      "All Devices Support"
    ]
  },
  {
    title: "6 Months",
    price: "40",
    isPopular: false,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "39,000+ VODs",
      "5,000+ Series",
      "HD & 4K Quality",
      "All Devices Support"
    ]
  },
  {
    title: "3 Months",
    price: "25",
    isPopular: false,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "39,000+ VODs",
      "5,000+ Series",
      "HD & 4K Quality",
      "All Devices Support"
    ]
  },
  {
    title: "1 Month",
    price: "15",
    isPopular: false,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "39,000+ VODs",
      "5,000+ Series",
      "HD & 4K Quality",
      "All Devices Support"
    ]
  }
];

const premiumPlans = [
  {
    title: "1 Year",
    price: "90",
    isPopular: true,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "Higher Quality (4K UHD)",
      "More Stable Connection",
      "Less Downtime",
      "3x More VODs than Standard"
    ]
  },
  {
    title: "6 Months",
    price: "60",
    isPopular: false,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "Higher Quality (4K UHD)",
      "More Stable Connection",
      "Less Downtime",
      "3x More VODs than Standard"
    ]
  },
  {
    title: "3 Months",
    price: "35",
    isPopular: false,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "Higher Quality (4K UHD)",
      "More Stable Connection",
      "Less Downtime",
      "3x More VODs than Standard"
    ]
  },
  {
    title: "1 Month",
    price: "20",
    isPopular: false,
    features: [
      "Free 6 Hours Test",
      "9,000+ Channels",
      "Higher Quality (4K UHD)",
      "More Stable Connection",
      "Less Downtime",
      "3x More VODs than Standard"
    ]
  }
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('standard');

  return (
    <section className="w-full bg-[#111111] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Text */}
        <p className="text-gray-300 text-xs md:text-sm font-medium mb-6 text-center max-w-xl">
          Watch on All Your Favorite Devices. Add Extra Connections to Enjoy Simultaneous Streaming on Multiple Devices.
        </p>

        {/* Tab Toggle */}
        <div className="flex gap-3 mb-12">
          <button
            onClick={() => setActiveTab('standard')}
            className={`cursor-pointer py-2.5 px-8 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              activeTab === 'standard' 
                ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            STANDARD
          </button>
          <button
            onClick={() => setActiveTab('premium')}
            className={`py-2.5 cursor-pointer px-8 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              activeTab === 'premium' 
                ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            PREMIUM
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {(activeTab === 'standard' ? standardPlans : premiumPlans).map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              isPopular={plan.isPopular}
              features={plan.features}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
