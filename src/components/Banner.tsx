"use client";
import Header from "@/components/Header";
import { useAppContext } from "@/context/AppContext";
export default function Banner() {
 const { selectedLanguage } = useAppContext(); const ar = selectedLanguage === "ar";
 return <section className="hero-section"><div className="hero-pattern" aria-hidden="true"/><Header/><div className="hero-copy container-x"><h1>{ar ? <>فُرص<br/>استثنائية<br/>لمستقبل واعد</> : <>Distinctive<br/>Future<br/>Opportunities</>}</h1><a className="hero-register" href="#register">{ar ? "سجل اهتمامك الآن في وجهات رفاد" : "Register your interest now"}<span aria-hidden="true">↙</span></a></div></section>;
}

