import React from 'react';
import { Leaf, ShieldCheck, Zap, Users } from 'lucide-react';

const features = [
    {
        title: "Sustainable Innovation",
        icon: <Leaf className="w-12 h-12 text-rsRed" />,
        description: "Driving the future with eco-friendly technologies."
    },
    {
        title: "Proven Performance Reliability",
        icon: <Zap className="w-12 h-12 text-blue-500" />,
        description: "Systems designed for maximum efficiency and durability."
    },
    {
        title: "Uncompromising Safety",
        icon: <ShieldCheck className="w-12 h-12 text-rsRed" />,
        description: "Adhering to the highest safety standards globally."
    },
    {
        title: "Customer Centric Excellence",
        icon: <Users className="w-12 h-12 text-blue-500" />,
        description: "Tailored solutions focusing on customer success."
    }
];

const GeonEdge = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-geonBlue uppercase">The Geon Edge</h2>
                    <div className="w-24 h-1 bg-rsRed mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                            <div className="mb-6 p-4 bg-gray-100 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GeonEdge;
