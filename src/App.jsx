import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';

// Eagerly load the home page for fastest initial paint
import Home from './pages/Home';

// Lazy-load all other pages — each becomes its own chunk
const Pricing = lazy(() => import('./pages/Pricing'));
const Reseller = lazy(() => import('./pages/Reseller'));
const FreeTrial = lazy(() => import('./pages/FreeTrial'));
const InstallationGuide = lazy(() => import('./pages/InstallationGuide'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Faqs = lazy(() => import('./pages/Faqs'));
const NotFound = lazy(() => import('./pages/NotFound'));

// On-brand loading spinner shown while lazy chunks load
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#060a14]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-3 border-white/10 border-t-[#c8102e] rounded-full animate-spin" />
      <span className="text-xs text-gray-500 tracking-widest uppercase font-medium">Loading</span>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="reseller" element={<Reseller />} />
            <Route path="free-trial" element={<FreeTrial />} />
            <Route path="installation-guide" element={<InstallationGuide />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:slug" element={<BlogDetail />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;