import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';

const jobs = [
    {
        id: 1,
        title: "Senior Solar Design Engineer",
        department: "Engineering",
        location: "Bangalore, India",
        type: "Full-time",
        experience: "5+ years"
    },
    {
        id: 2,
        title: "BIM Specialist",
        department: "Design",
        location: "Remote / Hybrid",
        type: "Contract",
        experience: "3+ years"
    },
    {
        id: 3,
        title: "Business Development Manager",
        department: "Sales",
        location: "Mumbai, India",
        type: "Full-time",
        experience: "7+ years"
    }
];

const Careers = () => {
    return (
        <div className="pt-20">
            <div className="bg-geonBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rsRed rounded-full opacity-10 blur-3xl"></div>

                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide relative z-10">Join Our Team</h1>
                <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto relative z-10">
                    Build the future of sustainable energy with us. We are always looking for passionate innovators.
                </p>
            </div>

            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Open Positions</h2>

                    <div className="space-y-6">
                        {jobs.map(job => (
                            <div key={job.id} className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-geonBlue mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                        <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1" /> {job.department}</span>
                                        <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="bg-white border-2 border-rsRed text-rsRed font-bold py-2 px-6 rounded-full hover:bg-rsRed hover:text-white transition-all">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-blue-50 rounded-2xl p-10">
                        <h3 className="text-2xl font-bold text-geonBlue mb-4">Don't see a fit?</h3>
                        <p className="text-gray-600 mb-6">
                            We are growing fast. Send your resume to <a href="mailto:careers@rs-solarcad.com" className="text-rsRed font-bold hover:underline">careers@rs-solarcad.com</a> and we'll keep you on file.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
