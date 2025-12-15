import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <img src={logo} alt="RS Solar CAD Group" className="h-24 w-auto mb-6 bg-white rounded-lg p-2" />
                        <p className="text-gray-400 mb-6">
                            Quality Design, On Time. Providing top-tier solar and architectural design solutions.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/people/RS-Solar-CAD-Group/100093924699182/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rsRed transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://in.linkedin.com/company/rs-solar-cad-group"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rsRed transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCj9YDXvQPPZ0yukcwbloqpw/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rsRed transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-rsRed">Quick Links</h3>
                        <ul className="space-y-3">
                            {['About Us', 'Services', 'Blogs', 'Client Portal', 'Careers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-rsRed">Our Services</h3>
                        <ul className="space-y-3">
                            {['Solar Design', 'EV Permitting', 'Architecture', 'BIM'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-rsRed">Contact Us</h3>
                        <p className="text-gray-400 mb-4">
                            <span className="block text-white font-medium mb-1">Email :</span>
                            <a href="mailto:contact@rscadgroup.com" className="hover:text-rsRed transition-colors">contact@rscadgroup.com</a><br />
                            <a href="mailto:sales@rscadgroup.com" className="hover:text-rsRed transition-colors">sales@rscadgroup.com</a>
                        </p>
                        <p className="text-gray-400">
                            <span className="block text-white font-medium mb-1">Phone :</span>
                            <a href="tel:+13472188830" className="block hover:text-rsRed transition-colors">+1 347 218 8830</a>
                            <a href="tel:+919958060424" className="block hover:text-rsRed transition-colors">+91 9958060424</a>
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} RS Solar CAD Group. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
