import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import ClientPortal from './pages/ClientPortal';
import Careers from './pages/Careers';
import CareerApplication from './pages/CareerApplication';
import PressRelease from './pages/PressRelease';
import Media from './pages/Media';
import SuccessStories from './pages/SuccessStories';
import FAQ from './pages/FAQ';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SLAPage from './pages/SLAPage';
import SolarDesign from './pages/services/SolarDesign';
import EVCharging from './pages/services/EVChargingStation';
import CADDesign from './pages/services/CADDesign';
import WorkforceStaffing from './pages/services/WorkforceStaffing';
import SolarInstallation from './pages/services/SolarInstallation';
import TradingProcurement from './pages/services/TradingProcurement';
import ScrollToTop from './components/ScrollToTop';

// Placeholder pages for others if not yet fully implemented
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/solar-design-services" element={<SolarDesign />} />
            <Route path="/ev-charging-station" element={<EVCharging />} />
            <Route path="/cad-design" element={<CADDesign />} />
            <Route path="/workforce-staffing" element={<WorkforceStaffing />} />
            <Route path="/indian-solar-installation" element={<SolarInstallation />} />
            <Route path="/trading-procurement" element={<TradingProcurement />} />

            {/* Other Pages */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/press-release" element={<PressRelease />} />
            <Route path="/media" element={<Media />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/career/apply" element={<CareerApplication />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/sla" element={<SLAPage />} />

            {/* Fallback */}
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
