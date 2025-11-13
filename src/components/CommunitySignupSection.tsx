"use client";

import React from "react";
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();

    /*
    |--------------------------------------------------------------------------
    | $form:handle-submit (CRM integration via Next.js Server Action)
    |--------------------------------------------------------------------------
    |
    | - Collects input values from the form
    | - Maps them to Emarsys field names (inp_1, inp_2, etc.)
    | - Adds hidden fixed values for Contact Source, Sub-Source, and Opt-in
    | - Sends them through a Next.js API Route (server-side request)
    |   → Next.js then sends data to Emarsys endpoint via GET request
    |
    */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const params = new URLSearchParams();

        formData.forEach((value, key) => {
            params.append(key, value.toString());
        });

        try {
            const response = await fetch(
                `https://link.by.refad.com.sa/u/register.php?${params.toString()}`,
                {
                    method: "GET",
                    mode: "no-cors",
                }
            );

            // Note: With "no-cors", you cannot read the response content
            alert("Your registration has been submitted successfully!");
            form.reset();
        } catch (error) {
            console.error(error);
            alert("Failed to submit. Please try again later.");
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

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                                    {/* First Name */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}><span className="mr-1">*</span>{t("signup.form.firstName.label")}</label>
                                        <input type="text" name="inp_1" required className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}/>
                                    </div>

                                    {/* Surname */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}><span className="mr-1">*</span>{t("signup.form.surname.label")}</label>
                                        <input type="text" name="inp_2" required className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}/>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}><span className="mr-1">*</span>{t("signup.form.email.label")}</label>
                                        <input type="email" name="inp_3" required className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}/>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>{t("signup.form.phone.label")}</label>
                                        <div className="flex items-center">
                                            <span className={`${graphikArabic.className} text-blush/70 mr-2`}>+966</span>
                                            <input type="tel" name="inp_15" className={`${graphikArabic.className} flex-1 bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}/>
                                        </div>
                                    </div>

                                    {/* Request Type */}
                                    <div>
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}><span className="mr-1">*</span>{t("signup.form.requestType.label")}</label>
                                        <select name="inp_9143" required className={`${graphikArabic.className} appearance-none w-full text-[#ddd3c1] border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2 pr-10`} defaultValue="">
                                            <option value="" disabled>{t("signup.form.requestType.options.0")}</option>
                                            <option value="1">{t("signup.form.requestType.options.1")}</option>
                                            <option value="2">{t("signup.form.requestType.options.2")}</option>
                                            <option value="3">{t("signup.form.requestType.options.3")}</option>
                                            <option value="4">{t("signup.form.requestType.options.4")}</option>
                                            <option value="5">{t("signup.form.requestType.options.5")}</option>
                                            <option value="6">{t("signup.form.requestType.options.6")}</option>
                                            <option value="7">{t("signup.form.requestType.options.7")}</option>
                                            <option value="8">{t("signup.form.requestType.options.8")}</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="sm:col-span-2">
                                        <label className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}>{t("signup.form.subject.label")}</label>
                                        <textarea name="inp_9141" rows={3} className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2 resize-none`}/>
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
