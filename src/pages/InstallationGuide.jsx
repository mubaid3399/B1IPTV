import React, { useState } from 'react';
import { 
  MonitorPlay, 
  Tv, 
  Smartphone, 
  Laptop, 
  Cpu, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  Headphones, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  ShieldCheck,
  Zap,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';

const deviceGuides = [
  {
    id: 'firestick',
    name: 'Amazon Firestick',
    shortName: 'Firestick',
    subtitle: 'Fire TV, 4K Max & Cube',
    icon: <MonitorPlay className="w-5 h-5" />,
    badge: 'Popular',
    time: '3-5 min',
    difficulty: 'Beginner Friendly',
    recommendedApp: 'B1G player / Downloader / TiviMate',
    steps: [
      {
        title: "Install the Downloader App",
        desc: "From your Firestick Home screen, navigate to 'Find' > 'Search', type 'Downloader', and install the official app (orange icon) from the Amazon Appstore."
      },
      {
        title: "Enable Developer Options (Apps from Unknown Sources)",
        desc: "Go to Settings > My Fire TV > Developer Options. If Developer Options is hidden (on newer Fire OS), go to Settings > My Fire TV > About and click your Fire TV Stick name 7 times rapidly until you see 'You are now a developer'. Then go back, open Developer Options, and turn ON 'Install Unknown Apps' for Downloader."
      },
      {
        title: "Download B1G Player via Downloader",
        desc: "Open the Downloader app, grant storage permissions, and enter the direct numerical code or download link provided in your B1G IPTV activation email. Press 'Go' to initiate the download."
      },
      {
        title: "Install and Launch B1G Player",
        desc: "Once the APK download reaches 100%, click 'Install'. When installation finishes, select 'Done' and delete the APK file to save Firestick storage space. Then open B1G player from your Apps list."
      },
      {
        title: "Log in with Xtream Codes API",
        desc: "Choose 'Login with Xtream Codes API'. Enter Any Name (e.g., 'B1G TV'), followed by your unique Username, Password, and Server Portal URL sent to your email or WhatsApp. Click 'Add User'."
      },
      {
        title: "Sync Channels and Enjoy 4K Streaming",
        desc: "Allow 30 to 60 seconds for B1G player to download your 28,000+ live channels, 100,000+ VOD movies, and EPG TV Guide. You are now ready to stream!"
      }
    ],
    faqs: [
      {
        q: "How do I unhide Developer Options on new Fire TV Sticks in 2026?",
        a: "Amazon hides Developer Options by default on newer Fire OS versions. To unhide it: Go to Settings > My Fire TV > About. Highlight your device name (e.g. 'Fire TV Stick 4K') and press the remote Select button 7 times continuously until a pop-up appears saying 'No need, you are already a developer'. When you press back, Developer Options will now be visible."
      },
      {
        q: "Which player is best for B1G IPTV on Amazon Firestick?",
        a: "The official B1G player is custom-tailored for our server infrastructure, offering instant channel switching and 4K HDR playback. TiviMate IPTV Player and IPTV Smarters Pro are also fully supported with our Xtream Codes API."
      },
      {
        q: "Why does Downloader say 'Status Code 403' or fail to connect?",
        a: "This happens if your internet connection is dropping packets or your ISP is blocking direct APK downloads. Ensure your Firestick is connected to a stable 5 GHz Wi-Fi band, or temporarily connect a VPN to complete the download."
      },
      {
        q: "How do I eliminate buffering or freezing on Firestick?",
        a: "1. Connect your Firestick to your router's 5 GHz Wi-Fi band or use an Amazon Ethernet adapter.\n2. Open B1G player settings and change the stream buffer size to 3 or 5 seconds.\n3. Clear background app cache under Settings > Applications > Manage Installed Applications."
      },
      {
        q: "Do I need a VPN to use B1G IPTV on Amazon Firestick?",
        a: "While B1G IPTV works directly with all major internet connections, many ISPs throttle streaming bandwidth during live sports (Premier League, NFL, Champions League). Using a VPN (like Surfshark or ExpressVPN) encrypts your data and prevents ISP throttling."
      },
      {
        q: "Can I watch 4K Ultra HD content on a standard Firestick HD?",
        a: "A standard Fire TV Stick Lite or Fire TV Stick HD will automatically downscale 4K streams to 1080p Full HD. To view native 4K 60fps streams, you need a Fire TV Stick 4K, 4K Max, or Fire TV Cube connected to a 4K television."
      },
      {
        q: "How do I refresh the Electronic Programme Guide (EPG) on Firestick?",
        a: "Inside B1G player, go to Settings > EPG Settings and select 'Refresh EPG'. Ensure your Firestick's system time and timezone in Settings > Preferences > Time Zone are set correctly, or the TV guide schedule will not align with local time."
      },
      {
        q: "How much free storage space does B1G IPTV require on Firestick?",
        a: "B1G player requires around 150 MB of free storage. We recommend maintaining at least 1 GB of free internal space on your Firestick so the device can cache video streams smoothly without stuttering."
      },
      {
        q: "Can I record live TV shows on Firestick with B1G IPTV?",
        a: "Yes. In compatible players like TiviMate or B1G player, you can record live broadcasts if you have an OTG cable and an external USB flash drive formatted to FAT32 connected to your Firestick."
      },
      {
        q: "How do I add my favorite sports and movie channels to a Favorites folder?",
        a: "When browsing any channel category in B1G player, highlight your desired channel, hold down the Select (middle) button on your Firestick remote for 2 seconds, and select 'Add to Favorites'. A star icon will appear and the channel will now show in your dedicated Favorites menu."
      }
    ]
  },
  {
    id: 'smart-tv',
    name: 'Smart TV (Samsung & LG)',
    shortName: 'Samsung / LG',
    subtitle: 'Tizen OS & webOS TVs',
    icon: <Tv className="w-5 h-5" />,
    badge: null,
    time: '4-6 min',
    difficulty: 'Easy Setup',
    recommendedApp: 'IBO Player / IPTV Smarters / Nanomid',
    steps: [
      {
        title: "Open Your TV App Store",
        desc: "Turn on your Samsung TV and open the 'Samsung Smart Hub / Apps', or turn on your LG TV and open the 'LG Content Store'."
      },
      {
        title: "Search for a Compatible IPTV Player",
        desc: "Search for 'IBO Player', 'IPTV Smarters Pro', 'Nanomid', or 'BOB Player' and download your preferred app to the TV."
      },
      {
        title: "Find Your Device MAC Address & Key",
        desc: "Launch the installed app on your TV. The welcome screen will display your TV's unique MAC Address (e.g. 00:1A:79:XX:XX:XX) and Device Key."
      },
      {
        title: "Upload Your B1G IPTV Playlist Online",
        desc: "On your phone or computer, visit the app's upload website (e.g. iboplayer.com/upload). Enter your TV's MAC Address and Device Key, then enter the M3U Playlist URL or Xtream Codes details from your welcome email."
      },
      {
        title: "Save and Reload the TV Application",
        desc: "Click 'Save' on the web portal. Go back to your Samsung or LG TV and click 'Reload' or restart the app."
      },
      {
        title: "Start Streaming",
        desc: "Your live channels, on-demand movie library, and series are now organized into intuitive categories ready for viewing with your standard TV remote."
      }
    ],
    faqs: [
      {
        q: "Can I install B1G player directly from the Samsung or LG App Store?",
        a: "Samsung Tizen and LG webOS use closed operating systems, meaning you install certified third-party player apps such as IBO Player, IPTV Smarters, or Nanomid, and connect your B1G IPTV subscription credentials inside that app."
      },
      {
        q: "What is the best IPTV app for Samsung and LG TVs?",
        a: "IBO Player is currently the highest-rated app for both Samsung and LG TVs due to its fast channel zapping, smooth 4K playback, and 7-day catch-up support. IPTV Smarters Pro is also an excellent free alternative."
      },
      {
        q: "Where do I locate my TV's MAC Address?",
        a: "Open the IPTV app you installed (e.g. IBO Player or IPTV Smarters) on your TV. Your MAC Address and Device Key are prominently shown right on the app's opening screen and inside the app's Settings menu."
      },
      {
        q: "Why do some channels show a black screen with sound on Smart TV?",
        a: "This happens when your TV's built-in media decoder does not support a specific audio or video codec (like DTS or older MPEG formats). Open your IPTV player's settings on the TV and switch the media player engine from 'Default' to 'ExoPlayer' or 'VLC Engine'."
      },
      {
        q: "Do I need a separate Firestick if I have a Samsung or LG Smart TV?",
        a: "No! B1G IPTV works directly through apps available in your TV's native app store. However, an external Firestick 4K Max or Apple TV provides slightly faster interface navigation if your TV is older than 2019."
      },
      {
        q: "Can I use a VPN directly on my Samsung or LG Smart TV?",
        a: "Samsung (Tizen) and LG (webOS) do not natively support VPN apps. If your ISP throttles your connection, you can install a VPN on your home router, share a hotspot connection from a PC, or change your TV DNS settings to Cloudflare (1.1.1.1) in Network Settings."
      },
      {
        q: "How do I update channels when new movies or channels are added?",
        a: "B1G IPTV updates the server playlist automatically. On your Smart TV app, go to Settings and click 'Reload Playlist' or 'Update Content' to fetch the latest channel additions and movie releases."
      },
      {
        q: "Why does the app close back to the Samsung/LG home screen?",
        a: "This is usually caused by low TV RAM. Disconnect your TV from the wall socket for 60 seconds (cold reboot), plug it back in, and ensure other unused background apps (Netflix, YouTube) are closed."
      },
      {
        q: "Does B1G IPTV support Dolby 5.1 Surround Sound on Smart TVs?",
        a: "Yes! High-definition movie channels, live sports, and premium VOD titles broadcast with multi-channel Dolby Digital audio. Make sure your TV's audio output is set to 'Auto' or 'Pass-Through' in TV Sound Settings."
      },
      {
        q: "Are activation fees required for Smart TV apps like IBO Player?",
        a: "Most Smart TV IPTV players offer a 7-day free trial. After that, the app developer may charge a small one-time fee (around €6-€8 lifetime). You can also use free alternatives like IPTV Smarters Pro."
      }
    ]
  },
  {
    id: 'android',
    name: 'Android TV & Google TV',
    shortName: 'Android TV',
    subtitle: 'Sony, TCL, Google TV, Shield',
    icon: <Smartphone className="w-5 h-5" />,
    badge: null,
    time: '2-4 min',
    difficulty: 'Very Easy',
    recommendedApp: 'B1G player / TiviMate / XCIPTV',
    steps: [
      {
        title: "Open Google Play Store on Your TV",
        desc: "Navigate to the Google Play Store on your Android TV, Google TV, or Nvidia Shield TV device."
      },
      {
        title: "Download B1G Player or TiviMate",
        desc: "Search for 'B1G player', 'TiviMate IPTV Player', or 'IPTV Smarters Pro' and install the application."
      },
      {
        title: "Launch the App and Select Xtream Codes",
        desc: "Open the app and select 'Add Playlist' > 'Xtream Codes API'."
      },
      {
        title: "Enter Account Credentials",
        desc: "Fill in Any Name, your B1G IPTV Username, Password, and the Portal URL provided upon subscription activation."
      },
      {
        title: "Configure Hardware Video Acceleration",
        desc: "In player settings, set Decoder to 'Hardware (HW)' to enable hardware-accelerated 4K 60fps playback."
      },
      {
        title: "Enjoy Live TV & VOD",
        desc: "Navigate channels using your standard remote. Use the channel guide, multi-screen, and catch-up features freely."
      }
    ],
    faqs: [
      {
        q: "How do I install B1G player on Android TV and Google TV?",
        a: "You can download B1G player directly from the Google Play Store on supported Android TVs. Alternatively, you can sideload our official APK using the Downloader app or a USB flash drive."
      },
      {
        q: "Is Nvidia Shield TV compatible with B1G IPTV in 4K 60fps?",
        a: "Yes! The Nvidia Shield TV and Shield TV Pro are among the best streaming devices on the market for B1G IPTV, offering AI upscaling, zero stutter, and full Dolby Vision / Atmos passthrough."
      },
      {
        q: "Can I use my B1G IPTV subscription on both Android TV and my Android phone?",
        a: "Yes! You can configure your account on multiple devices. Simultaneous streaming on multiple screens depends on the number of connections included in your subscription plan."
      },
      {
        q: "How do I resolve audio and video sync delay on Android TV?",
        a: "Open your player settings (such as B1G player or TiviMate), navigate to Playback Settings > Audio Offset, and adjust the audio synchronization by +100ms or -100ms. Switching from Software (SW) to Hardware (HW) decoding also fixes desync."
      },
      {
        q: "Which video player engine should I select (Hardware vs Software)?",
        a: "Always select Hardware (HW) or Hardware+ (HW+) first. Hardware decoding offloads video processing to your TV's GPU, resulting in smoother 4K 60fps framerates and lower device temperatures."
      },
      {
        q: "How do I set B1G player to launch automatically when turning on my Android box?",
        a: "Inside B1G player settings, navigate to General Settings and toggle ON 'Auto-start on boot'. Now, every time you power on your Android TV or box, your live TV guide will launch directly."
      },
      {
        q: "Can I record live broadcasts to external USB storage on Android TV?",
        a: "Yes! Apps like TiviMate on Android TV support live scheduled recordings. Connect an external hard drive or high-speed USB flash drive to your Android TV's USB 3.0 port and set it as the recording directory."
      },
      {
        q: "What internet speed do I need for Android TV 4K streaming?",
        a: "We recommend at least 15 Mbps for Full HD 1080p channels and 25-30 Mbps for dedicated 4K UHD live sports channels. For the lowest latency, connect your TV via an Ethernet cable."
      },
      {
        q: "How do I set up parental control PIN codes for adult categories?",
        a: "In B1G player, go to Settings > Parental Control. Create a 4-digit security PIN. You can now lock specific adult categories or international folders so they cannot be accessed without the PIN."
      },
      {
        q: "Why is my EPG guide showing 'No Information' on Android TV?",
        a: "Go to Settings > EPG and click 'Clear EPG Data', then click 'Update EPG'. Verify that your TV's system date and clock are synchronized via network time."
      }
    ]
  },
  {
    id: 'apple',
    name: 'Apple TV & iOS',
    shortName: 'Apple Devices',
    subtitle: 'Apple TV 4K, iPhone & iPad',
    icon: <Laptop className="w-5 h-5" />,
    badge: null,
    time: '3-5 min',
    difficulty: 'Simple',
    recommendedApp: 'IPTVX / GSE Smart IPTV / Smarters Lite',
    steps: [
      {
        title: "Open the Apple App Store",
        desc: "On your Apple TV 4K, iPhone, or iPad, open the official App Store."
      },
      {
        title: "Download a Compatible Player",
        desc: "Search for 'IPTVX', 'Smarters Player Lite', 'GSE Smart IPTV', or 'Snappier IPTV' and download the app."
      },
      {
        title: "Choose Xtream Codes API Login",
        desc: "Launch the app, click 'Add New User / Playlist', and select 'Xtream Codes API'."
      },
      {
        title: "Input Subscription Details",
        desc: "Enter your B1G IPTV Username, Password, and Server Portal URL sent to your email or WhatsApp."
      },
      {
        title: "Enable Apple Hardware Decoding",
        desc: "In the app settings, verify that Apple VideoToolbox / Hardware Acceleration (HEVC/H.265) is enabled for ultra-smooth 4K 60fps playback."
      },
      {
        title: "Begin Watching",
        desc: "Your playlist will organize into Live Channels, Movies, and Series with full Apple TV remote swipe navigation."
      }
    ],
    faqs: [
      {
        q: "What is the best IPTV app for Apple TV 4K?",
        a: "IPTVX is widely regarded as the most visually stunning player for Apple TV 4K, providing a Netflix-style UI with iCloud sync. Smarters Player Lite and GSE Smart IPTV are also reliable, free choices."
      },
      {
        q: "Can I download B1G player directly on Apple TV?",
        a: "Apple has strict App Store guidelines. While dedicated custom players exist on Android, on Apple TV and iOS you use top-tier App Store players (IPTVX, Smarters Player Lite) and enter your B1G IPTV login details."
      },
      {
        q: "Can I use AirPlay to stream B1G IPTV from my iPhone to my TV?",
        a: "Yes! If you are watching on an iPhone or iPad, tap the AirPlay icon on the player screen and cast the stream directly to any AirPlay 2-compatible Smart TV or Apple TV with full audio synchronization."
      },
      {
        q: "Does B1G IPTV support Picture-in-Picture (PiP) on iPad and iPhone?",
        a: "Yes. Apps like IPTVX and GSE Smart IPTV fully support iOS Picture-in-Picture mode, allowing you to watch live football or news in a floating window while browsing other apps."
      },
      {
        q: "Can I run a VPN on Apple TV with tvOS 17 and later?",
        a: "Yes! Since tvOS 17, Apple TV natively supports VPN apps. You can download NordVPN, Surfshark, or ExpressVPN directly from the Apple TV App Store to protect your B1G IPTV streaming connection."
      },
      {
        q: "How do I sync my favorite channels across iPhone, iPad, and Apple TV?",
        a: "Apps like IPTVX use your Apple iCloud account to automatically sync your playlist credentials, favorite channel lists, and watch history across all your Apple devices seamlessly."
      },
      {
        q: "Why does my playlist say 'Invalid URL or Server Error' on iOS?",
        a: "Make sure you include the http:// prefix in your Server Portal URL, and ensure there are no trailing spaces copied with your username or password. Check that your account is active."
      },
      {
        q: "Does Apple TV support 4K 60fps live sports with B1G IPTV?",
        a: "Yes! Apple TV 4K features the powerful A15/A12 Bionic chip, which decodes 4K 60fps H.265/HEVC streams effortlessly without frame drops or overheating."
      },
      {
        q: "How do I change the audio track or enable subtitles on Apple TV?",
        a: "Swipe down on your Apple TV remote during playback to bring up the player control menu. Select 'Audio' to choose alternative commentary languages or 'Subtitles' to toggle closed captions."
      },
      {
        q: "Can I use Siri remote voice search with IPTV channels?",
        a: "In apps that support tvOS integration, you can use the Siri voice button to dictate channel search queries and quickly find movies by title."
      }
    ]
  },
  {
    id: 'pc',
    name: 'Windows PC & Mac',
    shortName: 'PC / Mac',
    subtitle: 'Desktop, Laptop & Web Player',
    icon: <Laptop className="w-5 h-5" />,
    badge: null,
    time: '2-3 min',
    difficulty: 'Instant',
    recommendedApp: 'IPTV Smarters Pro / VLC / Web Player',
    steps: [
      {
        title: "Choose Your Preferred Software",
        desc: "Download 'IPTV Smarters Pro for Windows/Mac' or install 'VLC Media Player' from videolan.org."
      },
      {
        title: "For IPTV Smarters Desktop",
        desc: "Run the installer, open the program, click 'Add New User', and select 'Login with Xtream Codes API'."
      },
      {
        title: "Enter B1G IPTV Account Information",
        desc: "Input your Username, Password, and Server Portal URL from your welcome email, then click 'Add User'."
      },
      {
        title: "For VLC Media Player Setup",
        desc: "Open VLC, click 'Media' in the top menu (or 'File' on Mac), and select 'Open Network Stream' (Ctrl + N)."
      },
      {
        title: "Paste Your M3U Playlist Link",
        desc: "Paste your full B1G IPTV M3U Plus URL into the network URL box and click 'Play'."
      },
      {
        title: "View Channel Playlist (Ctrl + L)",
        desc: "Press 'Ctrl + L' (or Command + Shift + P on Mac) in VLC to open the complete categorised channel list."
      }
    ],
    faqs: [
      {
        q: "How do I stream B1G IPTV on a Windows 10/11 PC or macOS?",
        a: "The most comfortable method is installing the official IPTV Smarters Pro desktop app for Windows or Mac. Alternatively, you can use VLC Media Player or access our web player portal directly in Google Chrome."
      },
      {
        q: "Can I watch B1G IPTV directly in my web browser without downloading software?",
        a: "Yes! We provide an online Web Player portal URL. Simply open Chrome, Edge, Safari, or Firefox, enter the Web Player link, sign in with your Username and Password, and stream instantly."
      },
      {
        q: "Why does VLC Media Player skip to the next channel after a few seconds?",
        a: "In VLC, click the 'Loop' button at the bottom until it shows a small '1' or loop active. This prevents VLC from jumping to the next track if a brief network packet delay occurs."
      },
      {
        q: "How can I watch 4 channels simultaneously (Multi-Screen) on my PC?",
        a: "IPTV Smarters Pro for Windows and Mac includes a built-in Multi-Screen feature. Click the multi-screen grid icon, choose a 2-screen or 4-screen layout, and drag your favorite live sports games into each quadrant."
      },
      {
        q: "Why does Windows Defender SmartScreen flag IPTV Smarters during installation?",
        a: "Because desktop IPTV players are distributed directly by independent developers rather than through the Microsoft Store, Windows Defender displays an unknown publisher notice. Click 'More info' and select 'Run anyway'."
      },
      {
        q: "What keyboard shortcuts can I use in VLC to navigate channels?",
        a: "Press 'Ctrl + L' to open/close the playlist sidebar, 'Space' to play/pause, 'F' for full screen, and 'Ctrl + Up/Down' to adjust volume."
      },
      {
        q: "Can I use dual monitors to stream sports while working on my PC?",
        a: "Yes! Simply open your player window, drag it to your secondary monitor, press Full Screen (or borderless window), and enjoy live TV while working on your primary screen."
      },
      {
        q: "Does B1G IPTV on PC support external subtitle files (SRT)?",
        a: "Yes. In VLC or IPTV Smarters Desktop, you can right-click the video, go to Subtitles, and either select embedded subtitle tracks or load an external .SRT file."
      },
      {
        q: "How do I improve video quality on low-spec laptops?",
        a: "In player settings, set video output to DirectX (Direct3D11) on Windows or Metal on macOS, and turn OFF software post-processing filters to reduce CPU usage."
      },
      {
        q: "Can I stream B1G IPTV over hotel or public Wi-Fi on my laptop?",
        a: "Yes. Hotel and airport Wi-Fi networks often restrict media ports. Turn on a VPN (connecting over port 443 / OpenVPN TCP) to bypass hotel firewall restrictions effortlessly."
      }
    ]
  },
  {
    id: 'mag',
    name: 'MAG & Formuler Boxes',
    shortName: 'MAG / Formuler',
    subtitle: 'Dedicated STBs & Enigma2',
    icon: <Cpu className="w-5 h-5" />,
    badge: null,
    time: '3-5 min',
    difficulty: 'Moderate',
    recommendedApp: 'Inner Portal / MyTVOnline 2 & 3',
    steps: [
      {
        title: "Locate Your Box MAC Address",
        desc: "Look at the sticker on the underside of your MAG or Formuler box. Copy down the MAC Address beginning with 00:1A:79:XX:XX:XX."
      },
      {
        title: "Provide Your MAC Address to B1G Support",
        desc: "Send your MAC address to our support team via WhatsApp or order note so we can bind your subscription to our middleware server."
      },
      {
        title: "Access System Settings",
        desc: "Boot your MAG box without the Ethernet cable plugged in, or go to Embedded Portal > Settings > System Settings."
      },
      {
        title: "Configure Portal URL",
        desc: "Go to 'Servers' > 'Portals'. Under Portal 1 Name, enter 'B1G IPTV'. Under Portal 1 URL, type the exact MAG Portal URL provided in your activation message."
      },
      {
        title: "Save and Reboot Portal",
        desc: "Press the yellow or blue button on your remote to save, return to the main menu, and select 'Reload Portal'."
      },
      {
        title: "Access Channels & EPG",
        desc: "Your MAG/Formuler will reboot into the B1G IPTV interactive portal with full remote control numbers, guide, and category sorting."
      }
    ],
    faqs: [
      {
        q: "How do I find my MAG box MAC address?",
        a: "Your MAC Address is printed on the physical sticker at the bottom of your MAG unit, starting with '00:1A:79:'. You can also find it inside Inner Portal Settings > Device Info."
      },
      {
        q: "What does 'Your STB is not supported' or 'Host Not Found' mean?",
        a: "This error occurs if your MAC Address was entered with a typo, has not yet been registered on our server, or if the Portal URL has a spelling error. Contact B1G support on WhatsApp to confirm your MAC is active."
      },
      {
        q: "What is the best Formuler app (MyTVOnline 2 vs MyTVOnline 3)?",
        a: "Formuler's proprietary MyTVOnline 3 (available on Formuler Z11 Pro/Max) and MyTVOnline 2 (on Z8/Z10) are the gold standard for MAG-style hardware boxes, offering unmatched channel zapping speed and picture clarity."
      },
      {
        q: "How do I fix a continuous 'Loading Portal...' loop on MAG boxes?",
        a: "Unplug the power adapter for 30 seconds and reboot your router. If the loop continues, boot into Inner Portal (hold the Menu or Gear button while powering on) and verify that the Portal URL is spelled accurately."
      },
      {
        q: "Does B1G IPTV support 7-day Catch-Up on MAG and Formuler?",
        a: "Yes! Channels that have catch-up capability display a green clock icon in the MAG channel list. Press the Left Arrow or EPG button on your remote to scroll back up to 7 days and replay any missed show."
      },
      {
        q: "Can I record live broadcasts to a USB thumb drive on MAG/Formuler?",
        a: "Yes. Insert a high-speed USB flash drive (formatted to FAT32 or NTFS) into your MAG or Formuler box. Press the Red Record button on your remote while watching any channel to record immediately or schedule a timer."
      },
      {
        q: "How do I change video output resolution (1080p vs 4K) on MAG?",
        a: "Go to System Settings > Video. Set Graphic Resolution to 1080p or 2160p (4K) and ensure HDMI Event Reaction is set to 'Immediate' for fast mode switching."
      },
      {
        q: "Can I switch my active B1G IPTV subscription from MAG to Firestick later?",
        a: "Yes! If you decide to switch from a MAG box to an Amazon Firestick or Smart TV, simply message our support desk. We can convert your MAG MAC account into Xtream Codes API credentials at any time for free."
      },
      {
        q: "How do I set up a custom DNS (Cloudflare 1.1.1.1) on MAG boxes?",
        a: "Go to System Settings > Network > Auto (DHCP), choose 'Manual Configuration', and set Primary DNS to 1.1.1.1 and Secondary DNS to 8.8.8.8. This resolves DNS blocking by local internet providers."
      },
      {
        q: "Does B1G IPTV support Enigma2 (Zgemma, Vu+, Dreambox) boxes?",
        a: "Yes. For Enigma2 boxes, we provide an automatic Telnet / SSH auto-installer script that creates your B1G IPTV bouquets and EPG data within seconds."
      }
    ]
  }
];

const InstallationGuide = () => {
  const [activeTab, setActiveTab] = useState(deviceGuides[0].id);
  const [openFaq, setOpenFaq] = useState(null);

  const activeDevice = deviceGuides.find(d => d.id === activeTab) || deviceGuides[0];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full pt-20 bg-[#060a14] min-h-screen text-gray-200">
      {/* Page Header */}
      <div className="w-full text-center py-16 px-6 bg-gradient-to-b from-[#0a0f1e] via-[#090d1a] to-[#060a14] border-b border-white/5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 text-[#c8102e] text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Zap className="w-3.5 h-3.5" /> 5-Minute Setup Center
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e01e26] via-[#c8102e] to-[#ff4d58]">Guide</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Select your streaming hardware below to load verified step-by-step setup guides, recommended player apps, and complete troubleshooting FAQs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Modern Hardware Selector Bar (TOP) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4 px-1 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c8102e] shadow-[0_0_10px_#c8102e] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Select Your Streaming Hardware:
              </span>
            </div>
            <span className="text-xs text-gray-500 hidden sm:inline">
              Viewing: <strong className="text-white">{activeDevice.name}</strong>
            </span>
          </div>

          {/* Premium Device Buttons Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {deviceGuides.map((device) => {
              const isActive = activeTab === device.id;
              return (
                <button
                  key={device.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(device.id);
                    setOpenFaq(null);
                  }}
                  className={`group relative flex items-center sm:flex-col sm:items-center sm:text-center gap-3 sm:gap-2.5 p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden text-left ${
                    isActive
                      ? 'bg-gradient-to-b from-[#1c0d16] via-[#140910] to-[#0d070b] border-[#c8102e] shadow-[0_4px_25px_rgba(200,16,46,0.35)] ring-1 ring-[#c8102e]/60 z-10'
                      : 'bg-[#0b101d] border-white/10 hover:border-white/20 hover:bg-[#101729] text-gray-300 hover:text-white'
                  }`}
                >
                  {/* Subtle top indicator bar on active */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8102e] to-transparent"></div>
                  )}

                  {/* Icon Container */}
                  <div className={`p-2.5 rounded-xl transition-all duration-300 shrink-0 ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#c8102e] to-[#990c23] text-white shadow-md shadow-[#c8102e]/40 scale-105' 
                      : 'bg-white/5 text-[#c8102e] group-hover:bg-white/10 group-hover:scale-105'
                  }`}>
                    {device.icon}
                  </div>

                  {/* Text Container */}
                  <div className="min-w-0 flex-grow">
                    <div className="flex items-center gap-1.5 sm:justify-center">
                      <span className={`text-xs sm:text-sm font-bold truncate block ${
                        isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'
                      }`}>
                        {device.shortName}
                      </span>
                      {device.badge && (
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-[#c8102e] text-white hidden sm:inline shadow-sm">
                          {device.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-gray-400 block truncate sm:mt-0.5">
                      {device.subtitle.split(',')[0]}
                    </span>
                  </div>

                  {/* Mobile active indicator checkmark */}
                  {isActive && (
                    <div className="sm:hidden ml-auto shrink-0 w-5 h-5 rounded-full bg-[#c8102e] text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Device Content Area (BELOW the buttons) */}
        <div className="bg-[#0b101e] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8102e]/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Active Device Header Bar */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="p-3.5 bg-gradient-to-br from-[#c8102e] to-[#e01e26] rounded-2xl text-white shadow-lg shadow-[#c8102e]/30">
                {activeDevice.icon}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    How to Set Up on {activeDevice.name}
                  </h2>
                  <span className="bg-[#c8102e]/15 text-[#ff4d58] border border-[#c8102e]/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {activeDevice.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {activeDevice.subtitle}
                </p>
              </div>
            </div>

            {/* Quick Specs Pill Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-[#111728] border border-white/10 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-sm">
                <Clock className="w-4 h-4 text-[#c8102e]" />
                <span className="text-gray-300">Est. Time: <strong className="text-white">{activeDevice.time}</strong></span>
              </div>
              <div className="bg-[#111728] border border-white/10 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#c8102e]" />
                <span className="text-gray-300">Player: <strong className="text-white">{activeDevice.recommendedApp.split('/')[0]}</strong></span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Installation Cards */}
          <div className="relative z-10 py-10">
            <div className="mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#c8102e]" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Step-by-Step Setup Guide
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeDevice.steps.map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0f1629] border border-white/5 hover:border-white/15 rounded-xl p-5 transition-all duration-300 flex gap-4 group hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c8102e] to-[#e01e26] text-white flex items-center justify-center font-extrabold text-sm shrink-0 shadow-md shadow-[#c8102e]/30 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1.5 group-hover:text-[#c8102e] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Pro Streaming Setup Box */}
          <div className="relative z-10 p-5 rounded-xl bg-gradient-to-r from-[#141d33] to-[#0f1728] border border-white/10 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#c8102e]/20 text-[#c8102e]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Recommended Streaming Setup</h4>
                <p className="text-xs text-gray-400">For buffer-free 4K live sports, connect via 5 GHz Wi-Fi or Ethernet cable with at least 25 Mbps bandwidth.</p>
              </div>
            </div>
            <Link
              to="/free-trial"
              className="text-xs font-bold text-white bg-[#c8102e] hover:bg-[#e01e26] px-4 py-2.5 rounded-lg transition-colors shrink-0 flex items-center gap-1.5 shadow-md shadow-[#c8102e]/30 hover:brightness-110 active:scale-95"
            >
              Test with 24H Trial <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 10 Device-Specific FAQs */}
          <div className="relative z-10 pt-6 border-t border-white/10">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#c8102e]" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Frequently Asked Questions for {activeDevice.name}
                </h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                Everything you need to know about setting up, optimizing, and troubleshooting B1G IPTV and B1G player on {activeDevice.name}:
              </p>
            </div>

            <div className="space-y-3">
              {activeDevice.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-white/5 rounded-xl overflow-hidden bg-[#0d1322] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#c8102e] transition-colors cursor-pointer gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs text-[#c8102e] font-extrabold bg-[#c8102e]/10 px-2 py-0.5 rounded">
                          Q{index + 1}
                        </span>
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-[#c8102e]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 whitespace-pre-line bg-[#090e1a]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 24/7 Live Assistance Card */}
          <div className="relative z-10 mt-12 p-6 rounded-2xl bg-[#080c17] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-[#c8102e]/10 rounded-2xl text-[#c8102e]">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Live Guided Setup Assistance?</h4>
                <p className="text-xs text-gray-400 mt-0.5">Our support team is available 24/7 on WhatsApp and email to walk you through setup step by step.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors border border-white/5"
              >
                Contact Support
              </Link>
              <Link
                to="/free-trial"
                className="bg-gradient-to-r from-[#c8102e] to-[#e01e26] text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-[#c8102e]/30 hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                Get Free Trial <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
