import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe, CheckCircle } from 'lucide-react';
// API URL - automatically uses correct backend based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitSuccess(true);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    message: ''
                });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                throw new Error(result.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);

            // Fallback to mailto
            const mailtoLink = `mailto:Contact@rscadgroup.com?subject=Contact Form - ${formData.service}&body=Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

            alert('Unable to send message automatically. Opening your email client...');
            window.location.href = mailtoLink;
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        'Solar Design & Engineering',
        'EV Charging Station Plans',
        'CAD Design & Drafting',
        'Workforce & Staffing',
        'Solar Installation',
        'Trading & Procurement',
        'Other'
    ];

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email Us',
            details: ['contact@rscadgroup.com', 'sales@rscadgroup.com'],
            color: '#1f3366'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Call Us',
            details: ['+1 (912) 980 4481 (USA)', '+91 9958060424 (India)'],
            color: '#1f3366'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Visit Us',
            details: ['Block A, Loni Industrial Area', 'Ghaziabad, UP 201007, India'],
            color: '#1f3366'
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: 'Business Hours',
            details: ['24 Hour Working'],
            color: '#1f3366'
        }
    ];
    // test
    return (
        <div className="pt-20 font-sans bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#1f3366] to-[#0d1b42] py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            💬 Get In Touch
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Let's Work Together
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                            Ready to transform your solar projects? Contact our team for expert consultation and support.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-br from-[#1f3366] to-[#0d1b42] ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Connect With RS Solar CAD Group
                            </h2>
                            <p className="text-white text-lg mb-8">
                                Our team is ready to assist you with all your solar design, engineering, and installation needs. Reach out through any of the channels below.
                            </p>

                            <div className="space-y-6 mb-10">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1f3366]/30 transition-all"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-[#1f3366]/10 rounded-lg flex items-center justify-center text-[#1f3366] flex-shrink-0">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#001528] mb-2">{info.title}</h3>
                                                {info.details.map((detail, idx) => (
                                                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>


                        </motion.div>

                        {/* Right Side - Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white p-8 rounded-2xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-[#001528] mb-6">Send Us a Message</h3>
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f3366] focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f3366] focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f3366] focus:border-transparent outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f3366] focus:border-transparent outline-none transition-all"
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    {/* Service Interest */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Interest <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            required
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f3366] focus:border-transparent outline-none transition-all bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f3366] focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        ></textarea>
                                    </div>

                                    {/* Success Message */}
                                    {submitSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center space-x-2"
                                        >
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Message sent successfully! We'll get back to you soon.</span>
                                        </motion.div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#e62e00] text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-white hover:text-[#e62e00] border border-[#e62e00] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map or Additional CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#1f3366] to-[#0d1b42]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Join hundreds of satisfied clients who trust RS Solar CAD Group for their solar engineering needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+19129804481"
                            className="inline-flex items-center justify-center bg-white text-[#1f3366] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/19129804481"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#e62e00] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#e62e00] border border-[#e62e00] transition-all"
                        >
                            <MessageCircle className="mr-2 w-5 h-5" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
