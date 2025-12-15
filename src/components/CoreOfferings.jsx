import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OfferingSection = ({ title, description, image, link, alignRight }) => {
    return (
        <div className={`flex flex-col ${alignRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-16`}>
            <div className="md:w-1/2 w-full">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-80 md:h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500"></div>
                </div>
            </div>
            <div className="md:w-1/2 w-full space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-geonBlue relative inline-block">
                    {title}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-rsRed rounded-full"></span>
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                    {description}
                </p>
                <Link to={link || "#"} className="inline-flex items-center text-rsRed font-bold hover:text-green-800 transition-colors group">
                    READ MORE
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

const CoreOfferings = () => {
    return (
        <section id="solutions" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold text-rsRed uppercase tracking-widest mb-2">Our Solutions</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-geonBlue">Our Core Offerings</h3>
                    <div className="w-24 h-1 bg-rsRed mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-12">
                    <OfferingSection
                        title="Solar Designing"
                        description="RS Solar CAD Group delivers precise, code-compliant solar designs for residential and commercial projects. Ensuring efficiency, accuracy, and seamless project execution. We offer permit plan sets, CAD drafting, and engineering layouts."
                        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        link="/solar-design-services"
                        alignRight={false}
                    />

                    <OfferingSection
                        title="EV Permit / Charging Station"
                        description="Expert EV permit, charging station layout, and approval services. We ensure regulatory compliance, safety, and fast turnaround for residential and commercial projects. Drive into sustainability with our tailored designs."
                        image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        link="/ev-permit-charging-station"
                        alignRight={true}
                    />

                    <OfferingSection
                        title="Architecture Designing"
                        description="Specialized architectural designing for solar-integrated structures. Functional, compliant, and visually appealing layouts for homes, businesses, and industrial spaces. We integrate energy efficiency directly into the building's DNA."
                        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        link="/architecture-designing"
                        alignRight={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default CoreOfferings;
