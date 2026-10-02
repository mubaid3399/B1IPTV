import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CreditCard, 
  LayoutDashboard, 
  BadgeDollarSign, 
  Rocket, 
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { assets } from '../assets/asset.js';

const resellerPackages = [
  { credits: 50, price: 150, popular: false },
  { credits: 100, price: 250, popular: true },
  { credits: 250, price: 500, popular: false },
  { credits: 500, price: 850, popular: false }
];

const resellerFaqs = [
  {
    q: "What is an IPTV Reseller Panel and how does it work?",
    a: "An IPTV Reseller Panel is a private, web-based management dashboard that allows you to create, manage, and renew customer subscriptions. You buy wholesale credits from us at discounted bulk rates, and then generate client accounts (Xtream Codes API, M3U playlists, or MAG MAC activations) at your own retail prices, keeping 100% of the profits."
  },
  {
    q: "How does the credit system work? Do my credits ever expire?",
    a: "1 Credit equals 1 Month of service (e.g. 1 credit = 1 month, 3 credits = 3 months, 12 credits = 1 year). The best part is that credits NEVER expire. Whether you sell your credits in 2 weeks or over the course of a year, your balance remains safe in your dashboard until you choose to use it."
  },
  {
    q: "Can I issue free test trials to my potential customers?",
    a: "Yes! Your reseller panel includes the ability to generate unlimited 24-hour test trials at 0 credit deduction. This allows your prospective clients to test channels, 4K video clarity, and player compatibility on their own devices before committing to a purchase."
  },
  {
    q: "How much profit can I make as a B1G IPTV reseller?",
    a: "With our credit packs, your cost per month of service is as low as $1.70 to $3.00. Most resellers sell 1-month subscriptions for $10 to $15+, and 1-year subscriptions for $60 to $90+. This generates consistent profit margins between 200% and 500%+, with high customer renewal rates every month."
  },
  {
    q: "Can I customize the DNS or Portal URL for my brand?",
    a: "Yes! Our server infrastructure supports custom DNS routing and subdomains so your clients connect through your branded server URLs without seeing any upstream provider identity. This helps you build your own independent streaming brand."
  },
  {
    q: "Can I create both M3U playlists and MAG / Formuler activations?",
    a: "Absolutely. The reseller panel provides flexible activation tools: you can generate Xtream Codes API logins (Username & Password) for Firestick/Android/Apple apps, export M3U Plus playlist URLs, or directly bind 00:1A:79 MAC addresses for MAG boxes, Formuler (MyTVOnline), and Enigma2 devices."
  },
  {
    q: "What happens when a customer's subscription is about to expire?",
    a: "Your reseller panel features an automated notification system that alerts you when customer lines are nearing expiration. You can renew a customer's account with one click using your credit balance, keeping their existing credentials, channel bouquets, and favorites intact."
  },
  {
    q: "Can I create multi-connection (multi-room) accounts for families?",
    a: "Yes. In your panel, you can set the simultaneous connection limit to 1, 2, 3, or 4 active screens. Multi-connection lines deduct credits according to the connection count, giving your clients flexibility to stream in multiple rooms at once."
  },
  {
    q: "Do I have the ability to pause, ban, or disable non-paying clients?",
    a: "Yes. You have complete administrative control over all client lines you create. If a client fails to pay or requests a pause, you can instantly disable, kick, or ban their connection directly from the dashboard."
  },
  {
    q: "How quickly is my reseller panel activated after purchasing credits?",
    a: "Your reseller dashboard URL, administrator login credentials, and pre-loaded credit balance are prepared and delivered within 15 to 30 minutes of payment confirmation."
  },
  {
    q: "Do you provide dedicated technical support for resellers?",
    a: "Yes! As a B1G IPTV reseller, you gain access to our VIP Priority Support desk on WhatsApp and Telegram. Our engineering team assists with server status updates, custom bouquet management, and troubleshooting tips for your clients 24 hours a day."
  },
  {
    q: "What payment methods are accepted for buying credit packages?",
    a: "We accept all major Credit and Debit Cards (Visa, MasterCard, Amex), PayPal, Bank Wire Transfers, and Cryptocurrency (Bitcoin, USDT TRC20/ERC20) for instant, secure transactions."
  }
];

const Reseller = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen">
      
      {/* Hero Section */}
      <div 
        className="relative w-full text-center py-24 px-6 bg-cover bg-center border-b border-white/10"
        style={{ backgroundImage: `url(${assets.bgImg02})` }}
      >
        <div className="absolute inset-0 bg-[#080d1d]/85 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-4 block">
            Start Your Own Business
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Become an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E01E26] to-[#B5121A]">IPTV Reseller</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Take control of your financial freedom. Get access to our powerful reseller panel, create your own customers, set your own prices, and keep 100% of the profits. Credits never expire!
          </p>
          <a 
            href="#pricing"
            className="bg-[#c8102e] text-white px-8 py-3.5 rounded-md font-bold text-sm tracking-widest hover:bg-[#a00c24] transition-all duration-300 shadow-lg shadow-[#c8102e]/30 hover:-translate-y-1 uppercase"
          >
            View Reseller Packages
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
          <p className="text-gray-400">Everything you need to launch and scale a successful IPTV business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="w-12 h-12 bg-[#c8102e]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <LayoutDashboard className="text-[#c8102e] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Powerful Dashboard</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full control over your customers. Create lines, manage MAG devices, kick users, and monitor active connections all from one simple web panel.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="w-12 h-12 bg-[#c8102e]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <Users className="text-[#c8102e] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Unlimited Free Trials</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Generate an unlimited amount of 24-hour test lines to give out to your potential clients to help you close sales faster.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="w-12 h-12 bg-[#c8102e]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <CreditCard className="text-[#c8102e] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Credits Never Expire</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The credits you purchase are yours forever. There is no time limit to sell them. Sell at your own pace without pressure.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="w-12 h-12 bg-[#c8102e]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <BadgeDollarSign className="text-[#c8102e] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Set Your Own Prices</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              You are the boss. You decide how much to charge your clients. Keep 100% of the profits from every sale you make.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="w-12 h-12 bg-[#c8102e]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <Rocket className="text-[#c8102e] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Activation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your reseller panel is set up and delivered instantly upon payment. Start creating accounts and making money immediately.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
            <div className="w-12 h-12 bg-[#c8102e]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c8102e]/20 transition-colors">
              <ShieldCheck className="text-[#c8102e] w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Anti-Freeze Technology</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Provide your customers with the most stable streaming experience. Our load-balancing servers ensure zero buffering during major events.
            </p>
          </div>

        </div>
      </div>

      {/* Credit Pricing Section */}
      <div id="pricing" className="bg-[#111111] py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
              Buy Bulk, Save More
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Credit Packages</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              1 Credit = 1 Month Subscription. The more credits you buy upfront, the cheaper your cost per credit becomes, maximizing your profit margins!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resellerPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col p-8 rounded-xl bg-[#181818] border transition-all duration-300 hover:-translate-y-2 ${
                  pkg.popular ? 'border-[#c8102e] shadow-[0_0_30px_rgba(200,16,46,0.15)]' : 'border-white/5 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c8102e] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8 border-b border-white/10 pb-6">
                  <h3 className="text-white text-xl font-bold mb-2">{pkg.credits} Credits</h3>
                  <div className="text-4xl font-bold text-[#c8102e] mb-2">
                    ${pkg.price}
                  </div>
                  <span className="text-gray-400 text-xs font-medium">
                    Just ${(pkg.price / pkg.credits).toFixed(2)} / Credit
                  </span>
                </div>
                
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e]"></div>
                    <span>{pkg.credits} Months of Service</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e]"></div>
                    <span>Full Dashboard Access</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e]"></div>
                    <span>Unlimited Test Lines</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e]"></div>
                    <span>Priority Reseller Support</span>
                  </li>
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full text-center py-3 rounded-md text-sm font-bold transition-colors mt-auto uppercase tracking-wide ${
                    pkg.popular 
                      ? 'bg-[#c8102e] text-white hover:bg-[#a00c24] shadow-lg shadow-[#c8102e]/20' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Buy Credits
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reseller FAQs Section (12 FAQs) */}
      <div className="py-20 px-6 border-t border-white/5 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> Partner Knowledge Base
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Reseller <span className="text-[#c8102e]">Frequently Asked Questions</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Find answers to the 12 most important questions about panel management, credit economics, profit margins, and technical operations:
            </p>
          </div>

          {/* 2-Column FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-white/5 rounded-2xl overflow-hidden bg-[#111728] transition-all duration-200 self-start"
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
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 whitespace-pre-line bg-[#0c1220]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Callout Banner */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#12192e] to-[#0d1322] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="p-3.5 bg-[#c8102e]/10 rounded-2xl text-[#c8102e] shrink-0 hidden sm:block">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Have Custom Bulk or White-Label Requirements?</h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                  Contact our senior partner desk for custom credit volumes, private DNS configurations, and multi-server redundancy setups.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c8102e]/30 flex items-center gap-2 shrink-0"
            >
              Contact Partner Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Reseller;
