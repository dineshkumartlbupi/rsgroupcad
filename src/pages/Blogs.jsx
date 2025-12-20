import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

const Blogs = () => {
    return (
        <div className="pt-20">
            <div className="bg-geonBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Insights & News</h1>
                <p className="mt-4 text-xl text-blue-100">Latest updates from the world of sustainable energy design.</p>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {blogsData.map((blog) => (
                            <div key={blog.id} className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                        <span>{blog.date}</span>
                                        <span>{blog.author}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-grow">{blog.excerpt}</p>
                                    <Link to={`/blogs/${blog.id}`} className="text-rsRed font-bold hover:text-green-800 self-start">
                                        Read Article &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
