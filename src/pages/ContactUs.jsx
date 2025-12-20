import React from 'react';

const ContactUs = () => {
    return (
        <div className="pt-20">
            <div className="bg-geonBlue py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">Contact Us</h1>
                <p className="mt-4 text-xl text-blue-100">We'd love to hear from you</p>
            </div>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-geonBlue mb-6">Get In Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our products or solutions? Reach out to our team.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-rsRed flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <p className="text-gray-500">contact@rscadgroup.com</p>
                                        <p className="text-gray-500">sales@rscadgroup.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-rsRed flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <p className="text-gray-500 max-w-xs">+1 347 218 8830 (USA)</p>
                                        <p className="text-gray-500 max-w-xs">+91 9958060424 (India)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rsRed focus:ring-rsRed py-3 px-4 bg-white" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rsRed focus:ring-rsRed py-3 px-4 bg-white" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                    <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rsRed focus:ring-rsRed py-3 px-4 bg-white" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rsRed focus:ring-rsRed py-3 px-4 bg-white" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-rsRed text-white py-3 px-4 rounded-md font-bold hover:bg-red-800 transition-colors shadow-md">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
