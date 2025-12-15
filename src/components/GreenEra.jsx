import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
    {
        title: "Blogs",
        image: "https://images.unsplash.com/photo-1497435334941-8c884d50a283?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Insights into the latest trends in green energy and technology.",
        link: "/blogs"
    },
    {
        title: "Press Release",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Latest announcements and news from Geon Energy.",
        link: "/press-release"
    },
    {
        title: "Media",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        description: "Geon in the news and media features.",
        link: "/media"
    }
];

const GreenEra = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-geonBlue mb-4">A New Era Of Green Energy Solutions</h2>
                    <div className="w-24 h-1 bg-rsRed mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {articles.map((item, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-geonBlue bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                            </div>
                            <div className="p-8 relative">
                                <div className="absolute -top-10 right-8 bg-rsRed text-white p-3 rounded-full shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rsRed transition-colors">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.description}</p>
                                <a href={item.link} className="inline-block text-sm font-bold text-geonBlue uppercase tracking-wider group-hover:underline decoration-rsRed underline-offset-4">
                                    View More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GreenEra;
