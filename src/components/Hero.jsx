import React from 'react';
import videoBg from '../assets/desktop_cover_video.mp4';

const Hero = () => {
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
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
                    Welcome To <span className="text-white">RS Solar CAD Group</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
                    Solar Designing + EV Permit / Charging Station + Architecture Designing + BIM + Structural Engineering + Electrical SLD & Permit Drawings
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                    <a href="#services" className="px-8 py-3 bg-rsRed text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        EXPLORE SERVICES
                    </a>
                    <a href="/contact-us" className="px-8 py-3 bg-white text-rsBlue font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        GET IN TOUCH
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
