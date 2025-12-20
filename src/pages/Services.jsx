import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Zap, PenTool, Users, Wrench, ShoppingCart } from 'lucide-react';
import solarDesignImg from '../assets/hero/solar_design_hero.png';
import evChargingImg from '../assets/hero/ev_charging_hero.png';
import cadDesignImg from '../assets/hero/cad_design_hero.png';
import workforceImg from '../assets/hero/workforce_staffing_hero.png';
import solarInstallationImg from '../assets/hero/solar_installation_hero.png';
import tradingImg from '../assets/hero/trading_procurement_hero.png';

const servicesList = [
    {
        title: "Solar Design & Engineering Stamps",
        description: "Comprehensive solar design services from residential to commercial installations, including permit plans, as-built drawings, and professional engineering stamps for all 50 states.",
        icon: <Sun className="w-12 h-12" />,
        link: "/solar-design-services",
        image: solarDesignImg,
        color: "from-yellow-500 to-orange-500",
        highlights: ["12-24H Turnaround", "50-State PE Stamps", "NEC Compliant"]
    },
    {
        title: "EV Charging Station Plans",
        description: "End-to-end permitting and design for EV charging infrastructure. From site assessment to final approval, we handle all aspects of your EV charging station project.",
        icon: <Zap className="w-12 h-12" />,
        link: "/ev-charging-station",
        image: evChargingImg,
        color: "from-blue-500 to-cyan-500",
        highlights: ["ADA Compliant", "Utility Coordination", "Fast Permits"]
    },
    {
        title: "CAD Design & Drafting",
        description: "High-precision CAD drafting services as a seamless extension of your engineering team. Expert in AutoCAD, Revit, and SketchUp for architectural, structural, and MEP projects.",
        icon: <PenTool className="w-12 h-12" />,
        link: "/cad-design",
        image: cadDesignImg,
        color: "from-purple-500 to-pink-500",
        highlights: ["99.9% Accuracy", "BIM Modeling", "Rapid Turnaround"]
    },
    {
        title: "Workforce & Technical Staffing",
        description: "Access to pre-vetted solar designers, CAD drafters, and engineering professionals. Scale your team on-demand with our flexible staffing solutions.",
        icon: <Users className="w-12 h-12" />,
        link: "/workforce-staffing",
        image: workforceImg,
        color: "from-green-500 to-teal-500",
        highlights: ["Pre-Vetted Talent", "Flexible Scaling", "Quick Onboarding"]
    },
    {
        title: "Solar Installation Services (India)",
        description: "Complete solar installation services across India, from residential rooftops to large-scale commercial projects. Expert installation with ongoing support and maintenance.",
        icon: <Wrench className="w-12 h-12" />,
        link: "/indian-solar-installation",
        image: solarInstallationImg,
        color: "from-red-500 to-orange-500",
        highlights: ["Turnkey Solutions", "Quality Assurance", "Post-Install Support"]
    },
    {
        title: "Trading & Procurement",
        description: "Strategic sourcing of solar panels, inverters, and electrical components. Leverage our global network to secure competitive pricing and reliable supply chains.",
        icon: <ShoppingCart className="w-12 h-12" />,
        link: "/trading-procurement",
        image: tradingImg,
        color: "from-indigo-500 to-blue-500",
        highlights: ["Global Network", "Competitive Pricing", "Quality Verified"]
    }
];

const Services = () => {
    return (
        <div className="pt-20 bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-geonBlue to-blue-700 py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6">Our Services</h1>
                    <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                        Comprehensive engineering and design solutions for a sustainable future.
                    </p>
                    <p className="mt-4 text-lg text-blue-200 max-w-3xl mx-auto">
                        From solar design to workforce staffing, we provide end-to-end services that power your renewable energy projects.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-50 transition-opacity`}></div>
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                                        <div className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-geonBlue transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.highlights.map((highlight, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-blue-50 text-geonBlue text-sm font-medium rounded-full border border-blue-100"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center text-rsRed font-bold text-lg hover:text-green-800 transition-colors group/link"
                                    >
                                        LEARN MORE
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RS Solar CAD Group?</h2>
                        <div className="w-24 h-1.5 bg-rsRed rounded-full mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We combine technical expertise with industry-leading turnaround times to deliver exceptional results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Projects Completed", color: "text-yellow-500" },
                            { number: "12-24H", label: "Average Turnaround", color: "text-blue-500" },
                            { number: "98%", label: "First-Time Approval", color: "text-green-500" },
                            { number: "50", label: "States Covered", color: "text-purple-500" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                                <div className="text-gray-700 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-geonBlue to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Let's discuss how our services can accelerate your renewable energy projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center justify-center bg-rsRed text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Contact Us
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/about-geon"
                            className="inline-flex items-center justify-center bg-white text-geonBlue px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Learn About Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
