import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Zap, Truck, ShieldCheck, Activity, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatsSection from '../../components/StatsSection';

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
    const title = "EV Charging Station Plans";
    const subTitle = "Comprehensive design and permitting for residential & commercial EV infrastructure.";
    const image = "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800";

    const description = [
        "The transition to electric mobility is accelerating, and robust infrastructure is the backbone of this shift. RS Solar CAD Group provides end-to-end design and engineering services for Electric Vehicle Service Equipment (EVSE) installations. We support electrical contractors, developers, and homeowners by delivering permit-ready plan sets that meet all NEC and local utility requirements.",
        "From single-family home Level 2 chargers to complex commercial fleet depots with DC Fast Charging (DCFC), we handle the technical heavy lifting. Our team ensures your infrastructure is safe, compliant, and optimized for future scalability.",
        "Our capabilities include site feasibility studies, ADA compliance planning, detailed electrical load calculations, and single-line diagrams (SLDs). We also coordinate directly with utilities to ensure your grid connection is sized correctly for your current and future charging needs."
    ];

    const features = [
        "Site Feasibility & Layouts",
        "Electrical Load Calculations",
        "Single Line Diagrams (SLD)",
        "ADA Compliance Design",
        "Permit Application Management",
        "Utility Service Planning"
    ];

    const process = [
        { title: "Site Assessment", desc: "Evaluate electrical capacity and physical location for optimal charger placement." },
        { title: "Load Calculation", desc: "Determine existing load and necessary upgrades to support Level 2 or DC Fast Chargers." },
        { title: "Plan Generation", desc: "Draft detailed site plans and electrical diagrams adhering to NEC Article 625." },
        { title: "Permit Support", desc: "Provide all documentation required for AHJ and utility approval." }
    ];

    const benefits = [
        { icon: <Zap />, title: "Scalable Solutions", desc: "Designs that allow for future expansion as EV adoption grows." },
        { icon: <ShieldCheck />, title: "Regulatory Expertise", desc: "Deep understanding of ADA and local zoning laws for EV stations." },
        { icon: <Truck />, title: "Fleet Ready", desc: "Specialized experience in high-capacity charging for commercial fleets." }
    ];

    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            {/* Hero Section */}
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
                            <h2 className="text-[#E6A93E] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
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
                                    className="flex gap-8 md:gap-12 items-center text-[#E6A93E] text-sm md:text-lg font-medium tracking-wider uppercase whitespace-nowrap"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                >
                                    {[...Array(4)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <span className="flex items-center gap-2"><Activity className="w-5 h-5" /> 12-24H Turnaround</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> 98% Approval Rate</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> 50-State PE Stamps</span>
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
                <div className="absolute bottom-0 w-full translate-y-1/2 z-20 px-4">
                    <StatsSection />
                </div>
            </div>

            {/* Main Content Section */}
            <section className="pb-24 pt-48 md:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                        {/* Left Column: Description & Features */}
                        <div className="lg:w-3/5">
                            <h3 className="text-3xl font-bold text-[#001528] mb-6">Service Overview</h3>
                            <div className="text-gray-600 text-lg leading-relaxed mb-10 space-y-4">
                                {description.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h4 className="text-xl font-bold text-[#001528] mb-6">Key Capabilities</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {features && features.map((feature, i) => (
                                        <div key={i} className="flex items-start group">
                                            <CheckCircle className="w-5 h-5 text-[#E6A93E] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Process/Approach */}
                        <div className="lg:w-2/5 w-full">
                            <div className="bg-[#001528] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6A93E] opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                                <h3 className="text-2xl font-bold mb-8 relative z-10">Our Approach</h3>
                                <div className="space-y-8 relative z-10">
                                    {process && process.map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E6A93E] text-[#001528] flex items-center justify-center font-bold text-sm">
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
                                <div className="w-20 h-1.5 bg-[#E6A93E] rounded-full mx-auto mb-8"></div>
                                <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-4">
                                    <p>
                                        Clients trust RS Solar CAD Group for our technical proficiency and ability to navigate complex regulatory landscapes. We ensure your EV projects are designed right the first time.
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
                    <div className="bg-[#E6A93E] rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#001528] opacity-5 pattern-grid-lg"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-6 relative z-10">Get Your EV Project Rolling</h2>
                        <p className="text-[#001528]/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Partner with us for precise, code-compliant EV charging station plans.
                        </p>
                        <Link to="/contact-us" className="relative z-10 inline-flex items-center justify-center bg-[#001528] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-[#001528] transition-all duration-300 shadow-xl">
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
