import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Privacy Policy"
                description="Our commitment to your privacy. Read the RS Solar CAD Group Privacy Policy."
                canonical="https://rscadgroup.com/privacy-policy"
            />
            {/* Header */}
            <div className="bg-rsBlue py-16 px-4 animate-fade-in-up md:px-8 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">Privacy Policy</h1>
                <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed">

                    {/* Privacy Policy Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-rsBlue mb-6 border-b-2 border-rsRed inline-block pb-2">Privacy Policy</h2>
                        <p className="mb-4">
                            Your privacy is critical to us. Likewise, we have built up this Policy with the end goal you should see how we gather, utilize, impart and reveal and make utilization of individual data. The following blueprints our privacy policy.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 mb-6">
                            <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
                            <li>We will gather and utilization of individual data singularly with the target of satisfying those reasons indicated by us and for other good purposes, unless we get the assent of the individual concerned or as required by law.</li>
                            <li>We will just hold individual data the length of essential for the satisfaction of those reasons.</li>
                            <li>We will gather individual data by legal and reasonable means and, where fitting, with the information or assent of the individual concerned.</li>
                            <li>Personal information ought to be important to the reasons for which it is to be utilized, and, to the degree essential for those reasons, ought to be exact, finished, and updated.</li>
                            <li>We will protect individual data by security shields against misfortune or burglary, and also unapproved access, divulgence, duplicating, use or alteration.</li>
                            <li>We will promptly provide customers with access to our policies and procedures for the administration of individual data.</li>
                        </ul>
                        <p>
                            We are focused on leading our business as per these standards with a specific end goal to guarantee that the privacy of individual data is secure and maintained.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
