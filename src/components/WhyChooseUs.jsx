import React from 'react';
import { CheckCircle, Clock, Leaf, Settings, FileCheck, Layers } from 'lucide-react';

const features = [
    {
        title: "Expertise in BIM, CAD & GIS",
        description: "We excel in delivering precision, innovation, and efficiency for every project through advanced engineering solutions.",
        icon: <Layers className="w-8 h-8 text-white" />
    },
    {
        title: "Efficiency & Precision",
        description: "Through precise designs and advanced technology, we ensure high-quality results delivered faster and more reliably.",
        icon: <CheckCircle className="w-8 h-8 text-white" />
    },
    {
        title: "Tailored Solutions",
        description: "We adapt our designs and services to meet unique project requirements with maximum efficiency.",
        icon: <Settings className="w-8 h-8 text-white" />
    },
    {
        title: "Sustainability",
        description: "Creating eco-friendly, energy-efficient solutions that promote long-term environmental benefits.",
        icon: <Leaf className="w-8 h-8 text-white" />
    },
    {
        title: "Error-Free Documentation",
        description: "We provide precise, well-documented plan sets that minimize delays or rejections during approval.",
        icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
        title: "Quick Turnaround",
        description: "Our team ensures valid and fast delivery, helping you move forward without unnecessary delays.",
        icon: <Clock className="w-8 h-8 text-white" />
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-lg font-bold text-rsRed uppercase tracking-widest mb-2">Our Key Differentiators</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-rsBlue mb-4">Why Choose RS Solar CAD?</h3>
                    <div className="w-24 h-1 bg-rsRed mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                            <div className="w-16 h-16 bg-rsBlue rounded-xl flex items-center justify-center mb-6 group-hover:bg-rsRed transition-colors duration-300 shadow-lg">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
