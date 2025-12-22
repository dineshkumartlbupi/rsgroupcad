import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Sun, CreditCard, Wind, Droplet, Wrench, Phone, Mail, MapPin, Zap, Shield, Clock, ChevronDown, Star, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import indianSolarHero from '../../assets/hero/indian_solar_hero_new.png';
import professionalInstallationImg from '../../assets/hero/professional_installation.png';
import premiumComponentsImg from '../../assets/hero/premium_components.png';
import ongoingSupportImg from '../../assets/hero/ongoing_support_new.png';

// API URL - automatically uses correct backend based on environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#0033A0] transition-colors"
            >
                <span className="font-semibold text-lg text-[#001528]">{question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="pb-6 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

const SolarInstallation = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        whatsappNumber: '',
        monthlyBill: '',
        pincode: '',
        city: '',
        email: '',
        agreeToTerms: false
    });

    const benefits = [
        {
            icon: <CreditCard className="w-12 h-12" />,
            title: "0% EMI Financing",
            desc: "Easy and affordable EMI options for everyone",
            color: "#0033A0"
        },
        {
            icon: <Wind className="w-12 h-12" />,
            title: "Cyclone-Proof",
            desc: "Withstands winds up to 200 km/h",
            color: "#0033A0"
        },
        {
            icon: <Droplet className="w-12 h-12" />,
            title: "₹1L Guarantee",
            desc: "Water leakage protection guarantee",
            color: "#0033A0"
        },
        {
            icon: <Wrench className="w-12 h-12" />,
            title: "5-Year Maintenance",
            desc: "Quarterly cleaning & health checks",
            color: "#0033A0"
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: "Free Consultation",
            desc: "In-home consultation with custom solar proposal focused on maximum savings"
        },
        {
            number: "02",
            title: "Site Inspection",
            desc: "Detailed site inspections and topographic surveys for precise engineering"
        },
        {
            number: "03",
            title: "Paperwork & Approvals",
            desc: "Complete documentation and government subsidy assistance"
        },
        {
            number: "04",
            title: "Professional Installation",
            desc: "Code-compliant designs with premium components and best practices"
        },
        {
            number: "05",
            title: "OFF & ON Grid Connection",
            desc: "Seamless grid connectivity and system activation"
        },
        {
            number: "06",
            title: "Maintenance & Support",
            desc: "Ongoing deep cleaning and performance monitoring"
        }
    ];

    const faqs = [
        {
            question: "What is the cost of solar installation in India?",
            answer: "The cost varies based on system size and requirements. We offer 0% EMI financing to make solar accessible for everyone. Contact us for a free consultation and custom quote."
        },
        {
            question: "How much can I save with solar panels?",
            answer: "Most homeowners save 50-90% on their electricity bills. The exact savings depend on your energy consumption, roof size, and local electricity rates."
        },
        {
            question: "What government subsidies are available?",
            answer: "The Indian government offers subsidies up to 40% for residential solar installations. We handle all paperwork and subsidy applications for you."
        },
        {
            question: "How long does installation take?",
            answer: "Typically 1-3 days for residential installations, depending on system size. We ensure minimal disruption to your daily routine."
        },
        {
            question: "What maintenance is required?",
            answer: "Minimal maintenance is needed. We provide quarterly deep cleaning and health checks for 5 years at no additional cost."
        }
    ];

    const stats = [
        { number: "4.89", unit: "MW", label: "Commercial Projects Completed" },
        { number: "980", unit: "kW", label: "Government & Private Installations" },
        { number: "1000+", unit: "", label: "Happy Customers" },
        { number: "5", unit: "Years", label: "Maintenance Included" }
    ];

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/api/solar-installation`, {
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
                    whatsappNumber: '',
                    monthlyBill: '',
                    pincode: '',
                    city: '',
                    email: '',
                    agreeToTerms: false
                });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                throw new Error(result.message || 'Failed to send inquiry');
            }
        } catch (error) {
            console.error('Error submitting solar installation inquiry:', error);

            // Fallback to mailto
            const mailtoLink = `mailto:Contact@rscadgroup.com?subject=Solar Installation Inquiry - ${formData.city}&body=Name: ${formData.fullName}%0D%0AWhatsApp: ${formData.whatsappNumber}%0D%0AEmail: ${formData.email}%0D%0ACity: ${formData.city}%0D%0APincode: ${formData.pincode}%0D%0AMonthly Bill: ₹${formData.monthlyBill}`;

            alert('Unable to send inquiry automatically. Opening your email client...');
            window.location.href = mailtoLink;
        } finally {
            setIsSubmitting(false);
        }
    };

    // Scroll to form function
    const scrollToForm = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="pt-20 font-sans text-gray-900 bg-white">
            {/* Hero Image Section */}
            <section className="relative h-[60vh] min-h-[400px] md:min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={indianSolarHero}
                        alt="Indian Solar Installation"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#001528]/90 to-[#001528]/60"></div>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                India's Leading Solar Installation Service
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                Complete ONE-STOP solar solution from design to installation and maintenance
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Form Section with Blue Background */}
            <section className="relative bg-gradient-to-br from-[#0033A0] to-[#001f5c] py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                🇮🇳 India's First Complete ONE-STOP Solar Solution
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Still paying for electricity?
                            </h1>
                            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
                                Switch to solar. Let us design your solar future.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                                    <span>0% EMI Available</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                                    <span>Cyclone-Proof Systems</span>
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                                    <span>5-Year Maintenance</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-[#001528] mb-2">Schedule a FREE Consultation</h3>
                            <p className="text-gray-600 mb-6">Get a custom solar proposal for your home</p>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                    />
                                </div>

                                {/* WhatsApp Number */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        WhatsApp number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder=""
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                                        value={formData.whatsappNumber}
                                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                        required
                                    />
                                </div>

                                {/* Monthly Electricity Bill */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Monthly Electricity Bill <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {['Less than ₹1500', '₹1500 - ₹2500', '₹2500 - ₹4000', '₹4000 - ₹8000', 'More than ₹8000'].map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, monthlyBill: option })}
                                                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${formData.monthlyBill === option
                                                    ? 'border-[#0033A0] bg-[#0033A0] text-white'
                                                    : 'border-gray-300 bg-white text-gray-700 hover:border-[#0033A0]'
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Pin code and City */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Pin code <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                                            value={formData.pincode}
                                            onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            placeholder=""
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder=""
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0033A0] focus:border-transparent"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                {/* Terms Checkbox */}
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        id="agreeToTerms"
                                        className="mt-1 w-4 h-4 text-[#0033A0] border-gray-300 rounded focus:ring-[#0033A0]"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                    />
                                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                                        I agree to RS Solar CAD Group's{' '}
                                        <a href="/terms" className="text-[#00D9FF] hover:underline">terms of service</a>
                                        {' '}&{' '}
                                        <a href="/privacy" className="text-[#00D9FF] hover:underline">privacy policy</a>
                                    </label>
                                </div>

                                {/* Success Message */}
                                {submitSuccess && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center space-x-2"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Inquiry submitted successfully! We'll contact you soon.</span>
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#00D9FF] text-[#001528] py-4 rounded-lg font-bold text-lg hover:bg-[#00C4E6] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Yes! Reduce my electricity bill'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#0033A0] mb-2">
                                    {stat.number}{stat.unit}
                                </div>
                                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Grid Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-4">
                            Your roof, your solar, our responsibility
                        </h2>
                        <p className="text-xl text-gray-600">End-to-end service. No middlemen.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                            <img src={professionalInstallationImg} alt="Solar Installation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Professional Installation</h3>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                            <img src={premiumComponentsImg} alt="Quality Components" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Premium Components</h3>
                            </div>
                        </div>
                        <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                            <img src={ongoingSupportImg} alt="Maintenance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-white font-bold text-xl">Ongoing Support</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-4">
                            Why Choose RS Solar CAD Group?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Backed by years of global solar design and engineering experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
                            >
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#0033A0]/10 flex items-center justify-center text-[#0033A0]">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-xl font-bold text-[#001528] mb-3">{benefit.title}</h4>
                                <p className="text-gray-600">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Timeline Section */}
            <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#001f5c] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            The Solar Switch Made Simple
                        </h2>
                        <p className="text-xl text-white/80">Here's how it works</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:bg-white/20 transition-colors">
                                    <div className="text-5xl font-bold text-white/30 mb-4">{step.number}</div>
                                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                                    <p className="text-white/80 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proven Execution Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-6">
                                Proven Execution Since 2025
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                RS Solar CAD Group officially began solar installation services in India in 2025, bringing world-class engineering expertise and end-to-end execution under one roof.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Since starting operations, we have successfully completed <strong>4.89 MW of commercial solar projects</strong> and <strong>980 kW of installations</strong> across Government schemes and the private sector, demonstrating our capability to deliver reliable, large-scale, and compliant solar solutions.
                            </p>
                            <button onClick={scrollToForm} className="inline-flex items-center bg-[#0033A0] text-white px-8 py-4 rounded-full font-bold hover:bg-[#002080] transition-colors shadow-lg">
                                Get Started Today
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative">
                            <img src={indianSolarHero} alt="RS Solar CAD Group" className="rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#001528] mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">Everything you need to know about solar installation</p>
                    </div>
                    <div className="space-y-2">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#00D9FF] to-[#0099CC] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#001528] mb-6">
                        Solar, Designed for Life
                    </h2>
                    <p className="text-xl md:text-2xl text-[#001528]/80 mb-8 leading-relaxed">
                        With RS Solar CAD Group, solar isn't just installed.<br />
                        It's <strong>designed, engineered, installed, activated, and maintained</strong>—professionally, responsibly, and future-ready.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={scrollToForm} className="inline-flex items-center justify-center bg-[#0033A0] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#002080] transition-colors shadow-2xl">
                            Start Your Solar Journey
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </button>
                        <a href="tel:+919958060424" className="inline-flex items-center justify-center bg-white text-[#0033A0] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl">
                            <Phone className="mr-2 w-6 h-6" />
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolarInstallation;
