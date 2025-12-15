import React from 'react';

const Sustainability = () => {
    return (
        <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
            <div className="absolute inset-0 bg-geonBlue bg-opacity-90"></div>
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                    Sustainability Is At The Heart Of Everything We Do.
                </h2>
                <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                    We are committed to reducing carbon footprints and enabling a greener planet through our innovative energy solutions.
                </p>
                <button className="bg-white text-geonBlue px-8 py-3 rounded-full font-bold hover:bg-rsRed hover:text-white transition-colors duration-300">
                    Our Green Commitment
                </button>
            </div>
        </section>
    );
};

export default Sustainability;
