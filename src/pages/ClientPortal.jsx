import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldCheck, Layout } from 'lucide-react';

const ClientPortal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = "Client Portal | RS Solar CAD Group";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Accessing secure gateway... Demo login successful.');
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center px-4 overflow-hidden relative">
            {/* Decorative backgrounds */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rsRed/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0d1b42]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 flex flex-col md:flex-row overflow-hidden relative z-10 border border-gray-100"
            >
                {/* Left Side: Branding/Info */}
                <div className="md:w-5/12 bg-[#0d1b42] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-rsRed rounded-xl flex items-center justify-center mb-10 shadow-lg shadow-rsRed/20">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Secure <br /><span className="text-rsRed italic">Partner</span> Gateway</h1>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Access your project lifecycle dashboard, engineering plan sets, and real-time design queues in one unified enterprise environment.
                        </p>
                    </div>

                    <div className="relative z-10 mt-20 pt-10 border-t border-white/10 hidden md:block">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Layout className="w-5 h-5 text-rsRed" />
                            </div>
                            <span className="text-sm font-medium">Over 200,000 Projects Managed</span>
                        </div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                            Enterprise Precision Engineering
                        </p>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-rsRed opacity-20 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3"></div>
                </div>

                {/* Right Side: Login Form */}
                <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-[#0d1b42]">Welcome Back</h2>
                        <p className="text-gray-500 font-light mt-1">Please enter your credentials to proceed.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#0d1b42] uppercase tracking-widest ml-1">Corporate Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rsRed transition-all outline-none"
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#0d1b42] uppercase tracking-widest ml-1">Security Key</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-rsRed transition-all outline-none"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm py-2">
                            <label className="flex items-center gap-2 text-gray-600 font-medium cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-rsRed focus:ring-rsRed" />
                                <span>Record Session</span>
                            </label>
                            <button type="button" onClick={() => alert('Password reset link sent to your corporate email.')} className="text-rsRed hover:underline font-bold transition-all">Recover Password</button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#0d1b42] text-white font-bold py-5 rounded-2xl hover:bg-rsRed transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 group"
                        >
                            Authorize Access
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-12 text-center text-sm text-gray-400">
                        Authorized users only. Access is monitored for security purposes. <br />
                        Need credentials? <Link to="/contact-us" className="text-[#0d1b42] font-black hover:text-rsRed">Contact Admin</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ClientPortal;
