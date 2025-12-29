import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift, CheckCircle2 } from 'lucide-react';
import newYearImage from '../assets/new_year_celebration.png';
import solarDesignBg from '../assets/hero/solar_design_hero.png';

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay on every page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const services = [
        'Solar Design & Engineering',
        'EV Charging Stations',
        'CAD Design & Drafting',
        'Workforce Staffing'
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
                    />

                    {/* Popup Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 60 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 60 }}
                        transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
                    >
                        <div className="relative max-w-3xl w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-amber-500/20">
                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-sm border border-white/20"
                                aria-label="Close popup"
                            >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                            {/* Split Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-h-[90vh] overflow-hidden">
                                {/* Left Side - Content */}
                                <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center relative overflow-y-auto max-h-[90vh] md:max-h-none">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-3xl"></div>
                                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl"></div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative z-10"
                                    >
                                        {/* Badge */}
                                        <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                                            </span>
                                            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                                            <span className="text-amber-300 text-xs sm:text-sm font-semibold">Exclusive 2026 Offer</span>
                                        </div>

                                        {/* Heading */}
                                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent leading-tight">
                                            Scale Your Operations in 2026
                                        </h2>

                                        {/* Discount Banner with Solar Background */}
                                        <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-3 sm:mb-4 shadow-2xl border border-amber-400/40 overflow-hidden group">
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                style={{ backgroundImage: `url(${solarDesignBg})` }}
                                            ></div>

                                            {/* Gradient Overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/95 via-orange-600/90 to-red-600/85"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <motion.div
                                                    animate={{ scale: [1, 1.02, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="flex items-center gap-2 sm:gap-3 mb-1"
                                                >
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                                                        <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                                    </div>
                                                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-lg">FLAT 30% OFF</span>
                                                </motion.div>
                                                <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                                                    On Your First Month of Engineering & Design Services
                                                </p>
                                                <div className="mt-3 flex items-center gap-3">
                                                    <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full border border-white/10">
                                                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                                        <span className="text-white/90 text-[10px] sm:text-xs font-medium uppercase tracking-wider">Valid until Jan 31st</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Services List */}
                                        <div className="mb-3 sm:mb-4">
                                            <h3 className="text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
                                                Valid For New Partners:
                                            </h3>
                                            <div className="space-y-1.5 sm:space-y-2">
                                                {services.map((service, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.3 + index * 0.1 }}
                                                        className="flex items-start gap-2"
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                                        <span className="text-white/90 text-xs sm:text-sm">{service}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.02, brightness: 1.1 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleClose}
                                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-3 sm:py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base border-t border-white/20"
                                        >
                                            Claim Your 2026 Discount
                                        </motion.button>

                                        {/* Subtext */}
                                        <p className="text-white/60 text-xs text-center mt-2 sm:mt-3">
                                            Quality Design, On Time
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Right Side - Image (Hidden on mobile) */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="hidden md:block relative h-full min-h-[450px]"
                                >
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900/50 z-10"></div>

                                    {/* Image */}
                                    <img
                                        src={newYearImage}
                                        alt="New Year 2025 Celebration"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Decorative Glow */}
                                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl"></div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
