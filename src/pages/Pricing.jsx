import React, { useState } from 'react';
import PricingSection from '../components/PricingSection';
import FaqAccordion from '../components/FaqAccordion';

const pricingFaqs = [
  {
    question: "How long does it take to get my account details after paying?",
    answer: "You will receive your account details instantly via email right after the payment is completed. Our automated system ensures zero waiting time."
  },
  {
    question: "Can I use my subscription on multiple devices?",
    answer: "Our standard plans allow 1 connection at a time. If you want to use the service on multiple devices simultaneously, please choose one of our Premium packages which support multiple connections."
  },
  {
    question: "Do I need a VPN to use your service?",
    answer: "No, a VPN is not strictly required. However, if your ISP blocks IPTV services during live events (which is common in the UK/US), we highly recommend using a VPN. Our service is fully VPN-friendly."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you are not completely satisfied with our service. However, we strongly recommend trying our 24-hour free trial before making a long-term purchase."
  }
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(0); // Open the first FAQ by default

  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1d] to-[#111111] border-b border-white/5">
        <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
          No Hidden Fees
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Transparent <span className="text-[#c8102e]">Pricing</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Choose the perfect plan for your entertainment needs. All plans include full access to our massive library of live channels, movies, and TV shows in stunning 4K UHD.
        </p>
      </div>

      {/* Pricing Cards Component */}
      <PricingSection />

      {/* FAQs Component */}
      <div className="py-20 bg-[#080d1d]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm md:text-base">Everything you need to know about our pricing and subscriptions.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {pricingFaqs.map((faq, index) => (
              <FaqAccordion 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
