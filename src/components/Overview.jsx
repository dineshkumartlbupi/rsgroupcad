import logo from '../assets/header_logo.png';

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
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="RS Solar Office"
                                className="w-full h-full object-cover"
                            />
                            {/* Logo Overlay */}
                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                                    <img src={logo} alt="RS Solar CAD Group" className="h-16 w-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
