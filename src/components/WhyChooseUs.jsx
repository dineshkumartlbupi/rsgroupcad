import React from 'react';
import { CheckCircle, Clock, Leaf, Settings, FileCheck, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Expertise in BIM, CAD & GIS",
        description: "We excel in delivering precision, innovation, and efficiency for every project through advanced engineering solutions.",
        icon: <Layers className="w-8 h-8 text-white" />
    },
    {
        title: "Efficiency & Precision",
        description: "Through precise designs and advanced technology, we ensure high-quality results delivered faster and more reliably.",
        icon: <CheckCircle className="w-8 h-8 text-white" />
    },
    {
        title: "Tailored Solutions",
        description: "We adapt our designs and services to meet unique project requirements with maximum efficiency.",
        icon: <Settings className="w-8 h-8 text-white" />
    },
    {
        title: "Sustainability",
        description: "Creating eco-friendly, energy-efficient solutions that promote long-term environmental benefits.",
        icon: <Leaf className="w-8 h-8 text-white" />
    },
    {
        title: "Error-Free Documentation",
        description: "We provide precise, well-documented plan sets that minimize delays or rejections during approval.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Quick Turnaround",
        description: "Our team ensures valid and fast delivery, helping you move forward without unnecessary delays.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg font-bold text-rsRed uppercase tracking-widest mb-2"
                    >
                        Our Key Differentiators
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-bold text-rsBlue mb-4"
                    >
                        Why Choose RS Solar CAD?
                    </motion.h3>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-1 bg-rsRed mx-auto rounded-full"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-default"
                        >
                            <div className="w-16 h-16 bg-rsBlue rounded-xl flex items-center justify-center mb-6 group-hover:bg-rsRed transition-colors duration-300 shadow-lg transform group-hover:rotate-6">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
