import React, { useState } from 'react';
import { Tv, Smartphone, MonitorPlay, Terminal, Settings } from 'lucide-react';

const devices = [
  {
    id: 'firestick',
    icon: <MonitorPlay className="w-5 h-5" />,
    name: 'Amazon Firestick',
    instructions: [
      "Go to Settings > My Fire TV > Developer Options.",
      "Turn ON 'Apps from Unknown Sources'.",
      "Go back to the Home screen and open the 'Downloader' app (install it from the Amazon store if you don't have it).",
      "In the Downloader URL box, enter: 54321 (or the direct APK link we provided in your email) and click Go.",
      "Wait for the download to finish and click 'Install'.",
      "Open the app, enter your Xtream Codes API details (Username, Password, and Server URL) sent to your email."
    ]
  },
  {
    id: 'smart-tv',
    icon: <Tv className="w-5 h-5" />,
    name: 'Smart TV (Samsung/LG)',
    instructions: [
      "Go to your TV's App Store (LG Content Store or Samsung App Store).",
      "Search for 'IBO Player', 'IPTV Smarters Pro', or 'DuplexPlay'.",
      "Install the app and open it.",
      "Take note of the 'Device MAC Address' and 'Device Key' shown on the screen.",
      "Go to the app's official website on your phone or PC and upload the m3u link we provided you to your MAC Address.",
      "Restart the app on your TV to load all channels."
    ]
  },
  {
    id: 'android',
    icon: <Smartphone className="w-5 h-5" />,
    name: 'Android TV & Mobile',
    instructions: [
      "Open the Google Play Store on your device.",
      "Search for 'Tivimate IPTV Player' or 'IPTV Smarters Pro'.",
      "Install and open the application.",
      "Select 'Add Playlist' or 'Login with Xtream Codes API'.",
      "Enter the Portal URL, Username, and Password from your welcome email.",
      "Click 'Add User' and wait a few seconds for the channels and VODs to load."
    ]
  },
  {
    id: 'pc',
    icon: <Terminal className="w-5 h-5" />,
    name: 'Windows PC / Mac',
    instructions: [
      "Download 'IPTV Smarters Pro' for Windows or Mac from their official website, or download VLC Media Player.",
      "If using IPTV Smarters: Open the app, select 'Login with Xtream Codes', and enter your credentials.",
      "If using VLC: Open VLC, click on 'Media' > 'Open Network Stream'.",
      "Paste the full M3U URL link we provided in your email and click 'Play'.",
      "Press 'CTRL + L' in VLC to view the full channel playlist."
    ]
  }
];

const InstallationGuide = () => {
  const [activeTab, setActiveTab] = useState(devices[0].id);

  return (
    <div className="w-full pt-20 bg-[#080d1d] min-h-screen">
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1d] to-[#111111] border-b border-white/5">
        <span className="text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-3 block">
          Setup Tutorials
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Installation <span className="text-[#c8102e]">Guide</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Follow our simple, step-by-step guides to set up our IPTV service on your favorite device in less than 5 minutes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Tabs */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          {devices.map(device => (
            <button
              key={device.id}
              onClick={() => setActiveTab(device.id)}
              className={`flex items-center gap-3 px-5 py-4 rounded-lg text-sm font-semibold transition-all duration-300 text-left ${
                activeTab === device.id 
                  ? 'bg-[#c8102e] text-white shadow-lg shadow-[#c8102e]/20' 
                  : 'bg-[#181818] text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {device.icon}
              {device.name}
            </button>
          ))}
          
          <div className="mt-8 p-6 bg-[#181818] border border-white/5 rounded-lg text-center">
            <Settings className="w-8 h-8 text-[#c8102e] mx-auto mb-3" />
            <h4 className="text-white font-bold mb-2">Need Help?</h4>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">Our support team can guide you through the setup process live.</p>
            <a href="/contact" className="text-[#c8102e] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors">Contact Support &rarr;</a>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 bg-[#111111] border border-white/5 rounded-xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          {devices.map(device => (
            activeTab === device.id && (
              <div key={device.id} className="relative z-10 transition-opacity duration-300">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="p-3 bg-[#c8102e]/10 rounded-lg text-[#c8102e]">
                    {device.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">How to set up on {device.name}</h2>
                    <p className="text-gray-400 text-sm mt-1">Estimated setup time: 3-5 minutes</p>
                  </div>
                </div>

                <ol className="flex flex-col gap-6 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-white/5"></div>
                  
                  {device.instructions.map((step, index) => (
                    <li key={index} className="flex gap-6 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[#c8102e] text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-[#c8102e]/30 text-sm">
                        {index + 1}
                      </div>
                      <div className="pt-1.5">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default InstallationGuide;
