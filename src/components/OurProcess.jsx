import React from 'react';
import { PenTool, ClipboardCheck, Stamp } from 'lucide-react';

const steps = [
    {
        title: "Design Proposal & Consulting",
        description: "Expert Design Proposal Services tailored for residential and commercial solar projects. We deliver detailed, compliant designs ensuring smooth project approval from concept to execution.",
        icon: <PenTool className="w-10 h-10 text-rsRed" />
    },
    {
        title: "PV Permit Design",
        description: "Precise layouts, structural details, and electrical plans that ensure compliance with local codes. We simplify the permitting process to ensure your solar projects succeed seamlessly.",
        icon: <ClipboardCheck className="w-10 h-10 text-rsRed" />
    },
    {
        title: "PE Stamping & Compliance",
        description: "Reliable PE Stamps for structural and electrical engineering to guarantee safety and efficiency. Trust us for accurate, professional stamping to streamline your installations.",
        icon: <Stamp className="w-10 h-10 text-rsRed" />
    }
];

const OurProcess = () => {
    return (
        <section className="py-24 bg-rsBlue text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-rsRed rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-lg font-bold text-rsRed uppercase tracking-widest mb-2">How We Work</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Process & Offers</h3>
                    <p className="max-w-3xl mx-auto text-blue-100 text-lg">
                        From initial proposal to final stamping, we streamline your solar journey with expert engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center hover:bg-white/10 transition-colors duration-300">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                                {step.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                            <p className="text-blue-100 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
