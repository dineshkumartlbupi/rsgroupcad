import React from 'react';
import Hero from '../components/Hero';
import InteractiveServices from '../components/InteractiveServices';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreOfferings from '../components/CoreOfferings';
import OurProcess from '../components/OurProcess';
import Sustainability from '../components/Sustainability';
import Overview from '../components/Overview';
import GreenEra from '../components/GreenEra';
import AnimatedBackground from '../components/AnimatedBackground';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const Home = () => {
    return (
        <>
            <Hero />

            <InteractiveServices />

            <section className="bg-gradient-to-b from-gray-50 to-white  text-center px-4 relative overflow-hidden">
                <AnimatedBackground />
                <WhyChooseUs />
            </section>

            <CoreOfferings />

            <SectionWrapper>
                <OurProcess />
            </SectionWrapper>

            <SectionWrapper>
                <Overview />
            </SectionWrapper>

            {/* Replaced generic sustainability with specific RS Solar text or kept generic if fitting */}
            <Sustainability />

            <SectionWrapper>
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full opacity-50 z-0"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-rsBlue mb-8">Ready to Start Your Project?</h2>
                        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                            Our team ensures quick turnaround times and precise, well-documented plan sets, helping you move forward without unnecessary delays.
                        </p>
                        <Link to="/contact-us" className="inline-block bg-rsBlue text-white px-12 py-4 rounded-full font-bold hover:bg-rsRed transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                            CONTACT US TODAY
                        </Link>
                    </div>
                </section>
            </SectionWrapper>

            <SectionWrapper>
                <GreenEra />
            </SectionWrapper>
        </>
    );
};

export default Home;
