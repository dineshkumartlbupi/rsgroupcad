import React from 'react';

const services = [
    {
        title: "E-Mobility",
        description: "Driving the future of transportation with advanced electric mobility solutions designed for efficiency and sustainability.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Energy Storage Solutions",
        description: "Reliable and scalable energy storage systems tailored to meet the growing demands of modern power grids.",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Electronics Energy Solutions",
        description: "Cutting-edge electronic components and systems enabling smarter energy management.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

const Services = () => {
    return (
        <section id="business" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-rsRed uppercase tracking-widest mb-2">Our Solutions</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Empowering The World With Sustainable Energy</h3>
                    <div className="w-24 h-1 bg-rsRed mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8">
                                <h4 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h4>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <a href="#" className="inline-flex items-center text-rsRed font-semibold hover:text-red-800 transition-colors">
                                    Read More
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                            <div className="absolute top-0 left-0 w-full h-1 bg-rsRed transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
