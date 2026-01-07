import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Share2, Printer, ExternalLink, Newspaper } from 'lucide-react';

const releases = [
    {
        id: 1,
        date: "February 15, 2026",
        title: "RS Solar CAD Group Launches Advanced AI-Driven Design Automation Platform",
        category: "Innovation",
        snippet: "Transforming the solar engineering landscape with proprietary algorithms that reduce residential permit plan turnaround times to under 6 hours.",
        content: "Ghaziabad, India — RS Solar CAD Group, a global leader in solar engineering and CAD drafting services, today announced the official launch of its next-generation design automation platform. This breakthrough technology leverages machine learning to automate the most repetitive aspects of PV system design, ensuring unparalleled accuracy and record-breaking delivery speeds..."
    },
    {
        id: 2,
        date: "January 10, 2026",
        title: "RS Solar CAD Group Surpasses 200,000 Completed Solar Design Projects Globally",
        category: "Milestone",
        snippet: "A significant milestone marking the company's rapid growth and commitment to scaling renewable energy infrastructure in 50+ countries.",
        content: "Ghaziabad, India — Marking a decade of engineering excellence, RS Solar CAD Group is proud to announce the completion of its 200,000th solar design project. Since its inception, the company has focused on providing installers and EPCs with the high-fidelity documentation needed to move from contract to construction faster than ever before..."
    },
    {
        id: 3,
        date: "December 05, 2025",
        title: "Strategic Partnership Announced with Leading North American EV Infrastructure Firm",
        category: "Partnership",
        snippet: "Expanding footprint into the electric vehicle charging sector with full-scale design and permitting support for commercial charging hubs.",
        content: "Ghaziabad, India — RS Solar CAD Group is excited to announce a strategic multi-year partnership with one of North America's largest EV infrastructure providers. Under the agreement, RS Solar CAD Group will serve as the primary engineering partner for large-scale commercial EV charging station rollouts across the United States..."
    }
];

const PressRelease = () => {
    useEffect(() => {
        document.title = "Press Releases | RS Solar CAD Group";
    }, []);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="bg-[#001528] py-24 px-4 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rsRed rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-rsRed text-sm font-semibold mb-6 uppercase tracking-widest">
                            <Newspaper className="w-4 h-4" />
                            Newsroom
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Press <span className="text-rsRed">Releases</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            Follow the latest updates, industry breakthroughs, and milestone announcements from the heart of RS Solar CAD Group.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Press List Section */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-12">
                        {releases.map((release, index) => (
                            <motion.article
                                key={release.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-rsRed/20 transition-all duration-300 flex flex-col md:flex-row gap-8"
                            >
                                <div className="md:w-1/4 flex flex-col gap-4">
                                    <div className="flex items-center gap-2 text-rsRed font-bold text-sm uppercase tracking-wider">
                                        <Calendar className="w-4 h-4" />
                                        {release.date}
                                    </div>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full w-fit">
                                        {release.category}
                                    </span>
                                    <div className="hidden md:flex gap-4 mt-auto">
                                        <button className="text-gray-400 hover:text-rsRed transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                        <button className="text-gray-400 hover:text-rsRed transition-colors">
                                            <Printer className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="md:w-3/4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#001528] mb-6 group-hover:text-rsRed transition-colors leading-tight">
                                        {release.title}
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {release.snippet}
                                    </p>
                                    <button className="inline-flex items-center gap-2 font-bold text-[#001528] hover:gap-4 transition-all group/link">
                                        Read Full Article
                                        <ArrowRight className="w-5 h-5 text-rsRed" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Media Contact Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 bg-[#1f3366] text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="text-3xl font-bold mb-4">Media Relations</h3>
                            <p className="text-blue-100 max-w-md">
                                For press inquiries, interview requests, or high-resolution brand assets, please contact our global communications team.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
                            <a href="mailto:media@rscadgroup.com" className="bg-white text-[#1f3366] px-8 py-4 rounded-full font-bold text-center hover:bg-rsRed hover:text-white transition-all shadow-lg">
                                media@rscadgroup.com
                            </a>
                            <button className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium">
                                <ExternalLink className="w-4 h-4" />
                                Download Media Kit
                            </button>
                        </div>
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rsRed opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PressRelease;
