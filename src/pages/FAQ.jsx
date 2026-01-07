import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        category: "General",
        id: 1,
        question: "What is the typical turnaround time for a residential solar permit plan?",
        answer: "Our standard turnaround time for residential permit plans is 24 hours. For urgent projects, we offer an expedited 12-hour turnaround service. Commercial projects typically require 48-72 hours depending on complexity."
    },
    {
        category: "General",
        id: 2,
        question: "Do you provide professional engineering (PE) stamps?",
        answer: "Yes, we provide both Electrical and Structural Professional Engineering (PE) stamps across all 50 US states. This ensures your designs are fully compliant with local jurisdiction and utility requirements."
    },
    {
        category: "Services",
        id: 3,
        question: "Which CAD software does your team use?",
        answer: "Our team is expert in AutoCAD, Revit, SketchUp, and PVsyst. We can also work within your proprietary design platforms if required, acting as a seamless extension of your engineering wing."
    },
    {
        category: "Services",
        id: 4,
        question: "Do you handle utility interconnection applications?",
        answer: "Absolutely. We can manage the entire interconnection application process, including Solar Interconnection, SGIP, RRF, and more, ensuring all technical documentation meets utility standards for faster PTO."
    },
    {
        category: "Partnership",
        id: 5,
        question: "How do you ensure the quality and accuracy of the designs?",
        answer: "We employ a triple-check quality assurance protocol. Every design is first drafted, then reviewed by a senior engineer, and finally verified against a site-specific checklist before delivery. We maintain a 98% first-time approval rate with AHJs."
    },
    {
        category: "Partnership",
        id: 6,
        question: "How does the staffing model work?",
        answer: "Our staffing model is flexible. You can hire a dedicated full-time designer who works exclusively for you, or utilize our 'bucket of hours' model for fluctuating workloads. We handle all HR, payroll, and infrastructure costs."
    }
];

const FAQ = () => {
    const [openId, setOpenId] = useState(1);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        document.title = "FAQ | RS Solar CAD Group";
    }, []);

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ["All", ...new Set(faqs.map(f => f.category))];

    return (
        <div className="pt-20 bg-gray-50 min-h-screen font-sans">
            {/* Hero Section */}
            <div className="bg-[#001528] py-20 px-4 text-center text-white relative">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
                            How Can We <span className="text-rsRed italic underline decoration-white/20">Help?</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light mb-12">
                            Quick answers to common questions about our solar design, engineering, and staffing solutions.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                className="w-full pl-16 pr-6 py-5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rsRed transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16 text-white">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat ? 'bg-rsRed text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* FAQ Accordion */}
                    <div className="space-y-4">
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex gap-4 items-center">
                                            <HelpCircle className={`w-5 h-5 transition-colors ${openId === faq.id ? 'text-rsRed' : 'text-gray-300'}`} />
                                            <span className="text-lg font-bold text-[#001528] leading-tight">{faq.question}</span>
                                        </div>
                                        {openId === faq.id ? <Minus className="w-5 h-5 text-rsRed" /> : <Plus className="w-5 h-5 text-gray-400" />}
                                    </button>

                                    <AnimatePresence>
                                        {openId === faq.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-15 pb-6 text-gray-600 leading-relaxed font-light pl-6 pr-6">
                                                    <div className="border-t border-gray-50 pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg italic">No questions found matching your search. Try another term!</p>
                            </div>
                        )}
                    </div>

                    {/* Support Contact */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="mt-24 p-12 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 text-center border border-gray-50"
                    >
                        <div className="w-20 h-20 bg-rsRed/10 text-rsRed rounded-full flex items-center justify-center mx-auto mb-8">
                            <MessageCircle className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#001528] mb-4">Still have questions?</h3>
                        <p className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed">
                            Our team is available 24/7 to discuss your project requirements.
                            Get a personalized consultation and a technical roadmap for your team.
                        </p>
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center justify-center px-10 py-4 bg-[#001528] text-white font-bold rounded-full hover:bg-rsRed transition-all shadow-xl"
                        >
                            Talk to Us Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
