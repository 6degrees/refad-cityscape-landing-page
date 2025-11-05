"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";
import localFont from "next/font/local";

const graphikArabic = localFont({
    src: "../app/fonts/GraphikArabic-Regular.otf",
    display: "swap",
});

/*
|------------------------------------------------------------------------------
| $footer:props
|------------------------------------------------------------------------------
| Component Props:
| - className   : optional wrapper class (for external layout control)
| - bgClass     : background color class (default: blush tone)
| - textClass   : text color class (default: burgundy tone)
|------------------------------------------------------------------------------
*/
type FooterProps = {
    className?: string;
    bgClass?: string;
    textClass?: string;
};

/*
|------------------------------------------------------------------------------
| $footer:component
|------------------------------------------------------------------------------
| Main Footer component for the Refad website.
|
| Structure:
| - 4 columns (logo | main menu | social | reach us)
| - Top divider line
| - Copyright line
|------------------------------------------------------------------------------
*/
export default function Footer(
    {
        bgClass = "",
        textClass = "text-blush",
        className = "",
    }: FooterProps)
{

    /*
    |--------------------------------------------------------------------------
    | $i18n-translator
    |--------------------------------------------------------------------------
    | Retrieve localized strings from i18next.
    | The `t()` function pulls translated labels from your locale JSON files.
    |--------------------------------------------------------------------------
    */
    const { t, i18n } = useTranslation();
    const { selectedLanguage } = useAppContext();
    const lang = selectedLanguage || i18n.language || "en";
    const langPrefix = lang === "ar" ? "ar" : "en";

    /*
    |--------------------------------------------------------------------------
    | $footer-content
    |--------------------------------------------------------------------------
    */
    const nav = [
        { label: t("footer.nav.aboutUs"), href: `https://www.refad.com.sa/${langPrefix}/about-us` },
        { label: t("footer.nav.developments"), href: `https://www.refad.com.sa/${langPrefix}/developments` },
        { label: t("footer.nav.newsMedia"), href: `https://www.refad.com.sa/${langPrefix}/news-and-media` },
    ];
    const email = "info@refad.com.sa";
    const phone = "920031839";

    const socials = {
        instagram: "https://www.instagram.com/refad_ksa/",
        linkedin: "https://www.linkedin.com/company/refad-for-real-estate-investment-and-development/",
        x: "https://x.com/Refad_ksa?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    };

    const addressStreet = t("footer.address", { returnObjects: true }) as string[];

    /*
    |------------------------------------------------------------------------------
    | $component-render
    |------------------------------------------------------------------------------
    */
    return (
        <footer className={`${textClass} ${className} ${graphikArabic.className}`}>
            <div className="container-x">
                {/* Divider Line */}
                <div className="border-t border-blush/20" />

                {/* Content Section */}
                <div className="py-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        {/* Logo */}
                        <div className="md:col-span-3">
                            <Image src="/icons/logo.png" alt="Refad" width={240} height={120} className="object-contain no-hover-scale" />
                        </div>

                        {/* Main Menu */}
                        <div className="md:col-span-3">
                            <div className="text-blush/70 uppercase tracking-wide text-sm mb-4">{t("footer.mainMenu")}</div>
                            <ul className="space-y-3 text-lg">
                                {nav.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} target="_blank" className="hover:text-white transition-colors duration-300">{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Channels */}
                        <div className="md:col-span-3">
                            <div className="text-blush/70 uppercase tracking-wide text-sm mb-4">{t("footer.socialChannels")}</div>
                            <ul className="space-y-3 text-lg">
                                <li><Link href={socials.instagram} target="_blank" className="hover:text-white">{t("footer.social.instagram")}</Link></li>
                                <li><Link href={socials.linkedin} target="_blank" className="hover:text-white">{t("footer.social.linkedin")}</Link></li>
                                <li><Link href={socials.x} target="_blank" className="hover:text-white">{t("footer.social.x")}</Link></li>
                            </ul>
                        </div>

                        {/* Reach Us */}
                        <div className="md:col-span-3">
                            <div className="text-blush/70 uppercase tracking-wide text-sm mb-4">{t("footer.reachUs")}</div>
                            <div className="space-y-3 text-lg">
                                <div><Link href={`mailto:${email}`} className="hover:text-white">{email}</Link></div>
                                <div><Link href={`tel:${phone}`} className="hover:text-white text-base sm:text-lg">{phone}</Link></div>
                                <div className="text-base leading-6">
                                    {addressStreet.map((line, i) => (
                                        <div key={`addr-${i}`}>{line}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-6 text-xs text-blush/70">{t("footer.copyright")}</div>
            </div>
        </footer>
    );
}