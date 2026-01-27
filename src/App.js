import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';
import PlaceholderPage from './components/PlaceholderPage';

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

// Admin Pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const BlogEditor = lazy(() => import('./pages/admin/BlogEditor'));
const AdminContacts = lazy(() => import('./pages/admin/AdminContacts'));
const AdminCareers = lazy(() => import('./pages/admin/AdminCareers'));
const AdminApplications = lazy(() => import('./pages/admin/AdminApplications'));
const AdminConsultations = lazy(() => import('./pages/admin/AdminConsultations'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));
const PublicLayout = lazy(() => import('./components/PublicLayout'));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Public Routes - Wrapped in PublicLayout */}
            <Route element={<PublicLayout />}>
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
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<ClientPortal />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/blog/new" element={<BlogEditor />} />
                <Route path="/admin/blog/edit/:id" element={<BlogEditor />} />
                <Route path="/admin/contact" element={<AdminContacts />} />
                <Route path="/admin/careers" element={<AdminCareers />} />
                <Route path="/admin/applications" element={<AdminApplications />} />
                <Route path="/admin/consultations" element={<AdminConsultations />} />
              </Route>
            </Route>


            {/* Fallback */}
            <Route path="*" element={
              <PublicLayout>
                <PlaceholderPage title="Page Not Found" />
              </PublicLayout>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
