import React, { useState, useEffect } from 'react';
import { Briefcase, Plus, Trash2, MapPin, Edit } from 'lucide-react';
import SEO from '../../components/SEO';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const AdminCareers = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        type: 'Full-time',
        location: '',
        experience: '',
        description: '',
        requirements: '',
        responsibilities: ''
    });

    useEffect(() => {
        fetchCareers();
    }, []);

    const fetchCareers = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/careers/admin`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            setCareers(data);
        } catch (error) {
            console.error('Error fetching careers:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this job posting?')) return;
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/careers/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.ok) {
                setCareers(careers.filter(c => c._id !== id));
            }
        } catch (error) {
            console.error('Error deleting career:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            // Convert requirements and responsibilities string to array
            const payload = {
                ...formData,
                requirements: formData.requirements.split('\n').filter(r => r.trim()),
                responsibilities: formData.responsibilities.split('\n').filter(r => r.trim())
            };

            const url = editingId
                ? `http://localhost:5001/api/careers/${editingId}`
                : 'http://localhost:5001/api/careers';

            const method = editingId ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setShowForm(false);
                setEditingId(null);
                setFormData({
                    title: '',
                    type: 'Full-time',
                    location: '',
                    experience: '',
                    description: '',
                    requirements: '',
                    responsibilities: ''
                });
                fetchCareers();
            }
        } catch (error) {
            console.error('Error saving career:', error);
        }
    };

    const handleEdit = (career) => {
        setEditingId(career._id);
        setFormData({
            title: career.title,
            type: career.type,
            location: career.location,
            experience: career.experience || '',
            description: career.description,
            requirements: Array.isArray(career.requirements)
                ? career.requirements.join('\n')
                : career.requirements,
            responsibilities: Array.isArray(career.responsibilities)
                ? career.responsibilities.join('\n')
                : (career.responsibilities || '')
        });
        setShowForm(true);
    };

    return (
        <div className="space-y-6">
            <SEO title="Career Management | Admin" noindex={true} />

            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-black text-[#001528] flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-[#e62e00]" />
                    Careers Management
                </h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        if (showForm) {
                            setEditingId(null);
                            setFormData({
                                title: '',
                                type: 'Full-time',
                                location: '',
                                experience: '',
                                description: '',
                                requirements: '',
                                responsibilities: ''
                            });
                        }
                    }}
                    className="flex items-center gap-2 bg-[#e62e00] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#cc2900] transition-colors shadow-lg"
                >
                    <Plus className="w-5 h-5" />
                    {showForm ? 'Cancel' : 'Add New Job'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Job Opening' : 'Post New Job Opening'}</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Job Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Job Type</label>
                            <select
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none bg-white"
                            >
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Contract</option>
                                <option>Internship</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Experience</label>
                            <input
                                type="text"
                                value={formData.experience}
                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none"
                                placeholder="e.g., 1-3 years"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none"
                                required
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Requirements (One per line)</label>
                            <textarea
                                value={formData.requirements}
                                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none"
                                rows="4"
                                placeholder="- 3+ years experience&#10;- Knowledge of React&#10;- Team player"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Key Responsibilities (One per line)</label>
                            <textarea
                                value={formData.responsibilities}
                                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#e62e00] outline-none"
                                rows="4"
                                placeholder="- Create detailed CAD drawings&#10;- Collaborate with engineers"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-[#001528] text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors"
                            >
                                {editingId ? 'Update Job' : 'Publish Job'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {careers.map((career) => (
                        <div key={career._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#001528]">{career.title}</h3>
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                        <Briefcase className="w-4 h-4" /> {career.type}
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <MapPin className="w-4 h-4" /> {career.location}
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                                            Exp: {career.experience}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(career)}
                                        className="p-2 text-gray-400 hover:text-[#0033A0] transition-colors"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(career._id)}
                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{career.description}</p>
                            <div className="flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-4">
                                <span>Posted: {new Date(career.createdAt).toLocaleDateString()}</span>
                                <span className={`px-2 py-1 rounded-full ${career.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                    {career.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AdminCareers;
