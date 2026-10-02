import React, { useState } from 'react';
import FaqAccordion from '../components/FaqAccordion';

const generalFaqs = [
  {
    question: "What is B1G IPTV?",
    answer: "B1G IPTV is a premium streaming service that provides access to over 28,000 live TV channels, 100,000+ movies, and 20,000+ series globally in stunning 4K and HD quality."
  },
  {
    question: "Do I need a satellite dish?",
    answer: "No, you don't need any satellite equipment. All you need is a stable internet connection and a compatible device (Smart TV, Firestick, PC, Smartphone) to start streaming immediately."
  },
  {
    question: "Is there a minimum internet speed required?",
    answer: "For smooth streaming without buffering, we recommend a minimum internet speed of 15 Mbps for standard HD and at least 30 Mbps for 4K UHD streaming."
  }
];

const subscriptionFaqs = [
  {
    question: "How long does it take to get my account details after paying?",
    answer: "You will receive your account details instantly via email right after the payment is completed. Our automated system ensures zero waiting time."
  },
  {
    question: "Can I use my subscription on multiple devices?",
    answer: "Our standard plans allow 1 connection at a time. If you want to use the service on multiple devices simultaneously, please choose one of our Premium packages which support multiple connections."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards, PayPal, and various cryptocurrencies to ensure a secure, private, and hassle-free transaction."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee if you are not completely satisfied with our service. However, we strongly recommend trying our 24-hour free trial before making a long-term purchase."
  }
];

const technicalFaqs = [
  {
    question: "Do I need a VPN to use your service?",
    answer: "No, a VPN is not strictly required. However, if your ISP blocks IPTV services during live sporting events (which is common in the UK/US), we highly recommend using a VPN. Our service is fully VPN-friendly."
  },
  {
    question: "Why is my stream buffering?",
    answer: "Buffering is usually caused by internet connectivity issues. Try restarting your router and device, ensuring your speed is above 15 Mbps, or using an Ethernet cable instead of Wi-Fi for maximum stability."
  },
  {
    question: "Which apps do you support?",
    answer: "We support a wide range of IPTV apps including Tivimate, IPTV Smarters Pro, XCIPTV, IBO Player, and many more. We provide full setup instructions for all major apps in our Installation Guide."
  }
];

const Faqs = () => {
  const [openSection, setOpenSection] = useState('general');
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const currentFaqs = openSection === 'general' ? generalFaqs 
                    : openSection === 'subscription' ? subscriptionFaqs 
                    : technicalFaqs;

  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen">
      {/* Page Header */}
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1d] to-[#111111] border-b border-white/5">
        <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
          Help Center
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked <span className="text-[#c8102e]">Questions</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Find answers to the most common questions about our service, subscriptions, and technical setup. Can't find what you're looking for? Contact our 24/7 support team.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => { setOpenSection('general'); setOpenIndex(-1); }}
            className={`py-2.5 px-6 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              openSection === 'general' 
                ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            GENERAL
          </button>
          <button
            onClick={() => { setOpenSection('subscription'); setOpenIndex(-1); }}
            className={`py-2.5 px-6 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              openSection === 'subscription' 
                ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            SUBSCRIPTION & BILLING
          </button>
          <button
            onClick={() => { setOpenSection('technical'); setOpenIndex(-1); }}
            className={`py-2.5 px-6 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 ${
              openSection === 'technical' 
                ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            TECHNICAL SUPPORT
          </button>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {currentFaqs.map((faq, index) => (
            <FaqAccordion 
              key={`${openSection}-${index}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Faqs;
