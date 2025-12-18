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
import ClientSlider from '../components/ClientSlider';

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


            <SectionWrapper>
                {/* Client Slider Section */}
                <div className="mt-0">
                    <ClientSlider />
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <CoreOfferings />
            </SectionWrapper>
            <SectionWrapper>
                <OurProcess />
            </SectionWrapper>

            <SectionWrapper>
                <Overview />
            </SectionWrapper>

            {/* Replaced generic sustainability with specific RS Solar text or kept generic if fitting */}
            <Sustainability />



            <SectionWrapper>
                <GreenEra />
            </SectionWrapper>

        </>
    );
};

export default Home;
