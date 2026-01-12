import React from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogsData.find(b => b.id === parseInt(id));

    if (!blog) {
        return (
            <div className="pt-32 pb-20 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
                <Link to="/blogs" className="text-rsRed hover:underline">← Back to Blogs</Link>
            </div>
        );
    }

    const relatedBlogs = blogsData.filter(b => b.id !== blog.id).slice(0, 3);

    return (
        <div className="pt-20">
            <SEO
                title={blog.title}
                description={blog.excerpt}
                canonical={`https://rscadgroup.com/blogs/${blog.id}`}
                ogImage={blog.image}
                ogType="article"
            />
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-geonBlue to-blue-600">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
                <div className="relative h-full flex items-center justify-center px-4">
                    <div className="max-w-4xl text-center text-white">
                        <div className="flex justify-center items-center gap-4 text-sm mb-4">
                            <span>{blog.date}</span>
                            <span>•</span>
                            <span>{blog.author}</span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold">{blog.title}</h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        {blog.content.map((section, index) => (
                            <div key={index} className="mb-8">
                                {section.type === 'paragraph' && (
                                    <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>
                                )}
                                {section.type === 'heading' && (
                                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.text}</h2>
                                )}
                                {section.type === 'list' && (
                                    <ul className="list-disc pl-6 mb-4 space-y-2">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="text-gray-700">{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                                <span key={index} className="px-4 py-2 bg-blue-50 text-geonBlue rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedBlogs.map((relatedBlog) => (
                            <Link key={relatedBlog.id} to={`/blogs/${relatedBlog.id}`} className="group">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                                    <div className="h-48 overflow-hidden">
                                        <img src={relatedBlog.image} alt={relatedBlog.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">{relatedBlog.date}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rsRed transition-colors">{relatedBlog.title}</h3>
                                        <p className="text-gray-600 text-sm">{relatedBlog.excerpt}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/blogs" className="inline-block px-8 py-3 bg-geonBlue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                            View All Articles
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;
