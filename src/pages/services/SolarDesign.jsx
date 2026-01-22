import React, { useEffect, useRef } from 'react';
import SEO from '../../components/SEO';
import { motion, useMotionValue, useTransform, useInView, animate, useScroll } from 'framer-motion';
import { ArrowRight, FileCheck, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import solarDesignHeroImg from '../../assets/hero/solar_design_hero.png';
import residentialSolarImg from '../../assets/services/residential_solar_design.png';
import proposalDesignsImg from '../../assets/solar_proposal_design.jpg';
import permitPlansetImg from '../../assets/services/permit_planset_updated.jpg';
import asBuiltDrawingImg from '../../assets/services/as_built_drawing_new.jpg';
import solarExpansionImg from '../../assets/services/solar_expansion_design_new.jpg';
import solarCarportImg from '../../assets/services/solar_carport_design_new.jpg';
import interconnectionAppImg from '../../assets/services/interconnection_application.png';

import engineeringStampsImg from '../../assets/services/engineering_stamps_review.png';

// Counter component for animated numbers
const Counter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const match = value.match(/(\d+(?:\.\d+)?)/);
    const numericValue = match ? parseFloat(match[0]) : 0;
    const prefix = match ? value.slice(0, match.index) : "";
    const suffix = match ? value.slice(match.index + match[0].length) : value;

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        if (Number.isInteger(numericValue)) return Math.floor(latest);
        return latest.toFixed(1);
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

const SolarDesign = () => {
    const title = "Solar Design & Engineering Stamps";
    const subTitle = "Precision-engineered solar plan sets for faster approvals and seamless installation.";
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });

    return (
        <div className="pt-20 font-sans text-gray-900 bg-white selection:bg-[#e62e00] selection:text-white">
            <SEO
                title="Solar Design & Engineering Services"
                description="Professional Solar Design & Engineering."
                canonical="https://rscadgroup.com/solar-design-services"
            />
            {/* Hero Section */}
            <div className="relative">
                <div className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={solarDesignHeroImg} alt={title} className="w-full h-full object-cover scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#001528]/80 via-[#001528]/60 to-[#001528]/95"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#e62e00] animate-pulse"></span>
                                <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">Engineering Excellence</span>
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-5xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                                {title}
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed font-light mb-12">
                                {subTitle}
                            </p>
                        </motion.div>
                    </div>

                    {/* Industrial Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')] opacity-30 pointer-events-none"></div>
                </div>

                {/* Stats Section with Glassmorphism */}
                <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-30 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Proposal Design", value: "15 Min", icon: Zap },
                                { label: "Plan Set Design", value: "6 HRS", icon: FileCheck },
                                { label: "Engineering Stamps", value: "12 HRS", icon: ShieldCheck }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="bg-white/95 align-center justify-center backdrop-blur-xl p-2 lg:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 group hover:border-[#e62e00] transition-all duration-500"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#e62e00]/10 transition-colors">
                                            <stat.icon className="w-6 h-6 text-[#001528] group-hover:text-[#e62e00] transition-colors" />
                                        </div>
                                        <div className="text-sm font-black text-gray-300">0{i + 1}</div>
                                    </div>
                                    <h3 className="text-4xl font-black text-[#001528] mb-2 tracking-tighter">
                                        <Counter value={stat.value} />
                                    </h3>
                                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <section ref={scrollRef} className="relative pb-32 pt-[550px] md:pt-64 lg:pt-48 overflow-hidden bg-gray-50">
                {/* Geon-Style Architectural Grid */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[#e62e00] text-sm font-black uppercase tracking-[0.4em] mb-4">Engineering Workflow</h2>
                            <h3 className="text-5xl md:text-7xl font-black text-[#001528] tracking-tighter">The Journey To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e62e00] to-[#1f3366]">PTO.</span></h3>
                        </motion.div>
                    </div>

                    {/* Residential Solar Design Services Section (Newly Restored) */}
                    <div className="mb-48">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center bg-white p-8 lg:p-16 rounded-[3rem] border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_rgba(230,46,0,0.05)] transition-all duration-700">
                                <div className="w-full lg:w-2/5 relative">
                                    <div className="absolute -inset-10 bg-[#e62e00]/5 rounded-full blur-3xl group-hover:bg-[#e62e00]/10 transition-colors"></div>
                                    <img src={residentialSolarImg} alt="Residential Solar Design" className="w-full h-auto relative z-10 rounded-[2rem] shadow-2xl" />
                                </div>
                                <div className="w-full lg:w-3/5 space-y-8">
                                    <div className="inline-block px-4 py-1 rounded-full bg-gray-50 text-[#001528] text-xs font-black uppercase tracking-widest border border-gray-100">National Expertise</div>
                                    <h2 className="text-4xl lg:text-5xl font-black text-[#001528] leading-tight">Residential Solar Design Services</h2>
                                    <p className="text-gray-500 text-xl leading-relaxed font-light">
                                        RS Solar CAD Group provides end-to-end residential solar design services—from sales proposals to permit sets and as-built drawings. With strong expertise in NEC, AHJ, utility, and HOA requirements, we design roof and ground-mounted systems, including battery storage and EV charging, delivering high-quality, compliant drawings with fast 12–16 hour turnaround times.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {["NEC 2023", "AHJ Standards", "Utility Compliance", "Quick Turnaround"].map((tag, i) => (
                                            <span key={i} className="px-4 py-2 bg-gray-50 rounded-xl text-[#001528] text-xs font-bold border border-gray-100 uppercase tracking-tighter">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-48 relative">
                        {/* THE CIRCUIT PATHS (Mobile Hidden) */}
                        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                            <svg width="100%" height="100%" viewBox="0 0 1200 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Path 01 to 02 (Z-Style Circuit) */}
                                <motion.path
                                    d="M 1000 100 L 1000 450 L 200 450 L 200 800"
                                    stroke="#e5e7eb"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    d="M 1000 100 L 1000 450 L 200 450 L 200 800"
                                    stroke="#e62e00"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    style={{ pathLength: scrollYProgress }}
                                />

                                {/* Path 02 to 03 (L-Style Circuit) */}
                                <motion.path
                                    d="M 200 900 L 200 1250 L 1000 1250 L 1000 1450"
                                    stroke="#e5e7eb"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    d="M 200 900 L 200 1250 L 1000 1250 L 1000 1450"
                                    stroke="#1f3366"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    style={{ pathLength: scrollYProgress }}
                                />

                                {/* Static "Node" Indicators at corners */}
                                <circle cx="1000" cy="100" r="8" fill="white" stroke="#e62e00" strokeWidth="2" />
                                <circle cx="1000" cy="450" r="6" fill="#e5e7eb" />
                                <circle cx="200" cy="450" r="6" fill="#e5e7eb" />
                                <circle cx="200" cy="800" r="8" fill="white" stroke="#e62e00" strokeWidth="2" />

                                <circle cx="200" cy="900" r="8" fill="white" stroke="#1f3366" strokeWidth="2" />
                                <circle cx="200" cy="1250" r="6" fill="#e5e7eb" />
                                <circle cx="1000" cy="1250" r="6" fill="#e5e7eb" />
                                <circle cx="1000" cy="1450" r="8" fill="white" stroke="#1f3366" strokeWidth="2" />

                                {/* Animated Energy Bolt (Circles) */}
                                <motion.circle r="6" fill="#e62e00" style={{ offsetPath: "path('M 1000 100 L 1000 450 L 200 450 L 200 800')", offsetDistance: scrollYProgress }} />
                                <motion.circle r="6" fill="#1f3366" style={{ offsetPath: "path('M 200 900 L 200 1250 L 1000 1250 L 1000 1450')", offsetDistance: scrollYProgress }} />
                            </svg>
                        </div>

                        {/* STEP 01: PROPOSAL (Right Aligned on Desk, Linear on Mobile) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16 relative z-10 pl-16 lg:pl-0"
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-[#e62e00] to-transparent opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
                                    <img src={proposalDesignsImg} alt="Proposal" className="w-full h-auto rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border-4 lg:border-8 border-white" />
                                    <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-12 h-12 lg:w-20 lg:h-20 bg-[#001528] text-white flex items-center justify-center font-black text-xl lg:text-3xl rounded-xl lg:rounded-3xl shadow-2xl rotate-12">01</div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <div className="inline-block px-4 py-1 rounded-lg bg-[#e62e00]/10 text-[#e62e00] text-xs font-black uppercase tracking-widest">Phase 01: Concept</div>
                                <h4 className="text-4xl md:text-5xl font-black text-[#001528] leading-tight">Proposal Design</h4>
                                <p className="text-gray-500 text-xl leading-relaxed font-light">
                                    RS Solar CAD Group delivers high-quality solar proposal designs that help installers, EPCs, and sales teams close deals faster. We create accurate, visually clear proposals using leading platforms to showcase optimized layouts, energy production, and financial benefits. With fast turnaround times as low as 12 hours and scalable support for high-volume teams, we enable confident selling and growth across the U.S., Canada, and Europe.
                                </p>
                                <ul className="space-y-4">
                                    {["Shadow mapping", "production reports", "financial ROI analysis"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-700 font-bold uppercase text-xs tracking-widest">
                                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[#e62e00]">✓</div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* STEP 02: PERMIT (Left Aligned on Desk, Linear on Mobile) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 pl-16 lg:pl-0"
                        >
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-l from-[#1f3366] to-transparent opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
                                    <img src={permitPlansetImg} alt="Permit Set" className="w-full h-auto rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border-4 lg:border-8 border-white" />
                                    <div className="absolute top-4 right-4 lg:top-8 lg:right-8 w-12 h-12 lg:w-20 lg:h-20 bg-[#e62e00] text-white flex items-center justify-center font-black text-xl lg:text-3xl rounded-xl lg:rounded-3xl shadow-2xl -rotate-12">02</div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <div className="inline-block px-4 py-1 rounded-lg bg-[#1f3366]/10 text-[#1f3366] text-xs font-black uppercase tracking-widest">Phase 02: Engineering</div>
                                <h4 className="text-4xl md:text-5xl font-black text-[#001528] leading-tight">Permit Planset Design</h4>
                                <p className="text-gray-500 text-xl leading-relaxed font-light">
                                    A well-prepared permit plan set is key to fast approvals and smooth installations. RS Solar CAD Group delivers approval-ready, installer-friendly solar permit drawings that comply with NEC, AHJ, utility, fire, and HOA requirements—ensuring accurate, up-to-date, and code-compliant plans for every project.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {["NEC 2023 Compliant", "Structural Calc Specs", "3LD Diagrams", "Wet PE Stamps"].map((item, i) => (
                                        <div key={i} className="p-4 bg-white rounded-2xl border border-gray-100 font-bold text-xs uppercase tracking-tighter text-[#001528] shadow-sm">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* STEP 03: AS-BUILT (Right Aligned on Desk, Linear on Mobile) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-[#001528] rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden group shadow-3xl mx-4 lg:mx-0"
                        >
                            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
                                <div className="w-full lg:w-1/2">
                                    <img src={asBuiltDrawingImg} alt="As Built" className="w-full h-auto rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-700 border-4 border-white/10" />
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="w-12 h-12 lg:w-20 lg:h-20 bg-white text-[#001528] flex items-center justify-center font-black text-2xl lg:text-4xl rounded-xl lg:rounded-3xl shadow-2xl mb-6 lg:mb-8">03</div>
                                    <h4 className="text-3xl lg:text-6xl font-black mb-4 lg:mb-6 tracking-tight">As-Built <br /><span className="text-[#e62e00]"> Drawing Design</span></h4>
                                    <p className="text-gray-400 text-lg lg:text-xl leading-relaxed font-light mb-8 lg:mb-10">
                                        RS Solar CAD Group provides accurate As-Built drawings that reflect the final installed solar system, capturing all field changes made during installation. Required for AHJ and utility PTO approvals, our fast, compliant As-Built plans support residential and commercial systems and are typically delivered within 12–16 hours.
                                    </p>
                                    <Link to="/contact-us" className="w-full lg:w-auto inline-flex items-center justify-center gap-4 bg-white text-[#001528] px-8 lg:px-10 py-4 lg:py-5 rounded-full font-black text-base lg:text-lg hover:bg-[#e62e00] hover:text-white transition-all duration-500 group">
                                        Secure Your PTO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Restored Expansion and Engineering Stamps Section */}
                    <div className="mt-48 space-y-48">
                        {/* Expansion & Add-Ons */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row gap-16 items-center"
                        >
                            <div className="lg:w-1/2">
                                <img src={solarExpansionImg} alt="Expansion" className="w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-white" />
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <h4 className="text-4xl font-black text-[#001528]">Add-On & Solar Design</h4>
                                <p className="text-gray-500 text-xl font-light">
                                    RS Solar CAD Group designs add-on and system expansion projects for residential, commercial, and utility-scale solar systems. We help clients increase system capacity, integrate new components, and upgrade existing infrastructure while maintaining full compatibility. Our services include optimized PV layouts, updated electrical and structural drawings, interconnection adjustments, and compliance support to ensure approvals, reliable performance, and strong ROI.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["ESS Integration", "System Retrofits", "Repower Design", "Main Panel Upgrades"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-bold uppercase text-xs tracking-widest">
                                            <div className="w-5 h-5 rounded-full bg-[#1f3366]/10 flex items-center justify-center text-[#1f3366]">✓</div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Solar Carport Design */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row-reverse gap-16 items-center"
                        >
                            <div className="lg:w-1/2">
                                <img src={solarCarportImg} alt="Solar Carport Design" className="w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-white" />
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <h4 className="text-4xl font-black text-[#001528]">Solar Carport Design</h4>
                                <p className="text-gray-500 text-xl font-light">
                                    RS Solar CAD Group offers specialized solar carport design solutions that seamlessly integrate renewable energy generation with functional parking spaces. Our designs optimize solar production while providing durable and safe coverage for vehicles.
                                </p>
                                <div className="space-y-4">
                                    <h5 className="text-[#e62e00] font-black text-xs uppercase tracking-widest">Key Benefits</h5>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            "Dual Purpose Parking & Energy",
                                            "Optimized Sunlight Exposure",
                                            "Engineered Structural Safety",
                                            "Flexible Scalable Design",
                                            "EV Charger Integration",
                                            "Regulatory NEC Compliance"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700 font-bold uppercase text-xs tracking-widest">
                                                <div className="w-5 h-5 rounded-full bg-[#1f3366]/10 flex items-center justify-center text-[#1f3366]">✓</div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interconnection Application */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col lg:flex-row gap-16 items-center"
                        >
                            <div className="lg:w-1/2">
                                <img src={interconnectionAppImg} alt="Interconnection Application" className="w-full h-auto rounded-[2.5rem] shadow-2xl border-8 border-white" />
                            </div>
                            <div className="lg:w-1/2 space-y-8">
                                <h4 className="text-4xl font-black text-[#001528]">Interconnection Application Design</h4>
                                <p className="text-gray-500 text-xl font-light">
                                    RS Solar CAD Group provides expert support for preparing and submitting solar incentive and interconnection applications, including Solar Interconnection, SGIP, RRF, and more. Our team ensures all documentation is complete, accurate, and ready for review, streamlining the entire approval process.
                                </p>
                                <p className="text-gray-500 text-lg font-light leading-relaxed">
                                    By managing your rebate and interconnection workflow end-to-end, we help reduce processing time, ensure compliance, and maximize financial returns. Our services cover documentation preparation, utility coordination, and timely submission to secure Permission to Operate (PTO).
                                </p>
                            </div>
                        </motion.div>

                        {/* Commercial Solar Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#001528] rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                            <div className="relative z-10 space-y-16">
                                <div className="text-center max-w-4xl mx-auto space-y-6">
                                    <h4 className="text-4xl lg:text-5xl font-black tracking-tight">Commercial Solar Design</h4>
                                    <p className="text-gray-400 text-xl font-light">
                                        Specializing in high-performance C&I solar systems from 20 kW to 700 MW. We navigate complex NEC codes, fire setback rules, and utility requirements (208V/480V/MV) for maximum ROI.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#e62e00]/50 transition-colors">
                                            <h5 className="text-xl font-bold mb-4 text-[#e62e00]">Rooftop Systems</h5>
                                            <p className="text-gray-300 font-light">Optimized designs for flat and pitched commercial roofs, including ballasting maps and fire pathways.</p>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#e62e00]/50 transition-colors">
                                            <h5 className="text-xl font-bold mb-4 text-[#e62e00]">Carports & Canopies</h5>
                                            <p className="text-gray-300 font-light">Architectural and electrical designs for cantilever structures with lighting and EV readiness.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#e62e00]/50 transition-colors">
                                            <h5 className="text-xl font-bold mb-4 text-[#e62e00]">Ground-Mount & Trackers</h5>
                                            <p className="text-gray-300 font-light">Fixed-tilt and single-axis tracker layouts with grading analysis and trenching schedules.</p>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#e62e00]/50 transition-colors">
                                            <h5 className="text-xl font-bold mb-4 text-[#e62e00]">Electrical & Interconnection</h5>
                                            <p className="text-gray-300 font-light">Supply-side connections, transformer sizing, voltage drop ({"<2%"}), and fault current analysis.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-12 border-t border-white/10">
                                    <h5 className="text-[#e62e00] font-black text-xs uppercase tracking-[0.3em] mb-8 text-center">Commercial Design Deliverables</h5>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {[
                                            "Site Plans & Layouts",
                                            "1LD & 3LD Diagrams",
                                            "Conductor Sizing",
                                            "Voltage Drop Calcs",
                                            "Structural Details",
                                            "Ballast Wind Loads",
                                            "Equipment Elevations",
                                            "Signage Mapping"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-white/70 font-bold uppercase text-[10px] tracking-widest">
                                                <div className="w-2 h-2 rounded-full bg-[#e62e00]"></div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Engineering Reviews & Stamps */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 lg:p-20 rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e62e00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                                <div className="lg:w-2/5">
                                    <img src={engineeringStampsImg} alt="Engineering Stamps" className="w-full h-auto rounded-3xl shadow-xl" />
                                </div>
                                <div className="lg:w-3/5 space-y-8">
                                    <h4 className="text-4xl font-black text-[#001528]">Engineering Reviews & Stamps</h4>
                                    <p className="text-gray-500 text-xl font-light">
                                        RS Solar CAD Group provides Electrical and Structural Professional Engineering, ensuring your solar and storage projects meet local codes and jurisdictional standards. PE-stamped plans demonstrate that your designs are professionally engineered.
                                    </p>
                                    <div className="space-y-6">
                                        <h5 className="text-[#e62e00] font-black text-xs uppercase tracking-widest">Our licensed PE partners provide:</h5>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                            {[
                                                "Structural & Electrical Reviews",
                                                "Certification Letters",
                                                "Structural Load Evaluations",
                                                "Panel Placement Optimization",
                                                "Wet or Digital PE Stamps",
                                                "Reinforcement Assessments"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700 font-bold uppercase text-[10px] tracking-widest">
                                                    <div className="w-4 h-4 rounded-full bg-[#e62e00]/10 flex items-center justify-center text-[#e62e00]">✓</div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-8 border-t border-gray-100">
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Availability Across All 50 States</p>
                                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                                            {["California", "Texas", "Florida", "New York", "Illinois", "Arizona", "Washington", "& More"].map((state, i) => (
                                                <div key={i} className="text-[#001528] font-bold text-[10px] uppercase tracking-widest">{state}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-48 max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-br from-[#1f3366] to-[#001528] rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden shadow-3xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">Ready to Optimize <br />Your Project?</h2>
                        <p className="text-white/60 text-xl font-light mb-16 max-w-2xl mx-auto">
                            Partner with RS Solar CAD Group for world-class engineering and design support tailored to your needs.
                        </p>
                        <Link to="/contact-us" className="inline-flex items-center gap-6 bg-[#e62e00] text-white px-12 py-6 rounded-full font-black text-xl hover:bg-white hover:text-[#e62e00] transition-all duration-500 shadow-2xl group">
                            Get A Free Quote <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolarDesign;
