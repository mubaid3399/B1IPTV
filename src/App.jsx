import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Reseller from './pages/Reseller';
import FreeTrial from './pages/FreeTrial';
import InstallationGuide from './pages/InstallationGuide';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Faqs from './pages/Faqs';
import Pricing from './pages/Pricing';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;