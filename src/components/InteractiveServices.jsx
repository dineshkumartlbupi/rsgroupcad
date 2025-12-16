import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, LayoutGroup } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Sun, Zap, DraftingCompass, Layers, CheckCircle, Ruler, FileText, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const originalMainServices = [
    {
        id: 'solar-design',
        title: 'Solar Designing',
        icon: <Sun className="w-8 h-8" />,
        shortDesc: "Precise, code-compliant solar designs for residential & commercial projects.",
        fullDesc: "RS Solar CAD Group delivers precise, code-compliant solar designs for residential and commercial projects. Ensuring efficiency, accuracy, and seamless project execution. We optimize every layout for maximum energy production while strictly adhering to AHJ and utility requirements.",
        details: [
            "Residential & Commercial Layouts",
            "Shade Analysis & Production Modeling",
            "Stringing & Electrical Design",
            "Proposal-Ready Drafts"
        ],
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'ev-permit',
        title: 'EV Permit / Charging Station',
        icon: <Zap className="w-8 h-8" />,
        shortDesc: "Expert EV permit, charging station layout, and approval services.",
        fullDesc: "Expert EV permit, charging station layout, and approval services. We ensure regulatory compliance, safety, and fast turnaround for residential and commercial projects. Our designs accommodate Level 2 and DC Fast Charging infrastructure with complete load calculations.",
        details: [
            "Charging Station Site Plans",
            "Load Calculations & Panel Upgrades",
            "ADA Compliance & Accessibility",
            "Commercial Fleet Layouts"
        ],
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'architecture',
        title: 'Architecture Designing',
        icon: <DraftingCompass className="w-8 h-8" />,
        shortDesc: "Specialized architectural designing for solar-integrated structures.",
        fullDesc: "Specialized architectural designing for solar-integrated structures. Functional, compliant, and visually appealing layouts for homes, businesses, and industrial spaces. We bridge the gap between aesthetics and solar functionality.",
        details: [
            "Solar-Integrated Roof Design",
            "Carport & Canopy Structures",
            "Custom Residential Architecture",
            "Commercial Facade Integration"
        ],
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'bim-modeling',
        title: 'BIM Modeling',
        icon: <Layers className="w-8 h-8" />,
        shortDesc: "Accurate 3D BIM modeling for solar projects.",
        fullDesc: "Accurate 3D BIM modeling for solar projects, improving coordination, reducing errors, and enhancing planning efficiency for residential and commercial installations. Visualize potential clashes and optimize routing before construction begins.",
        details: [
            "3D Clash Detection",
            "Conduit Routing Visualization",
            "Detailed Material Quantification",
            "As-Built 3D Models"
        ],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 'structural',
        title: 'Structural Engineering',
        icon: <Ruler className="w-8 h-8" />,
        shortDesc: "Professional structural load analysis and support design.",
        fullDesc: "Professional structural load analysis and support design for solar projects. We ensure rooftops, carports, and ground mounts meet safety and code standards. Our PEs verify that your mounting systems can withstand wind, snow, and seismic loads.",
        details: [
            "Roof Load Analysis",
            "Ground Mount Foundations",
            "Carport Structural Design",
            "PE Stamped Structural Letters"
        ],
        image: "https://plus.unsplash.com/premium_photo-1663076292870-8de8281bd817?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 'electrical-sld',
        title: 'Electrical SLD & Permit Drawings',
        icon: <FileText className="w-8 h-8" />,
        shortDesc: "Comprehensive Electrical Single Line Diagrams (SLDs) and permit docs.",
        fullDesc: "Comprehensive Electrical Single Line Diagrams (SLDs), wiring layouts, and permit documentation to support safe and compliant solar installations. We deliver clean, legible, and code-perfect electrical schematics for rapid approval.",
        details: [
            "Three-Line & Single-Line Diagrams",
            "Interconnection Applications",
            "Wire Sizing & Conduit Fill Calcs",
            "Battery Storage Integration"
        ],
        image: "https://plus.unsplash.com/premium_photo-1678766819153-b3f7307c5127?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const InteractiveServices = () => {
    const [active, setActive] = useState(0);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const [sectionVisible, setSectionVisible] = useState(false);
    const progressHeight = useMotionValue("0%");

    const data = originalMainServices.slice(0, 4).map((service, index) => ({
        id: index,
        number: `0${index + 1}`,
        title: service.title === 'EV Permit / Charging Station' ? 'EV Permit / Charging' : service.title, // Shorten for display
        desc: service.fullDesc,
        points: service.details.map(detail => ({ text: detail })),
        color: "#E6A93E", // Accent color
        img: service.image,
        icon: React.cloneElement(service.icon, { className: "w-6 h-6 text-white" }) // Adapt icon size and color for new design
    }));

    // --- Scroll animation logic ---
    useEffect(() => {
        const total = data.length;

        const createScrollTrigger = () => {
            const isDesktop = window.innerWidth >= 768;

            if (!isDesktop) {
                return { revert: () => { } };
            }

            const ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: () => window.innerWidth >= 1280 ? "top top+=96" : "top top+=80",
                    end: () => `+=${window.innerHeight * (total - 1)}`,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                    scrub: 0.5,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const startFraction = 1 / total;
                        const currentFraction = startFraction + progress * ((total - 1) / total);
                        progressHeight.set(`${currentFraction * 100}%`);

                        const index = Math.round(progress * (total - 1));
                        setActive(Math.min(index, total - 1));
                    },
                });
            }, containerRef);

            return ctx;
        };

        let ctx = createScrollTrigger();

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                ctx.revert();
                ScrollTrigger.refresh();
                ctx = createScrollTrigger();
            }, 250);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
            ctx.revert();
        };
    }, [data.length, progressHeight]);

    const handleClick = (index, event) => {
        const isDesktop = window.innerWidth >= 768;

        if (!isDesktop) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            setTimeout(() => {
                const element = itemRefs.current[index];
                if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }, 300);
        }

        setActive(index);

        if (isDesktop) {
            const total = data.length;
            const triggerStart = containerRef.current.offsetTop;
            const duration = window.innerHeight * (total - 1);
            const scrollPosition = triggerStart + (index / (total - 1)) * duration;

            gsap.to(window, {
                scrollTo: { y: scrollPosition, autoKill: false },
                duration: 1,
                ease: "power2.out",
            });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative z-10 w-full bg-[#001528] overflow-hidden pt-16 pb-64 min-h-screen font-sans text-white border-b border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center md:text-left">
                <h2 className="text-sm font-bold text-[#E6A93E] uppercase tracking-widest mb-2 font-sans">
                    Our Expertise
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 font-sans">
                    Core Services
                </h3>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transitionEnd: () => {
                        setSectionVisible(true);
                    },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="w-full px-4 xl:px-12 2xl:px-22 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* LEFT IMAGE */}
                    <div className="hidden md:flex justify-center items-center relative sticky top-24 h-[85vh]">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={data[active].img}
                                src={data[active].img}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -40, scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                                className="rounded-2xl w-full h-full shadow-2xl object-cover border border-gray-700"
                                alt={data[active].title}
                            />
                        </AnimatePresence>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative lg:pr-20 flex flex-col gap-y-7 xl:gap-y-8 2xl:gap-y-11 min-h-[500px]">
                        {/* Progress line */}
                        <div className="absolute left-[4px] md:left-[10px] top-0 bottom-0 w-[2px] bg-gray-800 rounded-full hidden md:block">
                            <motion.div
                                className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-[#E6A93E] to-[#001528] rounded-full"
                                style={{
                                    height: progressHeight,
                                }}
                            ></motion.div>
                        </div>

                        <LayoutGroup>
                            {data.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    layout
                                    initial={false}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                    onClick={(e) => handleClick(index, e)}
                                    className={`cursor-pointer pl-0 md:pl-12 transition-colors duration-500 group py-4 ${active === index ? "" : "opacity-60 hover:opacity-80"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-4 relative">
                                        <p className="hidden md:block absolute -left-[54px] top-1 bg-[#001528] text-sm font-bold leading-[1.75rem] text-gray-500 py-1">
                                            {item.number}
                                        </p>

                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${active === index ? 'bg-[#E6A93E] text-black' : 'bg-gray-800 text-gray-400'}`}>
                                            {item.icon}
                                        </div>

                                        <h3
                                            className={`font-semibold text-white transition-all ease-in-out duration-500 ${active === index
                                                ? "text-2xl md:text-3xl"
                                                : "text-xl md:text-2xl"
                                                }`}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>

                                    <AnimatePresence>
                                        {(sectionVisible && active === index) || (window.innerWidth < 768 && active === index) ? (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, overflow: "hidden" }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                className="space-y-4 pl-0 md:pl-14"
                                            >
                                                <p className="text-base text-gray-300 mb-4 pt-2 leading-relaxed">
                                                    {item.desc}
                                                </p>

                                                {/* Mobile image */}
                                                <div className="md:hidden mb-6 h-48 w-full rounded-xl overflow-hidden relative">
                                                    <img
                                                        src={item.img}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                        alt={item.title}
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 gap-3">
                                                    {item.points.map((point, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-center bg-[#112240] text-sm text-[#EBEBEB] p-3 rounded-lg border border-gray-700/50 hover:border-[#E6A93E]/50 transition-colors"
                                                        >
                                                            <CheckCircle className="w-4 h-4 text-[#E6A93E] mr-3 flex-shrink-0" />
                                                            <span className="flex-1">{point.text}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="pt-4 pb-2">
                                                    <a
                                                        href="/contact-us"
                                                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full bg-[#E6A93E] text-black hover:bg-white transition-colors duration-300"
                                                    >
                                                        Explore More
                                                    </a>
                                                </div>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </LayoutGroup>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default InteractiveServices;
