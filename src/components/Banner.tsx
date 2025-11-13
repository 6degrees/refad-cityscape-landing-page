"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import localFont from "next/font/local";
import { useAppContext } from "@/context/AppContext";

const heroEnFont = localFont({
    src: "../app/fonts/ABCArizonaSerif-Regular.woff",
    display: "swap",
});

const heroArFont = localFont({
    src: "../app/fonts/HTMoshreq-Regular.woff2",
    display: "swap",
});

export default function Banner() {
    const { t, i18n } = useTranslation();
    const { selectedLanguage } = useAppContext();
    const isArabic = selectedLanguage === "ar" || i18n?.language === "ar";

    return (
        <section className="relative min-h-[100svh] overflow-visible bg-[#1a0d0d]">
            {/* Background image */}
            <Image
                src="/icons/hero.webp"
                alt="Hero background"
                fill
                sizes="100vw"
                className="object-cover z-0"
                style={{ objectPosition: "center 85%", willChange: "transform", transform: "translateZ(0)" }}
                priority
                aria-hidden="true"
            />

            {/* Gradient overlay on top of image */}
            <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(26,13,13,0.6) 0%, rgba(26,13,13,0.45) 55%, rgba(26,13,13,0.35) 85%, rgba(26,13,13,0.6) 100%)",
                }}
            />

            {/* Decorative stars overlay (top-right for English, top-left for Arabic) aligned with navbar/container padding */}
            <div className="absolute inset-0 z-[15] pointer-events-none">
                <div className="container-x h-full relative">
                    <div 
                        className={`absolute w-2/3 md:w-1/2 h-[calc(100%+80px)] top-[90px] md:top-[100px] ${isArabic ? 'stars-container-ar' : 'stars-container-en'}`}
                    >
                        <Image
                            src="/images/starts.svg"
                            alt=""
                            fill
                            className={`object-contain`}
                            style={isArabic ? { 
                                transform: "scaleX(-1)",
                                objectPosition: "100% center",
                            } : {
                                objectPosition: "100% center",
                            }}
                            priority
                            sizes="(min-width: 1024px) 50vw, 60vw"
                        />
                    </div>
                </div>
            </div>

            {/* Header on top of overlay */}
            <div className="absolute inset-x-0 top-0 z-20">
                <Header />
            </div>

            {/* Content on top of overlay */}
            <div className="absolute inset-x-0 z-20 bottom-[28%] md:bottom-[30%] lg:bottom-[32%]">
                <div className="container-x text-blush">
                    <div className="w-full md:max-w-5xl">
                        <AnimatedText delay={0.2} direction="up" duration={1}>
                            <Image
                                src="/images/hero-text.webp"
                                alt="Towards Elevated Living"
                                width={1600}
                                height={600}
                                priority
                                className="w-full h-auto no-hover-scale"
                                sizes="(min-width: 1024px) 900px, 80vw"
                            />
                        </AnimatedText>
                    </div>

                    <AnimatedText delay={0.6} direction="up" duration={1}>
                        <div className={`${isArabic ? heroArFont.className : heroEnFont.className} flex flex-col gap-2 mt-4 md:mt-6`}>
                            <span className="text-2xl md:text-3xl lg:text-4xl font-light">
                                {t("hero.cta.line1")}
                            </span>
                            <span className="text-2xl md:text-3xl lg:text-4xl font-light">
                                {t("hero.cta.line2")}
                            </span>
                            <Link href="/#register" aria-label="Scroll to registration form" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mt-1">
                                <Image src="/icons/arrow.svg" alt="Scroll to registration form" width={36} height={36} className="w-8 h-8 md:w-9 md:h-9" />
                            </Link>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </section>
    );
}

