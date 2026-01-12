import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, canonical, ogImage, ogType, twitterHandle }) => {
    const siteName = 'RS Solar CAD Group';
    const defaultDescription = 'Premier source for Solar Design, EV Permitting, and Architectural solutions. Quality Design, On Time.';
    const defaultImage = 'https://rscadgroup.com/logo192.png'; // Update with actual absolute URL in production
    const siteUrl = 'https://rscadgroup.com';

    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const finalDescription = description || defaultDescription;
    const finalImage = ogImage || defaultImage;
    const finalCanonical = canonical || siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    canonical: PropTypes.string,
    ogImage: PropTypes.string,
    ogType: PropTypes.string,
    twitterHandle: PropTypes.string,
};

SEO.defaultProps = {
    title: '',
    description: '',
    keywords: 'solar design, PV permitting, CAD drafting, EV charging stations, architectural design, solar engineering',
    canonical: '',
    ogImage: '',
    ogType: 'website',
    twitterHandle: '@rscadgroup', // Placeholder
};

export default SEO;
