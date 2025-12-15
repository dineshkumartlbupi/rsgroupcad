import React from 'react';

const TechAdvances = () => {
    return (
        <section className="py-20 bg-geonBlue text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology That Advances With You</h2>
                    <p className="text-blue-100 text-lg leading-relaxed mb-6">
                        Our R&D centers are constantly pushing the boundaries of what's possible in energy storage and e-mobility. We create adaptive technologies that evolve with your needs.
                    </p>
                    <ul className="space-y-4">
                        {['Smart BMS', 'High Energy Density', 'Fast Charging', 'Thermal Management'].map(item => (
                            <li key={item} className="flex items-center">
                                <span className="w-2 h-2 bg-rsRed rounded-full mr-3"></span>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-rsRed rounded-full opacity-20 filter blur-3xl animate-pulse"></div>
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Technology"
                        className="relative rounded-2xl shadow-2xl z-10 border-4 border-white/10"
                    />
                </div>
            </div>
        </section>
    );
};

export default TechAdvances;
