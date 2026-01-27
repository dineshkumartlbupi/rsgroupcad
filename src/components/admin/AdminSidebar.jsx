import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FileText, Mail, Briefcase, FileCheck, MessageSquare, LogOut, ShieldCheck, Home } from 'lucide-react';

const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        navigate('/client-portal');
    };

    const navItems = [
        { path: '/admin/dashboard', label: 'Blogs', icon: FileText },
        { path: '/admin/contact', label: 'Contact', icon: Mail },
        { path: '/admin/careers', label: 'Careers', icon: Briefcase },
        { path: '/admin/applications', label: 'Application', icon: FileCheck },
        { path: '/admin/consultations', label: 'Consultation', icon: MessageSquare },
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0d1b42] text-white flex flex-col shadow-2xl z-50 transition-all duration-300">
            {/* Branding */}
            <div className="p-8 border-b border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#e62e00] rounded-xl flex items-center justify-center shadow-lg shadow-[#e62e00]/20">
                    <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="font-bold text-lg leading-none">RS Solar</h1>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Admin Panel</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-8 px-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/admin/dashboard'} // Exact match for dashboard home
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-[#e62e00] text-white shadow-lg shadow-[#e62e00]/20 font-bold'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="px-4 pb-4">
                <button
                    onClick={() => navigate('/')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200"
                >
                    <Home className="w-5 h-5" />
                    <span>Go to Home</span>
                </button>
            </div>

            {/* Footer / User Info */}
            <div className="p-4 border-t border-white/10 bg-[#0a1635]">
                <div className="flex items-center gap-3 mb-4 px-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-sm font-bold">
                        AD
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-sm font-bold truncate">Admin User</p>
                        <p className="text-xs text-gray-400 truncate">admin@rscadgroup.com</p>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-red-500/10 hover:text-red-500 text-gray-400 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
