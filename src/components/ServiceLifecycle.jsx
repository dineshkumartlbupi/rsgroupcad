import React from 'react';
import { Wrench, Shield, Clock, HardHat } from 'lucide-react';

const services = [
    { title: "Aftermarket Support", icon: <Wrench className="w-10 h-10" /> },
    { title: "Extended Warranty", icon: <Shield className="w-10 h-10" /> },
    { title: "Annual Maintenance", icon: <Clock className="w-10 h-10" /> },
    { title: "Installation Services", icon: <HardHat className="w-10 h-10" /> },
];

const ServiceLifecycle = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-geonBlue">End-to-End Service, Across The Product Lifecycle</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We don't just build products; we ensure they perform optimally throughout their lifespan with our comprehensive service network.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-100 p-8 rounded-xl text-center hover:shadow-xl hover:border-rsRed transition-all duration-300 group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-rsRed group-hover:text-white text-geonBlue transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceLifecycle;
