import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Building2, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';

const AdminConsultations = () => {
    const [consultations, setConsultations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchConsultations();
    }, []);

    const fetchConsultations = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5001/api/consultations', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setConsultations(data);
        } catch (error) {
            console.error('Error fetching consultations:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <SEO title="Consultation Requests | Admin" noindex={true} />

            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-[#001528] flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-[#e62e00]" />
                    Consultation Requests
                </h1>
                <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-500">
                    Total: {consultations.length}
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {consultations.length === 0 ? (
                        <div className="col-span-full bg-white p-12 text-center text-gray-400 rounded-2xl border border-gray-100">
                            No consultation requests received yet.
                        </div>
                    ) : (
                        consultations.map((item) => (
                            <div key={item._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#001528]">{item.name}</h3>
                                        <p className="text-gray-500 text-sm">{item.email}</p>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">New</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                                        <Phone className="w-4 h-4 text-gray-400" /> {item.phone}
                                    </div>
                                    {item.companyName && (
                                        <div className="flex items-center gap-3 text-gray-600 text-sm">
                                            <Building2 className="w-4 h-4 text-gray-400" /> {item.companyName}
                                        </div>
                                    )}
                                    <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 mt-4">
                                        <span className="block text-xs font-bold text-gray-400 uppercase mb-1">Interest</span>
                                        {item.serviceType || 'General Consultation'}
                                    </div>
                                    {item.message && (
                                        <p className="text-sm text-gray-500 italic border-l-2 border-[#e62e00] pl-3">
                                            "{item.message}"
                                        </p>
                                    )}
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
                                    <span>Received: {new Date(item.createdAt).toLocaleDateString()}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminConsultations;
