import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Lightbulb, Settings, Target, Users, Globe, BarChart3, Scale, BrainCircuit } from 'lucide-react';

const processSteps = [
    {
        icon: <ClipboardList className="w-10 h-10" />,
        title: "Requirement Mapping",
        desc: "Validate and verify requirements, adding more details if necessary and mapping business pain points."
    },
    {
        icon: <Lightbulb className="w-10 h-10" />,
        title: "Process Vision",
        desc: "Define and elaborate all details to start the technical implementation of your project."
    },
    {
        icon: <Settings className="w-10 h-10" />,
        title: "Process Execution",
        desc: "Engineer the solution to meet your requirements and defined design process."
    },
    {
        icon: <Target className="w-10 h-10" />,
        title: "Execution Readiness",
        desc: "Make sure your product or solution is ready to be easily deployed to production."
    }
];

const benefits = [
    {
        icon: <Users className="w-12 h-12" />,
        title: "Dedicated Team"
    },
    {
        icon: <Globe className="w-12 h-12" />,
        title: "Business Continuity"
    },
    {
        icon: <BarChart3 className="w-12 h-12" />,
        title: "MIS Dashboard"
    },
    {
        icon: <Scale className="w-12 h-12" />,
        title: "No Overtime Payments"
    },
    {
        icon: <BrainCircuit className="w-12 h-12" />,
        title: "Knowledge Partner"
    }
];

const CoreOfferings = () => {
    return (
        <section className="py-16 bg-[#f8f9fa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- Section 1: Behind The Magic --- */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001528] mb-2">Back Office Support</h2>
                        <div className="w-24 h-1.5 bg-[#E6A93E] rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#414141] text-white p-8 rounded-lg shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="mb-6 p-4 bg-white/10 rounded-full text-[#E6A93E] group-hover:bg-[#E6A93E] group-hover:text-[#001528] transition-colors duration-300">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 border-b-2 border-[#E6A93E] pb-2 inline-block">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- Section 2: What You Get --- */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#001528] mb-2">What You Get</h2>
                        <div className="w-24 h-1.5 bg-[#E6A93E] rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-[#E6A93E] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center h-48 md:h-64"
                            >
                                <div className="text-[#001528] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-[#001528] font-bold text-lg md:text-xl leading-tight">
                                    {benefit.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreOfferings;
