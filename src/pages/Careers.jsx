import React from 'react';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import { MapPin, Briefcase, Clock, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const jobOpenings = [
    {
        id: 1,
        slug: 'fresher-cad-designer',
        title: "Fresher CAD Designer",
        department: "Design & Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "0-1 years",
        description: "We are looking for enthusiastic fresh graduates with a passion for CAD design and solar energy. This is an excellent opportunity to start your career in the rapidly growing solar industry with comprehensive training and mentorship.",
        responsibilities: [
            "Create detailed 2D and 3D CAD drawings for solar PV systems",
            "Assist in preparing permit-ready plan sets and engineering drawings",
            "Learn and apply industry standards and best practices",
            "Collaborate with senior designers and engineers on solar projects",
            "Support the team in design revisions and documentation",
            "Participate in training programs to enhance technical skills"
        ],
        requirements: [
            "Bachelor's degree in Mechanical, Civil, Electrical Engineering, or related field",
            "Basic knowledge of AutoCAD, SolidWorks, or similar CAD software",
            "Strong attention to detail and willingness to learn",
            "Good communication skills and team player attitude",
            "Passion for renewable energy and sustainable design",
            "Ability to work remotely with minimal supervision"
        ],
        benefits: [
            "Comprehensive training and mentorship program",
            "Work-from-home flexibility",
            "Competitive salary package",
            "Career growth opportunities in solar industry",
            "Exposure to international solar projects",
            "Performance-based incentives"
        ]
    },
    {
        id: 2,
        slug: 'permit-designer',
        title: "Permit Designer",
        department: "Permitting & Compliance",
        location: "Remote",
        type: "Full-time",
        experience: "1-3 years",
        description: "Join our growing team as a Permit Designer and play a crucial role in delivering code-compliant, permit-ready solar design packages. You'll work on diverse residential and commercial projects across multiple jurisdictions.",
        responsibilities: [
            "Prepare complete permit-ready plan sets for solar PV installations",
            "Ensure designs comply with local AHJ requirements and building codes",
            "Create detailed electrical single-line diagrams and site plans",
            "Coordinate with engineering team for structural and electrical stamps",
            "Review and incorporate AHJ feedback and revision requests",
            "Maintain organized project documentation and revision tracking",
            "Communicate effectively with internal teams and clients"
        ],
        requirements: [
            "1-3 years of experience in solar permit design or related field",
            "Proficiency in AutoCAD, HelioScope, Aurora Solar, or similar tools",
            "Strong understanding of NEC codes and local building regulations",
            "Experience with residential and/or commercial solar projects",
            "Knowledge of AHJ-specific requirements across multiple jurisdictions",
            "Excellent attention to detail and quality control",
            "Strong organizational and time management skills",
            "Ability to handle multiple projects simultaneously"
        ],
        benefits: [
            "Remote work with flexible hours",
            "Competitive salary based on experience",
            "Professional development and certification support",
            "Work on diverse projects across USA and India",
            "Collaborative team environment",
            "Performance bonuses and incentives",
            "Health and wellness benefits"
        ]
    }
];

const Careers = () => {
    const navigate = useNavigate();

    const handleApplyClick = (job) => {
        navigate(`/career/apply?position=${job.slug}`, { state: { job } });
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
                        {jobOpenings.map((job) => (
                            <motion.div
                                key={job.id}
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
                                        <p className="text-gray-600 leading-relaxed">{job.description}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-3">Key Responsibilities</h4>
                                        <ul className="space-y-2">
                                            {job.responsibilities.slice(0, 4).map((resp, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-[#e62e00] mt-0.5 flex-shrink-0" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-800 mb-3">Requirements</h4>
                                        <ul className="space-y-2">
                                            {job.requirements.slice(0, 4).map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-[#e62e00] mt-0.5 flex-shrink-0" />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => handleApplyClick(job)}
                                        className="w-full bg-[#e62e00] text-white font-bold py-4 px-6 rounded-lg hover:bg-white hover:text-[#e62e00] border border-[#e62e00] transition-all transform hover:scale-105"
                                    >
                                        Apply Now
                                    </button>
                                </div>
                            </motion.div>
                        ))}
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
