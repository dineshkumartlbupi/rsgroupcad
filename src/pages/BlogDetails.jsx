import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Optional: Use if we decide to install it, or just display raw text/html safely? 
// Since we didn't install react-markdown, I'll assume simple text or HTML content. 
// For "Premium Design" usually we render HTML or Markdown. I'll just render text for now to be safe, or dangerouslySetInnerHTML if trusted. 
// Given it's admin content, unsafe HTML might be OK-ish but risky. I'll stick to a simple display.

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(`http://localhost:5001/api/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Blog not found');
                }
                const data = await response.json();
                setBlog(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <div className="pt-32 pb-20 text-center">Loading...</div>;

    if (error || !blog) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
                <Link to="/blogs" className="text-rsRed hover:underline">← Back to Blogs</Link>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <SEO
                title={blog.title}
                description={blog.excerpt}
                canonical={`https://rscadgroup.com/blogs/${blog._id}`}
                ogImage={blog.image}
                ogType="article"
            />
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-geonBlue to-blue-600">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <img
                    src={blog.image || 'https://via.placeholder.com/1200x600?text=No+Image'}
                    alt={blog.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl text-center text-white">
                        <div className="flex justify-center items-center gap-4 text-sm mb-4">
                            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{blog.category}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map((tag, index) => (
                                    <span key={index} className="px-4 py-2 bg-blue-50 text-geonBlue rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <div className="text-center mt-12 mb-20">
                <Link to="/blogs" className="inline-block px-8 py-3 bg-geonBlue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                    ← Back to All Articles
                </Link>
            </div>
        </div>
    );
};

export default BlogDetails;
