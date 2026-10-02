import React from 'react';
import { ChevronDown } from 'lucide-react';

const FaqAccordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-white/10 rounded-lg bg-[#181818] overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-white/5 transition-colors"
      >
        <h4 className="text-sm md:text-base font-semibold text-gray-200 pr-4">{question}</h4>
        <ChevronDown 
          className={`w-5 h-5 text-[#c8102e] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-5 px-5' : 'max-h-0 opacity-0 px-5'
        }`}
      >
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FaqAccordion;
