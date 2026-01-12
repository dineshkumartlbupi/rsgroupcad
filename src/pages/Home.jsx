import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import InteractiveServices from '../components/InteractiveServices';
import WhyChooseUs from '../components/WhyChooseUs';
import CoreOfferings from '../components/CoreOfferings';
import Sustainability from '../components/Sustainability';
import Overview from '../components/Overview';
import GreenEra from '../components/GreenEra';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import ClientSlider from '../components/ClientSlider';
import VerticleServices from '../components/VerticlServices';

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
            <SEO
                title="Home"
                description="RS Solar CAD Group - Quality Design, On Time. Premier source for Solar Design, EV Permitting, and Architectural solutions."
                canonical="https://rscadgroup.com/"
            />
            {/* Hero Section - Introduction */}
            <Hero />

            {/* Services Suite - Stats + 6 Main Services */}
            <InteractiveServices />

            {/* Detailed Service Offerings - 5 Vertical Panels with Features */}
            <VerticleServices />

            {/* Why Choose Us - Key Differentiators with Images */}
            <section className="bg-gradient-to-b from-gray-50 to-white text-center px-4 relative overflow-hidden">
                <AnimatedBackground />
                <WhyChooseUs />
            </section>

            {/* Operational Roadmap + Strategic Advantages */}
            <SectionWrapper>
                <CoreOfferings />
            </SectionWrapper>

            {/* Client Testimonials/Logos */}
            <SectionWrapper>
                <div className="mt-0">
                    <ClientSlider />
                </div>
            </SectionWrapper>

            {/* Our Process */}
            {/* <SectionWrapper>
                <OurProcess />
            </SectionWrapper> */}

            {/* Company Overview */}
            <SectionWrapper>
                <Overview />
            </SectionWrapper>

            {/* Sustainability Message */}
            <Sustainability />

            {/* Final CTA */}
            <SectionWrapper>
                <GreenEra />
            </SectionWrapper>

        </>
    );
};

export default Home;
