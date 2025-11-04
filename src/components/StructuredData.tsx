"use client";

import { useTranslation } from "react-i18next";

/*
||--------------------------------------------------------------------------
|| $structured-data
||--------------------------------------------------------------------------
||
|| JSON-LD structured data for SEO optimization.
|| Provides search engines with detailed information about the real estate project.
||
*/
export default function StructuredData() {
    const { t } = useTranslation();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Refad Real Estate Investment & Development",
        "description": "Refad develops residential, mixed-use and logistics destinations that elevate modern living across Saudi Arabia.",
        "url": "http://cityscape.refad.com.sa/",
        "image": [
            "http://cityscape.refad.com.sa/icons/logo.png"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Al Khobar",
            "addressRegion": "Eastern Province",
            "addressCountry": "SA"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966920031839",
            "contactType": "sales",
            "areaServed": "SA",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.instagram.com/refad_ksa/",
            "https://www.linkedin.com/company/refad-for-real-estate-investment-and-development/",
            "https://x.com/refad_ksa"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
