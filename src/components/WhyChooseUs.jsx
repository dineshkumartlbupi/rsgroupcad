import React from 'react';
import { CheckCircle, Clock, Leaf, Settings, FileCheck, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "1.5 GW+ Design Experience",
        description: "Proven track record delivering over 1.5 GW of high-quality solar designs across the United States since 2020.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icon: <Layers className="w-6 h-6 text-white" />
    },
    {
        title: "100% AHJ-Compliant",
        description: "Revision-free plans thoroughly vetted for NEC, Fire, and local utility codes to ensure smooth approvals.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
        title: "Fast Turnaround",
        description: "Speed that scales: Proposals in 30 minutes, full permit plan sets delivered in just 7 hours.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icon: <Clock className="w-6 h-6 text-white" />
    },
    {
        title: "Field-Ready Experts",
        description: "Our engineers are trained on real installation sites, ensuring 10x more accurate and practical designs.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icon: <Settings className="w-6 h-6 text-white" />
    },
    {
        title: "Affordable & Scalable",
        description: "A reliable outsourcing partner that adapts to your volume, cutting operational costs without compromising quality.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icon: <FileCheck className="w-6 h-6 text-white" />
    },
    {
        title: "Real On-Ground Knowledge",
        description: "We don't just design; we install. Our own teams have installed over 5MW, bringing field reality to every drawing.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        icon: <Leaf className="w-6 h-6 text-white" />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
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
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 relative">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-rsRed font-bold tracking-widest uppercase text-sm"
                    >
                        Our Key Differentiators
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-rsBlue mt-3 mb-6"
                    >
                        Why Choose RS Solar CAD?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg text-gray-600 font-light"
                    >
                        We combine engineering precision with real-world installation experience to deliver designs that work.
                    </motion.p>
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
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                            {/* Image Header */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md group-hover:text-rsRed transition-colors">
                                        {feature.title}
                                    </h3>
                                </div>
                                <div className="absolute top-4 right-4 w-12 h-12 bg-rsRed rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content Detail */}
                            <div className="p-8">
                                <p className="text-gray-600 leading-relaxed text-base">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
