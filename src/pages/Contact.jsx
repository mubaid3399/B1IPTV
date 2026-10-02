import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! Our support team will get back to you shortly.");
  };

  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen">
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1d] to-[#111111] border-b border-white/5">
        <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
          24/7 Customer Support
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-[#c8102e]">Touch</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Have a question about our service, facing technical issues, or want to become a reseller? Send us a message and we'll respond within minutes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
          <p className="text-gray-400 text-sm mb-6">We are online 24/7. Choose your preferred method of contact below.</p>
          
          <div className="flex items-start gap-4 p-5 bg-[#111111] rounded-xl border border-white/5 transition-transform hover:-translate-y-1">
            <Mail className="w-6 h-6 text-[#c8102e] shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-1">Email Support</h4>
              <p className="text-gray-400 text-sm">support@b1giptv.com</p>
              <p className="text-gray-500 text-xs mt-1">Average response time: 1 hour</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-[#111111] rounded-xl border border-white/5 transition-transform hover:-translate-y-1">
            <MessageSquare className="w-6 h-6 text-[#c8102e] shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-1">WhatsApp Live Chat</h4>
              <p className="text-gray-400 text-sm">+44 7000 000000</p>
              <p className="text-gray-500 text-xs mt-1">Instant replies during business hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-[#111111] rounded-xl border border-white/5 transition-transform hover:-translate-y-1">
            <Clock className="w-6 h-6 text-[#c8102e] shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-1">Working Hours</h4>
              <p className="text-gray-400 text-sm">Monday - Sunday</p>
              <p className="text-gray-500 text-xs mt-1">24 Hours / 7 Days a week</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 bg-[#111111] rounded-xl border border-white/5 p-6 md:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8102e] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
          
          <h3 className="text-xl font-bold text-white mb-6 relative z-10">Send us a Message</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Your Name</label>
                <input 
                  type="text" required placeholder="John Doe"
                  className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" required placeholder="john@example.com"
                  className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Subject</label>
              <input 
                type="text" required placeholder="How can we help?"
                className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors"
                onChange={e => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-400 text-[10px] sm:text-xs font-semibold mb-2 uppercase tracking-widest">Message</label>
              <textarea 
                required rows="5" placeholder="Type your message here..."
                className="w-full bg-[#181818] border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c8102e] transition-colors resize-none"
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full sm:w-auto bg-[#c8102e] text-white px-8 py-3.5 rounded-md font-bold text-sm tracking-widest hover:bg-[#a00c24] transition-colors mt-2 shadow-lg shadow-[#c8102e]/20 uppercase flex items-center justify-center gap-2 self-start"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
