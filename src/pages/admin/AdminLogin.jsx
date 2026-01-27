import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldCheck, Layout, User } from 'lucide-react';
import SEO from '../../components/SEO';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userInfo', JSON.stringify(data));
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Something went wrong. Please check if backend is running.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center px-4 overflow-hidden relative">
            <SEO
                title="Admin Login"
                description="Secure gateway for RS Solar CAD Group admin."
                noindex={true}
            />
            {/* Decorative backgrounds */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e62e00]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0d1b42]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 flex flex-col md:flex-row overflow-hidden relative z-10 border border-gray-100"
            >
                {/* Left Side: Branding/Info */}
                <div className="md:w-5/12 bg-[#0d1b42] p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-[#e62e00] rounded-xl flex items-center justify-center mb-10 shadow-lg shadow-[#e62e00]/20">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Secure <br /><span className="text-[#e62e00] italic">Admin</span> Gateway</h1>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Access your project lifecycle dashboard, engineering plan sets, and real-time design queues in one unified enterprise environment.
                        </p>
                    </div>

                    <div className="relative z-10 mt-20 pt-10 border-t border-white/10 hidden md:block">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                <Layout className="w-5 h-5 text-[#e62e00]" />
                            </div>
                            <span className="text-sm font-medium">Content Management System</span>
                        </div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                            Enterprise Precision Engineering
                        </p>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#e62e00] opacity-20 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3"></div>
                </div>

                {/* Right Side: Login Form */}
                <div className="md:w-7/12 p-8 md:p-16 flex flex-col justify-center bg-white">
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-[#0d1b42]">Admin Access</h2>
                        <p className="text-gray-500 font-light mt-1">Please enter your credentials to proceed.</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-500 rounded-xl border border-red-100 text-sm font-medium text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#0d1b42] uppercase tracking-widest ml-1">Admin Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#e62e00] transition-all outline-none"
                                    placeholder="admin@rscadgroup.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#0d1b42] uppercase tracking-widest ml-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#e62e00] transition-all outline-none"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#0d1b42] text-white font-bold py-5 rounded-2xl hover:bg-[#e62e00] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Authenticating...' : 'Authorize Access'}
                            {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="mt-12 text-center text-sm text-gray-400">
                        Authorized personnel only. Access is monitored and logged.
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
