import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  X, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Tv,
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import PricingSection from '../components/PricingSection';

const comparisonData = [
  {
    feature: "Monthly Cost (Equivalent)",
    b1g: "From $5.00 / mo",
    cable: "$120 - $160 / mo",
    ott: "$79.99 / mo",
    otherIptv: "$15 - $20 / mo",
    b1gHighlight: true
  },
  {
    feature: "Annual Cost",
    b1g: "$60 / year",
    cable: "$1,440+ / year",
    ott: "$960 / year",
    otherIptv: "$180 / year",
    b1gHighlight: true
  },
  {
    feature: "Live TV Channels",
    b1g: "28,000+ Worldwide",
    cable: "150 - 250 Channels",
    ott: "85 - 120 Channels",
    otherIptv: "8,000 - 10,000",
    b1gHighlight: true
  },
  {
    feature: "Movies & Series (VOD)",
    b1g: "100,000+ Free Included",
    cable: "Expensive Pay-Per-View",
    ott: "Limited Catalog",
    otherIptv: "Unstable Library",
    b1gHighlight: true
  },
  {
    feature: "4K UHD & 60fps Sports",
    b1g: "Included Free",
    cable: "Requires 4K Box Fee",
    ott: "+$10/mo 4K Add-on",
    otherIptv: "Frequent Buffering",
    b1gHighlight: true
  },
  {
    feature: "Hardware & Box Rental Fees",
    b1g: "$0 (Use Any Device)",
    cable: "$15 / mo per room",
    ott: "$0",
    otherIptv: "$0",
    b1gHighlight: true
  },
  {
    feature: "Contract Required",
    b1g: "No Contracts (Cancel Anytime)",
    cable: "12 - 24 Month Lock-in",
    ott: "No Contract",
    otherIptv: "No Contract",
    b1gHighlight: true
  },
  {
    feature: "Free 24-Hour Test Trial",
    b1g: "Yes (No Card Needed)",
    cable: "No Trial",
    ott: "Requires Credit Card",
    otherIptv: "Rarely Offered",
    b1gHighlight: true
  },
  {
    feature: "Anti-Freeze & 99.9% Uptime",
    b1g: "Yes (Load-Balanced)",
    cable: "Yes",
    ott: "Yes",
    otherIptv: "Freezes on Big Events",
    b1gHighlight: true
  },
  {
    feature: "Electronic TV Guide (EPG)",
    b1g: "Included with Catch-Up",
    cable: "Included",
    ott: "Included",
    otherIptv: "Often Out of Sync",
    b1gHighlight: true
  }
];

const pricingFaqs = [
  {
    question: "How does B1G IPTV pricing compare to traditional cable or satellite TV?",
    answer: "Traditional cable and satellite packages average between $120 and $160 per month once you include equipment rental, regional sports surcharges, and local broadcast taxes. B1G IPTV costs as low as $5.00 to $15.00 per month with zero hardware rentals or hidden fees, saving you over $1,300 every year while offering more than 100x the channel selection."
  },
  {
    question: "Are there any hidden activation fees, equipment charges, or contract penalties?",
    answer: "No. You only pay the exact price shown for your selected period. There are no activation fees, no device rental charges, and absolutely no long-term contracts. You are free to renew or cancel at any time with complete transparency."
  },
  {
    question: "What payment methods do you accept for subscriptions?",
    answer: "We accept all major Credit and Debit Cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, and Cryptocurrencies (Bitcoin, USDT) for customers who prefer complete anonymity."
  },
  {
    question: "How quickly is my subscription activated after completing payment?",
    answer: "Account activation is fully automated. Your login credentials (Username, Password, Server Portal URL, and M3U link) are delivered to your registered email and WhatsApp within 5 to 15 minutes of payment confirmation."
  },
  {
    question: "Can I test the service for free before choosing a paid package?",
    answer: "Yes! We offer a full 24-hour free trial with unrestricted access to all 28,000+ live channels, 100,000+ movies, and sports streams. You do not need to enter credit card details to request a trial."
  },
  {
    question: "What is the difference between Standard and Multi-Connection plans?",
    answer: "Standard plans allow streaming on 1 device at a time (though you can install it on multiple devices and switch between them). Multi-Connection packages allow you to stream on 2, 3, or 4 televisions or devices simultaneously under the same subscription."
  },
  {
    question: "Can I upgrade my plan from 1 month to a 6-month or 1-year package later?",
    answer: "Yes, you can upgrade your plan at any time. When you upgrade, your existing account credentials remain identical and your remaining days are automatically rolled into your new longer-term package."
  },
  {
    question: "Does the subscription automatically renew and charge my card?",
    answer: "We do not automatically charge your card without your explicit consent. When your subscription is nearing its end date, you will receive a reminder email with a secure renewal link so you remain in full control of your billing."
  },
  {
    question: "What is your refund policy?",
    answer: "We provide a 7-day money-back guarantee if our technical support team is unable to resolve any streaming or setup issue you experience. We strongly encourage testing our 24-hour free trial first to confirm compatibility with your home network."
  },
  {
    question: "Can I pay with cryptocurrency for total privacy?",
    answer: "Yes, we support cryptocurrency payments including Bitcoin (BTC) and USDT (TRC20/ERC20). Crypto payments are processed securely and do not require personal banking details."
  },
  {
    question: "Do I need to buy any dedicated hardware or TV box from you?",
    answer: "No proprietary hardware is required. B1G IPTV works seamlessly on devices you already own, including Amazon Firestick, Samsung & LG Smart TVs, Android TV boxes, Apple TV 4K, iPhones, iPads, and Windows/Mac computers."
  },
  {
    question: "Will I need a VPN to use B1G IPTV, and does that cost extra?",
    answer: "A VPN is not strictly mandatory, but if your local internet service provider (ISP) throttles streaming bandwidth during live sports matches, using a VPN will keep your connection smooth. B1G IPTV is 100% compatible with all major VPNs (Surfshark, ExpressVPN, NordVPN)."
  }
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="w-full pt-20 bg-[#060a14] min-h-screen text-gray-200">
      {/* Page Header */}
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1e] via-[#090d1a] to-[#060a14] border-b border-white/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5" /> No Hidden Fees &bull; Instant Activation
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e01e26] via-[#c8102e] to-[#ff4d58]">Pricing</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Choose the plan that suits your home entertainment. All packages include full access to 28,000+ live channels, 100,000+ VOD titles, and high-bitrate 4K streaming.
        </p>
      </div>

      {/* Pricing Cards Component */}
      <PricingSection />

      {/* SEARCH-INFORMED PRICE & FEATURE COMPARISON SECTION */}
      <div className="py-20 px-4 sm:px-6 bg-[#080d19] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">
              <DollarSign className="w-3.5 h-3.5" /> Value Comparison
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              How B1G IPTV <span className="text-[#c8102e]">Compares to Others</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Compare our flat monthly pricing and features against traditional cable providers and overpriced streaming bundles:
            </p>
          </div>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-2xl bg-[#0b101e] border border-white/5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#c8102e]/15 text-[#c8102e] flex items-center justify-center font-bold text-xl shrink-0">
                85%
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Save Up to 85%</h4>
                <p className="text-xs text-gray-400">Save over $1,300+ each year compared to cable bills.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b101e] border border-white/5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#c8102e]/15 text-[#c8102e] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#c8102e]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Zero Hidden Charges</h4>
                <p className="text-xs text-gray-400">No hardware rentals, regional fees, or surprise bills.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0b101e] border border-white/5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#c8102e]/15 text-[#c8102e] flex items-center justify-center shrink-0">
                <Tv className="w-6 h-6 text-[#c8102e]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">28,000+ Live Channels</h4>
                <p className="text-xs text-gray-400">100x more channels than standard cable or OTT apps.</p>
              </div>
            </div>
          </div>

          {/* Detailed Responsive Comparison Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl bg-[#0b101e]">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#0d1424]">
                  <th className="p-4 sm:p-5 text-gray-400 font-semibold uppercase tracking-wider text-[11px] w-1/3">
                    Features & Pricing
                  </th>
                  <th className="p-4 sm:p-5 text-white font-bold bg-[#c8102e]/15 border-x border-[#c8102e]/30 text-center">
                    <span className="inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#c8102e] text-white mb-1 shadow-sm">
                      Best Value
                    </span>
                    <div className="text-sm sm:text-base font-bold text-white">B1G IPTV</div>
                  </th>
                  <th className="p-4 sm:p-5 text-gray-400 font-semibold text-center hidden md:table-cell">
                    Traditional Cable / Satellite
                  </th>
                  <th className="p-4 sm:p-5 text-gray-400 font-semibold text-center hidden sm:table-cell">
                    Live TV OTT Apps (Fubo / YouTube TV)
                  </th>
                  <th className="p-4 sm:p-5 text-gray-400 font-semibold text-center">
                    Other Generic IPTV
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-gray-300">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-5 text-center font-bold text-white bg-[#c8102e]/10 border-x border-[#c8102e]/20">
                      <span className="text-[#ff4d58]">{row.b1g}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-400 hidden md:table-cell">
                      {row.cable}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-400 hidden sm:table-cell">
                      {row.ott}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-400">
                      {row.otherIptv}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Table Guarantee Note */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-[#0b101e] border border-white/5">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c8102e] shrink-0" />
              <span className="text-xs text-gray-400">
                Backed by our <strong>7-Day Money-Back Guarantee</strong>. Test risk-free before long-term commitment.
              </span>
            </div>
            <Link
              to="/free-trial"
              className="text-xs font-bold text-white bg-[#c8102e] hover:bg-[#e01e26] px-4 py-2 rounded-lg transition-colors shrink-0 flex items-center gap-1.5 shadow-md shadow-[#c8102e]/30"
            >
              Get Free 24H Trial <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* 12 PRICING FREQUENTLY ASKED QUESTIONS */}
      <div className="py-20 px-4 sm:px-6 bg-[#060a14] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> Billing & Subscriptions
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              Frequently Asked <span className="text-[#c8102e]">Questions</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Everything you need to know about our plans, billing cycle, refunds, multi-screen access, and payment methods:
            </p>
          </div>

          {/* 2-Column Responsive FAQ Accordion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingFaqs.map((faq, index) => {
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
                      <span className="leading-snug">{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 mt-0.5 ${
                        isOpen ? 'rotate-180 text-[#c8102e]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 whitespace-pre-line bg-[#080d19]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help CTA Banner */}
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#0d1324] to-[#0a0f1d] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Have a Special Request or Custom Multi-Room Plan?</h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
                Contact our sales and billing team on WhatsApp or email for custom bulk connections or enterprise packages.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c8102e]/30 flex items-center gap-2 shrink-0"
            >
              Contact Sales Support <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
