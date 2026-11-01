"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { useAppContext } from "@/context/AppContext";
export default function Banner() {
 const { selectedLanguage } = useAppContext(); const ar = selectedLanguage === "ar";
 return <section className="hero-section"><div className="hero-pattern" aria-hidden="true"/><Header/><div className="hero-copy container-x"><h1><Image src={ar ? "/images/design/hero-ar.webp" : "/images/design/hero-en.svg"} width={ar ? 1100 : 651} height={ar ? 619 : 318} alt={ar ? "فُرص استثنائية لمستقبل واعد" : "Distinctive Future Opportunities"} priority/></h1><a className="hero-register" href="#register">{ar ? "سجل اهتمامك الآن في وجهات رفاد" : "Register your interest now"}<span aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M17 7 7 17M7 7v10h10" stroke="currentColor" strokeWidth="1.3"/></svg></span></a></div></section>;
}
