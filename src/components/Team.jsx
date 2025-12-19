
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

import jitendraImg from '../assets/team/jitendra_kumar_v2.png';
import sauravImg from '../assets/team/saurav_kumar.jpg';
import rahulImg from '../assets/team/rahul_kumar.jpg';
import amreenImg from '../assets/team/amreen_jahan.jpg';
import kailashImg from '../assets/team/kailash_singh.jpg';
import agamImg from '../assets/team/agam_bhardwaj.jpg';
import shaliniImg from '../assets/team/shalini_shah.jpg';
import abhishekImg from '../assets/team/abhishek_kashyap.png';
import mohitImg from '../assets/team/mohit.jpg';

const teamMembers = [
    {
        name: 'Mr. Jitendra Kumar',
        role: 'Director',
        image: jitendraImg,
        bio: 'Leading our strategic vision and growth with a focus on innovation and excellence.'
    },
    {
        name: 'Saurav Kumar',
        role: 'Sr. Project Manager - Operations',
        image: sauravImg,
        bio: 'Ensuring operational excellence and seamless project delivery across all sectors.'
    },
    {
        name: 'Mr. Rahul Kumar',
        role: 'Sr. Manager – Business & Customer Success',
        image: rahulImg,
        bio: 'Driving customer success and fostering strong, lasting business relationships.'
    },
    {
        name: 'Amreen Jahan',
        role: 'Manager - Human Resources',
        image: amreenImg,
        bio: 'Fostering a positive workplace culture and managing our most valuable asset—our people.'
    },
    {
        name: 'Kailash Singh',
        role: 'Asst. Manager - Operations',
        image: kailashImg,
        bio: 'Supporting operational efficiency and ensuring smooth team coordination.'
    },
    {
        name: 'Agam Bhardwaj',
        role: 'Asst. Manager - Operations',
        image: agamImg,
        bio: 'Optimizing operational workflows and driving team performance.'
    },
    {
        name: 'Shalini Shah',
        role: 'Asst Team Lead - Operations',
        image: shaliniImg,
        bio: 'Guiding teams towards operational excellence and project success.'
    },
    {
        name: 'Abhishek Kashyap',
        role: 'Sales Manager',
        image: abhishekImg,
        bio: 'Driving sales strategies and expanding market reach.'
    },
    {
        name: 'Mr. Mohit',
        role: 'Master Electrician',
        image: mohitImg,
        bio: 'Ensuring electrical safety, compliance, and expert installation best practices.'
    }
];

const Team = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-rsBlue opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-rsRed opacity-5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-rsBlue mb-4"
                    >
                        Meet Our Leadership
                    </motion.h2>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-rsRed mx-auto rounded-full mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
                    >
                        Driven by passion, united by expertise. The experts powering your solar success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white h-full flex flex-col">
                                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-96 object-cover object-top transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />

                                    {/* Social Icons Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 flex justify-center space-x-4">
                                        <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rsRed hover:text-white transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rsRed hover:text-white transition-colors">
                                            <Twitter size={20} />
                                        </a>
                                        <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-rsRed hover:text-white transition-colors">
                                            <Mail size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 text-center border-b-4 border-rsBlue group-hover:border-rsRed transition-colors duration-300 flex-grow flex flex-col justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-rsBlue transition-colors">{member.name}</h3>
                                    <p className="text-sm font-semibold text-rsRed uppercase tracking-wider mb-4">{member.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-2 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
