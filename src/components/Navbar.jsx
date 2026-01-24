import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Zap, PenTool, Layers, Settings, CheckCircle, ClipboardList, FileText, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoWhite from '../assets/whitelogo.svg';
import logoColor from '../assets/colorlogo.svg';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Constants for menu items matching the real site
    const menuItems = [
        {
            name: 'Who We Are',
            path: '/about-us',
            dropdown: [
                { name: 'About Us', path: '/about-us#about-us' },
                { name: 'Our Journey', path: '/about-us#our-journey' },
                { name: 'Leadership Team', path: '/about-us#leadership' },
            ]
        },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                {
                    name: 'Solar Design & Engineering Stamp',
                    path: '/solar-design-services',
                    icon: <Sun className="w-5 h-5" />
                },
                {
                    name: 'EV Charging Station Plans',
                    path: '/ev-charging-station',
                    icon: <Zap className="w-5 h-5" />
                },
                {
                    name: 'CAD Design & Drafting',
                    path: '/cad-design',
                    icon: <PenTool className="w-5 h-5" />
                },
                {
                    name: 'Workforce & Technical Staffing',
                    path: '/workforce-staffing',
                    icon: <Layers className="w-5 h-5" />
                },
                {
                    name: 'Indian Solar Installation Services',
                    path: '/indian-solar-installation',
                    icon: <Settings className="w-5 h-5" />
                },
                {
                    name: 'Trading & Procurement',
                    path: '/trading-procurement',
                    icon: <CheckCircle className="w-5 h-5" />
                },
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        {
            name: 'Contact Us', path: '/contact-us'
        },
        {
            name: 'How We Work',
            path: '#',
            dropdown: [
                {
                    name: 'Our Process',
                    path: '/our-processes',
                    icon: <ClipboardList className="w-5 h-5" />
                },

                {
                    name: 'Service Level Agreement (SLA)',
                    path: '/sla',
                    icon: <FileText className="w-5 h-5" />
                },
            ]
        },
        {
            name: 'Careers',
            path: '/career'
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const textColorClass = (isHome && !isScrolled) ? 'text-white' : 'text-gray-800';
    const navBgClass = (isHome && !isScrolled) ? 'bg-transparent' : 'bg-white shadow-lg';
    // Logic for logo switching
    const currentLogo = (isHome && !isScrolled) ? logoWhite : logoColor;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass} py-4`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img src={currentLogo} alt="RS Solar CAD Group" className="h-10 md:h-11 w-auto" />
                    </Link>

                    {/* Desktop Menu - Centered */}
                    <div className="hidden xl:flex flex-1 justify-center space-x-4 2xl:space-x-8 items-center px-4">
                        {menuItems.map((item) => {
                            // Check if the current main path or any of its dropdown items match the current location
                            const isMainActive = location.pathname === item.path;
                            const isDropdownActive = item.dropdown && item.dropdown.some(sub => location.pathname === sub.path.split('#')[0]);
                            const isActive = isMainActive || isDropdownActive;

                            return (
                                <div key={item.name} className="relative group">
                                    <Link
                                        to={item.path}
                                        className={`text-xs 2xl:text-sm font-bold uppercase tracking-tight 2xl:tracking-wider hover:text-rsRed transition-colors ${isActive ? 'text-rsRed' : textColorClass} flex items-center whitespace-nowrap`}
                                    >
                                        {item.name}
                                        {item.dropdown && (
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                    </Link>

                                    {/* Dropdown */}
                                    {item.dropdown && (
                                        <div className="absolute left-0 top-full pt-4 w-80 hidden group-hover:block">
                                            <div className="bg-white shadow-xl rounded-md py-2 border-t-4 border-rsRed">
                                                {item.dropdown.map(subItem => {
                                                    const isSubActive = location.pathname === subItem.path.split('#')[0] && location.hash === (subItem.path.split('#')[1] ? `#${subItem.path.split('#')[1]}` : '');
                                                    return (
                                                        <Link
                                                            key={subItem.name}
                                                            to={subItem.path}
                                                            className={`flex items-center px-4 py-3 text-sm hover:bg-gray-50 hover:text-rsRed border-b border-gray-100 last:border-0 group/item transition-colors ${isSubActive ? 'text-rsRed bg-gray-50' : 'text-gray-700'}`}
                                                        >
                                                            <span className={`mr-3 transition-colors ${isSubActive ? 'text-rsRed' : 'text-gray-400 group-hover/item:text-rsRed'}`}>
                                                                {subItem.icon}
                                                            </span>
                                                            {subItem.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Buttons - Right Aligned */}
                    <div className="hidden xl:flex items-center space-x-3">
                        <Link to="/indian-solar-installation" className="bg-[#001528] text-white px-5 py-3 rounded-full font-bold text-[13px] hover:bg-rsRed transition-all shadow-lg hover:scale-105 flex items-center gap-2 whitespace-nowrap group">
                            <Sun className="w-4 h-4 text-rsRed group-hover:text-white transition-colors" />
                            <span>Indian Solar</span>
                        </Link>
                        <Link to="/client-portal" className="bg-rsRed text-white px-5 py-3 rounded-full font-bold text-[13px] hover:bg-[#001528] transition-all shadow-lg hover:scale-105 flex items-center gap-2 whitespace-nowrap group">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>Client Portal</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-xl transition-colors ${mobileMenuOpen ? 'bg-rsRed/10 text-rsRed' : textColorClass}`}>
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white shadow-2xl absolute top-full left-0 w-full overflow-hidden border-t border-gray-100"
                    >
                        <div className="px-4 py-8 flex flex-col space-y-6 max-h-[80vh] overflow-y-auto">
                            {menuItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-50 pb-4 last:border-0">
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to={item.path}
                                            className="text-lg font-bold text-[#0d1b42] uppercase tracking-tight"
                                            onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <button
                                                onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                                                className={`p-2 rounded-xl transition-all ${dropdownOpen === item.name ? 'bg-rsRed/10 text-rsRed' : 'bg-gray-50 text-gray-400'}`}
                                            >
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {item.dropdown && dropdownOpen === item.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="pl-4 mt-4 space-y-4 border-l-2 border-rsRed/20 ml-1"
                                            >
                                                {item.dropdown.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className="flex items-center text-sm font-medium text-gray-600 py-1 hover:text-rsRed transition-colors"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.icon && (
                                                            <span className="mr-3 text-gray-400">
                                                                {subItem.icon}
                                                            </span>
                                                        )}
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            <div className="pt-4 flex flex-col gap-4">
                                <Link
                                    to="/indian-solar-installation"
                                    className="w-full bg-[#0d1b42] text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Sun className="w-5 h-5 text-rsRed" />
                                    Indian Solar Installation
                                </Link>
                                <Link
                                    to="/client-portal"
                                    className="w-full bg-rsRed text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-rsRed/20"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Client Portal
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
