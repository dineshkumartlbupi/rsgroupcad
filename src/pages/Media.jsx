import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, Download, Play, FileText, Layout, Camera, ChevronRight, X } from 'lucide-react';

const Media = () => {
    // useEffect(() => {
    //     document.title = "Media Center | RS Solar CAD Group";
    // }, []);

    const categories = [
        { name: "Project Gallery", icon: <Camera className="w-5 h-5" />, count: 120 },
        { name: "Video Tours", icon: <Video className="w-5 h-5" />, count: 18 },
        { name: "Brand Assets", icon: <Layout className="w-5 h-5" />, count: 12 },
        { name: "White Papers", icon: <FileText className="w-5 h-5" />, count: 25 }
    ];

    const [selectedVideo, setSelectedVideo] = useState(null);

    const highlights = [
        {
            title: "Global Engineering Hub",
            description: "High-resolution overhead views of our state-of-the-art design center in Ghaziabad.",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
            type: "Photo"
        },
        {
            title: "The Design Workflow",
            description: "Experience our seamless transition from site audit to permit plans in this narrated video.",
            image: "https://img.youtube.com/vi/d6N3PlmqOWc/maxresdefault.jpg",
            type: "Video",
            videoId: "d6N3PlmqOWc"
        }
    ];

    return (
        <div className="pt-20 bg-white min-h-screen font-sans">
            <SEO
                title="Media Center"
                description="Brand assets, high-resolution imagery, and video insights for media partners."
                canonical="https://rscadgroup.com/media"
            />
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center bg-[#001528] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366147291-6fb1321e002a?auto=format&fit=crop&q=80&w=2000"
                        alt="Media Center Background"
                        className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001528] via-[#001528]/80 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
                            Media <span className="text-rsRed block italic">Center</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            A comprehensive resource for high-resolution imagery, video insights, and official branding materials.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-rsRed text-white px-8 py-4 rounded-full font-bold hover:bg-red-800 transition-all flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Download Brand Guide
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Quick Links / Categories */}
            <section className="py-12 bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-rsRed/5 text-rsRed rounded-xl flex items-center justify-center mb-4 group-hover:bg-rsRed group-hover:text-white transition-colors">
                                    {cat.icon}
                                </div>
                                <span className="font-bold text-[#001528]">{cat.name}</span>
                                <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{cat.count} Items</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Highlights */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#001528] mb-6">Featured Assets</h2>
                            <p className="text-gray-600 text-lg">
                                Key visuals capturing our team in action and the technical precision of our design deliverables.
                            </p>
                        </div>
                        <button className="flex items-center gap-2 font-bold text-[#001528] hover:text-rsRed transition-colors">
                            Explore All Assets <ChevronRight className="w-5 h-5 text-rsRed" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                onClick={() => item.videoId && setSelectedVideo(item.videoId)}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl mb-8">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-rsRed shadow-xl">
                                            {item.type === "Video" ? <Play className="w-8 h-8 ml-1" /> : <Image className="w-8 h-8" />}
                                        </div>
                                    </div>
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest">
                                        {item.type}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-[#001528] mb-2 group-hover:text-rsRed transition-colors">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Colors / Guidelines Hook */}
            <section className="py-24 bg-[#001528] text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8">Official Brand <span className="text-rsRed">Identity</span></h2>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                                Our visual identity reflects our commitment to precision, speed, and engineering excellence. Use our official color palette and logos for all authorized collaborations.
                            </p>
                            <div className="flex gap-6">
                                <div className="flex flex-col gap-3">
                                    <div className="w-20 h-20 bg-[#0d1b42] rounded-2xl border border-white/10 shadow-lg"></div>
                                    <span className="text-xs uppercase tracking-widest font-bold">RS Blue</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="w-20 h-20 bg-rsRed rounded-2xl border border-white/10 shadow-lg"></div>
                                    <span className="text-xs uppercase tracking-widest font-bold">RS Red</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-3xl transform rotate-3">
                                <h3 className="text-2xl font-bold mb-6 italic">Quick Assets</h3>
                                <ul className="space-y-6">
                                    {['Transparent Logo (PNG)', 'Vector Logo (SVG)', 'Brand Presentation (PPTXX)', 'Business Card Template'].map((asset, i) => (
                                        <li key={i} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
                                            <span className="text-gray-300 group-hover:text-white transition-colors">{asset}</span>
                                            <Download className="w-5 h-5 text-rsRed" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rsRed/20 rounded-full blur-[120px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <button className="absolute top-10 right-10 text-white hover:text-rsRed transition-colors">
                            <X className="w-10 h-10" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Media;
