import React from "react";
import { motion } from "framer-motion";
import { Sun, Zap, Layers, Ruler, CheckCircle, ArrowRight, Settings, PenTool } from 'lucide-react';

const services = [
    {
        id: 'solar-design',
        title: 'Solar Design & Engineering',
        icon: <Sun className="w-6 h-6" />,
        desc: "Precise, code-compliant solar designs for residential & commercial projects. We optimize every layout for maximum energy production.",
        details: ["Proposal Drawings", "Permit Plan Sets", "As-Built Drawings", "Commercial Designs"],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'ev-permit',
        title: 'EV Charging Station Plans',
        icon: <Zap className="w-6 h-6" />,
        desc: "Expert EV permit, charging station layout, and approval services. Ensuring regulatory compliance and safety.",
        details: ["EV Charger Designs", "Load Calculations", "Site Layouts", "Safety Compliance"],
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'cad-design',
        title: 'CAD Design & Drafting',
        icon: <PenTool className="w-6 h-6" />,
        desc: "High-quality CAD drafting for architectural, structural, and electrical requirements.",
        details: ["Architectural Drawings", "Structural Drafting", "Civil Layouts", "Electrical Schematics"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'workforce-staffing',
        title: 'Workforce & Technical Staffing',
        icon: <Layers className="w-6 h-6" />,
        desc: "Accurate 3D BIM modeling and dedicated staffing for solar projects. Visualize potential clashes and optimize routing.",
        details: ["Dedicated Engineers", "CAD Designers", "Back-office Teams", "Remote Staffing"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'structural',
        title: 'Solar Installation Services',
        icon: <Settings className="w-6 h-6" />,
        desc: "Professional structural load analysis and support design. We ensure rooftops and ground mounts meet safety standards.",
        details: ["Installation Services", "Structural Analysis", "Mounting Systems", "Safety Standards"],
        image: "https://plus.unsplash.com/premium_photo-1663076292870-8de8281bd817?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
        id: 'solar-trading',
        title: 'Trading & Procurement',
        icon: <CheckCircle className="w-6 h-6" />,
        desc: "Complete procurement services for solar PV modules, inverters, and balance of systems.",
        details: ["PV Modules & Inverters", "Mounting Structures", "Battery Storage", "Monitoring Systems"],
        image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80&w=800"
    },

];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const InteractiveServices = () => {
    return (
        <section className="relative z-10 w-full bg-[#001528] py-24 font-sans text-white overflow-hidden border-b border-gray-800">
            {/* Background Tech Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #E6A93E 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full bg-[#E6A93E]/10 border border-[#E6A93E]/20 text-[#E6A93E] text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-2xl font-extrabold text-white mb-0"
                    >
                        Not Just an Outsourcing Firm — A True Strategic Partner
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
                    >
                        RS Solar CAD Group has grown into one of the world’s most trusted
                        providers of Solar PV Design and Engineering Services
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={cardVariants}
                            className="group relative flex flex-col bg-[#0a1f35] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#E6A93E]/60 transition-colors duration-300"
                        >
                            {/* Service Image */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[#0a1f35]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                {/* Index Badge */}
                                <div className="absolute top-4 right-4 z-20 bg-[#001528]/90 backdrop-blur text-[#E6A93E] text-xs font-bold px-3 py-1 rounded border border-[#E6A93E]/20">
                                    {`0${index + 1}`}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-grow flex flex-col relative">
                                {/* Icon Halo */}
                                <div className="absolute -top-10 left-6">
                                    <div className="w-16 h-16 rounded-xl bg-[#001528] flex items-center justify-center border border-gray-700 group-hover:border-[#E6A93E] transition-colors duration-300 shadow-xl">
                                        <div className="text-[#E6A93E]">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E6A93E] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {service.desc}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {service.details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center text-xs text-gray-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#E6A93E] mr-2"></div>
                                                {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">Learn More</span>
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#E6A93E] group-hover:text-black transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#E6A93E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveServices;
