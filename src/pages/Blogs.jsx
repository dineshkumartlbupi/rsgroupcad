import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
// import { blogsData } from '../data/blogsData'; // Keeping for reference or fallback if needed

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                // Fetch published blogs only? Ideally backend filters, or we filter here.
                // For now, assuming standard fetch returns all or we filter.
                // Simulating filtering for 'published' if backend sends all.
                const response = await fetch('http://localhost:5001/api/blogs');
                const data = await response.json();

                // If API fails or returns error, data might not be array
                if (Array.isArray(data)) {
                    const publishedBlogs = data.filter(blog => blog.status === 'published');
                    setBlogs(publishedBlogs);
                } else {
                    console.error('Failed to fetch blogs');
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="pt-20">
            <SEO
                title="Blogs - Insights & News"
                description="Latest updates from the world of sustainable energy design, solar technology, and engineering standards."
                canonical="https://rscadgroup.com/blogs"
            />
            <div className="bg-geonBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Insights & News</h1>
                <p className="mt-4 text-xl text-blue-100">Latest updates from the world of sustainable energy design.</p>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="text-center py-20">Loading articles...</div>
                    ) : blogs.length === 0 ? (
                        <div className="text-center py-20 text-gray-500">
                            No articles found. Check back soon!
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {blogs.map((blog) => (
                                <div key={blog._id} className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                                    <div className="h-48 overflow-hidden bg-gray-100">
                                        <img
                                            src={blog.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                                            <span>RS Solar CAD</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
                                        <p className="text-gray-600 mb-6 flex-grow">{blog.excerpt}</p>
                                        <Link to={`/blogs/${blog._id}`} className="text-rsRed font-bold hover:text-green-800 self-start">
                                            Read Article &rarr;
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
