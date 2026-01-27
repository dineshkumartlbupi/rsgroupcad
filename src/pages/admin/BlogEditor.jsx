import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import SEO from '../../components/SEO';

const BlogEditor = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = !!id;

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        image: '',
        category: 'Solar Technology',
        status: 'draft',
        tags: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/blogs/${id}`);
                const data = await response.json();
                setFormData({
                    ...data,
                    tags: data.tags ? data.tags.join(', ') : ''
                });
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        if (isEditing) {
            fetchBlog();
        }
    }, [id, isEditing]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = localStorage.getItem('token');
        const url = isEditing
            ? `http://localhost:5001/api/blogs/${id}`
            : 'http://localhost:5001/api/blogs';

        const method = isEditing ? 'PUT' : 'POST';

        const payload = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        };

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                navigate('/admin/dashboard');
            } else {
                alert('Failed to save blog');
            }
        } catch (error) {
            console.error('Error saving blog:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <SEO
                title={isEditing ? 'Edit Blog' : 'New Blog'}
                description="Blog Editor"
                noindex={true}
            />
            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate('/admin/dashboard')}
                    className="p-2 hover:bg-white rounded-full transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-500" />
                </button>
                <h1 className="text-3xl font-black text-[#001528]">
                    {isEditing ? 'Edit Post' : 'New Post'}
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Main Content */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none text-lg font-bold"
                            placeholder="Enter post title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Content</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="12"
                            className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none font-mono text-sm leading-relaxed"
                            placeholder="Write your post content here (Markdown/HTML supported)..."
                            required
                        ></textarea>
                    </div>
                </div>

                {/* Meta Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="font-black text-[#001528] flex items-center gap-2">
                            <ImageIcon className="w-5 h-5" /> Media
                        </h3>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Featured Image URL</label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none"
                                placeholder="https://"
                            />
                        </div>
                        {formData.image && (
                            <div className="rounded-xl overflow-hidden h-40 bg-gray-100">
                                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                        )}
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                        <h3 className="font-black text-[#001528]">Settings</h3>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Excerpt</label>
                            <input
                                type="text"
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none"
                                placeholder="Short summary..."
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none bg-white"
                                >
                                    <option>Solar Technology</option>
                                    <option>Industry News</option>
                                    <option>Case Studies</option>
                                    <option>Company Updates</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none bg-white"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Tags</label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                className="block w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#e62e00] focus:border-transparent outline-none"
                                placeholder="Separated by comma..."
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/dashboard')}
                        className="px-8 py-3 rounded-xl font-bold bg-white text-gray-700 hover:bg-gray-50 transition-colors border border-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 bg-[#001528] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#e62e00] transition-colors duration-300 shadow-lg disabled:opacity-50"
                    >
                        <Save className="w-5 h-5" />
                        {loading ? 'Saving...' : 'Save Post'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default BlogEditor;
