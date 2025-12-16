import React, { useState, useEffect } from 'react';
import videoBg from '../assets/desktop_cover_video.mp4';
import { motion, AnimatePresence } from 'framer-motion';

const sliderContent = [
    {
        title: "RS Solar CAD Group",
        subtitle: "Powering the Global Solar Revolution",
        description: "1.5 GW+ of high-quality solar designs delivered across the United States since 2020."
    },
    {
        title: "Unmatched Speed & Precision",
        subtitle: "Rapid Turnaround Times",
        description: "Proposals in 30 minutes. AHJ-compliant permit plans delivered in just 7 hours."
    },
    {
        title: "Field-Ready Accuracy",
        subtitle: "The Only Field-Trained Team",
        description: "Our designers train on live installation sites for 10x more accurate, error-free plans."
    },
    {
        title: "Beyond Outsourcing",
        subtitle: "Your Strategic Engineering Partner",
        description: "We provide resident engineers, dedicated back-office support, and seamless workflow integration."
    },
    {
        title: "Comprehensive Engineering",
        subtitle: "One-Stop Solution",
        description: "Residential & Commercial Solar, EV Charging, BIM, Structural Engineering, and PE Stamping."
    },
    {
        title: "Proven Impact",
        subtitle: "Real-World Installation Experience",
        description: "Over 5MW of commercial and residential projects physically installed by our own teams in 2025."
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliderContent.length);
        }, 6000);
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
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

                {/* Expanded Slider Component */}
                <div className="w-full max-w-6xl relative mb-12 min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col items-center justify-center p-6"
                        >
                            <motion.span
                                className="inline-block py-1 px-3 rounded-full bg-rsRed/20 border border-rsRed/50 text-rsRed text-sm md:text-base font-bold tracking-wider mb-4 uppercase backdrop-blur-sm"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {sliderContent[current].subtitle}
                            </motion.span>

                            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                                {sliderContent[current].title}
                            </h1>

                            <p className="text-xl md:text-3xl text-gray-100 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md">
                                {sliderContent[current].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex space-x-3 mb-12 z-20">
                    {sliderContent.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-2 rounded-full transition-all duration-500 ${index === current ? "bg-rsRed w-12" : "bg-white/40 hover:bg-white w-4"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <a href="#services" className="px-10 py-4 bg-rsRed text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 ring-2 ring-rsRed ring-offset-2 ring-offset-black">
                        EXPLORE SERVICES
                    </a>
                    <a href="/contact-us" className="px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-rsBlue transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-sm">
                        GET IN TOUCH
                    </a>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2 relative group hover:border-white transition-colors">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-white rounded-full group-hover:bg-rsRed transition-colors"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
