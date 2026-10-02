import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingCard = ({ title, price, features, isPopular }) => {
  return (
    <div className="relative flex flex-col p-6 rounded-lg bg-[#181818] border border-white/5 transition-transform duration-300 hover:-translate-y-1">
      {isPopular && (
        <div className="absolute -top-2.5 left-5 bg-[#c8102e] text-white text-[10px] md:text-xs font-medium px-2.5 py-1 rounded shadow-md border border-white/10">
          Recommended
        </div>
      )}
      
      <div className="text-center mb-5">
        <h3 className="text-[#c8102e] text-xs md:text-sm font-medium mb-3">{title}</h3>
        <div className="text-2xl md:text-3xl font-bold text-white">
          ${price}
        </div>
      </div>
      
      <div className="flex justify-center mb-6 flex-grow">
        <ul className="flex flex-col gap-2.5">
          {features?.map((feature, index) => (
            <li key={index} className="flex items-center gap-2.5 text-gray-300 text-xs">
              <Check className="w-3.5 h-3.5 text-[#c8102e] shrink-0" strokeWidth={4} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-center mt-auto">
        <Link 
          to="/contact" 
          className="bg-[#c8102e] text-white px-6 py-2 rounded-md text-xs md:text-sm font-medium transition-colors hover:bg-[#a00c24]"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
