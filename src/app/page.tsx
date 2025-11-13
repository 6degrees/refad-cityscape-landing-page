"use client";

import Banner from "@/components/Banner";
import {useTranslation} from "react-i18next";
import CommunitySignupSection from "@/components/CommunitySignupSection";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

/*
|--------------------------------------------------------------------------
| Home Page
|--------------------------------------------------------------------------
|
| Lightweight page that renders the hero Banner component.
| Keep this file minimal; put layout/SEO in app/layout.tsx and
| encapsulate hero logic inside <Banner />.
|
*/
export default function HomePage() {
    /*
    |--------------------------------------------------------------------------
    | $i18n-translator
    |--------------------------------------------------------------------------
    |
    | Retrieve the `t` function from i18next for localized strings.
    |
    */
    const {t} = useTranslation();

    /*
    |------------------------------------------------------------------------------
    | $page-render
    |------------------------------------------------------------------------------
    | Renders the main structure of the landing page.
    |------------------------------------------------------------------------------
    |
    | - Wraps all major homepage sections inside a <main> container.
    | - Sequentially composes the full layout:
    |     → Banner: hero introduction
    |     → CommunitySignupSection: sign-up form for engagement
    |     → Resources: downloadable resources section
    |     → Footer: bottom navigation + contact details
    | - Uses translation keys (t) for localized content.
    | - Ensures consistent structure across Arabic and English layouts.
    |
    */
    return (
        <>
            <StructuredData />
            <main>
                {/* Primary hero section */}
                <Banner/>
                <div className="site-bg">
                <CommunitySignupSection heading={t("signup.title")} subheading={t("signup.subtitle")}/>
                <Resources />
                <Footer/>
                </div>
            </main>
        </>
    );
}
