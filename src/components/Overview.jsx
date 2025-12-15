import React from 'react';
import officeImage from '../assets/office.png';


const Overview = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-lg font-bold text-rsRed uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-rsBlue mb-6">Our Company Overview</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Welcome to <span className="font-bold text-rsBlue">RS Solar CAD Group</span>, your dedicated partner in advancing solar energy initiatives through cutting-edge CAD solutions. Our commitment is to empower your projects with precision, efficiency, and innovation.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We specialize in providing precise solar design, proposals, permit plan sets, and engineering stamps for residential and commercial projects across the USA. We ensure compliance, safety, and efficiency, offering fast, reliable, and affordable solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border-l-4 border-rsRed">
                                <span className="block text-2xl font-bold text-rsBlue">500+</span>
                                <span className="text-sm text-gray-500">Projects Completed</span>
                            </div>
                            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border-l-4 border-rsRed">
                                <span className="block text-2xl font-bold text-rsBlue">50+</span>
                                <span className="text-sm text-gray-500">Expert Engineers</span>
                            </div>
                            <div className="bg-white px-6 py-4 rounded-lg shadow-sm border-l-4 border-rsRed">
                                <span className="block text-2xl font-bold text-rsBlue">100%</span>
                                <span className="text-sm text-gray-500">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-rsBlue transform rotate-3 rounded-3xl opacity-10"></div>
                        <img
                            src={officeImage}
                            alt="RS Solar Office"
                            className="relative rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
