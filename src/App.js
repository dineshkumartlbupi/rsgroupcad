import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import ClientPortal from './pages/ClientPortal';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import {
  SolarDesign, EVPermit, ArchitectureDesign, BIM
} from './pages/BusinessPages';
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
            <Route path="/about-geon" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/solar-design-services" element={<SolarDesign />} />
            <Route path="/ev-permit-charging-station" element={<EVPermit />} />
            <Route path="/architecture-designing" element={<ArchitectureDesign />} />
            <Route path="/bim" element={<BIM />} />

            {/* Other Pages */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/press-release" element={<PlaceholderPage title="Press Release" />} />
            <Route path="/media" element={<PlaceholderPage title="Media" />} />
            <Route path="/client-portal" element={<ClientPortal />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

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
