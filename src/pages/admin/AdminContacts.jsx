import React, { useState, useEffect } from 'react';
import { Mail, Trash2, CheckCircle, Clock } from 'lucide-react';
import SEO from '../../components/SEO';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/contacts`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setContacts(data);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this message?')) return;
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/contacts/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.ok) {
                setContacts(contacts.filter(contact => contact._id !== id));
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    return (
        <div className="space-y-6">
            <SEO title="Contact Messages | Admin" noindex={true} />

            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-[#001528] flex items-center gap-3">
                    <Mail className="w-8 h-8 text-[#e62e00]" />
                    Contact Messages
                </h1>
                <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 font-bold text-gray-500">
                    Total: {contacts.length}
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Name/Email</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Subject</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Message</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">Date</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {contacts.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                                        No messages found.
                                    </td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            {contact.status === 'new' ? (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    <Clock className="w-3 h-3" /> New
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                    <CheckCircle className="w-3 h-3" /> Read
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-bold text-[#001528]">{contact.name}</div>
                                            <div className="text-xs text-gray-500">{contact.email}</div>
                                            <div className="text-xs text-gray-400">{contact.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {contact.subject || 'No Subject'}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate" title={contact.message}>
                                            {contact.message}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                            {new Date(contact.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(contact._id)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
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

export default AdminContacts;
