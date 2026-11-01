"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CountryCodePicker from "@/components/CountryCodePicker";
import AnimatedText from "@/components/AnimatedText";
import localFont from "next/font/local";

const graphikArabic = localFont({
    src: "../app/fonts/Graphik-Light.ttf",
    display: "swap",
});

type CommunitySignupSectionProps = {
    heading?: string;
    subheading?: string;
    className?: string;
    bgClass?: string;
    textClass?: string;
};

export default function CommunitySignupSection(
    {
        heading = "Be Part of a Thriving Community",
        subheading = "Sign Up Today!",
        className = "",
        textClass = "text-blush",
    }: CommunitySignupSectionProps)
{
    const { t, i18n } = useTranslation();
    const [countryCode, setCountryCode] = useState("+966");

    /*
    |--------------------------------------------------------------------------
    | $form:handle-submit (CRM integration via Next.js Server Action)
    |--------------------------------------------------------------------------
    |
    | - Collects input values from the form
    | - Maps them to Emarsys field names (inp_1, inp_2, etc.)
    | - Combines country code with phone number before sending
    | - Adds hidden fixed values for Contact Source, Sub-Source, and Opt-in
    | - Sends them through a Next.js API Route (server-side request)
    |   → Next.js then sends data to Emarsys endpoint via GET request
    |
    */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(e.currentTarget);

        // Convert all form data to URL parameters
        const params = new URLSearchParams();

        formData.forEach((value, key) => {
            params.append(key, value.toString());
        });

        try {
            await fetch(
                `https://link.by.refad.com.sa/u/register.php?${params.toString()}`,
                {
                    method: "GET",
                    mode: "no-cors", // Needed to bypass CORS when running on GitHub Pages
                }
            );

            // Note: With "no-cors" mode you can’t read the response
            alert("Your registration has been submitted successfully!");
            form.reset();
            setCountryCode("+966"); // Reset to default
        } catch (error) {
            console.error(error);
            alert("Failed to send. Please try again later.");
        }
    };

    return (
        <section id="register" className={`w-full ${textClass} pt-12 md:pt-16 pb-12 md:pb-16 ${className}`}>
            <div className="container-x">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                    <AnimatedText delay={0.1} direction="up" duration={0.8}>
                        <div className={`w-full max-w-6xl ${graphikArabic.className} font-light`}>
                            <h2 className={`${graphikArabic.className} tracking-tight text-2xl sm:text-3xl lg:text-4xl font-light`}>
                                {heading}
                            </h2>
                            {subheading && (
                                <p className={`${graphikArabic.className} mt-2 text-lg sm:text-xl opacity-80 font-light`}>
                                    {subheading}
                                </p>
                            )}

                            {/* Same HTML structure */}
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="hidden" name="CID" value="788929414" />
                                <input type="hidden" name="SID" value="" />
                                <input type="hidden" name="UID" value="" />
                                <input type="hidden" name="f" value="951" />
                                <input type="hidden" name="p" value="2" />
                                <input type="hidden" name="a" value="r" />
                                <input type="hidden" name="el" value="" />
                                <input type="hidden" name="llid" value="" />
                                <input type="hidden" name="c" value="" />
                                <input type="hidden" name="counted" value="" />
                                <input type="hidden" name="RID" value="" />
                                <input type="hidden" name="mailnow" value="" />
                                <input type="hidden" name="inp_9144" value="9" />
                                <input type="hidden" name="inp_9145" value="19" />
                                <input type="hidden" name="optin" value="y" />

                                <div className="registration-fields">
                                    <div className="registration-field">
                                        <label className="sr-only" htmlFor="registration-first">{t("signup.form.firstName.label")}</label>
                                        <input id="registration-first" type="text" name="inp_1" autoComplete="given-name" required placeholder={`* ${t("signup.form.firstName.label")}`} />
                                    </div>
                                    <div className="registration-field">
                                        <label className="sr-only" htmlFor="registration-last">{t("signup.form.surname.label")}</label>
                                        <input id="registration-last" type="text" name="inp_2" autoComplete="family-name" required placeholder={`* ${t("signup.form.surname.label")}`} />
                                    </div>
                                    <div className="registration-field">
                                        <label className="sr-only" htmlFor="registration-email">{t("signup.form.email.label")}</label>
                                        <input id="registration-email" type="email" name="inp_3" autoComplete="email" required placeholder={`* ${t("signup.form.email.label")}`} />
                                    </div>
                                    <div className="registration-phone">
                                        <CountryCodePicker value={countryCode} onChange={setCountryCode} arabic={i18n.language === "ar"} />
                                        <div className="registration-field registration-phone-number">
                                            <label className="sr-only" htmlFor="registration-phone">{t("signup.form.phone.label")}</label>
                                            <input id="registration-phone" type="tel" name="inp_15" autoComplete="tel-national" required placeholder={`* ${t("signup.form.phone.label")}`} />
                                        </div>
                                    </div>
                                    <div className="registration-field registration-request">
                                        <label className="sr-only" htmlFor="registration-request">{t("signup.form.requestType.label")}</label>
                                        <select id="registration-request" name="inp_9143" required defaultValue="">
                                            <option value="" disabled>{`* ${t("signup.form.requestType.label")}`}</option>
                                            {Array.from({length: 8}, (_, i) => <option key={i + 1} value={String(i + 1)}>{t(`signup.form.requestType.options.${i + 1}`)}</option>)}
                                        </select>
                                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="m3 8 9 9 9-9" stroke="currentColor" strokeWidth="1" /></svg>
                                    </div>
                                    <div className="registration-field registration-message">
                                        <label className="sr-only" htmlFor="registration-message">{t("signup.form.subject.label")}</label>
                                        <textarea id="registration-message" name="inp_9141" rows={3} placeholder={`* ${t("signup.form.subject.label")}`} />
                                    </div>
                                </div>

                                {/* Submit Button */}
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
