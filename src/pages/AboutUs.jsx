
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Zap, Globe, XCircle } from 'lucide-react';
import Team from '../components/Team';
import officeBrandingImg from '../assets/office_branding_v2.png';
import engineeringChallengesImg from '../assets/engineering_challenges.png';
import solarTraining1Img from '../assets/solar_training_1.png';
import solarTraining2Img from '../assets/solar_training_2.png';
import installationTrainingHeroImg from '../assets/installation_training_hero.png';

const AboutUs = () => {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <div className="bg-rsBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rsRed rounded-full opacity-10 blur-3xl"></div>
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide relative z-10">About RS Solar CAD Group</h1>
                <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed relative z-10 font-light">
                    "Powering the Global Solar Revolution with Precision, Innovation & Real-World Expertise"
                </p>
                <div className="w-24 h-1 bg-rsRed mx-auto mt-8 rounded-full relative z-10"></div>
            </div>

            {/* Who We Are Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-rsRed opacity-10 rounded-full"></div>
                                <img
                                    src={officeBrandingImg}
                                    alt="RS Solar Office Branding"
                                    className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
                                />
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rsBlue opacity-10 rounded-full -z-0"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <h2 className="text-3xl font-bold text-rsBlue mb-4 leading-tight">Not Just an Outsourcing Firm — <br /><span className="text-rsRed">A True Strategic Partner</span></h2>
                            <div className="bg-blue-50 border-l-4 border-rsBlue p-6 my-6 rounded-r-xl">
                                <p className="text-xl text-rsBlue font-medium italic">
                                    "Most outsourcing providers work for their clients. RS Solar CAD Group works with them."
                                </p>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                                We embed ourselves directly into your operations, functioning as a natural extension of your in-house team. Our partnership model is built on deep collaboration and long-term alignment, enabled through:
                            </p>
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                                <ul className="space-y-4">
                                    {[
                                        "Integrated engineering workflows",
                                        "Employee exchange and continuous knowledge sharing",
                                        "Resident engineers for ongoing quality monitoring",
                                        "Shared training and skill-development centers",
                                        "A dedicated back-office for solar design and sales proposals"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-700 group">
                                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 group-hover:bg-rsBlue transition-colors duration-300">
                                                <CheckCircle className="w-4 h-4 text-rsBlue group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                Our goal is to integrate so seamlessly into your organization that we operate as your captive offshore design team—delivering scale, consistency, and control without the cost or management complexity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values / Strengths Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-rsBlue">Our Core Strengths</h2>
                        <div className="w-20 h-1 bg-rsRed mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-rsBlue group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-10 -translate-y-10 group-hover:bg-blue-100 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-rsBlue group-hover:bg-rsBlue group-hover:text-white transition-colors duration-300">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership & Reverse Integration</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We believe successful outsourcing goes beyond task execution. RS Solar CAD Group integrates directly into our clients’ operational ecosystem, functioning as a true offshore extension of their team.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Our collaboration framework includes shared workflows, knowledge exchange, resident quality engineers, and dedicated support teams. By aligning with your culture and processes, we create a captive back-office for solar design and proposal management—ensuring long-term value and operational continuity.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-rsRed group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full translate-x-10 -translate-y-10 group-hover:bg-red-100 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-rsRed group-hover:bg-rsRed group-hover:text-white transition-colors duration-300">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Deliver</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    RS Solar CAD Group provides end-to-end CAD-based solar design and engineering outsourcing tailored to residential, commercial, and utility-scale projects. Our skilled engineering teams work as an extension of your operations, helping you remain competitive in cost-driven markets.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Through scalable delivery models, disciplined quality controls, and clearly defined service-level commitments, we ensure accurate and timely outputs.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <Team />

            {/* Industry-First Training Section */}
            {/* Industry-First Training Section - Split into two rows */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Row 1: The Challenge */}
                    <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                        <div className="md:w-1/2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-rsRed/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                                <img
                                    src={installationTrainingHeroImg}
                                    alt="Industry-First On-Site Installation Training"
                                    className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20">
                                    <p className="font-bold text-rsBlue text-sm">THE INDUSTRY GAP</p>
                                    <p className="text-gray-600 text-xs">Designers often lack field exposure, leading to installation conflicts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-rsBlue mb-2">Industry-First On-Site Installation Training</h2>
                            <h3 className="text-lg font-bold text-rsRed mb-6 uppercase tracking-wide">(Why Our Designers Are Truly Different)</h3>

                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                One of the biggest challenges in solar outsourcing is that designers are trained only in office environments—never on real installation sites. This gap often results in design assumptions that don’t translate well in the field.
                            </p>

                            <div className="bg-red-50 p-8 rounded-2xl border border-red-100 relative overflow-hidden">
                                <h4 className="font-bold text-rsRed mb-4 text-lg flex items-center">
                                    <XCircle className="w-6 h-6 mr-2" />
                                    Common Industry Challenges
                                </h4>
                                <ul className="space-y-3 relative z-10">
                                    {[
                                        "Incorrect mounting and layout assumptions",
                                        "Inefficient conduit and wiring planning",
                                        "Limited understanding of roof structures",
                                        "Improper BOS selection",
                                        "Frequent revisions during execution"
                                    ].map((issue, i) => (
                                        <li key={i} className="flex items-center text-gray-800 font-medium">
                                            <span className="w-1.5 h-1.5 bg-rsRed rounded-full mr-3"></span>
                                            {issue}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: The Solution */}
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src={solarTraining1Img}
                                    alt="Solar Installation Training"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
                                />
                                <img
                                    src={solarTraining2Img}
                                    alt="Field Work"
                                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                />
                                <div className="col-span-2 bg-rsBlue text-white p-6 rounded-2xl shadow-xl flex items-center justify-between">
                                    <div>
                                        <p className="text-2xl font-bold">100%</p>
                                        <p className="text-sm opacity-80">Field-Trained Engineers</p>
                                    </div>
                                    <CheckCircle className="w-10 h-10 text-green-400" />
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2">
                            <div className="mb-8">
                                <h4 className="text-3xl font-bold text-gray-900 mb-2">We Changed The Model.</h4>
                                <div className="w-24 h-1.5 bg-green-500 rounded-full mb-6"></div>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    In 2025, RS Solar CAD Group launched <span className="font-bold text-green-600">India’s first Solar Design Training Program</span> with Real On-Site Installation Exposure. Our engineers are trained directly on live solar projects.
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 mb-8">
                                <h5 className="font-bold text-green-800 mb-4 uppercase text-sm tracking-wide">Hands-on Experience In:</h5>
                                <ul className="grid grid-cols-1 gap-4">
                                    {[
                                        "Practical PV layout and stringing methods",
                                        "Structural mounting systems and load behavior",
                                        "Electrical wiring, conduit routing & safety",
                                        "Signage, labeling, and BOS specifications",
                                        "Grounding, bonding & code-compliance"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-800">
                                            <div className="bg-white p-1 rounded-full mr-3 shadow-sm mt-0.5">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            </div>
                                            <span className="text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 italic border-l-4 border-green-500 pl-4">
                                "This real-world training enables our engineers to deliver designs that are more accurate, more practical, and fully aligned with field realities."
                            </p>

                            <a href="/contact-us" className="inline-block px-8 py-3 bg-rsBlue text-white font-bold rounded-full hover:bg-blue-900 transition-colors shadow-lg">
                                Experience the Difference
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUs;
