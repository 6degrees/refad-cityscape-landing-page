import "./globals.css";
import localFont from "next/font/local";
import {AppProvider} from "@/context/AppContext";
import i18n from "i18next";
import I18nProvider from "@/providers/I18nProvider";
import LangDirEffect from "@/components/LangDirEffect";
import CustomCursor from "@/components/CustomCursor";

/*
|--------------------------------------------------------------------------
| $metadata
|--------------------------------------------------------------------------
|
| Global page metadata (applies to all pages unless overridden).
| You can add title, description, and icons here.
|
*/
export const metadata = {
    title: {
        default: "Refad | Real Estate Investment & Development",
        template: "%s | Refad"
    },
    description: "Refad Real Estate Investment & Development creates innovative lifestyle destinations across Saudi Arabia, delivering residential, mixed-use and logistics developments that elevate modern living.",
    keywords: [
        "Refad",
        "Khobar real estate",
        "Saudi Arabia property",
        "mixed-use development",
        "residential towers",
        "business offices",
        "logistics solutions",
        "retail spaces",
        "luxury living",
        "premium apartments",
        "office spaces",
        "shopping mall",
        "Refad development",
        "Al Khobar",
        "Eastern Province"
    ],
    authors: [{ name: "Refad Development" }],
    creator: "Refad Development",
    publisher: "Refad Development",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('http://cityscape.refad.com.sa/'),
    alternates: {
        canonical: '/',
        languages: {
            'en': '/en',
            'ar': '/ar',
        },
    },
    openGraph: {
        title: "Refad | Real Estate Investment & Development",
        description: "Refad develops destinations that elevate lifestyles across Saudi Arabia, spanning residential, mixed-use and logistics projects.",
        url: 'http://cityscape.refad.com.sa/',
        siteName: 'Refad',
        images: [
            {
                url: 'http://cityscape.refad.com.sa/images/refad-og.png',
                width: 1200,
                height: 630,
                alt: 'Refad - Real Estate Investment & Development',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Refad | Real Estate Investment & Development",
        description: "Refad develops destinations that elevate lifestyles across Saudi Arabia.",
        images: ['http://cityscape.refad.com.sa/images/refad-og.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}

/*
|--------------------------------------------------------------------------
| $fonts (updated to existing files only)
|--------------------------------------------------------------------------
*/

// English Display
const abcArizonaSerif = localFont({
    src: [{ path: "./fonts/ABCArizonaSerif-Regular.woff", weight: "400", style: "normal" }],
    variable: "--font-abc-arizona-serif",
    display: "swap",
});

// English UI
const graphikEn = localFont({
    src: [{ path: "./fonts/Graphik-Light.otf", weight: "300", style: "normal" }],
    variable: "--font-graphik-en",
    display: "swap",
});

// Arabic UI
const graphikArabic = localFont({
    src: [{ path: "./fonts/GraphikArabic-Regular.otf", weight: "400", style: "normal" }],
    variable: "--font-graphik-arabic",
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang={i18n.language || "en"} dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <body className={[abcArizonaSerif.variable, graphikEn.variable, graphikArabic.variable].join(" ") }>
        <CustomCursor />
        <AppProvider>
            <I18nProvider>
                <LangDirEffect />
                {children}
            </I18nProvider>
        </AppProvider>

        </body>
        </html>
    );
}