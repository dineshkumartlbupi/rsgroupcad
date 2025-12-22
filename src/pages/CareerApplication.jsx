import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Upload, CheckCircle, User, Briefcase, FileText, Mail, Phone, MapPin, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

// API URL - automatically uses correct backend based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// Job data - centralized for easy sharing
const jobOpenings = {
    'fresher-cad-designer': {
        id: 1,
        title: "Fresher CAD Designer",
        department: "Design & Engineering",
        location: "Remote",
        type: "Full-time",
        experience: "0-1 years",
        description: "We are looking for enthusiastic fresh graduates with a passion for CAD design and solar energy. This is an excellent opportunity to start your career in the rapidly growing solar industry with comprehensive training and mentorship.",
    },
    'permit-designer': {
        id: 2,
        title: "Permit Designer",
        department: "Permitting & Compliance",
        location: "Remote",
        type: "Full-time",
        experience: "1-3 years",
        description: "Join our growing team as a Permit Designer and play a crucial role in delivering code-compliant, permit-ready solar design packages. You'll work on diverse residential and commercial projects across multiple jurisdictions.",
    }
};

const CareerApplication = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    // Get job from URL parameter or state
    const jobSlug = searchParams.get('position');
    const stateJob = location.state?.job;
    const job = jobSlug ? jobOpenings[jobSlug] : stateJob;

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        currentLocation: '',
        experience: '',
        currentCompany: '',
        noticePeriod: '',
        expectedSalary: '',
        linkedinProfile: '',
        portfolioLink: '',
        coverLetter: '',
        resume: null
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showShareTooltip, setShowShareTooltip] = useState(false);

    useEffect(() => {
        if (!job) {
            navigate('/career');
        }
    }, [job, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
            setFormData(prev => ({ ...prev, resume: file }));
        } else {
            alert('File size should be less than 5MB');
        }
    };

    const handleShare = () => {
        const shareUrl = `${window.location.origin}/career/apply?position=${jobSlug || Object.keys(jobOpenings).find(key => jobOpenings[key].id === job.id)}`;

        if (navigator.share) {
            navigator.share({
                title: `Apply for ${job.title} at RS Solar CAD Group`,
                text: `Join our team as a ${job.title}. ${job.location} | ${job.experience}`,
                url: shareUrl
            }).catch(err => console.log('Error sharing:', err));
        } else {
            navigator.clipboard.writeText(shareUrl).then(() => {
                setShowShareTooltip(true);
                setTimeout(() => setShowShareTooltip(false), 2000);
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create FormData for file upload
            const formDataToSend = new FormData();
            formDataToSend.append('fullName', formData.fullName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('currentLocation', formData.currentLocation);
            formDataToSend.append('experience', formData.experience);
            formDataToSend.append('currentCompany', formData.currentCompany);
            formDataToSend.append('noticePeriod', formData.noticePeriod);
            formDataToSend.append('expectedSalary', formData.expectedSalary);
            formDataToSend.append('linkedinProfile', formData.linkedinProfile);
            formDataToSend.append('portfolioLink', formData.portfolioLink);
            formDataToSend.append('coverLetter', formData.coverLetter);
            formDataToSend.append('position', job.title);
            formDataToSend.append('department', job.department);

            // Append resume file if exists
            if (formData.resume) {
                formDataToSend.append('resume', formData.resume);
            }

            // Send to backend API
            const response = await fetch(`${API_URL}/api/career/apply`, {
                method: 'POST',
                body: formDataToSend
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log('Application sent successfully:', result);
                setIsSubmitting(false);
                setSubmitSuccess(true);
            } else {
                throw new Error(result.message || 'Failed to send application');
            }

        } catch (error) {
            console.error('Error submitting application:', error);
            setIsSubmitting(false);

            // Fallback to mailto if backend fails
            const emailBody = `
Application for: ${job.title}
Department: ${job.department}

PERSONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Current Location: ${formData.currentLocation}

PROFESSIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Experience: ${formData.experience}
Current Company: ${formData.currentCompany || 'N/A'}
Notice Period: ${formData.noticePeriod || 'N/A'}
Expected Salary: ${formData.expectedSalary || 'N/A'}

ADDITIONAL INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LinkedIn Profile: ${formData.linkedinProfile || 'Not provided'}
Portfolio Link: ${formData.portfolioLink || 'Not provided'}

COVER LETTER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.coverLetter || 'Not provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Note: Resume file "${formData.resume?.name || 'Not attached'}"

Application submitted via RS Solar CAD Group Career Portal
            `.trim();

            alert('Unable to send email automatically. Opening your email client...\n\nError: ' + error.message);
            const mailtoLink = `mailto:Hr@rscadgroup.com?subject=Job Application - ${encodeURIComponent(job.title)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
        }
    };

    if (!job) {
        return null;
    }

    if (submitSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center px-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-12 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle className="w-16 h-16 text-green-600" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted Successfully!</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Thank you for applying for the <strong>{job.title}</strong> position.
                        We have received your application and will review it carefully.
                        Our HR team will get back to you soon.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/career')}
                            className="px-8 py-3 bg-gradient-to-r from-[#0033A0] to-[#001528] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                        >
                            Back to Careers
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                        >
                            Go to Home
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#001528] to-[#0033A0] text-white py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-start mb-6">
                        <button
                            onClick={() => navigate('/career')}
                            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Careers
                        </button>
                        <div className="relative">
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
                            >
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                            {showShareTooltip && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full mt-2 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap"
                                >
                                    Link copied to clipboard!
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Apply for {job.title}</h1>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                        </span>
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                            <Briefcase className="w-4 h-4" />
                            {job.experience}
                        </span>
                        <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            {job.type}
                        </span>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-3 border-b-2 border-[#0033A0]">
                                <div className="w-10 h-10 bg-[#0033A0] rounded-lg flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Current Location <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="currentLocation"
                                        value={formData.currentLocation}
                                        onChange={handleInputChange}
                                        placeholder="City, State, Country"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-3 border-b-2 border-[#0033A0]">
                                <div className="w-10 h-10 bg-[#0033A0] rounded-lg flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-white" />
                                </div>
                                Professional Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Total Experience <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                        required
                                    >
                                        <option value="">Select your experience level</option>
                                        <option value="0-1 years">0-1 years (Fresher)</option>
                                        <option value="1-2 years">1-2 years</option>
                                        <option value="2-3 years">2-3 years</option>
                                        <option value="3-5 years">3-5 years</option>
                                        <option value="5+ years">5+ years</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Current Company
                                    </label>
                                    <input
                                        type="text"
                                        name="currentCompany"
                                        value={formData.currentCompany}
                                        onChange={handleInputChange}
                                        placeholder="Enter N/A if fresher"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Notice Period
                                    </label>
                                    <select
                                        name="noticePeriod"
                                        value={formData.noticePeriod}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                    >
                                        <option value="">Select notice period</option>
                                        <option value="Immediate">Immediate / Can join immediately</option>
                                        <option value="15 days">15 days</option>
                                        <option value="30 days">30 days</option>
                                        <option value="60 days">60 days</option>
                                        <option value="90 days">90 days</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Expected Salary (Annual)
                                    </label>
                                    <input
                                        type="text"
                                        name="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={handleInputChange}
                                        placeholder="e.g., ₹3-4 LPA or $50k-60k"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-3 border-b-2 border-[#0033A0]">
                                <div className="w-10 h-10 bg-[#0033A0] rounded-lg flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-white" />
                                </div>
                                Additional Information
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        LinkedIn Profile
                                    </label>
                                    <input
                                        type="url"
                                        name="linkedinProfile"
                                        value={formData.linkedinProfile}
                                        onChange={handleInputChange}
                                        placeholder="https://linkedin.com/in/yourprofile"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Portfolio / Work Samples Link
                                    </label>
                                    <input
                                        type="url"
                                        name="portfolioLink"
                                        value={formData.portfolioLink}
                                        onChange={handleInputChange}
                                        placeholder="https://yourportfolio.com or Google Drive link"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent transition-all"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Share your CAD designs, projects, or relevant work samples</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Cover Letter / Why do you want to join us?
                                    </label>
                                    <textarea
                                        name="coverLetter"
                                        value={formData.coverLetter}
                                        onChange={handleInputChange}
                                        rows="6"
                                        placeholder="Tell us about yourself, your passion for solar energy, relevant skills, and why you're interested in this position..."
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent resize-none transition-all"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Upload Resume <span className="text-red-500">*</span>
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0033A0] transition-all bg-gray-50 hover:bg-blue-50">
                                        <input
                                            type="file"
                                            id="resume"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            required
                                        />
                                        <label htmlFor="resume" className="cursor-pointer">
                                            <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                            {formData.resume ? (
                                                <div>
                                                    <p className="text-lg font-semibold text-green-600 mb-1">
                                                        ✓ {formData.resume.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">Click to change file</p>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p className="text-lg font-semibold text-gray-700 mb-1">
                                                        Click to upload or drag and drop
                                                    </p>
                                                    <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-gray-200">
                            <button
                                type="button"
                                onClick={() => navigate('/career')}
                                className="flex-1 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all text-lg"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 px-8 py-4 bg-gradient-to-r from-[#0033A0] to-[#001528] text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </span>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 text-center">
                            By submitting this form, you agree to our{' '}
                            <a href="/privacy-policy" className="text-[#0033A0] hover:underline">Privacy Policy</a>
                            {' '}and{' '}
                            <a href="/terms-of-service" className="text-[#0033A0] hover:underline">Terms of Service</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CareerApplication;
