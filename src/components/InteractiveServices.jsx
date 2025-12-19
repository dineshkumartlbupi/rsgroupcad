import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { Sun, Zap, Layers, Ruler, CheckCircle, ArrowRight, Settings, PenTool, Handshake, FileCog, Users, Clock, Globe, Heart } from 'lucide-react';


const stats = [
    { icon: <Handshake className="w-8 h-8" />, value: "200+", label: "Success Stories" },
    { icon: <FileCog className="w-8 h-8" />, value: "150k+", label: "Project Delivered" },
    { icon: <Layers className="w-8 h-8" />, value: "10x", label: "Multiple Services" },
    { icon: <Globe className="w-8 h-8" />, value: "24/7", label: "Global Operations" },
];

const services = [
    {
        id: 'solar-design',
        title: 'Solar Design & Engineering',
        icon: <Sun className="w-6 h-6" />,
        desc: "Precise, code-compliant solar designs for residential & commercial projects. We optimize every layout for maximum energy production.",
        details: ["Proposal Drawings", "Permit Plan Sets", "As-Built Drawings", "Commercial Designs"],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800",
        highlight: true
    },
    {
        id: 'ev-permit',
        title: 'EV Charging Station Plans',
        icon: <Zap className="w-6 h-6" />,
        desc: "Expert EV permit, charging station layout, and approval services. Ensuring regulatory compliance and safety.",
        details: ["EV Charger Designs", "Load Calculations", "Site Layouts", "Safety Compliance"],
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
        highlight: true
    },
    {
        id: 'cad-design',
        title: 'CAD Design & Drafting',
        icon: <PenTool className="w-6 h-6" />,
        desc: "High-quality CAD drafting for architectural, structural, and electrical requirements.",
        details: ["Architectural Drawings", "Structural Drafting", "Civil Layouts", "Electrical Schematics"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
        highlight: true
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

const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Parse the value
    const match = value.match(/(\d+(?:\.\d+)?)/);
    const numericValue = match ? parseFloat(match[0]) : 0;
    const prefix = match ? value.slice(0, match.index) : "";
    const suffix = match ? value.slice(match.index + match[0].length) : value;

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (Number.isInteger(numericValue)) {
            return Math.floor(latest);
        } else {
            return latest.toFixed(1);
        }
    });

    useEffect(() => {
        if (isInView && match) {
            const controls = animate(count, numericValue, { duration: 2.5, ease: "circOut" });
            return controls.stop;
        }
    }, [isInView, numericValue, count, match]);

    if (!match) return <span>{value}</span>;

    return (
        <span ref={ref} className="inline-flex">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};



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
        <section className="relative w-full bg-white py-24 font-sans overflow-hidden">
            {/* Right Side Wireframe Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none hidden lg:block">
                <img
                    src="https://img.freepik.com/premium-vector/city-buildings-wireframe-blue-background-vector-illustration_547674-325.jpg?w=1060"
                    alt="Wireframe"
                    className="w-full h-full object-cover object-left grayscale"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Stats Bar */}
                <div className="mb-24 relative">
                    {/* Background Hearts Decoration */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                        {/* Large Top Right Heart */}
                        <Heart className="absolute -top-10 right-0 w-64 h-64 text-gray-200 opacity-50 transform rotate-12 fill-current blur-sm" />
                        {/* Medium Top Center Heart */}
                        <Heart className="absolute top-0 left-1/2 w-48 h-48 text-gray-200 opacity-40 transform -rotate-12 fill-current blur-sm" />
                        {/* Small Bottom Left Heart */}
                        <Heart className="absolute -bottom-10 left-10 w-32 h-32 text-gray-200 opacity-60 transform rotate-6 fill-current blur-sm" />
                        {/* Medium Bottom Right Heart */}
                        <Heart className="absolute bottom-10 right-1/4 w-40 h-40 text-gray-200 opacity-40 transform -rotate-12 fill-current blur-sm" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 relative z-10"
                            >
                                <div className="text-[#001528] mb-4 p-4 bg-gray-50 rounded-full">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-extrabold text-[#001528] mb-2">
                                    <Counter value={stat.value} />
                                </h3>
                                <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Header Section - Full Width */}
                <div className="mb-20">
                    <div className="w-full text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-xs font-bold tracking-widest uppercase mb-4"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold text-[#001528] mb-6"
                        >
                            Services Suite
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg leading-relaxed space-y-4"
                        >
                            <p>
                                RS Solar CAD Group provides an integrated outsourcing model supporting solar installers, EPCs, and engineering firms across the U.S. and Canada. We act as a captive offshore extension of your in-house team, ensuring high-quality, scalable execution aligned with your standards.
                            </p>
                            <p>
                                Our engineering expertise is strengthened by real-world field experience from our own India-based installations, guaranteeing practical, buildable designs. Comprehensive support extends to technical staffing and procurement, offering a complete solution to reduce risk and drive growth.
                            </p>
                        </motion.div>
                    </div>
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

                                    <div className={`space-y-2 mb-6 ${service.highlight ? 'border-l-4 border-red-500 pl-4' : ''}`}>
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
