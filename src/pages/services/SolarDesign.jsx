import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { CheckCircle, ArrowRight, FileCheck, Activity, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import solarDesignHeroImg from '../../assets/hero/solar_design_hero.png';
import residentialSolarImg from '../../assets/services/residential_solar_design.png';
import proposalDesignsImg from '../../assets/services/proposal_designs.jpg';
import permitPlansetImg from '../../assets/services/permit_planset_new.png';
import asBuiltDrawingImg from '../../assets/services/as_built_drawing.png';
import solarExpansionImg from '../../assets/services/solar_expansion_design.png';
import solarCarportImg from '../../assets/services/solar_carport_design.png';
import interconnectionAppImg from '../../assets/services/interconnection_application.png';
import commercialSolarImg from '../../assets/services/commercial_solar_new.png';
import engineeringStampsImg from '../../assets/services/engineering_stamps_review.png';

// Counter component for animated numbers
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

const SolarDesign = () => {
    const title = "Solar Design & Engineering Stamps";
    const subTitle = "Precision-engineered solar plan sets for faster approvals and seamless installation.";
    const image = solarDesignHeroImg;


    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            {/* Hero Section */}
            <div className="relative">
                <div className="relative h-[80vh] min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#001528]/95 to-[#001528]/70"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#E6A93E] text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-4">
                                Expertise & Services
                            </h2>
                            <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight break-words">
                                {title}
                            </h1>
                            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                                {subTitle}
                            </p>

                            {/* Scrolling Ticker */}
                            <div className="mt-12 w-full overflow-hidden relative border-t border-white/10 pt-8">
                                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#001528] to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#001528] to-transparent z-10"></div>
                                <motion.div
                                    className="flex gap-8 md:gap-12 items-center text-[#E6A93E] text-sm md:text-lg font-medium tracking-wider uppercase whitespace-nowrap"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                >
                                    {[...Array(4)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <span className="flex items-center gap-2"><Activity className="w-5 h-5" /> 12-24H Turnaround</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> 98% Approval Rate</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5" /> 50-State PE Stamps</span>
                                            <span className="text-gray-500">•</span>
                                            <span className="flex items-center gap-2"><FileCheck className="w-5 h-5" /> NEC/AHJ Compliant</span>
                                            <span className="text-gray-500">•</span>
                                        </React.Fragment>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* Stats Bar - Custom TAT Stats */}
                <div className="absolute bottom-0 w-full translate-y-1/2 z-20 px-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            {/* Proposal Design */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0 }}
                                className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border-2 border-[#E6A93E] flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="text-[#001528] mb-2 md:mb-3 p-2 md:p-3 bg-gray-50 rounded-full">
                                    <Zap className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#001528] mb-1">
                                    <Counter value="15 Min" />
                                </h3>
                                <p className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide uppercase">Proposal Design</p>
                            </motion.div>

                            {/* Plan Set Design */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border-2 border-[#E6A93E] flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="text-[#001528] mb-2 md:mb-3 p-2 md:p-3 bg-gray-50 rounded-full">
                                    <FileCheck className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#001528] mb-1">
                                    <Counter value="6 HRS" />
                                </h3>
                                <p className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide uppercase">Plan Set Design</p>
                            </motion.div>

                            {/* Engineering Stamps */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl border-2 border-[#E6A93E] flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="text-[#001528] mb-2 md:mb-3 p-2 md:p-3 bg-gray-50 rounded-full">
                                    <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-extrabold text-[#001528] mb-1">
                                    <Counter value="12 HRS" />
                                </h3>
                                <p className="text-gray-500 text-[10px] md:text-xs font-semibold tracking-wide uppercase">Engineering Stamps</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <section className="pb-24 pt-48 md:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Content Blocks */}
                    <div className="w-full mb-24 space-y-16">

                        {/* Residential Solar Design Services */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={residentialSolarImg} alt="Residential Solar Design" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-4">Residential Solar Design Services</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        RS Solar CAD Group delivers end-to-end residential solar design services, supporting projects from sales proposals to permit plan sets, engineering reviews, and as-built documentation. Our teams bring strong expertise in NEC, AHJ, utility, and HOA requirements to ensure smooth approvals and compliance. We design a wide range of systems, including roof and ground mounts, grid-tied, off-grid, hybrid, battery storage, EV charging, and PTO support. Using client-specific drafting templates, we provide consistent, high-quality deliverables such as PV layouts, electrical diagrams, wire sizing, and interconnection drawings—with fast turnaround times of 12–16 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Proposal Designs */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="md:w-1/2">
                                    <img src={proposalDesignsImg} alt="Proposal Designs" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-4">Proposal Designs</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        RS Solar CAD Group delivers high-quality solar proposal design services that help installers, EPCs, and sales teams close deals faster. We create accurate, visually clear, and performance-driven proposals that effectively communicate system design, energy production, and financial benefits to end customers.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        Our team is proficient across leading solar proposal and simulation platforms, including Aurora Solar, HelioScope, OpenSolar, SolarGraf, PVsyst, Roofr, Solo, Pylon, Power, and more. Our platform-agnostic approach allows seamless integration with your existing sales workflows.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Each proposal is customized to site conditions and client requirements, featuring optimized PV layouts, shade analysis, energy yield estimates, PR calculations, and detailed ROI and savings reports. Using efficient processes and experienced designers, we deliver complete proposals in as little as 12 hours. For high-volume needs, dedicated proposal teams work closely with your sales staff, enabling faster responses, confident selling, and scalable growth across the U.S., Canada, and Europe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Permit Planset */}
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={permitPlansetImg} alt="Permit Planset" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-6">Permit Planset:</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        A well-prepared permit plan set plays a critical role in securing fast approvals and ensuring seamless on-site execution. At RS Solar CAD Group, we produce approval-ready solar construction drawings that are technically accurate, visually clear, and installer-friendly.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Our engineering and drafting teams create detailed plans that fully comply with local and national building codes, fire safety regulations, NEC standards, utility requirements, AHJ guidelines, and HOA conditions. By continuously tracking code updates and jurisdictional changes, we ensure every plan set aligns with the latest compliance standards while accommodating client-specific workflows and EPC requirements.
                                    </p>
                                </div>
                            </div>

                            {/* System Types */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h4 className="text-2xl font-bold text-[#001528] mb-6">System Types We Support</h4>
                                <p className="text-gray-600 text-lg mb-6">We design permit packages for a broad spectrum of residential solar systems, including:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Rooftop and ground-mounted PV installations",
                                        "Penetrating and non-penetrating mounting solutions",
                                        "Ballasted and tilt systems",
                                        "Grid-connected, off-grid, and hybrid configurations",
                                        "Battery energy storage, generators, and microinverter-based systems",
                                        "Carports and custom mounting structures"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#E6A93E] mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Deliverables */}
                            <div className="bg-[#001528] text-white rounded-2xl p-8 shadow-xl">
                                <h4 className="text-2xl font-bold mb-6 text-[#E6A93E]">Deliverables Included in Our Permit Sets</h4>
                                <p className="text-gray-300 text-lg mb-6">Each permit package is tailored to project and jurisdiction needs and may include:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {[
                                        "Title pages, code references, and drawing indexes",
                                        "Property location maps and aerial imagery",
                                        "Optimized PV array layouts with measurements",
                                        "Structural attachment details and load calculations",
                                        "Electrical SLD and 3LD diagrams with NEC-compliant calculations",
                                        "Conduit routing, wire sizing, and grounding details",
                                        "Utility interconnection methods and equipment placement",
                                        "Mandatory labels, placards, and signage layouts",
                                        "Equipment datasheets for modules, inverters, and racking",
                                        "Material takeoffs, BOM, and BOS documentation"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#E6A93E] mt-2.5 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-200">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-4 text-gray-300 text-lg leading-relaxed border-t border-gray-700 pt-6">
                                    <p>
                                        We adapt easily to client-supplied templates or deploy our own standardized CAD systems with intelligent data tables to maintain consistency, accuracy, and speed.
                                    </p>
                                    <p>
                                        By working with complete site and equipment inputs, we minimize revisions and consistently deliver high-quality permit plan sets that achieve faster first-pass AHJ approvals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* As-Built Drawing Services */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={asBuiltDrawingImg} alt="As-Built Drawing" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-4">As-Built Drawing</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        RS Solar CAD Group delivers precise As-Built drawings that accurately reflect the final installed solar system. During installation, field conditions may require changes to layouts, mounting, conduit routing, or interconnection details. Our As-Built plans capture these updates to ensure full alignment with the actual installation.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        These drawings are essential for homeowner records and are often required by AHJs and utilities before issuing Permission to Operate (PTO). We support residential and commercial systems, including roof and ground mounts, battery storage, generators, EV chargers, and hybrid configurations. Using client-specific or standardized templates, we provide fast, compliant, and reliable As-Built documentation—typically delivered within 12–16 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Add-On & Solar System Expansion Design */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={solarExpansionImg} alt="Solar System Expansion" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-4">Add-On & Solar System Expansion Design</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        RS Solar CAD Group designs add-on and system expansion projects for residential, commercial, and utility-scale solar systems. We help clients increase capacity, integrate new components, and upgrade existing systems while maintaining full compatibility with current infrastructure.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Our services include optimized PV layouts, updated electrical and structural drawings, shading analysis, interconnection adjustments, and compliance documentation. Each design is tailored to maximize energy output, ensure regulatory approval, and deliver reliable performance with strong ROI.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Solar Carport Design Services */}
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-8">
                                <div className="md:w-1/3">
                                    <img src={solarCarportImg} alt="Solar Carport Design" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3 space-y-6">
                                    <h3 className="text-3xl font-bold text-[#001528]">Solar Carport Design Services</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        RS Solar CAD Group offers specialized solar carport design solutions that seamlessly integrate renewable energy generation with functional parking spaces. Our designs optimize solar production while providing durable and safe coverage for vehicles.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h4 className="text-xl font-bold text-[#001528] mb-6">Key Benefits</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: "Dual Purpose:", desc: "Generate clean energy while providing sheltered parking." },
                                        { title: "Optimized Performance:", desc: "Custom layouts maximize sunlight exposure and energy yield." },
                                        { title: "Structural Safety:", desc: "Engineered for local wind, snow, and environmental loads." },
                                        { title: "Flexible Design:", desc: "Suitable for residential, commercial, and utility-scale applications." },
                                        { title: "Seamless Integration:", desc: "Compatible with EV chargers, battery storage, and existing infrastructure." },
                                        { title: "Regulatory Compliance:", desc: "Adheres to NEC, AHJ, and utility standards for hassle-free approvals." }
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-[#E6A93E] mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">
                                                <span className="font-bold">{benefit.title}</span> {benefit.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                From initial conceptual layouts to detailed permit-ready drawings and installation support, RS Solar CAD Group delivers precise, code-compliant solar carport solutions tailored to your site and energy goals.
                            </p>
                        </div>

                        {/* Interconnection Application Services */}
                        <div className="space-y-6">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={interconnectionAppImg} alt="Interconnection Application" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-4">Interconnection Application Services</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        RS Solar CAD Group provides expert support for preparing and submitting solar incentive and interconnection applications, including Solar Interconnection, SGIP, RRF, and more. Our team ensures all documentation is complete, accurate, and ready for review, streamlining the entire approval process.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                        By managing your rebate and interconnection workflow end-to-end, we help reduce processing time, ensure compliance, and maximize financial returns. Our services cover documentation preparation, utility coordination, and timely submission to secure Permission to Operate (PTO) and credits for surplus energy.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        Trust RS Solar CAD Group for fast, reliable, and hassle-free interconnection and incentive management tailored to your solar projects.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Commercial Solar Design Services (C&I) */}
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={commercialSolarImg} alt="Commercial Solar Design" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-6">Commercial Solar Design Services (C&I)</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        RS Solar CAD Group specializes in commercial solar system design for projects ranging from 20 kW to 700 MW. We deliver comprehensive, code-compliant solutions tailored to maximize energy production, ROI, and long-term reliability.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#001528] mb-4">Freestanding & Tracking Systems</h4>
                                    <p className="text-gray-600">
                                        Our team has extensive experience designing PV systems on freestanding structures, including carports, single-axis, and dual-axis trackers, as well as ground-mount racking. We provide detailed layout drawings, mounting plans, BOS elevations, and shading analysis for efficient and safe installations.
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#001528] mb-4">Rooftop Systems</h4>
                                    <p className="text-gray-600">
                                        We design rooftop commercial solar systems across all scales—from small kW to MW projects—working with multiple racking and module manufacturers. Our services include conceptual layouts, permit-ready construction documents, and full installation details to satisfy local authority requirements.
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#001528] mb-4">Ground-Mount Systems</h4>
                                    <p className="text-gray-600">
                                        We create ground-mounted systems for flat and sloping sites, providing complete arrangement drawings, structural details, electrical diagrams, and 360° overviews.
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <h4 className="text-xl font-bold text-[#001528] mb-4">Comprehensive Engineering Support</h4>
                                    <p className="text-gray-600">
                                        RS Solar CAD Group assists in equipment selection, system layout, interconnection planning, and compliance with site-specific conditions like wind, snow, and climate. Our precision-engineered designs, including electrical and structural drawings, ensure efficient, sustainable, and fully compliant commercial solar installations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Engineering Reviews & Professional PE Stamps */}
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3">
                                    <img src={engineeringStampsImg} alt="Engineering Reviews & Stamps" className="w-full h-auto rounded-2xl shadow-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-3xl font-bold text-[#001528] mb-6">Engineering Reviews & Professional Stamps</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        RS Solar CAD Group provides Electrical and Structural Professional Engineering (PE) stamps across all 50 states, ensuring your solar and storage projects meet local codes and jurisdictional standards. Whether required by law or added as an extra assurance of quality, PE-stamped plans demonstrate that your designs are safe, compliant, and professionally engineered.
                                    </p>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        As a national leader in solar design, we have delivered hundreds of structural certifications and stamped designs for residential and commercial projects, helping installers secure quick permit approvals.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#001528] text-white rounded-2xl p-8 shadow-xl">
                                <h4 className="text-2xl font-bold mb-6 text-[#E6A93E]">Our licensed PE partners provide:</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Structural and electrical reviews",
                                        "Certification letters and stamped drawings",
                                        "Structural load evaluations and reinforcement assessments",
                                        "Panel placement optimization",
                                        "Wet or digital PE stamps for all designs"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#E6A93E] mt-2.5 mr-3 flex-shrink-0"></div>
                                            <span className="text-gray-200">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-700">
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        With RS Solar CAD Group, you gain fast, reliable, and high-quality engineering support. From a single project to hundreds, our proven processes enable affordable, rapid, and scalable PE stamping services, ensuring your solar projects are fully compliant and ready for installation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* CTA */}
                    <div className="bg-[#E6A93E] rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#001528] opacity-5 pattern-grid-lg"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-6 relative z-10">Ready to Optimize Your Project?</h2>
                        <p className="text-[#001528]/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Partner with RS Solar CAD Group for world-class engineering and design support tailored to your needs.
                        </p>
                        <Link to="/contact-us" className="relative z-10 inline-flex items-center justify-center bg-[#001528] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-[#001528] transition-all duration-300 shadow-xl">
                            Get A Free Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default SolarDesign;
