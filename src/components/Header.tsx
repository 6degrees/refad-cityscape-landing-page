"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import {useAppContext} from "@/context/AppContext";
import Link from "next/link";

/*
|--------------------------------------------------------------------------
| $site-header
|--------------------------------------------------------------------------
|
| Refad top navigation (logo, links, language toggle, mobile drawer).
| - Self-manages the mobile menu state.
| - Receives `rtl` and `toggleDir` from the parent (page/layout).
|
| Usage:
|   <Header rtl={rtl} toggleDir={toggleDir} />
|
*/
export default function Header() {
    /*
    |--------------------------------------------------------------------------
    | $nav-state & $i18n-handlers
    |--------------------------------------------------------------------------
    | - `t`                 : translator bound to current language (react-i18next)
    | - `selectedLanguage`  : current app language from context ("en" | "ar")
    | - `setSelectedLanguage`: toggles language via context (updates i18next)
    | - `handleLanguageSelection`: toggles between "en" and "ar"
    */
    const { t } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useAppContext();
    const handleLanguageSelection = (lang: string|null) => {
        setSelectedLanguage(lang === "ar" ? "en" : "ar");
    };

    /*
    |--------------------------------------------------------------------------
    | $site-header
    |--------------------------------------------------------------------------
    |
| Refad top navigation (logo, register button, language toggle).
    | - Uses Tailwind `container` for width/padding.
    | - Desktop and Mobile: shows register button and language toggle.
    | - Language toggle calls `handleLanguageSelection(selectedLanguage)`.
    |
    */
    return (
        <header className="relative z-100">
            <div className="container-x">
                <div className="flex items-start justify-between w-full py-5">
                    {/* Logo */}
                    <a href="#" className="flex items-center select-none">
                        <Image src="/icons/logo.png" alt="Refad Logo" width={100} height={60} priority className="h-28 w-28 md:h-32 md:w-32 object-contain no-hover-scale"/>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-4 text-md font-medium">
                        <Link href="tel:920031839" className="rounded-full border border-white/60 px-5 py-2 text-white/95 hover:bg-white/10 transition-colors duration-300">
                            {t("nav.contactUs")}
                        </Link>
                        <button
                            onClick={() => handleLanguageSelection(selectedLanguage)}
                            className={`rounded-full border border-white/60 px-4 py-2 cursor-pointer text-white/95 hover:bg-white/10 transition-colors duration-300 ${selectedLanguage === 'ar' ? "en-display" : "ar-display"}`}>
                            {selectedLanguage === 'ar' ? "En" : "Ar"}
                        </button>
                    </nav>

                    {/* Mobile nav */}
                    <nav className="lg:hidden flex items-center gap-3">
                        <Link href="tel:920031839" className="rounded-full border border-white/60 px-3 py-1 text-sm text-white/95 hover:bg-white/10 transition-colors duration-300 whitespace-nowrap">
                            {t("nav.contactUs")}
                        </Link>
                        <button
                            onClick={() => handleLanguageSelection(selectedLanguage)}
                            className={`rounded-full border border-white/60 px-3 py-1.5 text-sm cursor-pointer text-white/95 hover:bg-white/10 transition-colors duration-300 ${selectedLanguage === 'ar' ? "en-display" : "ar-display"}`}>
                            {selectedLanguage === 'ar' ? "En" : "Ar"}
                        </button>
                    </nav>
                </div>
            </div>

        </header>
    );
}
