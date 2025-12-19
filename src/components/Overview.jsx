import officeBrandingImg from '../assets/office_branding_v2.png';

const Overview = () => {
    return (
        <section className="py-24 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Section - Kept for context */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
                    <div className="lg:w-1/2">
                        <h2 className="text-lg font-bold text-rsRed uppercase tracking-widest mb-2">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-rsBlue mb-6">Our Company Overview</h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            <span className="font-bold text-rsBlue">RS Solar CAD Group</span> is a global solar engineering and design services firm delivering precise, code-compliant solutions to solar installers, contractors, and EPCs throughout the United States. Our focus is on simplifying design complexity and enhancing execution efficiency through dependable engineering support.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            With a strong foundation in the engineering and design domain, we have successfully supported solar projects across the U.S. and Europe. By combining cost-effective service models with rapid delivery, we enable our partners to scale without operational strain.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Every design is developed in strict accordance with AHJ guidelines, NEC, fire and building codes, and utility standards. Our team brings specialized expertise in residential solar systems along with a deep understanding of jurisdiction-specific requirements.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our offerings span solar sales proposals, permit-ready plan sets, interconnection documentation, professional engineering support, and as-built drawings.
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-rsBlue transform rotate-3 rounded-3xl opacity-10"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                            <img
                                src={officeBrandingImg}
                                alt="RS Solar Office"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};



export default Overview;
