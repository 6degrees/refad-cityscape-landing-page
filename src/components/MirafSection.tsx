"use client";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
export default function MirafSection() {
 const { selectedLanguage } = useAppContext(); const ar = selectedLanguage === "ar";
 const features = ar ? [["نقطة التقاء وانسيابية", "وجهة متكاملة تجمع المساحات السكنية والتجارية والمكاتب في مجتمع نابض بالحياة."], ["رفاهية صحية مستدامة", "مساحات مصممة بعناية تجمع الراحة والتفاصيل المعمارية الراقية لتثري كل يوم."], ["تجربة يومية مفعمة بالحياة", "تسوّق واعمل واسترخِ في وجهة واحدة، حيث تلتقي التجارب الجديدة بالحياة العصرية."]] : [["A Hub of Convergence", "Miraf District connects a distinctive residential haven, refined retail and a dynamic business hub — bringing modern lifestyles and exceptional opportunities together."], ["An Elevated Everyday Life", "Miraf offers refined residential spaces shaped by thoughtful design, seamlessly woven into an exceptional urban experience."], ["Without a Lifestyle Limit", "Live, work, unwind and explore in one remarkable, inspiring destination. A place to connect, built around the rhythm of modern living."]];
 const href = `https://www.refad.com.sa/${ar ? "ar" : "en"}/developments/miraf-district`;
 return <section id="miraf" className="miraf-section container-x">
 <a href={href} className="miraf-cover" aria-label={ar ? "اكتشف حي مراف" : "Discover Miraf District"}><Image src="/images/miraf-aerial.jpg" alt={ar ? "إطلالة جوية على حي مراف" : "Aerial view of Miraf District"} width={1600} height={700} priority/><span className="miraf-wordmark"><span lang="ar">مِراف</span><strong>Miraf</strong><small>District · ديستريكت</small></span></a>
 <div className="miraf-editorial">
 <div className="miraf-pool"><Image src="/images/miraf-pool.jpg" alt="Miraf poolside residences" fill sizes="(max-width: 600px) 45vw, 30vw"/></div>
 <div className="miraf-intro"><span className="eyebrow">{ar ? "وجهة متكاملة" : "Miraf District"}</span><h2>{ar ? <>استثمار في أسلوب<br/>حياة متكامل</> : <>A Lifestyle<br/>Investment</>}</h2><p>{ar ? "وجهة متكاملة تجمع السكن الراقي والتجارب الاستثنائية، وتعيد تعريف الحياة العصرية في مكان واحد يجمع العيش والعمل والتسوق والترفيه." : "Miraf District delivers an integrated lifestyle blending luxury residences, professional workplaces, vibrant retail, dining, and world-class amenities. Creating a balanced ecosystem for living, working, and thriving."}</p><a className="discover-link" href={href}>{ar ? "اكتشف حي مراف" : "Discover Miraf District"} <span aria-hidden="true">↗</span></a></div>
 <div className="miraf-building"><Image src="/images/miraf-residences.jpg" alt="Miraf residential architecture" fill sizes="(max-width: 600px) 45vw, 30vw"/></div>
 <div className="miraf-features"><p className="feature-caption">{ar ? <>مساحات تتسع فيها الحياة</> : <>It means more<br/>to be in your Miraf</>}</p><div className="feature-grid">{features.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div>
 </div></section>;
}


