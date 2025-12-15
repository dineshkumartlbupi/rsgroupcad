import React from 'react';

const blogs = [
    {
        id: 1,
        title: "The Future of Solar Energy in Urban Architecture",
        excerpt: "Exploring how modern cities are integrating photovoltaic systems into building facades.",
        date: "Dec 10, 2025",
        author: "Geon Team",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Navigating EV Permitting Challenges",
        excerpt: "A guide to streamlining the regulatory process for commercial EV charging stations.",
        date: "Nov 28, 2025",
        author: "Sarah Jenkins",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "BIM: The Backbone of Sustainable Construction",
        excerpt: "Why Building Information Modeling is crucial for energy-efficient design workflows.",
        date: "Nov 15, 2025",
        author: "David Chen",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

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
                        {blogs.map((blog) => (
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
                                    <a href={`/blogs/${blog.id}`} className="text-rsRed font-bold hover:text-green-800 self-start">
                                        Read Article &rarr;
                                    </a>
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
