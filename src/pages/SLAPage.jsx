import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MessageSquare, RefreshCw, Lock, FileText, CheckCircle2 } from 'lucide-react';

const SLAPage = () => {
    useEffect(() => {
        document.title = "Service Level Agreement | RS Solar CAD Group";
    }, []);

    const slaFeatures = [
        {
            icon: <Clock className="w-8 h-8 text-rsRed" />,
            title: "Swift Turnaround Time (TAT)",
            description: "We understand that time-to-permit is critical for your project success.",
            items: [
                "Residential Solar Designs: Within 24 Hours",
                "Commercial (C&I) Designs: 48 - 72 Hours",
                "Engineering Stamps (PE): 2 - 3 Business Days",
                "As-Built Drawings: Within 24 Hours"
            ]
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-rsRed" />,
            title: "Uncompromising Quality",
            description: "Our multi-tier review process ensures your plans are approval-ready.",
            items: [
                "99% Accuracy Rate Guarantee",
                "Full Compliance with NEC & Local AHJ Codes",
                "Triple-Check Quality Assurance Protocol",
                "Standardized Documentation Formats"
            ]
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-rsRed" />,
            title: "Proactive Communication",
            description: "Stay informed at every stage of the design lifecycle.",
            items: [
                "24/7 Dedicated Account Support",
                "First Response Guarantee within 4 Hours",
                "Real-time Project Tracking Updates",
                "Direct Access to Lead Designers"
            ]
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-rsRed" />,
            title: "Efficient Revision Policy",
            description: "Adjustments made quickly to keep your projects moving forward.",
            items: [
                "Unlimited Minor Revisions (Free of Charge)",
                "Revision Turnaround: Within 12 Hours",
                "Clear Change-Management Documentation",
                "Priority Support for AHJ Corrections"
            ]
        }
    ];

    const additionalTerms = [
        {
            title: "Data Confidentiality",
            icon: <Lock className="w-6 h-6" />,
            text: "All project data, site information, and intellectual property remain strictly confidential. We utilize enterprise-grade encryption and secure servers for all data transfers."
        },
        {
            title: "Resource Scalability",
            icon: <RefreshCw className="w-6 h-6" />,
            text: "Our workforce staffing ensures we can scale our outputs to match your seasonal demand peaks without compromising on delivery times."
        },
        {
            title: "Professional Indemnity",
            icon: <ShieldCheck className="w-6 h-6" />,
            text: "All engineering reviews and professional stamps are backed by comprehensive insurance and professional liability coverage."
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-[#001528] py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-rsRed rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-rsRed text-sm font-semibold mb-6">
                            <FileText className="w-4 h-4" />
                            Reliability Guaranteed
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                            Service Level <span className="text-rsRed">Agreement</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            At RS Solar CAD Group, we don't just deliver designs; we deliver commitments.
                            Our SLA ensures transparency, speed, and elite quality for every partner.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Core Commitments Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {slaFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-rsRed/20 transition-all duration-300"
                            >
                                <div className="p-3 bg-gray-50 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#001528] mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-3">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Secondary Terms */}
            <section className="py-20 bg-[#001528] text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Standards</h2>
                        <div className="h-1 w-20 bg-rsRed mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {additionalTerms.map((term, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 text-rsRed">
                                    {term.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-4">{term.title}</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {term.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 text-center">
                <div className="max-w-3xl mx-auto bg-white p-12 rounded-[2rem] shadow-2xl border border-gray-100">
                    <h2 className="text-3xl font-bold text-[#001528] mb-6">Need a custom SLA?</h2>
                    <p className="text-gray-600 mb-10 text-lg">
                        For partners with high-volume requirements or enterprise workflows, we offer tailored agreements to meet specific operational metrics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact-us"
                            className="px-8 py-4 bg-rsRed text-white rounded-full font-bold shadow-lg shadow-rsRed/20 hover:bg-red-800 transition-all hover:scale-105"
                        >
                            Talk to our team
                        </a>
                        <button
                            onClick={() => window.print()}
                            className="px-8 py-4 bg-[#001528] text-white rounded-full font-bold hover:bg-[#1f3366] transition-all hover:scale-105"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SLAPage;
