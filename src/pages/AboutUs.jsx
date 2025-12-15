import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <div className="bg-rsBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">About RS Solar CAD Group</h1>
                <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
                    Precision, Compliance, and Excellence in Solar Engineering.
                </p>
            </div>

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-rsBlue mb-6">Leading Provider of Solar Design & Engineering</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                RS Solar CAD Group is a leading provider of solar design and engineering solutions, committed to helping residential and commercial solar installers streamline their projects. With a focus on precision and compliance, we offer comprehensive services including solar permit plan set designing, structural, and electrical engineering.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our expert engineers ensure all designs meet local codes and industry standards, guaranteeing your solar system’s safety, reliability, and performance. At RS Solar CAD Group, we pride ourselves on delivering fast, reliable, and cost-effective solutions that empower our clients to succeed in the rapidly growing renewable energy industry.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="RS Solar Team"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Details Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-rsBlue">Why Choose Us?</h2>
                        <div className="w-20 h-1 bg-rsRed mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Precision & Compliance', desc: 'Ensuring all designs meet local codes and industry standards with exact precision.' },
                            { title: 'Fast Turnaround', desc: 'Helping you move forward with your project without unnecessary delays with our streamlined workflows.' },
                            { title: 'Tailored Solutions', desc: 'Adapting designs and services to meet unique project requirements for maximum efficiency.' }
                        ].map((val) => (
                            <div key={val.title} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-rsBlue">
                                    <span className="font-bold text-xl">{val.title[0]}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{val.title}</h3>
                                <p className="text-gray-600 text-sm">
                                    {val.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications - Text based on extraction */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-geonBlue mb-8">OUR CERTIFICATIONS</h2>
                    <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                        {/* Placeholders for certification logos */}
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-gray-400 font-bold">ISO</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
