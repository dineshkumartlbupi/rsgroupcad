import React, { useState, useEffect } from 'react';
import videoBg from '../assets/desktop_cover_video.mp4';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const sliderContent = [
    {
        id: "design",
        tabTitle: "Solar Design Services",
        title: "Precision in Every Solar Design",
        subtitle: "RS Solar CAD Group",
        description: "Experience the power of 1.5 GW+ delivered designs. We guide your projects from concept to interconnection with unmatched accuracy and speed.",
        features: [
            "1.5 GW+ Design Experience",
            "Residential & Commercial Specialists",
            "Nationwide AHJ Compliance"
        ]
    },
    {
        id: "speed",
        tabTitle: "Speed & Precision",
        title: "Unmatched Speed & Precision",
        subtitle: "Rapid Turnaround Times",
        description: "Don't let design delays stall your sales. Get proposals in 30 minutes and full permit plans in just 7 hours.",
        features: [
            "Proposals in 30 Minutes",
            "Permit Plans in 7 Hours",
            "98% First-Time Approval Rate"
        ]
    },
    {
        id: "field",
        tabTitle: "Field-Ready Experts",
        title: "Field-Ready Accuracy",
        subtitle: "The Only Field-Trained Team",
        description: "Our designers train on live installation sites. We understand rafter spacing, conduit routing, and real-world constructability.",
        features: [
            "Installation-Trained Designers",
            "Zero Construction-Phase Errors",
            "Practical Site Logic"
        ]
    },
    {
        id: "engineering",
        tabTitle: "Engineering Services",
        title: "Comprehensive Engineering",
        subtitle: "One-Stop Solution",
        description: "From structural analysis to professional engineering and BIM modeling, we handle every complex engineering challenge.",
        features: [
            "Structural & Electrical Engineering",
            "BIM & 3D Modeling",
            "EV Charging Infrastructure"
        ]
    },
    {
        id: "partnership",
        tabTitle: "Strategic Partnership",
        title: "Beyond Outsourcing",
        subtitle: "Your Strategic Engineering Partner",
        description: "We integrate seamlessly into your workflow with dedicated resident engineers and back-office support teams.",
        features: [
            "Dedicated Resident Engineers",
            "Seamless Workflow Integration",
            "Employee Exchange Programs"
        ]
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto-play logic
    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliderContent.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [current]); // Reset timer whenever slide changes (including manual clicks)

    return (
        <div className="relative h-screen w-full overflow-hidden font-sans">
            {/* Background Video/Image */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-slate-900/80"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto w-full pt-24 md:pt-32">

                {/* Main Text Content Area */}
                <div className="flex-grow flex items-center">
                    <div className="w-full max-w-4xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="flex flex-col items-start text-left"
                            >
                                <motion.span
                                    className="inline-block py-1.5 px-4 rounded-full bg-rsRed/20 border border-rsRed text-rsRed text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {sliderContent[current].subtitle}
                                </motion.span>

                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                                    {sliderContent[current].title}
                                </h1>

                                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light">
                                    {sliderContent[current].description}
                                </p>

                                {/* Feature List */}
                                <ul className="space-y-3 mb-10">
                                    {sliderContent[current].features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (idx * 0.1) }}
                                            className="flex items-center text-white text-lg font-medium"
                                        >
                                            <CheckCircle className="w-5 h-5 text-rsRed mr-3 flex-shrink-0" />
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    className="flex gap-4"
                                >
                                    <a href="#services" className="px-8 py-3.5 bg-white text-rsBlue text-base font-bold rounded hover:bg-gray-100 transition-all duration-300 shadow-xl hover:-translate-y-1">
                                        Learn More
                                    </a>
                                    <a href="/contact-us" className="px-8 py-3.5 bg-transparent border border-white text-white text-base font-bold rounded hover:bg-white/10 transition-all duration-300 shadow-lg hover:-translate-y-1">
                                        Contact Us
                                    </a>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Navigation Tabs - "Centralized" */}
                <div className="relative w-full pb-10 hidden md:block">
                    {/* Dashed Line Background */}
                    <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-gray-500/50 -translate-y-1/2 z-0"></div>

                    <div className="flex justify-between items-center relative z-10">
                        {sliderContent.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className="group flex flex-col items-center focus:outline-none"
                            >
                                {/* Dot/Indicator */}
                                <div className={`w-3 h-3 rounded-full mb-3 transition-all duration-300 ${index === current ? "bg-rsRed scale-125 ring-4 ring-rsRed/30" : "bg-gray-400 group-hover:bg-white"
                                    }`}></div>

                                {/* Label */}
                                <span className={`text-xs md:text-sm font-bold tracking-wide transition-colors duration-300 ${index === current ? "text-rsRed" : "text-gray-400 group-hover:text-white"
                                    }`}>
                                    {item.tabTitle}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* Mobile Dots */}
                <div className="flex justify-center space-x-2 md:hidden pb-8">
                    {sliderContent.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? "bg-rsRed w-8" : "bg-white/40 w-2"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
