import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Zap, PenTool, Layers } from 'lucide-react';

const servicesList = [
    {
        title: "Solar Design Services",
        description: "Efficient and compliant designs for residential and commercial solar installations.",
        icon: <Sun className="w-12 h-12 text-yellow-500" />,
        link: "/solar-design-services"
    },
    {
        title: "EV Permit / Charging Station",
        description: "End-to-end permitting and design for EV charging infrastructure.",
        icon: <Zap className="w-12 h-12 text-rsRed" />,
        link: "/ev-permit-charging-station"
    },
    {
        title: "Architecture Designing",
        description: "Sustainable architectural solutions integrated with modern energy systems.",
        icon: <PenTool className="w-12 h-12 text-blue-500" />,
        link: "/architecture-designing"
    },
    {
        title: "BIM",
        description: "Building Information Modeling for precise energy system integration.",
        icon: <Layers className="w-12 h-12 text-purple-500" />,
        link: "/bim"
    }
];

const Services = () => {
    return (
        <div className="pt-20">
            <div className="bg-geonBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Our Services</h1>
                <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                    Comprehensive engineering and design solutions for a sustainable future.
                </p>
            </div>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {servicesList.map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start group transform hover:-translate-y-1">
                                <div className="bg-gray-100 p-4 rounded-full mb-6 group-hover:bg-blue-50 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <Link to={service.link} className="mt-auto flex items-center text-rsRed font-bold hover:text-green-800 transition-colors">
                                    LEARN MORE <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
