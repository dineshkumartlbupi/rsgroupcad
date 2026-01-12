
import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Truck, ShieldCheck, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import evChargingHeroImg from '../../assets/hero/ev_charging_hero.jpg';

const BenefitCard = ({ icon, title, desc }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-[#001528]/5 rounded-lg flex items-center justify-center text-[#001528] mb-4">
            {icon}
        </div>
        <h4 className="text-lg font-bold text-[#001528] mb-3">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
    </div>
);

const EVCharging = () => {
    const title = "EV Charging Infrastructure Design & Permitting";
    const subTitle = "Intelligent, permit-ready EV charging infrastructure designs built for speed, accuracy, and approvals.";
    const image = evChargingHeroImg;

    const description = [
        "RS Solar CAD Group delivers intelligent, permit-ready EV charging infrastructure designs built for speed, accuracy, and approvals. We translate site conditions into clear, construction-ready drawings that capture access routes, electrical service points, property limits, existing structures, and optimal charger placement—eliminating ambiguity in the field.",
        "Our EVCS design process starts with a site address or survey data and evolves into a fully engineered solution. We assess power availability, load capacity, charger quantity, and equipment compatibility to develop layouts that meet current building and electrical codes while maximizing safety and efficiency."
    ];

    const features = [
        "Concept-to-construction EV charging layouts",
        "Detailed site plans, elevations, and electrical calculations",
        "Permit-ready drawing packages with high approval success",
        "Single-line diagrams and utility coordination details",
        "Manufacturer-aligned equipment specifications",
        "Post-installation As-Built documentation"
    ];

    const process = [
        { title: "Site Analysis", desc: "Assess site conditions, access routes, electrical service points, and existing structures for optimal charger placement." },
        { title: "Engineering Design", desc: "Develop fully engineered layouts with power availability, load capacity, and equipment compatibility analysis." },
        { title: "Permit Package", desc: "Create permit-ready drawing packages with site plans, elevations, electrical calculations, and single-line diagrams." },
        { title: "Approval & Documentation", desc: "Coordinate with utilities and provide post-installation As-Built documentation for compliance." }
    ];

    const benefits = [
        { icon: <Zap />, title: "Fast Approvals", desc: "Permit-ready packages designed for high approval success rates with AHJs and utilities." },
        { icon: <ShieldCheck />, title: "Code Compliant", desc: "Layouts meeting current building and electrical codes for commercial, residential, fleet, and public charging." },
        { icon: <Truck />, title: "Future-Ready", desc: "Designed for scalability and regulatory confidence, supporting faster installations and infrastructure growth." }
    ];

    return (
        <div className="pt-20 font-sans">
            <SEO
                title="EV Charging Station Design & Permitting"
                description="End-to-end EV charging station design and permitting services. ADA compliant, utility coordination, and fast approvals."
                canonical="https://rscadgroup.com/ev-charging-station"
            />
            {/* Hero Section - Electric Blue Theme */}
            <div className="relative">
                <div className="relative h-[80vh] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#001528]/95 to-[#001528]/70"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#e62e00] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
                                Expertise & Services
                            </h2>
                            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight break-words">
                                {title}
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                                {subTitle}
                            </p>

                            {/* Scrolling Ticker */}
                            <div className="mt-12 w-full overflow-hidden relative border-t border-white/10 pt-8">
                                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#001528] to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#001528] to-transparent z-10"></div>
                                <motion.div
                                    className="flex gap-8 md:gap-12 items-center text-[#e62e00] text-sm md:text-lg font-medium tracking-wider uppercase whitespace-nowrap"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                >
                                    {[...Array(4)].map((_, i) => (
                                        <React.Fragment key={i}>

                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> 98% Approval Rate</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> 170+ Clients Retention</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><FileCheck className="w-5 h-5" /> NEC/AHJ Compliant</span>
                                            <span className="text-gray-500">•</span>
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Stats Bar */}
                {/* <div className="absolute bottom-0 w-full translate-y-1/2 z-20 px-4">
                    <StatsSection />
                </div> */}
            </div>

            {/* Main Content Section */}
            <section className="pb-24 pt-48 md:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                        {/* Left Column: Description & Features */}
                        <div className="lg:w-3/5">
                            <h3 className="text-3xl font-bold text-[#001528] mb-6">EV Charging Infrastructure Design & Permitting</h3>
                            <div className="text-gray-600 text-lg leading-relaxed mb-10 space-y-4">
                                {description.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h4 className="text-xl font-bold text-[#001528] mb-6">What Sets Our EVCS Designs Apart</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {features && features.map((feature, i) => (
                                        <div key={i} className="flex items-start group">
                                            <CheckCircle className="w-5 h-5 text-[#e62e00] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Process/Approach */}
                        <div className="lg:w-2/5 w-full">
                            <div className="bg-[#001528] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e62e00] opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                                <h3 className="text-2xl font-bold mb-8 relative z-10">Our Approach</h3>
                                <div className="space-y-8 relative z-10">
                                    {process && process.map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e62e00] text-white flex items-center justify-center font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    {benefits && (
                        <div className="mb-24">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-[#001528] mb-4">Why Choose Us</h3>
                                <div className="w-20 h-1.5 bg-[#e62e00] rounded-full mx-auto mb-8"></div>
                                <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-4">
                                    <p>
                                        Designed for scalability and regulatory confidence, our EVCS solutions support commercial, residential, fleet, and public charging projects—ensuring faster approvals, smoother installations, and future-ready infrastructure.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {benefits.map((benefit, i) => (
                                    <BenefitCard key={i} {...benefit} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="bg-[#1f3366] rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-5 pattern-grid-lg"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Get Your EV Project Rolling</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Partner with us for precise, code-compliant EV charging station plans.
                        </p>
                        <Link to="/contact-us" className="relative z-10 inline-flex items-center justify-center bg-[#e62e00] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-[#e62e00] transition-all duration-300 shadow-xl">
                            Request a Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EVCharging;
