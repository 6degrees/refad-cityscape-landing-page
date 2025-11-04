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
  onSubmitAction?: (form: FormData) => void;
  className?: string;
  bgClass?: string;
  textClass?: string;
};

export default function CommunitySignupSection({
  heading = "Be Part of a Thriving Community",
  subheading = "Sign Up Today!",
  onSubmitAction,
  className = "",
  bgClass = "",
  textClass = "text-blush",
}: CommunitySignupSectionProps) {
  const { t } = useTranslation();

  /*
  |--------------------------------------------------------------------------
  | $form:handle-submit (CRM integration)
  |--------------------------------------------------------------------------
  |
  | - Collects input values from the form
  | - Maps them to Emarsys field names (inp_1, inp_2, etc.)
  | - Adds hidden fixed values for Contact Source, Sub-Source, and Opt-in
  | - Submits via GET request to Emarsys endpoint
  |
  */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const params = new URLSearchParams({
      inp_1: formData.get("firstName") as string, // First Name
      inp_2: formData.get("surname") as string,   // Last Name
      inp_3: formData.get("email") as string,     // Email
      inp_15: formData.get("phone") as string,    // Phone
      inp_9142: "+966",                           // Country Code (static)
      inp_9143: formData.get("requestType") as string, // Request Type
      inp_9141: formData.get("subject") as string || "", // Message
      inp_9144: "9",   // Contact Source (Event)
      inp_9145: "19",  // Sub-Source (Cityscape)
      optin: "y",      // Always True (Opt-in)
    });

    // Optional callback for analytics
    onSubmitAction?.(formData);

    // Redirect (CRM endpoint expects GET)
    window.location.href = `https://link.by.refad.com.sa/u/register.php?${params.toString()}`;
  };

  return (
    <section
      id="register"
      className={`w-full ${textClass} pt-12 md:pt-16 pb-12 md:pb-16 ${className}`}
    >
      <div className="container-x">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <AnimatedText delay={0.1} direction="up" duration={0.8}>
            <div
              className={`w-full max-w-6xl ${graphikArabic.className} font-light`}
            >
              <h2
                className={`${graphikArabic.className} tracking-tight text-2xl sm:text-3xl lg:text-4xl font-light`}
              >
                {heading}
              </h2>
              {subheading && (
                <p
                  className={`${graphikArabic.className} mt-2 text-lg sm:text-xl opacity-80 font-light`}
                >
                  {subheading}
                </p>
              )}

              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {/* First Name */}
                  <div>
                    <label
                      className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}
                    >
                      <span className="mr-1">*</span>
                      {t("signup.form.firstName.label")}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}
                    />
                  </div>

                  {/* Surname */}
                  <div>
                    <label
                      className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}
                    >
                      <span className="mr-1">*</span>
                      {t("signup.form.surname.label")}
                    </label>
                    <input
                      type="text"
                      name="surname"
                      required
                      className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}
                    >
                      <span className="mr-1">*</span>
                      {t("signup.form.email.label")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}
                    >
                      {t("signup.form.phone.label")}
                    </label>
                    <div className="flex items-center">
                      <span
                        className={`${graphikArabic.className} text-blush/70 mr-2`}
                      >
                        +966
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        className={`${graphikArabic.className} flex-1 bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2`}
                      />
                    </div>
                  </div>

                  {/* Request Type */}
                  <div className="sm:col-span-2">
                    <label
                      className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}
                    >
                      <span className="mr-1">*</span>
                      {t("signup.form.requestType.label")}
                    </label>
                    <select
                      name="requestType"
                      required
                      className={`${graphikArabic.className} appearance-none w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2 pr-10`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t("signup.form.requestType.options.0")}
                      </option>
                      <option value="1">Miraf District</option>
                      <option value="2">Business Hub</option>
                      <option value="3">Refad Compound</option>
                      <option value="4">Logistics Solutions</option>
                      <option value="5">Partnership & Investment</option>
                      <option value="6">Support</option>
                      <option value="7">HR Department</option>
                      <option value="8">Vendor Registration</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      className={`${graphikArabic.className} block text-sm mb-2 text-blush/70 font-light`}
                    >
                      {t("signup.form.subject.label")}
                    </label>
                    <textarea
                      name="subject"
                      rows={3}
                      className={`${graphikArabic.className} w-full bg-transparent border-0 border-b border-blush/30 focus:border-blush/70 focus:outline-none py-2 resize-none`}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className={`${graphikArabic.className} inline-flex items-center justify-center rounded-full border border-blush px-8 py-3 text-base hover:bg-blush/10 transition`}
                  >
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
