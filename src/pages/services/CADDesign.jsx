import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, PenTool, Layers, Activity, ShieldCheck, FileCheck, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import cadDesignHeroImg from '../../assets/hero/cad_design_hero.png';
// API URL - automatically uses correct backend based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
const BenefitCard = ({ icon, title, desc }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-[#001528]/5 rounded-lg flex items-center justify-center text-[#001528] mb-4">
            {icon}
        </div>
        <h4 className="text-lg font-bold text-[#001528] mb-3">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
    </div>
);

const CADDesign = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: ''
    });


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

    const title = "CAD Drafting";
    const subTitle = "Strategic CAD capability that scales across teams and geographies.";
    const image = cadDesignHeroImg;

    const description = [
        "At RS Group, CAD is not a service—it's a strategic capability. We help engineering-driven organizations replace fragmented drawings, outdated files, and manual drafting bottlenecks with clean, intelligent, production-ready CAD systems that scale across teams and geographies.",
        "Supporting clients in 13+ countries, we operate as a behind-the-scenes design engine for architectural, civil, structural, MEP, electrical, telecom, and solar projects. Our strength lies in turning raw inputs into dependable CAD outputs that teams can build on—confidently and repeatedly."
    ];

    const features = [
        "Paper, blueprint, and scanned drawing digitization",
        "PDF and raster image (JPG, PNG, TIFF, BMP) conversion",
        "Hand sketches to precise vector CAD",
        "Redlines, revisions, and legacy drawing cleanup",
        "2D & 3D drafting across all major disciplines",
        "Custom CAD blocks and reusable libraries"
    ];

    const process = [
        { title: "Format Conversion", desc: "Transform legacy drawings, PDFs, images, or hand sketches into accurate, layered, and editable CAD files." },
        { title: "Quality Validation", desc: "Multi-stage review ensuring dimensional accuracy, scale integrity, and logical layer structuring." },
        { title: "Standards Preservation", desc: "Centralized knowledge framework preserves your layers, symbols, annotations, and formatting." },
        { title: "Construction-Ready Output", desc: "Deliver CAD files that engineers trust and contractors can execute without rework." }
    ];

    const benefits = [
        { icon: <PenTool />, title: "Global Standards", desc: "CAD output aligned with US, UK, EU & AU standards." },
        { icon: <Layers />, title: "Scalable Teams", desc: "Fast-moving project pipelines with dedicated specialists—not generalists." },
        { icon: <Activity />, title: "Zero Compromise", desc: "Strict quality control, secure workflows, and reduced drafting costs." }
    ];

    const stats = [
        { number: "13+", label: "Countries Served" },
        { number: "98%", label: "Approval Rate" },
        { number: "12-24H", label: "Turnaround Time" },
        { number: "50+", label: "State PE Stamps" }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(`${API_URL}/api/consultation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    source: 'CAD Design Page'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    city: ''
                });
                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            {/* Hero Section with Form */}
            <section className="relative bg-gradient-to-br from-[#0033A0] to-[#001f5c] py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                🎯 Expertise & Services
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Professional CAD Drafting Services
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
                                {subTitle}
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                                    <span>12-24H Turnaround</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                                    <span>98% Approval Rate</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                                    <span>50-State PE Stamps</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-[#001528] mb-2">Get a FREE Consultation</h3>
                            <p className="text-gray-600 mb-6">Let's discuss your CAD drafting needs</p>

                            {submitStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h4 className="text-[#001528] font-bold text-xl mb-2">Request Received!</h4>
                                    <p className="text-gray-600 mb-6">We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="text-[#0033A0] font-medium hover:underline"
                                    >
                                        Send another request
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {submitStatus === 'error' && (
                                        <div className="bg-red-50 text-red-600 text-sm p-4 rounded-lg flex items-center gap-2">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            Something went wrong. Please try again.
                                        </div>
                                    )}

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name *"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent disabled:opacity-50 disabled:bg-gray-50"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            placeholder="Phone Number *"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent disabled:opacity-50 disabled:bg-gray-50"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email Address *"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent disabled:opacity-50 disabled:bg-gray-50"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your City *"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent disabled:opacity-50 disabled:bg-gray-50"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#0033A0] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#002080] transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending Request...
                                            </>
                                        ) : (
                                            'Get Free Quote'
                                        )}
                                    </button>
                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting, you agree to our Terms & Privacy Policy
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#0033A0] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Main Content Section */}
            <section className="pb-24 pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
                        {/* Left Column: Description & Features */}
                        <div className="lg:w-3/5">
                            <h3 className="text-3xl font-bold text-[#001528] mb-6">From Any Format to Fully Functional CAD</h3>
                            <div className="text-gray-600 text-lg leading-relaxed mb-10 space-y-4">
                                {description.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h4 className="text-xl font-bold text-[#001528] mb-6">Conversion, Drafting & Design—Built for Scale</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {features && features.map((feature, i) => (
                                        <div key={i} className="flex items-start group">
                                            <CheckCircle className="w-5 h-5 text-[#e62e00] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Process/Approach */}
                        <div className="lg:w-2/5 w-full">
                            <div className="bg-[#001528] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#e62e00] opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                                <h3 className="text-2xl font-bold mb-8 relative z-10">Our Approach</h3>
                                <div className="space-y-8 relative z-10">
                                    {process && process.map((step, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e62e00] text-white flex items-center justify-center font-bold text-sm">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    {benefits && (
                        <div className="mb-24">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl font-bold text-[#001528] mb-4">Why Engineering Teams Rely on RS Group</h3>
                                <div className="w-20 h-1.5 bg-[#e62e00] rounded-full mx-auto mb-8"></div>
                                <div className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed space-y-4">
                                    <p>
                                        Once engaged, your standards don't get lost. Our centralized knowledge framework preserves your layers, symbols, annotations, and formatting—ensuring uniform output regardless of project size or team volume.
                                    </p>
                                    <p className="font-semibold text-[#001528] mt-6">
                                        Multi-Discipline CAD Mastery:
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>✔ <strong>Architecture</strong> – Plans, elevations, interiors, site layouts, renovations</li>
                                        <li>✔ <strong>Structural</strong> – RCC, steel detailing, framing, shop drawings</li>
                                        <li>✔ <strong>Mechanical & HVAC</strong> – Equipment layouts, fabrication drawings</li>
                                        <li>✔ <strong>Electrical</strong> – Power plans, lighting, SLDs, schematics</li>
                                        <li>✔ <strong>Civil</strong> – Site development, grading, utilities, drainage</li>
                                        <li>✔ <strong>Solar / PV</strong> – Permit plans, layouts, SLDs, mounting details</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {benefits.map((benefit, i) => (
                                    <BenefitCard key={i} {...benefit} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="bg-[#1f3366] rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-white opacity-5 pattern-grid-lg"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Scale Your Drafting Team Today</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                            Get precise CAD drawings on demand. Contact us for a pilot project.
                        </p>
                        <Link to="/contact-us" className="relative z-10 inline-flex items-center justify-center bg-[#e62e00] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-white hover:text-[#e62e00] transition-all duration-300 shadow-xl">
                            Start a Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CADDesign;
