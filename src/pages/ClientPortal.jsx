import React, { useState } from 'react';

const ClientPortal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login functionality is currently simulated.');
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-geonBlue">Client Portal</h1>
                    <p className="text-gray-500 mt-2">Access your project documents and status.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rsRed focus:border-transparent outline-none transition-all"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rsRed focus:border-transparent outline-none transition-all"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-2 rounded text-rsRed focus:ring-rsRed" />
                            Remember me
                        </label>
                        <a href="#" className="text-rsRed hover:text-green-800 font-medium">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-geonBlue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors shadow-md transform active:scale-95 duration-150">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account? <a href="/contact-us" className="text-rsRed font-bold hover:underline">Contact Support</a>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} Geon Energy. Secure Client Access.
            </div>
        </div>
    );
};

export default ClientPortal;
