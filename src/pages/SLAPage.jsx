import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ShieldCheck,
    Zap,
    Activity,
    Target,
    BarChart3,
    Cpu,
    Lock,
    CheckCircle,
    ArrowRight,
    FileText,
    TrendingUp,
    Binary,
    Info,
    Layout,
    Users,
    Clock,
    UserCheck
} from 'lucide-react';
import SEO from '../components/SEO';

import SLA_HERO from '../assets/sla_hero.png';
import SLA_PILLARS from '../assets/sla_pillars.png';
import SLA_INTERVENTIONS from '../assets/sla_interventions.png';

const SLAPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleLine = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const processSteps = [
        {
            title: "Optimization",
            description: "At each project's outset, our operations team reviews the project requirements and analyze existing procedures to develop an optimized strategy.",
            items: [
                "Comprehensive Scope Analysis",
                "Define Customized Strategies to meet clients’ requirement",
                "Stakeholder Collaboration for finalizing the strategy",
                "Optimized processes leading to enhanced productivity",
                "Continuous Improvement and ongoing refinements to the process"
            ],
            icon: <Zap className="w-8 h-8" />,
            color: "from-blue-500 to-blue-700"
        },
        {
            title: "Standardization",
            description: "Following the consensus, the workflow and Level 2 processes are systematically documented, resulting in documentation of a standardized process.",
            items: [
                "Documentation: Systematic recording into a process manual",
                "Team Training: Comprehensive training on formalized processes",
                "Regular Audits: Ensuring adherence to documented workflows",
                "CAPA Formulation: Addressing deviations with immediate measures",
                "Audit Completion: Formal conclusion to maintain standards"
            ],
            icon: <FileText className="w-8 h-8" />,
            color: "from-orange-500 to-orange-700"
        },
        {
            title: "Continuous Improvement",
            description: "Directed by the Business Excellence team, our continuous enhancement initiatives involve collaboration with Service Delivery and Solutions.",
            items: [
                "Performance Metrics Identification: Measure Data",
                "Reporting and Monitoring Systems: Maintain Accurate Control",
                "Opportunities for Improvements: Explore Potential Enhancements",
                "Continuous Improvement Plans: Implement Progressive Strategies",
                "Feedback Integration: Apply Client Insights"
            ],
            icon: <TrendingUp className="w-8 h-8" />,
            color: "from-rsRed to-red-600"
        }
    ];

    const interventions = [
        {
            title: "Lean Methodologies",
            tagline: "Boost productivity with Lean @ RS, integrating innovative methods for streamlined operations.",
            points: [
                "Eliminate waste and optimize resource use",
                "Increase operational speed and capacity by reducing lead times",
                "Improve quality and efficiency through lean tools",
                "Implement value stream mapping and Kaizen blitz",
                "Utilize standardized work, 5S, and visual controls"
            ],
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: "Agile Management",
            tagline: "Foster flexibility and efficiency with our Agile approach, prioritizing adaptability.",
            points: [
                "Enhance flexibility and responsiveness",
                "Deliver projects efficiently by adapting quickly to changes",
                "Cultivate a culture of continuous feedback",
                "Prioritize iterative progress",
                "Embrace adaptability for improved project deliveries"
            ],
            icon: <Activity className="w-6 h-6" />
        },
        {
            title: "Six Sigma",
            tagline: "Elevate standards with Six Sigma, ensuring unparalleled quality through data-driven precision.",
            points: [
                "Integrate Six Sigma with Lean methodologies",
                "Maintain highest quality standards in operations",
                "Utilize data-driven approach to minimize defects",
                "Ensure consistency and reliability in processes",
                "Deliver super quality to clients"
            ],
            icon: <Target className="w-6 h-6" />
        }
    ];

    const workflowTools = [
        {
            name: "Management Information System (MIS)",
            desc: "Centralizes and streamlines data management, integrating client and employee databases along with financial records. Enhances operational efficiency and supports informed decision-making.",
            icon: <Info className="w-5 h-5" />
        },
        {
            name: "Price Volume Revenue (PVR)",
            desc: "Allows managers to log daily delivery volumes and update revenue in real-time. Integrated with MIS for growth analysis and strategic decision-making.",
            icon: <BarChart3 className="w-5 h-5" />
        },
        {
            name: "Design Center (DC)",
            desc: "Specialized workflow tool tailored for customers, streamlining the design process through an intuitive interface. Facilitates project management and creative collaboration.",
            icon: <Layout className="w-5 h-5" />
        },
        {
            name: "Workforce Management Systems (WMS)",
            desc: "Utilized by production teams to oversee the entire workflow, evaluating performance and enhancing efficiency, quality, and turnaround times.",
            icon: <Users className="w-5 h-5" />
        },
        {
            name: "Delivery Trackers",
            desc: "Real-time monitoring and status updates, enhancing project transparency, reducing delays, and improving overall delivery efficiency.",
            icon: <Clock className="w-5 h-5" />
        }
    ];

    return (
        <div ref={containerRef} className="relative bg-[#fafbff] overflow-hidden pt-20">
            <SEO
                title="SLA & Quality | RS Solar CAD Group"
                description="100% SLA Driven Performance. Synergizing Quality Control and Assurance for unparalleled global standards."
                canonical="https://rscadgroup.com/sla"
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0d1b42]">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src={SLA_HERO} alt="SLA Hero" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b42]/80 via-[#0d1b42]/40 to-[#fafbff]"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-rsRed/20 backdrop-blur-md px-6 py-2 rounded-full border border-rsRed/30 mb-8"
                    >
                        <ShieldCheck className="w-4 h-4 text-rsRed" />
                        <span className="text-white text-xs font-bold uppercase tracking-[0.2em]">100% SLA Driven Performance</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight uppercase"
                    >
                        Quality <span className="text-rsRed italic">Scorecards.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
                    >
                        Synergizing control and assurance for unparalleled global quality levels.
                    </motion.p>
                </div>
            </section>

            {/* Process Management Section */}
            <section className="py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold text-rsRed uppercase tracking-widest mb-4">The RS Way</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-rsBlue">Our Process Management</h3>
                        <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            Our process management program is maintained by three steps of optimization, standardization and continuous improvement as governed by our Quality Framework.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#fafbff] p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                                    {step.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-rsBlue mb-4">{step.title}</h4>
                                <p className="text-sm text-gray-500 mb-8 leading-relaxed italic">{step.description}</p>
                                <ul className="space-y-3">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-xs text-gray-400 font-medium">
                                            <div className="w-1.5 h-1.5 bg-rsRed rounded-full mt-1.5 flex-shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars of Excellence Section */}
            <section className="py-32 bg-[#0d1b42] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src={SLA_PILLARS}
                                alt="Pillars of Excellence"
                                className="w-full rounded-[3rem] shadow-2xl border-4 border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-rsRed/20 rounded-[3rem] pointer-events-none"></div>
                        </motion.div>
                        <div>
                            <h2 className="text-rsRed font-bold uppercase tracking-widest mb-4">Our Foundation</h2>
                            <h3 className="text-4xl md:text-7xl font-black mb-10">Pillars of <span className="text-rsRed italic">Excellence.</span></h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Our commitment to excellence is built upon a robust framework of core principles that guide every aspect of our operations. These pillars ensure consistent quality, innovation, and client satisfaction.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-rsRed/20 text-rsRed rounded-full flex items-center justify-center flex-shrink-0">
                                        <Binary className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Data-Driven Decisions</h4>
                                        <p className="text-gray-400 text-sm">Leveraging analytics to inform strategies and optimize outcomes.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-rsRed/20 text-rsRed rounded-full flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Rigorous Quality Control</h4>
                                        <p className="text-gray-400 text-sm">Implementing stringent checks at every stage to ensure perfection.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-rsRed/20 text-rsRed rounded-full flex items-center justify-center flex-shrink-0">
                                        <TrendingUp className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Continuous Improvement</h4>
                                        <p className="text-gray-400 text-sm">Fostering a culture of ongoing enhancement and innovation.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interventions Section */}
            <section className="py-32 bg-[#0d1b42] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rsRed/5 rounded-full blur-[120px] -mr-96 -mt-96"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-rsRed font-bold uppercase tracking-widest mb-4">Intervention Framework</h2>
                        <h3 className="text-4xl md:text-7xl font-black mb-10">Enabling <span className="text-rsRed italic">Change.</span></h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src={SLA_INTERVENTIONS}
                                alt="Operational Interventions"
                                className="w-full rounded-[3rem] shadow-2xl border-4 border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-rsBlue/20 rounded-[3rem] pointer-events-none"></div>
                        </motion.div>
                        <div className="space-y-6">
                            {interventions.map((int, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 group cursor-default"
                                >
                                    <div className="flex gap-6 items-center mb-6">
                                        <div className="w-14 h-14 bg-rsRed text-white rounded-2xl flex items-center justify-center group-hover:bg-rsBlue transition-colors">
                                            {int.icon}
                                        </div>
                                        <h4 className="text-2xl font-bold text-white tracking-tight">{int.title}</h4>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-6 font-light">{int.tagline}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {int.points.map((pt, pIdx) => (
                                            <span key={pIdx} className="bg-white/10 text-white/60 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest group-hover:bg-rsRed/20 group-hover:text-white transition-colors uppercase">
                                                {pt}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Commitments Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h3 className="text-4xl font-black text-rsBlue mb-10">Quality Process</h3>
                            <p className="text-gray-500 leading-relaxed mb-12 italic">
                                Our quality process integrates robust Quality Control and Assurance practices. We adhere to high standards, fostering rapid improvement to meet the dynamic demands of our global clients.
                            </p>

                            <div className="space-y-10">
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 group">
                                    <h4 className="text-xl font-bold text-rsBlue mb-4 flex items-center gap-3">
                                        <CheckCircle className="w-6 h-6 text-rsRed" />
                                        Customer Satisfaction
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Delight customers through exceptional delivery",
                                            "Prioritize customer feedback",
                                            "Exceed customer expectations",
                                            "Proactive communication",
                                            "Satisfaction metrics tracking"
                                        ].map((item, i) => (
                                            <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <h4 className="text-xl font-bold text-rsBlue mb-4 flex items-center gap-3">
                                        <UserCheck className="w-6 h-6 text-rsRed" />
                                        Talent Development
                                    </h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        Attract top talent through compelling opportunities, provide comprehensive training, and cultivate a culture of employees engagement and recognition.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-black text-rsRed uppercase tracking-widest mb-4">Workflow Tools</h3>
                            {workflowTools.map((tool, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-[#fafbff] rounded-2xl border border-gray-100 flex gap-6"
                                >
                                    <div className="w-12 h-12 bg-rsBlue/5 text-rsBlue rounded-xl flex items-center justify-center flex-shrink-0">
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-rsBlue text-sm mb-2">{tool.name}</h5>
                                        <p className="text-[11px] text-gray-500 leading-relaxed">{tool.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="py-40 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-4xl md:text-7xl font-black text-[#0d1b42] mb-12 tracking-tighter">
                        100% SLA <span className="text-rsRed italic">ASSURANCE.</span>
                    </h3>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#0d1b42] text-white px-16 py-8 rounded-[2rem] font-black text-2xl shadow-2xl hover:bg-rsRed transition-all flex items-center justify-center gap-4 mx-auto group"
                    >
                        Learn More
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default SLAPage;
