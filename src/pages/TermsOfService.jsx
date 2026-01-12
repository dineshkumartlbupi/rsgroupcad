import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const TermsOfService = () => {
    return (
        <div className="pt-20">
            {/* Header */}
            <div className="bg-rsBlue py-16 px-4 animate-fade-in-up md:px-8 text-center text-white">
                <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">Terms of Service</h1>
                <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-700 leading-relaxed">

                {/* Terms and Conditions Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-rsBlue mb-8 border-b-2 border-rsRed inline-block pb-2">Web Site Terms and Conditions of Use</h2>

                    <div className="space-y-8">
                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Terms</h3>
                            <p>
                                By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, applicable laws and regulations and their compliance. If you disagree with any of the stated terms and conditions, you are prohibited from using or accessing this site. The materials contained in this site are secured by relevant copyright and trade mark law.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Use License</h3>
                            <p className="mb-2">
                                Permission is allowed to temporarily download one duplicate of the materials (data or programming) on RS SOLAR CAD GROUP’s site for individual and non-business use only. This is the just a permit of license and not an exchange of title, and under this permit you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Modify or copy the materials;</li>
                                <li>Use the materials for any commercial use, or for any public presentation (business or non-business);</li>
                                <li>Attempt to decompile or rebuild any product or material contained on RS SOLAR CAD GROUP’s site;</li>
                                <li>Remove any copyright or other restrictive documentations from the materials; or</li>
                                <li>Transfer the materials to someone else or even “mirror” the materials on other server.</li>
                            </ul>
                            <p className="mt-2">
                                This permit might consequently be terminated if you disregard any of these confinements and may be ended by RS SOLAR CAD GROUP whenever deemed. After permit termination or when your viewing permit is terminated, you must destroy any downloaded materials in your ownership whether in electronic or printed form.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Disclaimer</h3>
                            <p>
                                The materials on RS SOLAR CAD GROUP’s site are given “as is”. RS SOLAR CAD GROUP makes no guarantees, communicated or suggested, and thus renounces and nullifies every single other warranties, including without impediment, inferred guarantees or states of merchantability, fitness for a specific reason, or non-encroachment of licensed property or other infringement of rights. Further, RS SOLAR CAD GROUP does not warrant or make any representations concerning the precision, likely results, or unwavering quality of the utilization of the materials on its Internet site or generally identifying with such materials or on any destinations connected to this website.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Constraints</h3>
                            <p>
                                In no occasion should RS SOLAR CAD GROUP or its suppliers subject for any harms (counting, without constraint, harms for loss of information or benefit, or because of business interference,) emerging out of the utilization or powerlessness to utilize the materials on RS SOLAR CAD GROUP’s Internet webpage, regardless of the possibility that RS SOLAR CAD GROUP or a RS SOLAR CAD GROUP approved agent has been told orally or in written of the likelihood of such harm. Since a few purviews don’t permit constraints on inferred guarantees, or impediments of obligation for weighty or coincidental harms, these confinements may not make a difference to you.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">5. Amendments and Errata</h3>
                            <p>
                                The materials showing up on RS SOLAR CAD GROUP’s site could incorporate typographical, or photographic mistakes. RS SOLAR CAD GROUP does not warrant that any of the materials on its site are exact, finished, or current. RS SOLAR CAD GROUP may roll out improvements to the materials contained on its site whenever without notification. RS SOLAR CAD GROUP does not, then again, make any dedication to update the materials.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">6. Links</h3>
                            <p>
                                RS SOLAR CAD GROUP has not checked on the majority of the websites or links connected to its website and is not in charge of the substance of any such connected webpage. The incorporation of any connection does not infer support by RS SOLAR CAD GROUP of the site. Utilization of any such connected site is at the user’s own risk.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">7. Site Terms of Use Modifications</h3>
                            <p>
                                RS SOLAR CAD GROUP may update these terms of utilization for its website whenever without notification. By utilizing this site you are consenting to be bound by the then current form of these Terms and Conditions of Use.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">8. Governing Law</h3>
                            <p>
                                Any case identifying with RS SOLAR CAD GROUP’s site should be administered by the laws of the country of INDIA RS SOLAR CAD GROUP State without respect to its contention of law provisions.
                            </p>
                        </article>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default TermsOfService;
