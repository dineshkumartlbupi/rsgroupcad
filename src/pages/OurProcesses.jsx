import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Search,
    Lightbulb,
    Layers,
    Settings,
    CheckCircle,
    TrendingUp,
    FileText,
    Users,
    ShieldCheck,
    MessageSquare,
    ArrowRight,
    Zap,
    Users2,
    Handshake,
    Rocket,
    ClipboardCheck,
    HelpCircle,
    CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';

import HERO_IMAGE from '../assets/process_hero_3d.png';
import INTERNAL_ILLUSTRATION from '../assets/internal_process.png';

const OurProcesses = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleLine = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const springLine = useSpring(scaleLine, { stiffness: 100, damping: 30 });

    const engagementSteps = [
        { title: "Know the Business", icon: <Search className="w-8 h-8" />, color: "from-blue-500 to-blue-700" },
        { title: "Understand the Pain Areas", icon: <Lightbulb className="w-8 h-8" />, color: "from-orange-500 to-orange-700" },
        { title: "Map solutions", icon: <Layers className="w-8 h-8" />, color: "from-blue-600 to-blue-900" },
        { title: "Value Chain Contribution", icon: <Zap className="w-8 h-8" />, color: "from-rsRed to-red-600" },
        { title: "Define the process", icon: <ClipboardCheck className="w-8 h-8" />, color: "from-purple-500 to-purple-700" },
        { title: "Collaborate", icon: <Handshake className="w-8 h-8" />, color: "from-green-500 to-green-700" },
        { title: "Define the execution Roadmap", icon: <Rocket className="w-8 h-8" />, color: "from-indigo-500 to-indigo-700" },
        { title: "Execute & Deliver", icon: <TrendingUp className="w-8 h-8" />, color: "from-teal-500 to-teal-700" }
    ];

    return (
        <div ref={containerRef} className="relative bg-[#fafbff] overflow-hidden">
            <SEO
                title="Our Processes | RS Solar CAD Group"
                description="Our overarching delivery processes remain standard, while the execution is tailored to the specific business needs of our clients."
                canonical="https://rscadgroup.com/our-processes"
            />

            {/* Premium Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full"
                    >
                        <img
                            src={HERO_IMAGE}
                            alt="Process Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b42]/85 via-[#0d1b42]/50 to-[#fafbff]"></div>
                    </motion.div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8"
                    >
                        <span className="w-2 h-2 bg-rsRed rounded-full animate-pulse"></span>
                        <span className="text-white/80 text-sm font-bold uppercase tracking-widest">Optimized Operating Costs</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter"
                    >
                        OUR <br />
                        <span className="text-rsRed italic">PROCESSES</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Ensuring maximum value for clients at the most efficient price through streamlined
                        and transparent engagement models.
                    </motion.p>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                >
                    <div className="w-[1px] h-12 bg-rsBlue"></div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-rsBlue">Scroll</span>
                </motion.div>
            </section>

            {/* Engagement Roadmap */}
            <section className="py-32 relative bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                        <div>
                            <h2 className="text-sm font-bold text-rsRed uppercase tracking-[.3em] mb-4">Journey of Excellence</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-[#0d1b42] mb-8">
                                Engagement <br />
                                <span className="text-gray-400">Roadmap.</span>
                            </h3>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="font-bold text-rsBlue mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-rsRed" />
                                    New Customer Profile
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "Looking for outsourcing partner",
                                        "Want to optimize operating cost",
                                        "Leverage the domain knowledge and expertise outside",
                                        "Reduce fluctuation risk",
                                        "Focus on niche business processes"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-rsRed rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {engagementSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                                        {step.icon}
                                    </div>
                                    <h4 className="text-sm font-black text-rsBlue uppercase tracking-tighter leading-tight">{step.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Process Introduction */}
            <section className="py-32 relative bg-[#fafbff] border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl md:text-5xl font-black text-rsBlue mb-10 italic">"Every client is unique and we recognize and respect that."</h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light first-letter:text-5xl first-letter:font-black first-letter:text-rsRed first-letter:mr-3 first-letter:float-left text-left">
                        Therefore, while our overarching delivery processes remain standard, the execution is tailored to the specific business needs of a client. Once we identify that there is a synergy between what you are looking for and what we have on offer, our pre-sales team works closely with your project teams to understand the detailing and specific requirements. We engage with the client at no cost during the pre-sales stage for a couple of samples after which all the meeting notes and necessary documentation is transitioned to operations for their trainings and delivery.
                    </p>
                </div>
            </section>

            {/* New Job Work-Flow Transatctional */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h3 className="text-4xl md:text-6xl font-black text-[#0d1b42]">New Job Work-Flow</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 hidden md:block -translate-y-1/2 z-0"></div>

                        {/* Customer Side */}
                        <div className="space-y-6 relative z-10">
                            <div className="bg-rsBlue text-white p-6 rounded-2xl font-bold uppercase tracking-widest text-center shadow-xl">Customer Interaction</div>
                            {[
                                { title: "Design Request", icon: <FileText className="w-5 h-5" /> },
                                { title: "Provide confirmation / additional input", icon: <MessageSquare className="w-5 h-5" /> },
                                { title: "Quality Review and acceptance", icon: <CheckCircle2 className="w-5 h-5" /> }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-center gap-6 group hover:bg-white hover:shadow-2xl transition-all"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-rsBlue shadow-sm group-hover:bg-rsBlue group-hover:text-white transition-colors">{step.icon}</div>
                                    <h4 className="font-bold text-rsBlue">{step.title}</h4>
                                </motion.div>
                            ))}
                        </div>

                        {/* RS Side */}
                        <div className="space-y-6 relative z-10 mt-12 md:mt-0">
                            <div className="bg-rsRed text-white p-6 rounded-2xl font-bold uppercase tracking-widest text-center shadow-xl">RS Solar CAD Execution</div>
                            {[
                                { title: "Input Review and confirmation", icon: <Search className="w-5 h-5" /> },
                                { title: "Design Process", icon: <Settings className="w-5 h-5" /> },
                                { title: "Query / Observation / Additional Input request", icon: <HelpCircle className="w-5 h-5" /> },
                                { title: "Design Complete & Delivery", icon: <Rocket className="w-5 h-5" /> }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                                    className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-center gap-6 group hover:bg-white hover:shadow-2xl transition-all"
                                >
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-rsRed shadow-sm group-hover:bg-rsRed group-hover:text-white transition-colors">{step.icon}</div>
                                    <h4 className="font-bold text-rsBlue">{step.title}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance & Team Training Detail */}
            <section className="py-32 bg-[#0d1b42] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <img src={INTERNAL_ILLUSTRATION} alt="QA" className="rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-rsBlue/40 rounded-[4rem] pointer-events-none"></div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-12">
                            <div>
                                <h4 className="text-rsRed font-black uppercase tracking-widest mb-4">Quality Assurance</h4>
                                <p className="text-gray-300 leading-relaxed font-light">
                                    Once the Pre-sales team gets the client’s approval for a sample, QA team gets into action.
                                    They start developing checklists for ensuring that QC can be conducted on every file / batch
                                    and agreed standard of quality is maintained across the length of a project.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-rsRed font-black uppercase tracking-widest mb-4">Team Assignment & Training</h4>
                                <p className="text-gray-300 leading-relaxed font-light">
                                    Operations department, after clearance by pre-sales deploys a team and starts training them on
                                    the project specific requirements. Team sizing and identification starts at the time of customer
                                    sign-up, however, the project-specific trainings begin only after the samples are approved.
                                    These trainings usually last between <span className="text-white font-bold">1-3 days</span> depending
                                    on the complexity / uniqueness of a project. Our in-house training facility can train
                                    <span className="text-white font-bold"> 3-4 simultaneous batches</span> of upto 20 people.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Touch Points */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h3 className="text-4xl md:text-6xl font-black text-rsBlue">Touch Points</h3>
                        <p className="mt-8 text-gray-500 max-w-2xl mx-auto italic font-medium">
                            Transitioning from Pre-sales stability to long-term management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-[#fafbff] p-12 rounded-[4rem] border border-gray-100 hover:shadow-2xl transition-all cursor-default">
                            <div className="w-16 h-16 bg-rsBlue text-white rounded-2xl flex items-center justify-center mb-8"><Users2 className="w-8 h-8" /></div>
                            <h4 className="text-2xl font-bold text-rsBlue mb-6">Project Manager</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Responsible for the volume and quality of delivery. They work directly with team leaders to monitor quality checkpoints and ensure seamless project execution.
                            </p>
                        </div>
                        <div className="bg-[#fafbff] p-12 rounded-[4rem] border border-gray-100 hover:shadow-2xl transition-all cursor-default relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rsRed/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                            <div className="w-16 h-16 bg-rsRed text-white rounded-2xl flex items-center justify-center mb-8"><Handshake className="w-8 h-8" /></div>
                            <h4 className="text-2xl font-bold text-rsBlue mb-6">Account Manager</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Plays a more important role of being the client’s voice in the process. An account manager will not only act as a SPOC for all your needs pertaining to Finance, Operations, Feedback etc. but our account managers also keep an active engagement with you in order to partner and plan ahead for your up-coming growth plans and alternate geographies of operation, thereby helping you grow faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery & Feedback */}
            <section className="py-32 bg-gray-50 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black text-rsBlue mb-10">Delivery and Feedback</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                                At RS Solar CAD Group, we assign the highest value to our client’s requirements and feedback. Therefore, the project manager along with his team leaders gets on a weekly / fortnightly call with the client to review the quality of delivery and prepare a rolling weekly / monthly forecast for planning his team in order to fully cater to your business needs.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                Feedback from client is not limited to the quality of work alone, we also engage with the customer through a detailed CSAT (Customer Satisfaction Survey) to serve the client better across all areas of engagement like invoicing, pricing, quality, promptness of response etc.
                            </p>
                        </div>
                        <div className="bg-white p-16 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-100 text-center">
                            <div className="w-20 h-20 bg-rsRed/10 text-rsRed rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <TrendingUp className="w-10 h-10" />
                            </div>
                            <h4 className="text-4xl font-black text-rsRed mb-4 tracking-tighter italic whitespace-nowrap overflow-hidden">HAPPY & DELIGHTED CUSTOMER</h4>
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">The Ultimate Goal of Our Process</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-40 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-4xl md:text-7xl font-black text-[#0d1b42] mb-12 tracking-tighter">
                        EXPERIENCE THE <span className="text-rsRed italic">PRECISION.</span>
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#0d1b42] text-white px-16 py-8 rounded-[2rem] font-black text-2xl shadow-2xl hover:bg-rsRed transition-all flex items-center justify-center gap-4 mx-auto group"
                    >
                        Schedule a Sync
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default OurProcesses;
