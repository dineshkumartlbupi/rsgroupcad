import React, { useState, useEffect } from 'react';
import { FileCheck, Download, Trash2, Mail } from 'lucide-react';
import SEO from '../../components/SEO';

const AdminApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5001/api/applications', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error('Error fetching applications:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <SEO title="Job Applications | Admin" noindex={true} />

            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-[#001528] flex items-center gap-3">
                    <FileCheck className="w-8 h-8 text-[#e62e00]" />
                    Job Applications
                </h1>
                <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-500">
                    Total: {applications.length}
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Applicant</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Position</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Contact</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase">Resume</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {applications.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                                        No applications received yet.
                                    </td>
                                </tr>
                            ) : (
                                applications.map((app) => (
                                    <tr key={app._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-[#001528]">{app.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {app.jobTitle || 'General Application'}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                                <Mail className="w-3 h-3" /> {app.email}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1">{app.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {new Date(app.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a
                                                href={app.resumeUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                                            >
                                                <Download className="w-4 h-4" /> Download
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminApplications;
