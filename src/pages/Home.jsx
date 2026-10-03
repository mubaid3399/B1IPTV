import React from 'react';
import Hero from '../components/Hero';
import StreamingLogos from '../components/StreamingLogos';
import CompatibleDevices from '../components/CompatibleDevices';
import PricingSection from '../components/PricingSection';
import LiveSportsSection from '../components/LiveSportsSection';
import MoviesShowsSection from '../components/MoviesShowsSection';
import MovieMarquee from '../components/MovieMarquee';
import SeoArticle from '../components/SeoArticle';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <StreamingLogos />
      <CompatibleDevices />
      <PricingSection />
      <LiveSportsSection />
      <MoviesShowsSection />
      <MovieMarquee />
      <SeoArticle />
    </div>
  );
};

export default Home;
