import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Tv,
  Smartphone,
  MonitorPlay,
  Laptop,
  Cpu,
  ChevronDown,
  ArrowRight,
  Gift,
  Clock,
  CheckCircle2,
  Shield,
  Globe,
  Zap,
  Wifi,
  Headphones,
} from 'lucide-react';

const SeoArticle = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      q: 'What exactly is B1G IPTV and how does it work?',
      a: 'B1G IPTV delivers live television channels, movies, and series over the internet instead of traditional cable or satellite. After subscribing, you receive login credentials that you enter into a compatible player app on your device. The app connects to our servers, loads your channel list, and you can start watching right away — no dish, no cable box, no long-term contracts.',
    },
    {
      q: 'Is B1G player available on every device?',
      a: 'B1G player runs natively on Android-based devices like Firestick, Android TV, and Nvidia Shield. For Samsung and LG Smart TVs, you use third-party apps such as IBO Player or IPTV Smarters and enter your B1G IPTV credentials. On Apple devices, apps like IPTVX or Smarters Player Lite work with the same login. Windows and Mac users can use IPTV Smarters Pro or VLC.',
    },
    {
      q: 'How long does the free trial last and what can I test?',
      a: 'The free trial gives you 24 hours of full access — every live channel, every movie, the complete series library, and the electronic programme guide. That is enough time to test picture quality on your actual TV, check channel switching speed, verify your internet connection handles 4K content, and explore categories that matter to your household.',
    },
    {
      q: 'What internet speed do I need for 4K streaming?',
      a: 'For standard HD channels, 10 Mbps is plenty. Full HD (1080p) works smoothly on 15 Mbps. For 4K Ultra HD content, we recommend at least 25 Mbps. If other people in your house are also using the internet, add extra bandwidth. A wired Ethernet connection always gives better stability than Wi-Fi for live sports and events.',
    },
    {
      q: 'Can I watch on more than one screen at the same time?',
      a: 'The number of simultaneous connections depends on the plan you choose. You can configure B1G player or any compatible app on multiple devices using the same credentials. When you need more screens — for example, a family of four — we offer multi-connection plans at discounted rates.',
    },
    {
      q: 'What happens after the free trial ends?',
      a: 'After the 24-hour trial, your account simply expires. There is no automatic billing, no card required, and no surprise charges. If you are satisfied with the quality, you can choose a paid plan starting from $15 per month. If not, you walk away with zero obligation.',
    },
  ];

  return (
    <article className="w-full bg-gradient-to-b from-[#060a14] via-[#080d1d] to-[#060a14] py-20 md:py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* Article badge + heading */}
        <header className="mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white leading-tight tracking-tight mb-5">
            How to Set Up B1G IPTV on Any Device, Get a Free Trial, and Start Streaming in 4K
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl">
            Everything you need to know about B1G IPTV — from requesting a 24-hour free trial to installing B1G player on Firestick, Smart TVs, Apple devices, and computers. One straightforward guide, no jargon.
          </p>
        </header>

        {/* Section 1: What is B1G IPTV */}
        <section className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#c8102e] shrink-0" />
            What Is B1G IPTV?
          </h3>
          <div className="text-gray-300 text-sm sm:text-[15px] leading-[1.85] space-y-4">
            <p>
              B1G IPTV is a premium internet-based television service that gives you access to over 28,000 live channels, 100,000 on-demand movies, and 20,000 series — all streamed directly to your existing devices through a player app. Instead of paying for an expensive cable package filled with channels you never watch, you pick a plan that fits your budget and stream the content you actually care about.
            </p>
            <p>
              The service covers sports, entertainment, news, kids' programming, documentaries, and international channels from over 120 countries. Whether you want Premier League football on a Saturday afternoon, the latest Hollywood releases on a lazy Sunday, or regional news from the other side of the world, it's all available in one place.
            </p>
            <p>
              Picture quality ranges from standard HD to Full HD and 4K Ultra HD, depending on the source channel and your device's hardware. Most major live sports and premium movie channels broadcast in Full HD or higher.
            </p>
          </div>
        </section>

        {/* Section 2: B1G Player */}
        <section className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
            <MonitorPlay className="w-5 h-5 text-[#c8102e] shrink-0" />
            What Is B1G Player and Why Does It Matter?
          </h3>
          <div className="text-gray-300 text-sm sm:text-[15px] leading-[1.85] space-y-4">
            <p>
              B1G player is the dedicated streaming application designed specifically for B1G IPTV subscribers. Think of it as the remote control and TV guide rolled into one app. Once installed, it organizes your channels into clear categories, provides an electronic programme guide (EPG) so you can see what's on right now and what's coming up next, and lets you save favourites for quick access.
            </p>
            <p>
              What makes it different from generic IPTV apps? It's built to work with our server infrastructure, which means faster channel switching, smoother 4K playback, and automatic playlist updates whenever new channels or movies are added. You don't need to manually refresh anything — the content stays current on its own.
            </p>
            <p>
              B1G player is available on Android-based devices including Amazon Firestick, Android TV boxes, Nvidia Shield, and Android phones. For platforms where it isn't directly available — like Samsung and LG Smart TVs, Apple TV, iPhones, and computers — you can use established third-party players such as IBO Player, IPTV Smarters Pro, TiviMate, or IPTVX and simply enter your B1G IPTV login credentials.
            </p>
          </div>
        </section>

        {/* Section 3: Free Trial */}
        <section className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
            <Gift className="w-5 h-5 text-[#c8102e] shrink-0" />
            How to Get the 24-Hour Free Trial
          </h3>
          <div className="text-gray-300 text-sm sm:text-[15px] leading-[1.85] space-y-4">
            <p>
              Before committing to a paid subscription, every new user can request a free trial that lasts a full 24 hours. This isn't a limited demo — you get complete access to the entire channel library, every movie and series, and all streaming quality levels including 4K.
            </p>
            <p>
              Here's how to get started in three steps:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 mb-6">
            {[
              { step: '1', title: 'Request', desc: 'Visit the free trial page and submit your name, email, and the device you plan to use.' },
              { step: '2', title: 'Receive', desc: "Within minutes, you'll get your login credentials (username, password, and server URL) via email or WhatsApp." },
              { step: '3', title: 'Stream', desc: 'Install B1G player or a compatible app, enter your credentials, and start watching immediately.' },
            ].map((item) => (
              <div key={item.step} className="bg-[#0b101e] border border-white/8 rounded-xl p-5 text-center hover:border-white/15 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#c8102e] to-[#e01e26] text-white flex items-center justify-center font-bold text-sm mx-auto mb-3 shadow-md shadow-[#c8102e]/30">
                  {item.step}
                </div>
                <h4 className="text-white font-bold text-sm mb-1.5">{item.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-gray-300 text-sm sm:text-[15px] leading-[1.85] space-y-4">
            <p>
              The purpose of the trial is to test everything on your real setup — your actual TV, your home Wi-Fi, your preferred channels. If the picture quality, channel variety, and streaming stability meet your expectations, you can then pick a paid plan. If they don't, you simply let the trial expire. No credit card is required and there are no automatic charges.
            </p>
          </div>

          <div className="mt-6">
            <Link
              to="/free-trial"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-[0_4px_15px_rgba(224,30,38,0.35)] hover:from-[#EE2830] hover:to-[#E01E26] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(224,30,38,0.5)] transition-all duration-300"
            >
              <Gift className="w-4 h-4" />
              Request Your 24-Hour Free Trial
            </Link>
          </div>
        </section>

        {/* Section 4: Device Setup */}
        <section className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
            <Tv className="w-5 h-5 text-[#c8102e] shrink-0" />
            Quick Installation Overview for Every Device
          </h3>
          <div className="text-gray-300 text-sm sm:text-[15px] leading-[1.85] space-y-4 mb-8">
            <p>
              Setting up B1G IPTV takes between two and six minutes depending on your device. Here's what the process looks like on each platform. For detailed step-by-step walkthroughs with screenshots and device-specific FAQs, visit the full <Link to="/installation-guide" className="text-[#c8102e] hover:underline font-medium">installation guide</Link>.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <MonitorPlay className="w-5 h-5" />,
                device: 'Amazon Firestick & Fire TV',
                time: '3–5 min',
                summary: "Install the Downloader app from the Amazon Appstore, enable developer options to allow third-party installs, then download B1G player using the code from your activation email. Open the app, enter your Xtream Codes credentials, and your channels load within a minute.",
              },
              {
                icon: <Tv className="w-5 h-5" />,
                device: 'Samsung & LG Smart TVs',
                time: '4–6 min',
                summary: "Open your TV's app store (Samsung Smart Hub or LG Content Store) and download IBO Player, IPTV Smarters, or Nanomid. The app shows your TV's MAC address on the welcome screen. Visit the app's web portal on your phone, enter your MAC address and B1G IPTV credentials, save, and reload the TV app.",
              },
              {
                icon: <Smartphone className="w-5 h-5" />,
                device: 'Android TV & Google TV',
                time: '2–4 min',
                summary: "Search for B1G player or TiviMate in the Google Play Store and install it. Open the app, choose Xtream Codes API login, fill in your credentials, and set the video decoder to hardware mode for smooth 4K playback. That's it.",
              },
              {
                icon: <Laptop className="w-5 h-5" />,
                device: 'Apple TV, iPhone & iPad',
                time: '3–5 min',
                summary: "Download IPTVX, Smarters Player Lite, or GSE Smart IPTV from the Apple App Store. Open the app, select Xtream Codes API, enter your B1G IPTV credentials, and enable hardware decoding in settings for the best video performance.",
              },
              {
                icon: <Laptop className="w-5 h-5" />,
                device: 'Windows PC & Mac',
                time: '2–3 min',
                summary: 'Download IPTV Smarters Pro for desktop or open VLC Media Player. In Smarters, add a new user with your Xtream Codes details. In VLC, paste your M3U playlist URL under "Open Network Stream." Both options give you access to the full channel list.',
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                device: 'MAG & Formuler Boxes',
                time: '3–5 min',
                summary: "Find your box's MAC address on the bottom sticker, share it with our support team, then navigate to System Settings → Portals and enter the B1G IPTV portal URL. Save, reboot, and the interactive channel portal loads automatically.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b101e] border border-white/8 rounded-xl p-5 flex gap-4 hover:border-white/15 transition-colors group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-[#c8102e] shrink-0 h-fit group-hover:bg-[#c8102e]/15 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h4 className="text-white font-bold text-sm sm:text-base">{item.device}</h4>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#c8102e]/10 text-[#c8102e] border border-[#c8102e]/20">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/installation-guide"
              className="inline-flex items-center gap-2 text-sm text-[#c8102e] font-semibold hover:underline"
            >
              View full step-by-step guides with FAQs for each device
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Section 5: What you get */}
        <section className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-[#c8102e] shrink-0" />
            What's Included with Every Subscription
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { icon: <Tv className="w-4 h-4" />, title: '28,000+ Live Channels', desc: 'Sports, entertainment, news, kids, documentaries, and international content from 120+ countries.' },
              { icon: <MonitorPlay className="w-4 h-4" />, title: '100,000+ Movies & 20,000+ Series', desc: 'Hollywood blockbusters, independent films, complete TV show box sets, and new releases updated regularly.' },
              { icon: <Shield className="w-4 h-4" />, title: '4K Ultra HD Quality', desc: 'Crystal-clear picture quality on supported channels and devices. Full HD available across most of the catalogue.' },
              { icon: <Clock className="w-4 h-4" />, title: 'EPG & 7-Day Catch-Up', desc: "An on-screen programme guide shows what's live and coming next. Missed something? Replay it for up to seven days." },
              { icon: <Wifi className="w-4 h-4" />, title: 'Anti-Freeze Technology', desc: 'Server infrastructure optimised for stable streams, even during high-traffic events like World Cup matches.' },
              { icon: <Headphones className="w-4 h-4" />, title: '24/7 Customer Support', desc: 'Real human support via WhatsApp and email. Setup help, troubleshooting, and account management any time of day.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0b101e] border border-white/8 rounded-xl p-5 flex gap-3.5 hover:border-white/15 transition-colors">
                <div className="p-2 rounded-lg bg-[#c8102e]/10 text-[#c8102e] shrink-0 h-fit">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Tips */}
        <section className="mb-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#c8102e] shrink-0" />
            Tips to Get the Best Streaming Experience
          </h3>
          <div className="text-gray-300 text-sm sm:text-[15px] leading-[1.85] space-y-4">
            <p>
              A few small adjustments can make a noticeable difference in picture quality and stability:
            </p>
            <ul className="space-y-3 pl-1">
              {[
                "Use your router's 5 GHz Wi-Fi band instead of 2.4 GHz. It's faster and has less interference from other household devices.",
                "If possible, connect your streaming device to the router with an Ethernet cable. Wired connections eliminate buffering during live sports almost entirely.",
                "Set the video decoder to 'Hardware' in your player settings. This lets your device's GPU handle video processing, which results in smoother playback and lower temperatures.",
                "Keep at least 1 GB of free storage on your Firestick or Android box. Low storage causes stuttering because the device can't cache video data properly.",
                "Clear the app cache periodically. On Firestick, go to Settings → Applications → Manage Installed Applications → B1G Player → Clear Cache.",
                "Make sure your TV firmware and player app are both updated to the latest version. Outdated software can cause compatibility issues with newer stream codecs.",
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c8102e] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#c8102e] shrink-0" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="border border-white/8 rounded-xl overflow-hidden bg-[#0b101e] transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-[15px] font-semibold text-white hover:text-[#c8102e] transition-colors cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c8102e]' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 bg-[#090e1a]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1424] to-[#0a0f1e] border border-white/10 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
            Ready to Try It Yourself?
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            Request a free 24-hour trial, pick your device, and see the full channel lineup on your own screen. No payment details required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/free-trial"
              className="flex items-center gap-2 bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-[0_4px_15px_rgba(224,30,38,0.35)] hover:from-[#EE2830] hover:to-[#E01E26] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(224,30,38,0.5)] transition-all duration-300"
            >
              <Gift className="w-4 h-4" />
              Start Free Trial
            </Link>
            <Link
              to="/installation-guide"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 text-gray-300 hover:text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10"
            >
              View Setup Guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SeoArticle;
