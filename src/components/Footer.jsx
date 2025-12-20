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
    ArrowUp,
    MessageSquare,
    MapPin,
    ExternalLink
} from 'lucide-react';
import logo from '../assets/logo_white.png';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

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
            <h4 className="text-rsRed font-semibold text-sm border-b border-rsRed/30 pb-2 w-max pr-8 uppercase tracking-wider">
                {title}
            </h4>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            to={link.to}
                            className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block py-0.5 hover:underline decoration-rsRed/50 underline-offset-4"
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
            <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] opacity-[0.05] pointer-events-none rotate-12">
                <img src={logo} alt="Background Logo" className="w-full h-full object-contain filter brightness-200" />
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rsRed/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
                    <div className="max-w-2xl">
                        {/* Brand Logo - Top Left */}
                        <div className="mb-8 bg-white p-3 rounded-lg inline-block backdrop-blur-sm border border-white/10">
                            <img src={logo} alt="RS Solar CAD Group" className="h-12 w-auto" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            We'd Love to <br/>
                            <span className="text-rsRed">Work Together</span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-6">
                            Find out how leading companies use RS Solar CAD Group to stay ahead of the competition and reduce critical costs.
                            <Link to="/contact-us" className="text-rsRed hover:text-white ml-2 underline decoration-rsRed/50 hover:decoration-white transition-all font-medium">
                                Get in Touch
                            </Link>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-12 lg:gap-24">
                        {/* Corporate Office */}
                        <div className="space-y-4">
                            <h4 className="text-rsRed font-semibold text-sm border-b border-rsRed/30 pb-2 uppercase tracking-wider">Corporate Office</h4>
                            <a
                                href="https://www.google.com/maps?q=28.682368530591578,77.3781727529899"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <address className="not-italic text-sm text-gray-300 space-y-1 leading-relaxed group-hover:text-white transition-colors cursor-pointer">
                                    <p className="flex items-start">
                                        <MapPin className="w-4 h-4 mr-2 text-rsRed flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <span>Block A, Loni Industrial Area,<br />Ghaziabad, Uttar Pradesh 201007<br />INDIA</span>
                                    </p>
                                </address>
                                <span className="inline-flex items-center text-xs text-rsRed group-hover:text-white transition-colors mt-2 gap-1 ml-6">
                                    View on Map <ExternalLink className="w-3 h-3" />
                                </span>
                            </a>
                        </div>

                        {/* Connects */}
                        <div className="space-y-4">
                            <h4 className="text-rsRed font-semibold text-sm border-b border-rsRed/30 pb-2 uppercase tracking-wider">Connects</h4>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li>
                                    <a href="mailto:sales@rscadgroup.com" className="flex items-center hover:text-white transition-colors group">
                                        <Mail className="w-4 h-4 mr-3 text-rsRed group-hover:scale-110 transition-transform" />
                                        sales@rscadgroup.com
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@rscadgroup.com" className="flex items-center hover:text-white transition-colors group">
                                        <Mail className="w-4 h-4 mr-3 text-rsRed group-hover:scale-110 transition-transform" />
                                        contact@rscadgroup.com
                                    </a>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="flex items-center hover:text-white transition-colors group">
                                        <Calendar className="w-4 h-4 mr-3 text-rsRed group-hover:scale-110 transition-transform" />
                                        Schedule a Demo
                                    </Link>
                                </li>
                                <li>
                                    <a href="tel:+13472188830" className="flex items-center hover:text-white transition-colors group">
                                        <Phone className="w-4 h-4 mr-3 text-rsRed group-hover:scale-110 transition-transform" />
                                        +1 347 218 8830
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+919958060424" className="flex items-center hover:text-white transition-colors group">
                                        <Phone className="w-4 h-4 mr-3 text-rsRed group-hover:scale-110 transition-transform" />
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
                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#e62e00] hover:text-white text-gray-400 transition-all duration-300 border border-gray-700 hover:border-rsRed"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://in.linkedin.com/company/rs-solar-cad-group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all duration-300 border border-gray-700 hover:border-[#0077b5]"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://www.youtube.com/channel/UCj9YDXvQPPZ0yukcwbloqpw/videos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF0000] hover:text-white text-gray-400 transition-all duration-300 border border-gray-700 hover:border-[#FF0000]"
                                >
                                    <Youtube className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-8 mb-16 border-t border-gray-800 pt-12">

                    <LinkGroup
                        title="Who We Are"
                        links={[
                            { label: 'About Us', to: '/about-geon' },
                            { label: 'Our Journey', to: '/about-geon' },
                            { label: 'Leadership Team', to: '/about-geon' },
                            { label: 'Success Stories', to: '/services' },
                            { label: 'Career', to: '/career' },
                            { label: 'Our Locations', to: '/contact-us' },
                        ]}
                    />

                    {/* What We Do - Column 1 */}
                    <LinkGroup
                        title="What We Do"
                        links={[
                            { label: 'CAD Drafting', to: '/cad-design' },
                            { label: 'Solar Design Service', to: '/solar-design-services' },
                            { label: 'EV Charging Station', to: '/ev-charging-station' },
                            { label: 'Trading & Procurement', to: '/trading-procurement' },
                            { label: 'Roofing & Measurement', to: '/services' },
                            { label: 'Telecom Drafting', to: '/services' },
                            { label: 'Evacuation Plans', to: '/services' },
                            { label: 'GIS Mapping', to: '/services' },
                        ]}
                    />

                    {/* What We Do - Column 2 */}
                    <div className="flex flex-col space-y-4 pt-0 md:pt-8 bg-transparent">
                        <ul className="space-y-2 mt-auto">
                            {[
                                { label: 'Utility Mapping', to: '/services' },
                                { label: 'FTTx', to: '/services' },
                                { label: 'Mapping and Navigation', to: '/services' },
                                { label: 'Business Process', to: '/services' },
                                { label: 'Staffing Services', to: '/workforce-staffing' },
                                { label: 'Customer Contact Center', to: '/services' },
                                { label: 'Workflow Management', to: '/services' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link to={item.to} className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block py-0.5 hover:underline decoration-rsRed/50 underline-offset-4">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <LinkGroup
                        title="Who We Serve"
                        links={[
                            { label: 'Engineering Design Co.', to: '/services' },
                            { label: 'Design Platforms & Tools', to: '/services' },
                            { label: 'Solar Installers', to: '/indian-solar-installation' },
                            { label: 'Exterior Contractors', to: '/services' },
                            { label: 'Roofing Companies', to: '/services' },
                            { label: 'Home Builders', to: '/services' },
                            { label: 'Insurance Carriers', to: '/services' },
                            { label: 'AEC Companies', to: '/services' },
                            { label: 'EPC Companies', to: '/services' },
                        ]}
                    />

                    <div className="space-y-10">
                        <LinkGroup
                            title="How We Work"
                            links={[
                                { label: 'Processes', to: '/services' },
                                { label: 'Design Platform', to: '/services' },
                            ]}
                        />
                        <LinkGroup
                            title="Resources"
                            links={[
                                { label: 'Posts & Updates', to: '/blogs' },
                                { label: 'Glossary', to: '/blogs' },
                                { label: 'FAQ', to: '/contact-us' },
                            ]}
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-end md:items-center relative">

                    {/* Left: Certifications */}
                    <div className="flex items-center gap-4 mb-6 md:mb-0 opacity-80">
                        <div className="border border-gray-600 rounded-full w-12 h-12 flex items-center justify-center text-[10px] text-center text-gray-400 hover:border-rsRed transition-colors cursor-default">
                            SEIA<br />Member
                        </div>
                        <div className="border border-gray-600 rounded-full w-12 h-12 flex items-center justify-center text-[10px] text-center text-gray-400 hover:border-rsRed transition-colors cursor-default">
                            ISO<br />9001
                        </div>
                        <div className="border border-gray-600 rounded-full w-12 h-12 flex items-center justify-center text-[10px] text-center text-gray-400 hover:border-rsRed transition-colors cursor-default">
                            ISO<br />27001
                        </div>
                    </div>

                    {/* Center: Copyright */}
                    <div className="text-xs text-gray-500 mb-4 md:mb-0 text-center">
                        Copyright © {new Date().getFullYear()} RS Solar CAD Group.
                    </div>

                    {/* Right: Legal Links */}
                    <div className="flex space-x-6 text-xs text-gray-400">
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Use</Link>
                        <span className="text-gray-700">|</span>
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-gray-700">|</span>
                        <Link to="/" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed right-8 bottom-24 transition-all duration-500 z-50 flex flex-col items-center gap-2 group ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
                aria-label="Scroll to top"
            >
                <div className="h-16 w-[1px] bg-rsRed/50 group-hover:bg-rsRed transition-colors"></div>
                <span className="[writing-mode:vertical-rl] text-[10px] tracking-widest text-rsRed uppercase transform rotate-180">Scroll to Top</span>
            </button>
        </footer>
    );
};

export default Footer;

