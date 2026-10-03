import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Tv, Sparkles } from 'lucide-react';

const NotFound = () => {
  const canvasRef = useRef(null);

  // Floating particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 16, 46, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#060a14] overflow-hidden">
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8102e]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#c8102e]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Glitch-style 404 */}
        <div className="relative mb-6">
          <h1
            className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none tracking-tighter select-none"
            style={{
              background: 'linear-gradient(135deg, #E01E26 0%, #c8102e 40%, #ff4d58 70%, #E01E26 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(200, 16, 46, 0.3))',
            }}
          >
            404
          </h1>

          {/* Subtle scan line effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(200,16,46,0.15) 2px, rgba(200,16,46,0.15) 4px)',
            }}
          />
        </div>

        {/* Signal lost badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8102e]/10 border border-[#c8102e]/30 mb-6">
          <Tv className="w-4 h-4 text-[#c8102e]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#c8102e]">
            Signal Lost
          </span>
          <span className="w-2 h-2 rounded-full bg-[#c8102e] animate-pulse shadow-[0_0_8px_rgba(200,16,46,0.6)]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          This Channel Doesn't Exist
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10">
          The page you're looking for has been moved, deleted, or never existed.
          Don't worry — with <strong className="text-white font-medium">28,000+ channels</strong> available,
          there's plenty more to explore.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2.5 bg-gradient-to-br from-[#E01E26] to-[#B5121A] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_4px_20px_rgba(224,30,38,0.4)] transition-all duration-300 hover:from-[#EE2830] hover:to-[#E01E26] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(224,30,38,0.6)]"
          >
            <Home className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/15 text-gray-300 hover:text-white px-7 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-14 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider font-medium">
            Popular destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: 'Pricing', path: '/pricing' },
              { name: 'Free Trial', path: '/free-trial' },
              { name: 'Installation Guide', path: '/installation-guide' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
