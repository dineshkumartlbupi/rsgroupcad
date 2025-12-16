import React, { useState, useEffect } from 'react';
import videoBg from '../assets/desktop_cover_video.mp4';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: "World-Class Solar Design",
        description: "1.5GW+ experience in Residential, Commercial & Industrial Solar PV Designs."
    },
    {
        title: "Rapid Turnaround Times",
        description: "Proposals in 30 mins. AHJ-compliant Permit Plans in just 7 hours."
    },
    {
        title: "EV Charging Infrastructure",
        description: "Comprehensive permit plans and station designs for the electric future."
    },
    {
        title: "Field-Ready Accuracy",
        description: "Designers trained on real installation sites for 100% practical, error-free plans."
    },
    {
        title: "Complete Engineering Support",
        description: "Structural & Electrical calculations, PE Stamping, and As-Built drawings."
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % services.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
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
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Static Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight"
                >
                    Welcome To <span className="text-rsRed">RS Solar CAD Group</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-gray-300 mb-8 font-light uppercase tracking-widest"
                >
                    Powering the Global Solar Revolution
                </motion.p>

                {/* Slider Component */}
                <div className="h-40 w-full max-w-4xl relative mb-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center p-4"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                {services[current].title}
                            </h2>
                            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                                {services[current].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex space-x-2 mb-10 z-20">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-rsRed w-8" : "bg-gray-400 hover:bg-white"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#services" className="px-8 py-3 bg-rsRed text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        EXPLORE SERVICES
                    </a>
                    <a href="/contact-us" className="px-8 py-3 bg-white text-rsBlue font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        GET IN TOUCH
                    </a>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block" // Hidden on mobile for space
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2 relative">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
