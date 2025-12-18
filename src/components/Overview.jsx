import logo from '../assets/header_logo.png';

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
                            Welcome to <span className="font-bold text-rsBlue">RS Solar CAD Group</span>. Beyond just design, we provide a complete back-office ecosystem that empowers your solar business to scale efficiently.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We specialize in providing precise solar design, proposals, permit plan sets, and engineering stamps for residential and commercial projects across the USA.
                        </p>
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
