
import React from 'react';
import { motion } from 'framer-motion';

import asaLogo from '../assets/clients/asa.jpg';
import ecoLogo from '../assets/clients/eco.jpg';
import patriotLogo from '../assets/clients/patriot.jpg';
import jwbLogo from '../assets/clients/jwb.jpg';
import sunivaLogo from '../assets/clients/suniva.jpg';
import greenlinkLogo from '../assets/clients/greenlink.jpg';
import axiomLogo from '../assets/clients/axiom.jpg';
import supernovaLogo from '../assets/clients/supernova.jpg';

const clients = [
    { name: 'American Solar Advantage', logo: asaLogo },
    { name: 'Green Globe', logo: ecoLogo },
    { name: 'Patriot Power', logo: patriotLogo },
    { name: 'JW Bernard', logo: jwbLogo },
    { name: 'Suniva', logo: sunivaLogo },
    { name: 'Greenlink Solar', logo: greenlinkLogo },
    { name: 'Axiom 360', logo: axiomLogo },
    { name: 'Supernova', logo: supernovaLogo },
];

const ClientSlider = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Vector Watermark */}
            <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 pointer-events-none z-0 opacity-[0.03] overflow-hidden">
                <div className="whitespace-nowrap text-[20rem] font-black text-[#001528] tracking-tighter leading-none select-none">
                    RS GROUP
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-left mb-10">
                    <h2 className="text-3xl font-extrabold text-[#001528] mb-3">
                        Our Valued Customers
                    </h2>
                    <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                        Partnerships that drive our success: a diverse community of esteemed clients whose visions and achievements inspire our journey forward.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative">
                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex items-center space-x-12 md:space-x-20 px-4"
                            animate={{ x: "-50%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 30,
                                ease: "linear",
                            }}
                            style={{ width: "fit-content" }}
                        >
                            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                                <div key={index} className="flex-shrink-0 group relative">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 filter"
                                        onError={(e) => {
                                            // Fallback if image fails - simplistic text or hide
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = `<span class="text-gray-400 font-bold text-lg">${client.name}</span>`;
                                        }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientSlider;
