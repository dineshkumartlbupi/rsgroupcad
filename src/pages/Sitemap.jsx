import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ChevronRight, Globe, Zap, Newspaper, MessageCircle, FileText } from 'lucide-react';

const sitemapData = [
    {
        title: "Company",
        icon: <Globe className="w-5 h-5 text-rsRed" />,
        links: [
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about-us#about-us" },
            { label: "Our Journey", path: "/about-us#our-journey" },
            { label: "Leadership Team", path: "/about-us#leadership" },
            { label: "Careers", path: "/career" },
            { label: "Contact Us", path: "/contact-us" }
        ]
    },
    {
        title: "Services",
        icon: <Zap className="w-5 h-5 text-rsRed" />,
        links: [
            { label: "Solar Design & Engineering", path: "/solar-design-services" },
            { label: "EV Charging Station Plans", path: "/ev-charging-station" },
            { label: "CAD Design & Drafting", path: "/cad-design" },
            { label: "Workforce Staffing", path: "/workforce-staffing" },
            { label: "Indian Solar Installation", path: "/indian-solar-installation" },
            { label: "Trading & Procurement", path: "/trading-procurement" }
        ]
    },
    {
        title: "Resources",
        icon: <Newspaper className="w-5 h-5 text-rsRed" />,
        links: [
            { label: "Success Stories", path: "/success-stories" },
            { label: "Blogs", path: "/blogs" },
            { label: "Press Release", path: "/press-release" },
            { label: "Media Center", path: "/media" },
            { label: "FAQ", path: "/faq" }
        ]
    },
    {
        title: "Legal & Support",
        icon: <FileText className="w-5 h-5 text-rsRed" />,
        links: [
            { label: "Privacy Policy", path: "/privacy-policy" },
            { label: "Terms of Service", path: "/terms-of-service" },
            { label: "SLA", path: "/sla" },
            { label: "Client Portal", path: "/client-portal" }
        ]
    }
];

const Sitemap = () => {
    // useEffect(() => {
    //     document.title = "Sitemap | RS Solar CAD Group";
    // }, []);

    return (
        <div className="pt-20 bg-gray-50 min-h-screen font-sans">
            <SEO
                title="Sitemap"
                description="Overview of all pages and resources on the RS Solar CAD Group website."
                canonical="https://rscadgroup.com/sitemap"
            />
            <div className="bg-[#001528] py-20 px-4 text-center text-white relative overflow-hidden">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                        <Map className="w-8 h-8 text-rsRed" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Site<span className="text-rsRed">map</span></h1>
                    <p className="text-xl text-gray-400 font-light mt-4">Discover all sections of the RS Solar CAD Group ecosystem.</p>
                </motion.div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-rsRed/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {sitemapData.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-4">
                                    {section.icon}
                                    <h2 className="text-xl font-bold text-[#001528] uppercase tracking-widest">{section.title}</h2>
                                </div>
                                <ul className="space-y-4">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <Link
                                                to={link.path}
                                                className="group flex items-center justify-between text-gray-500 hover:text-rsRed transition-all"
                                            >
                                                <span className="font-medium">{link.label}</span>
                                                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-32 p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-[#001528] rounded-2xl flex items-center justify-center text-white shrink-0">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-[#001528]">Can't find what you're looking for?</h3>
                                <p className="text-gray-500">Our customer success team is ready to guide you.</p>
                            </div>
                        </div>
                        <Link to="/contact-us" className="bg-rsRed text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-rsRed/20 hover:scale-105 transition-transform uppercase tracking-widest text-sm">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sitemap;
