
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Zap, Globe } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <div className="bg-rsBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rsRed rounded-full opacity-10 blur-3xl"></div>
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide relative z-10">About RS Solar CAD Group</h1>
                <p className="mt-6 text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed relative z-10">
                    "Our mission is to streamline solar and EV charger design, engineering, and field services for contractors."
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
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="RS Solar Team Strategy"
                                    className="rounded-2xl shadow-2xl relative z-10"
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
                            <h2 className="text-3xl font-bold text-rsBlue mb-6">Who We Are</h2>
                            <h3 className="text-xl font-semibold text-gray-700 mb-6 border-l-4 border-rsRed pl-4">
                                Empowering solar installers with the tools and expertise needed for successful projects.
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
                                RS Solar CAD Group is a premier provider of solar design and engineering solutions. Specializing in designing for both residential and commercial sectors, we offer a wide range of services, including <strong>solar permit plan set designs</strong>, structural and electrical stamps, and detailed engineering reviews.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-light text-lg">
                                Whether it’s a rooftop installation, ground-mounted solar array, or solar carport, we provide the comprehensive support needed to ensure the success of every project. We guarantee accuracy, safety, and reliability in all designs, instilling confidence in the integrity of each solar system.
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Innovation',
                                desc: 'Continuously adapting to the latest solar technologies and trends.',
                                icon: <Zap className="w-8 h-8 text-white" />
                            },
                            {
                                title: 'Reliability',
                                desc: 'Consistent, high-quality results delivered on time, every time.',
                                icon: <Target className="w-8 h-8 text-white" />
                            },
                            {
                                title: 'Sustainability',
                                desc: 'Providing eco-friendly, energy-efficient solutions for a greener future.',
                                icon: <Globe className="w-8 h-8 text-white" />
                            },
                            {
                                title: 'Expertise',
                                desc: 'Dedicated, professional assistance throughout the project lifecycle.',
                                icon: <CheckCircle className="w-8 h-8 text-white" />
                            }
                        ].map((val, idx) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-transparent hover:border-rsRed"
                            >
                                <div className="w-16 h-16 bg-rsBlue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-rsRed transition-colors duration-300 shadow-md">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{val.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top-Quality Solutions Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="Engineering Excellence"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-rsBlue opacity-10 rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-rsBlue mb-6">Top-Quality Solar Solutions with Unmatched Precision</h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                At RS Solar CAD Group, we deliver exceptional PV permit designs tailored for U.S. solar installers. With specialized knowledge of U.S. solar industry regulations, we ensure compliance and precision in every project.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                Our focus on enhancing data management streamlines processes, boosting efficiency for our clients. Beyond solar design, we are committed to sustainability, actively maintaining plants with trees to contribute to a greener future.
                            </p>
                            <a href="/contact-us" className="inline-block px-8 py-3 bg-rsRed text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg">
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
