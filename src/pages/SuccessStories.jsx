import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
    {
        title: "Scaling Residential Capacity by 400%",
        client: "SolarTech Solutions, California",
        challenge: "SolarTech was struggling with a 14-day backlog in permit plan designs, causing cancellations and lost revenue.",
        solution: "Implementing a dedicated 5-person offshore design team from RS Solar CAD Group for overnight processing.",
        result: "Turnaround time reduced to <24 hours. Project volume increased from 20 to 100 designs per week.",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800",
        stats: ["99.5% Approval Rate", "4x Volume Increase"]
    },
    {
        title: "Rapid Deployment for 50MW Portfolio",
        client: "GreenEnergy Partners, Arizona", Challenge: "Required structural and electrical reviews for a massive commercial portfolio spread across 12 states with tight deadlines.",
        challenge: "GreenEnergy needed professional engineering stamps across 12 different states for a 50MW portfolio with a 3-week deadline.",
        solution: "RS Solar CAD Group mobilized its network of professional engineers (PE) and a dedicated project management team.",
        result: "All 50MW of designs were reviewed, stamped, and approved within 18 days.",
        image: "https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80&w=800",
        stats: ["12 States", "18 Day Delivery"]
    },
    {
        title: "Enterprise Staffing for National EPC",
        client: "Vanguard Solar, National",
        challenge: "Fluctuating seasonal demand led to over-hiring during peaks and layoffs during troughs.",
        solution: "A hybrid staffing model where RS Solar CAD Group provided a core team of 10 designers plus an on-demand pool of 15 additional drafters.",
        result: "Consistent quality through peaks. 35% reduction in annual design overhead costs.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
        stats: ["35% Cost Savings", "Zero Headcount Risk"]
    }
];

const SuccessStories = () => {
    useEffect(() => {
        document.title = "Success Stories | RS Solar CAD Group";
    }, []);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen font-sans">
            <SEO
                title="Success Stories"
                description="See how RS Solar CAD Group has helped clients achieve their solar energy goals through successful projects and partnerships."
                canonical="https://rscadgroup.com/success-stories"
            />
            {/* Hero Section */}
            <div className="bg-[#1f3366] text-white py-24 px-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                            Success <span className="text-rsRed">Stories</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
                            Real results for the world's leading solar installers, EPCs, and engineering firms.
                            See how we power growth through precision and speed.
                        </p>
                    </motion.div>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>
            </div>

            {/* Stories Grid */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto space-y-24">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="lg:w-1/2">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-rsRed opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-opacity"></div>
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[450px] object-cover"
                                    />
                                    {/* Stats Floating Tags */}
                                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
                                        {story.stats.map((stat, i) => (
                                            <span key={i} className="px-4 py-2 bg-white/95 backdrop-blur-sm text-[#001528] font-bold rounded-full text-sm shadow-xl flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-rsRed" />
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 text-rsRed font-bold mb-4 uppercase tracking-widest text-sm">
                                    <Star className="w-4 h-4" />
                                    Client Success Case
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#001528] mb-6 leading-tight">
                                    {story.title}
                                </h2>
                                <h4 className="text-xl font-bold text-gray-400 mb-8 italic">{story.client}</h4>

                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 text-rsRed">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#001528] mb-1">The Challenge</p>
                                            <p className="text-gray-600 leading-relaxed font-light">{story.challenge}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 text-[#1f3366]">
                                            <Zap className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#001528] mb-1">The RS Solution</p>
                                            <p className="text-gray-600 leading-relaxed font-light">{story.solution}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 border-t border-gray-200 pt-8 mt-8">
                                        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shrink-0 text-green-600">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#001528] mb-1">The Bottom Line</p>
                                            <p className="text-gray-800 font-medium leading-relaxed">{story.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Strategic Consultation Banner */}
            <section className="pb-24 px-4">
                <div className="max-w-7xl mx-auto bg-[#001528] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Achieve These Results.</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                        Join 170+ global partners who have optimized their design operations with our dedicated engineering support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 text-white">
                        <Link to="/contact-us" className="bg-rsRed  px-10 py-5 rounded-full font-bold shadow-xl shadow-rsRed/20 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                            Request Case Studies
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/contact-us" className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all">
                            Talk to an Expert
                        </Link>
                    </div>
                    {/* Background Decorative */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-rsRed opacity-20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
