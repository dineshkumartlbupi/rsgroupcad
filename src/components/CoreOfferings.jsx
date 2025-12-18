import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Lightbulb, Settings, Target, Users, Globe, BarChart3, Scale, BrainCircuit } from 'lucide-react';

const processSteps = [
    {
        icon: <ClipboardList className="w-10 h-10" />,
        title: "Discovery & Alignment",
        desc: "Deep dive into your operational needs to map precise requirements and identify key efficiency drivers."
    },
    {
        icon: <Lightbulb className="w-10 h-10" />,
        title: "Strategic Planning",
        desc: "Formulating a comprehensive technical roadmap and workflow design tailored to your specific project goals."
    },
    {
        icon: <Settings className="w-10 h-10" />,
        title: "Precision Engineering",
        desc: "Executing high-fidelity designs and engineering solutions with rigorous quality assurance protocols."
    },
    {
        icon: <Target className="w-10 h-10" />,
        title: "Deployment & Scale",
        desc: "Seamless integration of deliverables into your workflow, ensuring rapid scalability and market readiness."
    }
];

const benefits = [
    {
        icon: <Users className="w-12 h-12" />,
        title: "Elite Engineering Talent"
    },
    {
        icon: <Globe className="w-12 h-12" />,
        title: "Uninterrupted Operations"
    },
    {
        icon: <BarChart3 className="w-12 h-12" />,
        title: "Real-Time Intelligence"
    },
    {
        icon: <BrainCircuit className="w-12 h-12" />,
        title: "Strategic Partnership"
    }
];

const CoreOfferings = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- Section 1: Back Office Support --- */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-left mb-16"
                    >
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#001528] relative inline-block">
                            Operational Roadmap
                            <span className="block h-1.5 w-24 bg-[#FFB800] mt-4 rounded-full"></span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#2D2D2D] p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#001528] group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 duration-500"></div>

                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 mx-auto group-hover:bg-[#001528] transition-colors duration-300 relative z-10">
                                    <div className="text-[#FFB800] group-hover:text-white transition-colors duration-300">
                                        {step.icon}
                                    </div>
                                </div>

                                <h4 className="text-xl font-bold text-white text-center mb-4">{step.title}</h4>
                                <p className="text-gray-400 text-center text-sm leading-relaxed">
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
                        className="text-left mb-16"
                    >
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#001528] relative inline-block">
                            Strategic Advantages
                            <span className="block h-1.5 w-24 bg-[#FFB800] mt-4 rounded-full"></span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-[#FFB800] p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-center text-center group h-64 border border-yellow-400 relative"
                            >
                                <div className="w-20 h-20 rounded-full bg-black/10 flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                                    <div className="text-black group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#001528] group-hover:text-black transition-colors duration-300">
                                    {benefit.title}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreOfferings;
