import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Services = lazy(() => import('./pages/Services'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const ClientPortal = lazy(() => import('./pages/ClientPortal'));
const Careers = lazy(() => import('./pages/Careers'));
const CareerApplication = lazy(() => import('./pages/CareerApplication'));
const PressRelease = lazy(() => import('./pages/PressRelease'));
const Media = lazy(() => import('./pages/Media'));
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const SLAPage = lazy(() => import('./pages/SLAPage'));
const SolarDesign = lazy(() => import('./pages/services/SolarDesign'));
const EVCharging = lazy(() => import('./pages/services/EVChargingStation'));
const CADDesign = lazy(() => import('./pages/services/CADDesign'));
const WorkforceStaffing = lazy(() => import('./pages/services/WorkforceStaffing'));
const SolarInstallation = lazy(() => import('./pages/services/SolarInstallation'));
const TradingProcurement = lazy(() => import('./pages/services/TradingProcurement'));
const OurProcesses = lazy(() => import('./pages/OurProcesses'));

// Placeholder pages for others if not yet fully implemented
const PlaceholderPage = ({ title }) => (
  <div className="pt-32 pb-20 text-center">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-600">This page is under construction.</p>
  </div>
);

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <Loader2 className="w-10 h-10 text-[#0d1b42] animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/our-processes" element={<OurProcesses />} />

              {/* Fallback */}
              <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
