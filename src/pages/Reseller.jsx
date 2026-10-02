import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CreditCard, LayoutDashboard, BadgeDollarSign, Rocket, ShieldCheck } from 'lucide-react';
import { assets } from '../assets/asset.js';

const resellerPackages = [
  { credits: 50, price: 150, popular: false },
  { credits: 100, price: 250, popular: true },
  { credits: 250, price: 500, popular: false },
  { credits: 500, price: 850, popular: false }
];

const Reseller = () => {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
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

    </div>
  );
};

export default Reseller;
