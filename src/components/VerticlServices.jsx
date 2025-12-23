import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Building2, Zap, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Proposal Design",
        subtitle: "Collect Site Data Faster",
        icon: Smartphone,
        color: "bg-white",
        textColor: "text-gray-800",
        accentColor: "bg-rsRed",
        features: [
            "AI-driven site analysis",
            "Real-time data capture",
            "Instant roof measurements",
            "Automated shading analysis"
        ],
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        route: "/solar-design-services"
    },
    {
        title: "Engineering Plan Sets",
        subtitle: "Complete & Compliant",
        icon: FileText,
        color: "bg-[#2d5016]",
        textColor: "text-white",
        accentColor: "bg-yellow-500",
        features: [
            "Permit-ready plan sets",
            "AHJ-specific customization",
            "As-built drawings",
            "Revision management"
        ],
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        route: "/solar-design-services"
    },
    {
        title: "Structural Engineering",
        subtitle: "Built to Last",
        icon: Building2,
        color: "bg-[#1a3a52]",
        textColor: "text-white",
        accentColor: "bg-yellow-500",
        features: [
            "PE-stamped structural calculations",
            "Wind & snow load analysis",
            "Roof load certifications",
            "Foundation design"
        ],
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        route: "/solar-design-services"
    },
    {
        title: "Electrical Engineering",
        subtitle: "Power Your Vision",
        icon: Zap,
        color: "bg-[#f59e0b]",
        textColor: "text-white",
        accentColor: "bg-[#1a3a52]",
        features: [
            "NEC-compliant designs",
            "Single-line diagrams",
            "Load calculations",
            "Interconnection support"
        ],
        buttonColor: "bg-[#1a3a52] hover:bg-[#2a4a62]",
        route: "/solar-design-services"
    },
    {
        title: "Permit Approval",
        subtitle: "Hassle-Free Approvals",
        icon: CheckCircle,
        color: "bg-white",
        textColor: "text-gray-800",
        accentColor: "bg-rsRed",
        features: [
            "Permit submission support",
            "AHJ coordination",
            "Revision handling",
            "Expedited processing"
        ],
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        route: "/solar-design-services"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const VerticleServices = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rsRed font-bold tracking-widest uppercase text-sm"
                    >
                        Our Service Offerings
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-rsBlue mt-3 mb-6"
                    >
                        Comprehensive Solar Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg text-gray-600 font-light"
                    >
                        From site survey to permit approval, we provide end-to-end engineering services that streamline your solar projects.
                    </motion.p>
                </div>

                {/* Vertical Panel Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                >
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`${service.color} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border-4 border-gray-200 relative flex flex-col`}
                            >
                                {/* Icon Badge */}
                                <div className="flex justify-center pt-8 pb-4">
                                    <div className={`${service.accentColor} w-20 h-20 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                                        <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                                    </div>
                                </div>
                                {/* Title Section */}
                                <div className="px-6 pb-6 text-center">
                                    <h3 className={`text-2xl font-bold ${service.textColor} mb-2`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm font-semibold ${service.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'} mb-4`}>
                                        {service.subtitle}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="px-6 pb-6 flex-1">
                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-start text-sm ${service.textColor === 'text-white' ? 'text-gray-100' : 'text-gray-700'}`}>
                                                <span className={`inline-block w-1.5 h-1.5 rounded-full ${service.accentColor} mt-2 mr-3 flex-shrink-0`}>

                                                </span>
                                                <span className="font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* CTA Button */}
                                <div className="px-6 pb-8 mt-auto">
                                    <button
                                        onClick={() => navigate(service.route)}
                                        className={`w-full ${service.buttonColor} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg cursor-pointer`}
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-rsBlue to-[#1a3a52] rounded-2xl p-10 shadow-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Experience the RS Difference?
                        </h3>
                        <p className="text-gray-200 text-lg mb-6 max-w-2xl mx-auto">
                            Join hundreds of solar professionals who trust RS Solar CAD Group for their design and engineering needs.
                        </p>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                            Get Started Today
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VerticleServices;
