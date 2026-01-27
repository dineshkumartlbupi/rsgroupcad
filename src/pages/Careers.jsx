import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, Clock, CheckCircle, Mail, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';


const Careers = () => {
    const navigate = useNavigate();
    const [jobOpenings, setJobOpenings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await fetch(`${API_URL}/api/careers`);
                const data = await response.json();
                setJobOpenings(data);
            } catch (error) {
                console.error('Error fetching careers:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCareers();
    }, []);

    const handleApplyClick = (job) => {
        navigate(`/career/apply?position=${job.slug || job._id}`, { state: { job } });
    };

    return (
        <div className="pt-20 font-sans">
            <SEO
                title="Careers - Join Our Team"
                description="Explore career opportunities at RS Solar CAD Group. We are hiring CAD designers, solar engineers, and permit specialists."
                canonical="https://rscadgroup.com/career"
            />
            {/* Hero Section */}
            <div className="bg-[#1f3366] py-20 md:py-28 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rsRed rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#1f3366] rounded-full opacity-10 blur-3xl"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6">
                        Join Our Team
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Build the future of sustainable energy with us. We are always looking for passionate innovators to join our global team.
                    </p>
                </motion.div>
            </div>

            {/* Open Positions Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Current Openings</h2>
                        <p className="text-xl text-gray-600">Explore exciting opportunities to grow your career</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {loading ? (
                            <div className="col-span-full flex justify-center py-20">
                                <Loader className="w-10 h-10 animate-spin text-[#e62e00]" />
                            </div>
                        ) : jobOpenings.length === 0 ? (
                            <div className="col-span-full text-center py-10 text-gray-500">
                                <p>No current openings. Please check back later.</p>
                            </div>
                        ) : (
                            jobOpenings.map((job) => (
                                <motion.div
                                    key={job._id || job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    {/* Job Header */}
                                    <div className="bg-[#1f3366] text-white p-6">
                                        <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                                                <MapPin className="w-4 h-4" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                                                <Briefcase className="w-4 h-4" />
                                                {job.experience}
                                            </span>
                                            <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-sm">
                                                <Clock className="w-4 h-4" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Job Details */}
                                    <div className="p-6 space-y-6">
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2">About the Role</h4>
                                            <p className="text-gray-600 leading-relaxed ">{job.description}</p>
                                        </div>

                                        {/* Responsibilities - Handle both array and string */}
                                        {job.responsibilities && (
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-3">Key Responsibilities</h4>
                                                <ul className="space-y-2">
                                                    {(Array.isArray(job.responsibilities) ? job.responsibilities : job.responsibilities.split('\n')).map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <CheckCircle className="w-4 h-4 text-[#e62e00] mt-0.5 flex-shrink-0" />
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Requirements - Handle both array and string */}
                                        {job.requirements && (
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-3">Requirements</h4>
                                                <ul className="space-y-2">
                                                    {(Array.isArray(job.requirements) ? job.requirements : job.requirements.split('\n')).map((req, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <CheckCircle className="w-4 h-4 text-[#e62e00] mt-0.5 flex-shrink-0" />
                                                            <span>{req}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <button
                                            onClick={() => handleApplyClick(job)}
                                            className="w-full bg-[#e62e00] text-white font-bold py-4 px-6 rounded-lg hover:bg-white hover:text-[#e62e00] border border-[#e62e00] transition-all transform hover:scale-105"
                                        >
                                            View Details & Apply
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>

                    {/* Don't See a Fit Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 text-center bg-gray-50 rounded-2xl p-10 border border-gray-200"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Don't See a Perfect Fit?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            We are growing fast and always looking for talented individuals. Send your resume to{' '}
                            <a href="mailto:Hr@rscadgroup.com" className="text-[#e62e00] font-bold hover:underline">
                                Hr@rscadgroup.com
                            </a>
                            {' '}and we'll keep you on file for future opportunities.
                        </p>
                        <a
                            href="mailto:Hr@rscadgroup.com"
                            className="inline-flex items-center gap-2 bg-[#1f3366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#152347] transition-colors shadow-lg"
                        >
                            <Mail className="w-5 h-5" />
                            Send Your Resume
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
