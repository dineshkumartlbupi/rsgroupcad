import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    // Constants for menu items matching the real site
    const menuItems = [
        { name: 'About Us', path: '/about-geon' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'Solar Design Services', path: '/solar-design-services' },
                { name: 'EV Permit / Charging -Station', path: '/ev-permit-charging-station' },
                { name: 'Architecture Designing', path: '/architecture-designing' },
                { name: 'BIM', path: '/bim' },
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Client Portal', path: '/client-portal' },
        { name: 'Careers', path: '/career' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    // If not home, always show white background navbar or similar, adjust logic as needed.
    // Real site might have specific behavior. For now, keep scroll logic but maybe default to dark text if not home.
    const textColorClass = (isHome && !isScrolled) ? 'text-white' : 'text-gray-800';
    const navBgClass = (isHome && !isScrolled) ? 'bg-transparent' : 'bg-white shadow-lg';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass} py-4`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img src={logo} alt="RS Solar CAD Group" className="h-16 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`text-sm font-medium uppercase tracking-wider hover:text-rsRed transition-colors ${textColorClass} flex items-center`}
                                >
                                    {item.name}
                                    {item.dropdown && (
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    )}
                                </Link>

                                {/* Dropdown */}
                                {item.dropdown && (
                                    <div className="absolute left-0 top-full pt-4 w-64 hidden group-hover:block">
                                        <div className="bg-white shadow-xl rounded-md py-2 border-t-4 border-rsRed">
                                            {item.dropdown.map(subItem => (
                                                <Link
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-rsRed border-b border-gray-100 last:border-0"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Button */}
                    < div className="hidden lg:flex" >
                        <Link to="/contact-us" className="bg-rsRed text-white px-6 py-2 rounded-full font-medium hover:bg-red-800 transition-colors shadow-md transform hover:scale-105 duration-200">
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-md ${textColorClass}`}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white shadow-xl absolute top-full left-0 w-full px-4 pt-2 pb-6 flex flex-col space-y-4">
                    {menuItems.map((item) => (
                        <div key={item.name}>
                            <div className="flex justify-between items-center">
                                <Link
                                    to={item.path}
                                    className="text-base font-medium text-gray-800 uppercase"
                                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.dropdown && (
                                    <button onClick={() => setDropdownOpen(dropdownOpen === item.name ? null : item.name)} className="p-2">
                                        <svg className={`w-4 h-4 transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                )}
                            </div>
                            {item.dropdown && dropdownOpen === item.name && (
                                <div className="pl-4 mt-2 space-y-2 border-l-2 border-green-100 ml-1">
                                    {item.dropdown.map(subItem => (
                                        <Link
                                            key={subItem.name}
                                            to={subItem.path}
                                            className="block text-sm text-gray-600"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link to="/contact-us" className="text-center w-full bg-rsRed text-white px-6 py-3 rounded-md font-medium" onClick={() => setMobileMenuOpen(false)}>
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
