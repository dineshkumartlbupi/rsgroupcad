import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessPage = ({ title, description, image, features }) => {
    return (
        <div className="pt-20">
            <div className="bg-geonBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">{title}</h1>
            </div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-geonBlue mb-6">{title}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {description}
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-rsRed">
                            <h3 className="font-bold text-gray-800 mb-2">Key Services</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {features ? features.map((f, i) => <li key={i}>{f}</li>) : (
                                    <>
                                        <li>State-of-the-art Technology</li>
                                        <li>Sustainable & Eco-friendly</li>
                                        <li>Reliable & High Performance</li>
                                        <li>Customized Solutions</li>
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <button className="bg-rsRed text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={image} alt={title} className="w-full rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                </div>
            </section>
        </div>
    );
};


// New Services Pages
export const SolarDesign = () => (
    <BusinessPage
        title="Solar Design Services"
        description="Our comprehensive solar design services cover everything from residential rooftops to large-scale commercial arrays. We use advanced PV production modeling to ensure maximum efficiency and ROI for every project."
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        features={['Photovoltaic (PV) System Design', 'Shading Analysis', 'Yield Estimation', 'Structural Load Analysis']}
    />
);

export const EVPermit = () => (
    <BusinessPage
        title="EV Permit / Charging Station"
        description="We streamline the process of installing EV charging infrastructure. From site assessment and permitting to load calculations and final installation design, we ensure code compliance and rapid deployment."
        image="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        features={['Site Feasibility Studies', 'Electrical Load Calculations', 'Permit Application Management', 'ADA Compliance Design']}
    />
);

export const ArchitectureDesign = () => (
    <BusinessPage
        title="Architecture Designing"
        description="Integrating sustainable energy solutions directly into architectural plans. We collaborate with architects to design energy-efficient buildings that are aesthetically pleasing and functionally superior."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        features={['Sustainable Building Design', 'Green Building Certification Support', 'Facade Integration', 'Energy Efficiency Consulting']}
    />
);

export const BIM = () => (
    <BusinessPage
        title="Building Information Modeling (BIM)"
        description="Leveraging BIM technology to create digital twins of energy systems within building infrastructure. This ensures precise coordination, reduced collisions, and optimized lifecycle management."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        features={['3D/4D/5D Modeling', 'Clash Detection', 'Asset Management', 'Construction Documentation']}
    />
);
