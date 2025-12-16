import React from 'react';
import { PenTool, ClipboardCheck, Stamp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Design & Consulting",
        description: "Expert proposals tailored for residential and commercial projects. We analyze site constraints and energy goals to deliver the perfect preliminary design.",
        icon: <PenTool className="w-8 h-8 text-white" />,
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "PV Permit Engineering",
        description: "Precise layouts, single-line diagrams, and structural analysis. Our AHJ-compliant plan sets are designed for rapid approval and seamless installation.",
        icon: <ClipboardCheck className="w-8 h-8 text-white" />,
        image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "PE Stamping & Compliance",
        description: "Final engineering review and PE stamping for structural and electrical safety. We ensure every bolt and wire meets strict US code requirements.",
        icon: <Stamp className="w-8 h-8 text-white" />,
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
    }
];

const OurProcess = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-bold text-rsRed uppercase tracking-widest mb-2"
                    >
                        How We Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-rsBlue mb-6"
                    >
                        Our Process & Offers
                    </motion.h3>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        viewport={{ once: true }}
                        className="h-1 bg-rsRed mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="relative group rounded-2xl overflow-hidden h-[450px] shadow-xl"
                        >
                            {/* Background Image */}
                            <img
                                src={step.image}
                                alt={step.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-rsBlue/95 via-rsBlue/70 to-transparent group-hover:via-rsBlue/80 transition-colors duration-300"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="absolute top-6 right-6 w-14 h-14 bg-rsRed/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">0{index + 1}</span>
                                </div>

                                <div className="mb-4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                    {step.icon}
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-rsRed transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-blue-100 text-lg leading-relaxed opacity-90 group-hover:opacity-100">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
