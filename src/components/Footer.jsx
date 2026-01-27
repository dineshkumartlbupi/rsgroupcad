import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Linkedin,
    Facebook,
    Youtube,
    Mail,
    Phone,
    MessageCircle,
    Calendar,
    MapPin,
    ExternalLink,
    Loader2,
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo_footer.png';
// API URL - automatically uses correct backend based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);  //null, 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(`${API_URL}/api/consultations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    city: ''
                });
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const LinkGroup = ({ title, links }) => (
        <div className="flex flex-col space-y-4">
            <h4 className="text-[#e62e00] font-semibold text-sm border-b border-[#e62e00]/30 pb-2 w-max pr-8 uppercase tracking-wider">
                {title}
            </h4>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.to}
                            className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block py-0.5 hover:underline decoration-[#e62e00]/50 underline-offset-4"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-[#0d1b42] text-white pt-20 pb-8 relative overflow-hidden font-sans border-t border-gray-800">
            {/* Background Logo */}
            {/* <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-[0.05] pointer-events-none rotate-12">
                <img src={logo} alt="Background Logo" className="w-full h-full object-contain filter brightness-200" />
            </div> */}

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#e62e00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
                    <div className="max-w-2xl">
                        {/* Brand Logo - Top Left */}
                        <div className="mb-8 bg-white p-3 rounded-lg inline-block backdrop-blur-sm border border-white/10">
                            <img src={logo} alt="RS Solar CAD Group" className="h-38 w-40" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            We'd Love to <br />
                            <span className="text-[#e62e00]">Work Together</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-6">
                            Find out how leading companies use RS Solar CAD Group to stay ahead of the competition and reduce critical costs.
                            <Link to="/contact-us" className="text-[#e62e00] hover:text-white ml-2 underline decoration-[#e62e00]/50 hover:decoration-white transition-all font-medium">
                                Get in Touch
                            </Link>
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                        {/* Column 1: Corporate Office & Connects */}
                        <div className="flex flex-col gap-10">
                            {/* Corporate Office */}
                            <div className="space-y-4">
                                <h4 className="text-[#e62e00] font-semibold text-sm border-b border-[#e62e00]/30 pb-2 uppercase tracking-wider">Corporate Office</h4>
                                <a
                                    href="https://maps.app.goo.gl/CaK9kRqNLrbnpZMF8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <address className="not-italic text-sm text-gray-300 space-y-1 leading-relaxed group-hover:text-white transition-colors cursor-pointer">
                                        <p className="flex items-start">
                                            <MapPin className="w-4 h-4 mr-2 text-[#e62e00] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span>P8V7+X8F, Chirodi Rd,<br />Loni Dehat, Uttar Pradesh 201102<br />INDIA</span>
                                        </p>
                                    </address>
                                    <span className="inline-flex items-center text-xs text-[#e62e00] group-hover:text-white transition-colors mt-2 gap-1 ml-6">
                                        View on Map <ExternalLink className="w-3 h-3" />
                                    </span>
                                </a>
                            </div>

                            {/* Branch Office */}
                            <div className="space-y-4">
                                <h4 className="text-[#e62e00] font-semibold text-sm border-b border-[#e62e00]/30 pb-2 uppercase tracking-wider">Branch Office</h4>
                                <a
                                    href="https://maps.app.goo.gl/CaK9kRqNLrbnpZMF8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <address className="not-italic text-sm text-gray-300 space-y-1 leading-relaxed group-hover:text-white transition-colors cursor-pointer">
                                        <p className="flex items-start">
                                            <MapPin className="w-4 h-4 mr-2 text-[#e62e00] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                            <span>Block A, Loni Industrial Area,<br />Ghaziabad, Uttar Pradesh 201007<br />INDIA</span>
                                        </p>
                                    </address>
                                    <span className="inline-flex items-center text-xs text-[#e62e00] group-hover:text-white transition-colors mt-2 gap-1 ml-6">
                                        View on Map <ExternalLink className="w-3 h-3" />
                                    </span>
                                </a>
                            </div>

                        </div>

                        {/* Column 2: Form */}
                        <div className="w-full max-w-sm ">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-xl shadow-lg p-5"
                            >
                                <h3 className="text-lg font-bold text-[#1f3366] mb-1">Get a FREE Consultation</h3>
                                <p className="text-gray-500 mb-4 text-xs">Let's discuss your CAD drafting needs</p>

                                {submitStatus === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-8 text-center"
                                    >
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h4 className="text-[#1f3366] font-bold text-lg mb-1">Request Sent!</h4>
                                        <p className="text-gray-500 text-sm">We'll get back to you shortly.</p>
                                        <button
                                            onClick={() => setSubmitStatus(null)}
                                            className="mt-4 text-sm text-[#e62e00] font-medium hover:underline"
                                        >
                                            Send another request
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        {submitStatus === 'error' && (
                                            <div className="bg-red-50 text-red-600 text-xs p-3 rounded flex items-center gap-2">
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                Something went wrong. Please try again.
                                            </div>
                                        )}

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Name *"
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1f3366] text-gray-900 disabled:opacity-50 disabled:bg-gray-50"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel"
                                                placeholder="Phone Number *"
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1f3366] text-gray-900 disabled:opacity-50 disabled:bg-gray-50"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email Address *"
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1f3366] text-gray-900 disabled:opacity-50 disabled:bg-gray-50"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your City *"
                                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#1f3366] text-gray-900 disabled:opacity-50 disabled:bg-gray-50"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                required
                                                disabled={isSubmitting}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#1f3366] text-white py-2.5 rounded font-bold text-sm hover:bg-[#e62e00] transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Get Free Quote'
                                            )}
                                        </button>
                                        <p className="text-[10px] text-gray-400 text-center mt-1">
                                            By submitting, you agree to our Terms
                                        </p>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8 mb-16 border-t border-gray-800 pt-12">
                    <LinkGroup
                        title="Who We Are"
                        links={[
                            { label: 'About Us', to: '/about-us#about-us' },
                            { label: 'Our Journey', to: '/about-us#our-journey' },
                            { label: 'Leadership Team', to: '/about-us#leadership' },
                            { label: 'Success Stories', to: '/success-stories' },
                            { label: 'Career', to: '/career' },
                            { label: 'Our Locations', to: '/contact-us' },
                        ]}
                    />

                    <LinkGroup
                        title="What We Do"
                        links={[
                            { label: 'CAD Drafting', to: '/cad-design' },
                            { label: 'Solar Design Service', to: '/solar-design-services' },
                            { label: 'EV Charging Station', to: '/ev-charging-station' },
                            { label: 'Trading & Procurement', to: '/trading-procurement' },
                            { label: 'Roofing & Measurement', to: '/services' },
                            { label: 'Evacuation Plans', to: '/services' },
                        ]}
                    />

                    <LinkGroup
                        title="Who We Serve"
                        links={[
                            { label: 'Engineering Design Co.', to: '/services' },
                            { label: 'Design Platforms & Tools', to: '/services' },
                            { label: 'Solar Installers', to: '/indian-solar-installation' },
                            { label: 'Exterior Contractors', to: '/services' },
                            { label: 'Roofing Companies', to: '/services' },
                            { label: 'Insurance Carriers', to: '/services' },
                        ]}
                    />

                    <div className="space-y-10">
                        <LinkGroup
                            title="How We Work"
                            links={[
                                { label: 'Processes', to: '/our-processes' },
                                { label: 'SLA & Quality', to: '/sla' },
                                { label: 'Design Platform', to: '/services' },
                            ]}
                        />
                        <LinkGroup
                            title="Resources"
                            links={[
                                { label: 'Posts & Updates', to: '/blogs' },
                                { label: 'Press Release', to: '/press-release' },
                                { label: 'Media Center', to: '/media' },
                                { label: 'FAQ', to: '/faq' },
                            ]}
                        />
                    </div>


                    {/* Connects */}
                    <div className="space-y-4">
                        <h4 className="text-[#e62e00] font-semibold text-sm border-b border-[#e62e00]/30 pb-2 uppercase tracking-wider">Connects</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>
                                <a href="mailto:sales@rscadgroup.com" className="flex items-center hover:text-white transition-colors group">
                                    <Mail className="w-4 h-4 mr-3 text-[#e62e00] group-hover:scale-110 transition-transform" />
                                    sales@rscadgroup.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@rscadgroup.com" className="flex items-center hover:text-white transition-colors group">
                                    <Mail className="w-4 h-4 mr-3 text-[#e62e00] group-hover:scale-110 transition-transform" />
                                    contact@rscadgroup.com
                                </a>
                            </li>
                            <li>
                                <Link to="https://calendly.com/rssolarcadgroup/intro-and-updates" className="flex items-center hover:text-white transition-colors group">
                                    <Calendar className="w-4 h-4 mr-3 text-[#e62e00] group-hover:scale-110 transition-transform" />
                                    Schedule a Demo
                                </Link>
                            </li>
                            <li>
                                <a href="https://wa.me/19129804481" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white transition-colors group">
                                    <MessageCircle className="w-4 h-4 mr-3 text-[#e62e00] group-hover:scale-110 transition-transform" />
                                    +1 (912) 980 4481
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919958060424" className="flex items-center hover:text-white transition-colors group">
                                    <Phone className="w-4 h-4 mr-3 text-[#e62e00] group-hover:scale-110 transition-transform" />
                                    +91 9958060424
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex space-x-3 pt-2">
                            <a
                                href="https://www.facebook.com/people/RS-Solar-CAD-Group/100093924699182/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e62e00] hover:text-white text-gray-400 transition-all duration-300 border border-gray-700 hover:border-[#e62e00]"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a
                                href="https://in.linkedin.com/company/rs-solar-cad-group"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all duration-300 border border-gray-700 hover:border-[#0077b5]"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCj9YDXvQPPZ0yukcwbloqpw/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white text-gray-400 transition-all duration-300 border border-gray-700 hover:border-[#FF0000]"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 relative">
                    {/* Copyright */}
                    <div className="text-xs text-gray-500 text-center md:text-left">
                        Copyright © {new Date().getFullYear()} RS Solar CAD Group.
                    </div>

                    {/* Legal Links */}
                    <div className="flex space-x-6 text-xs text-gray-400">
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Use</Link>
                        <span className="text-gray-700">|</span>
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-gray-700">|</span>
                        <Link to="/sla" className="hover:text-white transition-colors">SLA</Link>
                        <span className="text-gray-700">|</span>
                        <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed right-8 bottom-24 transition-all duration-500 z-50 flex flex-col items-center gap-2 group ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                aria-label="Scroll to top"
            >
                <div className="h-16 w-[1px] bg-[#e62e00]/50 group-hover:bg-[#e62e00] transition-colors"></div>
                <span className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-[#e62e00] uppercase transform rotate-180">Scroll to Top</span>
            </button>
        </footer>
    );
};

export default Footer;

