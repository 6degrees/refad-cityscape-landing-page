"use client";

import React from "react";
import {useTranslation} from "react-i18next";
import AnimatedText from "@/components/AnimatedText";
import localFont from "next/font/local";

const graphikArabic = localFont({
    src: "../app/fonts/Graphik-Light.ttf",
    display: "swap",
});

/*
|------------------------------------------------------------------------------
| $community-signup:props
|------------------------------------------------------------------------------
| Simple, stylable sign-up form section with a decorative illustration.
|
| heading       : main title text (left)
| subheading    : subtitle text (left)
| onSubmit      : optional submit handler
| className     : wrapper classes override
| bgClass       : background color class
| textClass     : text color class
|------------------------------------------------------------------------------
*/
type CommunitySignupSectionProps = {
    heading?: string;
    subheading?: string;
    onSubmitAction?: (form: FormData) => void;
    className?: string;
    bgClass?: string;
    textClass?: string;
};

/*
|------------------------------------------------------------------------------
| $community-signup:component
|------------------------------------------------------------------------------
| Main React component for the "Be Part of a Thriving Community" section.
|------------------------------------------------------------------------------
|
| - Renders a responsive layout with two columns:
|     • Left: heading text and a sign-up form
|     • Right: decorative abstract SVG shapes
| - Uses TailwindCSS utilities for spacing, alignment, and responsiveness
| - Customizable via props for heading, subheading, colors, and handlers
| - Ideal for contact or marketing signup sections on landing pages
|
*/
export default function CommunitySignupSection(
    {

        heading = "Be Part of a Thriving Community",
        subheading = "Sign Up Today!",
        onSubmitAction,
        className = "",
        bgClass = "",
        textClass = "text-blush",
    }: CommunitySignupSectionProps) {
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
    | $form:handle-submit
    |------------------------------------------------------------------------------
    | Handles form submission logic.
    |------------------------------------------------------------------------------
    |
    | - Prevents the default browser form reload
    | - Collects all input values via FormData API
    | - Invokes the optional `onSubmit` callback (if provided)
    | - Designed to be replaced or extended with real API integration
    |
    */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        onSubmitAction?.(fd);
    };

    /*
    |------------------------------------------------------------------------------
    | $component-render
    |------------------------------------------------------------------------------
    | Renders the full section layout and form elements.
    |------------------------------------------------------------------------------
    |
    | - Wrapper section uses customizable background/text colors
    | - Left column:
    |     → Displays main title, subtitle, and underlined input form
    | - Right column:
    |     → Displays low-opacity decorative SVG shapes
    | - Fully responsive (1 column on mobile, 2 columns from md breakpoint)
    | - Input fields use minimalist underlined style for elegant look
    |
    */
    return (
        <section id="register" className={`w-full ${textClass} pt-12 md:pt-16 pb-12 md:pb-16 ${className}`}>
            <div className="container-x">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                    {/* Left: Heading + Form (only column) */}
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div className={`w-full max-w-6xl ${graphikArabic.className} font-light`}>
                            <h2 className={`${graphikArabic.className} tracking-tight text-2xl sm:text-3xl lg:text-4xl font-light`}>
                                {heading}
                            </h2>
                            {subheading && (<p className={`${graphikArabic.className} mt-2 text-lg sm:text-xl opacity-80 font-light`}>{subheading}</p>)}

                            <form onSubmit={handleSubmit} className="mt-8">
                                {/* Two-column form rows (still grid inside form) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                                    {/* First Name */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>
                                            <span className="mr-1">*</span>{t("signup.form.firstName.label")}
                                        </label>
                                        <input type="text" name="firstName" placeholder="" className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`} required/>
                                    </div>

                                    {/* Surname */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>
                                            <span className="mr-1">*</span>{t("signup.form.surname.label")}
                                        </label>
                                        <input type="text" name="surname" className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`} required/>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>
                                            <span className="mr-1">*</span>{t("signup.form.email.label")}
                                        </label>
                                        <input type="email" name="email" className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`} required/>
                                    </div>

                                    {/* Phone Number */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>
                                            {t("signup.form.phone.label")}
                                        </label>
                                        <div className="flex items-center">
                                            <span className={`${graphikArabic.className} text-blush/70 mr-2`}>+966</span>
                                            <input type="tel" name="phone" className={`${graphikArabic.className} flex-1 bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}/>
                                        </div>
                                    </div>

                                    {/* Request Type */}
                                    <div className="sm:col-span-2">
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>
                                            <span className="mr-1">*</span>{t("signup.form.requestType.label")}
                                        </label>
                                        <div className="relative">
                                            <select name="requestType" className={`${graphikArabic.className} appearance-none w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2 pr-10`} defaultValue="" required>
                                                <option value="" disabled>
                                                    {t("signup.form.requestType.options.0")}
                                                </option>
                                                <option value="other">{t("signup.form.requestType.options.1")}</option>
                                            </select>
                                            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-sm text-blush/70">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M12 14.5a1 1 0 0 1-.7-.3l-5-5a1 1 0 1 1 1.4-1.4L12 12.1l4.3-4.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-.7.3z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="sm:col-span-2">
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>{t("signup.form.subject.label")}</label>
                                        <textarea name="subject" rows={3} className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2 resize-none`}/>
                                    </div>
                                </div>

                                {/* Send button */}
                                <div className="mt-8">
                                    <button type="submit" className={`${graphikArabic.className} inline-flex items-center justify-center rounded-full border border-blush px-8 py-3 text-base hover:bg-blush/10 transition`}>
                                        {t("signup.form.send.label")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </AnimatedText>
                </div>
            </div>
        </section>
    );
}
