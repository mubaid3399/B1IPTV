import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Clock,
  Mail,
  Headphones
} from 'lucide-react';

const contactFaqs = [
  {
    q: "How quickly will I receive my B1G IPTV login details after ordering?",
    a: "Your account credentials (Username, Password, and Server Portal URL / M3U link) are automatically generated and delivered to your registered email address within 5 to 15 minutes of payment confirmation. Be sure to check your spam/junk folder if it doesn't appear in your inbox."
  },
  {
    q: "Do you offer a 24-hour free trial before purchasing?",
    a: "Yes! We provide a complete 24-hour test trial with access to all 28,000+ live channels and 100,000+ on-demand movies. You can test your exact device, home network, and favorite sports channels with zero payment or credit card required."
  },
  {
    q: "What payment methods do you accept?",
    a: "We support all major secure payment gateways including Credit & Debit Cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, and Cryptocurrency (Bitcoin, USDT) for total privacy."
  },
  {
    q: "How do I set up B1G IPTV and B1G player on my device?",
    a: "Please visit our dedicated Installation Guide page. We have quick 5-minute tutorials for Amazon Firestick, Samsung & LG Smart TVs, Android TV / Google TV, Apple TV 4K, Windows PC, and MAG boxes."
  },
  {
    q: "Can I watch on multiple screens or devices at the same time?",
    a: "Standard subscriptions include 1 active connection. If you wish to stream simultaneously on multiple televisions (e.g. living room and bedroom), you can select our Multi-Connection plans or purchase additional lines at a discount."
  },
  {
    q: "Why am I experiencing buffering during live sports matches?",
    a: "Live sports buffering is almost always caused by ISP throttling or Wi-Fi interference. We recommend connecting via 5 GHz Wi-Fi or an Ethernet cable, increasing the stream buffer size to 3–5 seconds in B1G player, or activating a VPN to bypass ISP speed limiters."
  },
  {
    q: "What internet speed do I need for 4K Ultra HD streaming?",
    a: "A stable download speed of 15 Mbps is recommended for Full HD (1080p), and 25 to 30 Mbps for dedicated 4K Ultra HD live sports channels and high-bitrate movies."
  },
  {
    q: "What should I do if channels or the EPG guide show 'No Information'?",
    a: "Inside B1G player or your IPTV app, open Settings and click 'Refresh EPG' or 'Update Playlist'. Also check that your TV or streaming stick's system date, clock, and timezone are set correctly."
  },
  {
    q: "Can I use B1G IPTV while traveling abroad or on mobile data?",
    a: "Yes! B1G IPTV has no IP locks or geographic restrictions. You can stream seamlessly worldwide on hotel Wi-Fi, vacation rentals, airport hotspots, or mobile 4G/5G data."
  },
  {
    q: "Do you offer a refund policy?",
    a: "Yes, we provide a 7-day money-back guarantee if our technical support team is unable to resolve an issue you encounter. We strongly encourage testing our 24-hour free trial first to confirm compatibility."
  },
  {
    q: "How do I become a B1G IPTV reseller?",
    a: "Visit our Reseller page to purchase credit packs. You will receive an automated management panel where you can generate user accounts, manage client renewals, and create free test trials."
  },
  {
    q: "How can I contact a live human agent for urgent help?",
    a: "If you cannot find your answer here, submit the message form above with your device model and order ID. Our 24/7 technical desk will respond to you promptly via email."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); // Open first FAQ by default

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full pt-20 bg-[#060a14] min-h-screen text-gray-200">
      {/* Page Hero Header */}
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1e] via-[#090d1a] to-[#060a14] border-b border-white/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5" /> 24/7 Support Desk
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e01e26] via-[#c8102e] to-[#ff4d58]">Touch</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Have an account question, technical issue, or trial inquiry? Send us a message and our technical team will assist you within minutes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* SECTION 1 (TOP): Modern Contact Form */}
        <div className="max-w-3xl mx-auto bg-[#0b101e] rounded-3xl border border-white/10 p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#c8102e]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-[#c8102e]/10 text-[#c8102e] mb-3">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
              Our 24/7 technical team replies promptly. Fill out your details below:
            </p>
          </div>

          {submitted ? (
            <div className="py-12 px-6 text-center bg-[#070b16] rounded-2xl border border-[#c8102e]/30 relative z-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c8102e]/20 text-[#c8102e] flex items-center justify-center mx-auto shadow-lg shadow-[#c8102e]/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Received!</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Thank you for reaching out. A support specialist has received your inquiry and will reply to <strong className="text-white">{formData.email}</strong> within 15–30 minutes.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="text-xs text-[#c8102e] hover:text-white font-semibold underline underline-offset-4 transition-colors pt-2 block mx-auto cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-[11px] font-bold mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    className="w-full bg-[#070c17] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] transition-all"
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-[11px] font-bold mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="your-email@example.com"
                    value={formData.email}
                    className="w-full bg-[#070c17] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] transition-all"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-[11px] font-bold mb-1.5 uppercase tracking-wider">
                  Subject or Device Model
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Firestick Setup Help, Trial Request, or Billing"
                  value={formData.subject}
                  className="w-full bg-[#070c17] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] transition-all"
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-400 text-[11px] font-bold mb-1.5 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="Type your message, questions, or device specifications here..."
                  value={formData.message}
                  className="w-full bg-[#070c17] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] transition-all resize-none"
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-98 transition-all shadow-md shadow-[#c8102e]/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c8102e]" />
                <span>Encrypted & Privacy Protected &bull; Average response within 15–30 min</span>
              </div>
            </form>
          )}
        </div>

        {/* SECTION 2 (DOWN BELOW): 12 Frequently Asked Questions */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> Instant Answers
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Frequently Asked <span className="text-[#c8102e]">Questions</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Find immediate answers to the 12 most common questions about B1G IPTV subscriptions, player setup, streaming quality, and account management:
            </p>
          </div>

          {/* 2-Column Responsive FAQ Accordion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {contactFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-white/5 rounded-2xl overflow-hidden bg-[#0b101e] transition-all duration-200 self-start"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-white hover:text-[#c8102e] transition-colors cursor-pointer gap-3.5"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-2.5">
                      <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded shrink-0 mt-0.5 ${
                        isOpen ? 'bg-[#c8102e] text-white' : 'bg-white/5 text-gray-400'
                      }`}>
                        Q{index + 1}
                      </span>
                      <span className="leading-snug">{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 mt-0.5 ${
                        isOpen ? 'rotate-180 text-[#c8102e]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 whitespace-pre-line bg-[#080d19]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
