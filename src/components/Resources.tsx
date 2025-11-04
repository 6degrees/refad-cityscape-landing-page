"use client";

import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { useTranslation } from "react-i18next";
import { useAppContext } from "@/context/AppContext";

const arizonaSerif = localFont({
    src: "../app/fonts/ABCArizonaSerif-Regular.woff",
    display: "swap",
});

const htmoshreqFont = localFont({
    src: "../app/fonts/HTMoshreq-Regular.woff2",
    display: "swap",
});

type Resource = {
    title: string;
    href?: string;
};

type ResourcesProps = {
    heading?: string;
    items?: Resource[];
    className?: string;
};

export default function Resources({
    heading,
    items,
    className = "",
}: ResourcesProps) {
    const { t } = useTranslation();
    
    const resourcesHeading = heading || t("resources.heading");
    const resourcesItems: Resource[] = items || (t("resources.items", { returnObjects: true }) as string[]).map((title: string) => ({ title }));
    return (
        <section id="resources" className={`w-full pt-8 md:pt-12 pb-12 md:pb-20 ${className}`}>
            <div className="container-x">
                <h3 className="text-lg md:text-xl lg:text-2xl text-blush font-light pb-4 md:pb-6 mb-6 md:mb-8">
                    {resourcesHeading}
                </h3>

                <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {resourcesItems.map((item: Resource, idx: number) => (
                        <Card key={`${item.title}-${idx}`} title={item.title} href={item.href} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Card({ title, href }: { title: string; href?: string }) {
    const { selectedLanguage } = useAppContext();
    const isArabic = selectedLanguage === "ar";
    
    const content = (
        <div
            className="relative p-6 md:p-8 text-blush overflow-hidden rounded-[25px]
                min-h-[180px] md:min-h-[240px] lg:min-h-[320px]
                bg-[rgba(234,214,189,0.02)] backdrop-blur-md transition-all duration-200 ease-out
                hover:backdrop-blur-lg hover:bg-[rgba(234,214,189,0.05)] hover:-translate-y-0.5"
        >
            <div className={`${isArabic ? htmoshreqFont.className : arizonaSerif.className} whitespace-pre-line ${isArabic ? 'pl-10' : 'pr-10'} text-[24px] md:text-[28px] lg:text-[32px] leading-[1.2] lg:leading-[40px] font-light`} style={{ color: "#EAD6BD" }}>
                {title}
            </div>

            <div className={`absolute bottom-4 ${isArabic ? 'left-4' : 'right-4'} opacity-80 transition-opacity duration-200 group-hover:opacity-100`}>
                <Image src="/icons/download-icon.png" alt="Download" width={24} height={24} className="w-6 h-6" />
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="group block hover:opacity-95 transition-opacity">
                {content}
            </Link>
        );
    }

    return content;
}


