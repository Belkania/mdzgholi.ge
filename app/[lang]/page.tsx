import type { Metadata } from "next";
import { getDictionary, locales } from "@/dictionaries";
import Link from "next/link";
import { JsonLd, localBusinessSchema, breadcrumbSchema } from "@/components/JsonLd";

const PHONE_WA = "995568834707";
const PHONE_TEL = "+995568834707";
const PHONE_DISPLAY = "+995 568 83 47 07";
const BASE = "https://www.mdzgholi.ge";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const d = getDictionary(lang);
    const titles: Record<string, string> = {
        ka: "ფხიზელი მძღოლი გამოძახებით | mdzgholi.ge",
        en: "Sober Driver Tbilisi 24/7 | mdzgholi.ge",
        ru: "Трезвый водитель Тбилиси 24/7 | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "ფხიზელი მძღოლი გამოძახებით 24/7 თბილისში — mdzgholi.ge. მძღოლი მოვა 15-20 წუთში თქვენი მანქანით. ☎ 568 83 47 07",
        en: "Sober driver in Tbilisi — mdzgholi.ge. Professional driver arrives in 15-20 min, drives your car. 24/7. Call: +995 568 83 47 07",
        ru: "Трезвый водитель в Тбилиси — mdzgholi.ge. Приезд за 15-20 мин, отвезем на вашем авто. 24/7. Звоните: +995 568 83 47 07",
    };
    const canonical = lang === "ka" ? "https://www.mdzgholi.ge/" : `https://www.mdzgholi.ge/${lang}`;

    return {
        title: titles[lang] ?? titles.ka,
        description: descs[lang] ?? descs.ka,
        keywords: d.meta.keywords,
        robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
        alternates: {
            canonical,
            languages: {
                ka: "https://www.mdzgholi.ge/",
                en: "https://www.mdzgholi.ge/en",
                ru: "https://www.mdzgholi.ge/ru",
                "x-default": "https://www.mdzgholi.ge/",
            },
        },
        openGraph: {
            title: titles[lang] ?? titles.ka,
            description: descs[lang] ?? descs.ka,
            url: canonical,
            siteName: "mdzgholi.ge",
            locale: lang === "ka" ? "ka_GE" : lang === "ru" ? "ru_GE" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: titles[lang] ?? titles.ka,
            description: descs[lang] ?? descs.ka,
        },
    };
}

export default async function HomePage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const d = getDictionary(lang);

    return (
        <>
            {/* Structured Data */}
            <JsonLd data={localBusinessSchema(lang)} />
            <JsonLd data={breadcrumbSchema([
                { name: "mdzgholi.ge", url: lang === "ka" ? BASE : `${BASE}/${lang}` },
            ])} />
            {/* ─── HERO ─── */}
            <section
                id="top"
                style={{
                    minHeight: "calc(100dvh - 56px)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                }}
                className="hero-gradient"
            >
                {/* Background decoration */}
                <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
                    <div style={{ position: "absolute", top: "10%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "rgba(26,86,219,0.12)", filter: "blur(80px)" }} />
                    <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 350, height: 350, borderRadius: "50%", background: "rgba(245,197,24,0.06)", filter: "blur(60px)" }} />
                    {/* Grid pattern */}
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                </div>

                {/* Top Gap: Naturally fills distance from Header to Main Content. We center the phone inside it. */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "clamp(42px, 6vh, 80px)", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "1.15rem", textDecoration: "none" }}>
                            {PHONE_DISPLAY}
                        </a>
                    </div>
                </div>

                {/* Main Content Box */}
                <div style={{ width: "100%", maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

                    {/* Badge */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.25)", borderRadius: 50, padding: "6px 18px", marginBottom: 28 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px #4ade80" }} />
                        <span style={{ color: "var(--yellow)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.05em" }}>{d.hero.badge}</span>
                    </div>

                    {/* H1 — SEO optimized */}
                    <h1
                        style={{
                            fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
                            fontWeight: 900,
                            lineHeight: 1.15,
                            color: "#fff",
                            marginBottom: 22,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        {d.hero.h1}
                    </h1>

                    <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto 36px", lineHeight: 1.7 }}>
                        {d.hero.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 40, padding: "0 8px" }}>
                        <a
                            href={`tel:${PHONE_TEL}`}
                            className="btn-yellow"
                            style={{ fontSize: "1.05rem", padding: "15px 32px" }}
                        >
                            {d.hero.cta}
                        </a>
                        <a
                            href={`https://wa.me/${PHONE_WA}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ fontSize: "1.05rem", padding: "15px 32px" }}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {d.hero.ctaWa}
                        </a>
                    </div>

                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", marginTop: 10 }}>{d.hero.trust}</p>
                </div>


                {/* Bottom spacer to vertically balance the hero section correctly */}
                <div style={{ flex: 1.5, minHeight: "clamp(20px, 8vh, 80px)" }} />

                {/* Wave */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
                    <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: 60, display: "block" }}>
                        <path d="M0 60H1440V20C1100 55 700 0 360 25C200 36 80 10 0 15V60Z" fill="#0a0f1e" />
                    </svg>
                </div>
            </section>

            {/* ─── HOW IT WORKS ─── */}
            <section id="how-it-works" style={{ background: "#0a0f1e", padding: "70px 16px" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <span className="section-label">{d.howItWorks.label}</span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", marginBottom: 60 }}>
                        {d.howItWorks.heading}
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 30, position: "relative" }}>
                        {d.howItWorks.steps.map((step, i) => (
                            <div key={step.num} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
                                {/* Step circle */}
                                <div style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: "50%",
                                    background: i === 1 ? "var(--yellow)" : "rgba(245,197,24,0.1)",
                                    border: i !== 1 ? "2px solid rgba(245,197,24,0.3)" : "none",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                    <span style={{ color: i === 1 ? "#0a0f1e" : "rgba(245,197,24,0.6)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Step</span>
                                    <span style={{ color: i === 1 ? "#0a0f1e" : "var(--yellow)", fontWeight: 900, fontSize: "1.5rem", lineHeight: 1 }}>{step.num}</span>
                                </div>
                                <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>{step.title}</h3>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ─── WHY MDZGHOLI ─── */}
            <section id="why-us" style={{ background: "#080d1a", padding: "70px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <span className="section-label">{d.why.label}</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", marginBottom: 0 }}>
                            {d.why.heading}
                        </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                        {d.why.items.map((item) => (
                            <div
                                key={item.title}
                                className="card"
                                style={{ padding: "24px 20px", display: "flex", gap: 16, alignItems: "flex-start" }}
                            >
                                <div style={{ fontSize: "1.8rem", lineHeight: 1, flexShrink: 0 }}>{item.icon}</div>
                                <div>
                                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", margin: "0 0 6px" }}>{item.title}</h3>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* ─── CALL TO ACTION STRIP ─── */}
            <section
                style={{
                    background: "linear-gradient(135deg, #f5c518 0%, #d4a800 100%)",
                    padding: "48px 16px",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 700, margin: "0 auto" }}>
                    <h2 style={{ color: "#0a0f1e", fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", marginBottom: 12 }}>
                        {lang === "ka" ? "24/7 ხელმისაწვდომი — დაგვირეკეთ ახლავე" :
                            lang === "ru" ? "Доступны 24/7 — Позвоните прямо сейчас" :
                                "Available 24/7 — Call Us Now"}
                    </h2>
                    <a
                        href={`tel:${PHONE_TEL}`}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            background: "#0a0f1e",
                            color: "#fff",
                            fontWeight: 800,
                            padding: "16px 36px",
                            borderRadius: 50,
                            textDecoration: "none",
                            fontSize: "1.15rem",
                            boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
                            transition: "transform 0.2s",
                        }}
                    >
                        ☎ {lang === "ka" ? "მძღოლის გამოძახება" : lang === "ru" ? "Вызвать водителя" : "Call a Driver"}
                    </a>
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section id="services" style={{ background: "#0a0f1e", padding: "70px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <span className="section-label">{d.services.label}</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
                            {d.services.heading}
                        </h2>
                        <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                            {d.services.subtitle}
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                        {d.services.items.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={lang === "ka" ? `/services/${svc.slug}` : `/${lang}/services/${svc.slug}`}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    className="card"
                                    style={{ padding: "28px 24px", height: "100%", display: "flex", flexDirection: "column", gap: 12, cursor: "pointer" }}
                                >
                                    <div style={{ fontSize: "2.5rem", lineHeight: 1 }}>{svc.icon}</div>
                                    <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem", margin: 0 }}>{svc.title}</h3>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0, flex: 1 }}>{svc.desc}</p>
                                    <span style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "0.85rem" }}>{d.services.readMore}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── SEO TEXT BLOCK ─── */}
            <section style={{ background: "#080d1a", padding: "60px 16px" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    {lang === "ka" && (
                        <>
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2rem)", marginBottom: 20 }}>
                                ფხიზელი მძღოლი გამოძახებით — mdzgholi.ge
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 16, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>მძღოლის გამოძახება</strong> — ეს არის სიმშვიდე, უსაფრთხოება და კომფორტი ერთ სერვისში.
                                mdzgholi.ge გთავაზობთ <strong style={{ color: "#fff" }}>ფხიზელი მძღოლის</strong> მომსახურებას 24 საათის განმავლობაში, კვირის 7 დღე.
                                ჩვენი <strong style={{ color: "#fff" }}>მძღოლი გამოძახებით</strong> ჩამოდის 15–20 წუთში, ჯდება თქვენს საჭესთან და საკუთარი ავტომობილით უსაფრთხოდ მიგიყვანთ სახლამდე.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 40, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>ფხიზელი მძღოლის გამოძახება</strong> განსაკუთრებით მოსახერხებელია სუფრის, წვეულების, კორპორატიული
                                საღამოს ან უბრალოდ მძიმე სამუშაო დღის შემდეგ, როდესაც გადაღლილობის გამო საჭესთან დაჯდომა სახიფათოა. <strong style={{ color: "#fff" }}>მძღოლის გამოძახებისთვის</strong> დაგვირეკეთ +995 568 83 47 07-ზე
                                ან მოგვწერეთ WhatsApp-ში — და უახლოესი თავისუფალი ეკიპაჟი მაშინვე გამოემართება თქვენკენ.
                            </p>

                            {/* Battery Charging SEO Block */}
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,1.85rem)", marginBottom: 16 }}>
                                აკუმულატორის დატენვა და დამჯდარი აკუმულატორის დამუხტვა თბილისში 24/7
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                mdzgholi.ge-ის ერთ-ერთი ყველაზე მოთხოვნადი სერვისია{" "}
                                <Link href="/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    <strong>აკუმულატორის დატენვა</strong>
                                </Link>
                                {" "}— <strong style={{ color: "#fff" }}>დამჯდარი აკუმულატორის დამუხტვა</strong> ადგილზევე, ძვირადღირებული ევაკუატორის გარეშე.
                                არ იქოქება ძრავი? არ რეაგირებს სტარტერი? ჩვენი ტექნიკური დახმარება ჩამოდის{" "}
                                <strong style={{ color: "#fff" }}>15-20 წუთში</strong> და პროფესიონალური ციფრული ბუსტერით (Jump Starter) ადგილზევე
                                დაქოქავს თქვენს ავტომობილს — ყოველგვარი ზიანის გარეშე თანამედროვე ელექტრონიკისთვის.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>აკუმულატორის დამუხტვა</strong> და <strong style={{ color: "#fff" }}>დატენვა გამოძახებით</strong> ხელმისაწვდომია
                                თბილისის ყველა უბანში: ვაკე, საბურთალო, დიდუბე, გლდანი, ისანი, ნაძალადევი, სამგორი, ჩუღურეთი — 24 საათი, კვირის 7 დღე.
                                ადგილზევე ვამოწმებთ <strong style={{ color: "#fff" }}>გენერატორს (დინამოს)</strong> და <strong style={{ color: "#fff" }}>აკუმულატორის რეალურ რესურსს</strong>,
                                საჭიროების შემთხვევაში კი ახალ, გარანტიან ბატარეას მოგიტანთ და დაგიყენებთ.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.97rem" }}>
                                მოძველებული მეთოდი — ე.წ. <strong style={{ color: "#fff" }}>პერემიჩკა (კაბელები სხვა მანქანიდან)</strong> თანამედროვე ავტომობილებისთვის სახიფათოა: ძაბვის ნახტომმა შესაძლოა
                                დააზიანოს ძვირადღირებული ბორტ-კომპიუტერი და ელექტრონული მოდულები. mdzgholi.ge-ის სპეციალისტები იყენებენ{" "}
                                <strong style={{ color: "#fff" }}>ინტელექტუალურ ბუსტერებს ძაბვის დაცვით</strong> — 100%-ით უსაფრთხო{" "}
                                <Link href="/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    აკუმულატორის დატენვა
                                </Link>{" "}
                                თბილისში.
                            </p>

                            {/* Jump Start / Daqoqva SEO Block */}
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,1.85rem)", marginBottom: 16, marginTop: 40 }}>
                                მანქანის დაქოქვა გამოძახებით — ბუსტერით, ადგილზე, 24/7
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>მანქანის დაქოქვა გამოძახებით</strong> — ეს არის სწრაფი და მოსახერხებელი გამოსავალი, როდესაც
                                ავტომობილი მოულოდნელად უარს ამბობს დაქოქვაზე.{" "}
                                <Link href="/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    <strong>ავტომობილის დაქოქვა ადგილზე</strong>
                                </Link>
                                {" "}ხდება ავტონომიური ბუსტერის (Jump Starter) გამოყენებით — რაც გამორიცხავს მეზობლის ან გამვლელის ძებნის საჭიროებას.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>მანქანის დაქოქვა ავტომატიკა</strong> — ავტომატური გადაცემათა კოლოფის მქონე ავტომობილების
                                დაქოქვა განსაკუთრებულ სიფრთხილეს მოითხოვს. ჩვენმა სპეციალისტებმა იციან,
                                რომ <strong style={{ color: "#fff" }}>ავტომატიკის მანქანის პერემიჩკა</strong> არაპროფესიონალური კაბელებით გაუმართლებელია —
                                ამიტომ ვიყენებთ მხოლოდ სერტიფიცირებულ ბუსტერს, სტაბილური იმპულსური დენის მიწოდებით.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>პერემიჩკა გამოძახებით</strong> თუ <strong style={{ color: "#fff" }}>ბუსტერით მანქანის დაქოქვა</strong> —
                                ნებისმიერ სიტუაციაში, mdzgholi.ge-ის ეკიპაჟი 15-20 წუთში მოვა თქვენს მისამართზე.
                                სერვისი ხელმისაწვდომია თბილისის ნებისმიერ ლოკაციაზე, 24/7 რეჟიმში.{" "}
                                <Link href="/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    გამოიძახეთ სპეციალისტი →
                                </Link>
                            </p>
                        </>
                    )}

                    {lang === "en" && (
                        <>
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2rem)", marginBottom: 20 }}>
                                Professional Designated Sober Driver Service in Tbilisi — mdzgholi.ge
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 16, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>Hiring a sober driver in Tbilisi</strong> offers maximum safety, compliance, and convenience in one seamless service.
                                mdzgholi.ge operates 24 hours a day, 7 days a week, dispatching vetted, experienced chauffeurs across the capital.
                                Our <strong style={{ color: "#fff" }}>designated driver on call</strong> reaches your venue or restaurant within 15–20 minutes, takes the wheel of your own car, and navigates you safely home with zero stress.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 40, fontSize: "0.97rem" }}>
                                In Georgia, traffic laws impose strict penalties and immediate license revocation for driving under the influence.
                                Calling <strong style={{ color: "#fff" }}>mdzgholi.ge sober drivers</strong> eliminates all legal risks, preserves your safety, and leaves your car parked securely in your driveway.
                                Call us anytime at <strong style={{ color: "#fff" }}>+995 568 83 47 07</strong> or message our 24/7 WhatsApp dispatch for an immediate fixed-rate booking.
                            </p>

                            {/* Battery Charging SEO Block */}
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,1.85rem)", marginBottom: 16 }}>
                                Mobile Car Battery Charging & Jump Start Service in Tbilisi 24/7
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                Stranded with an unresponsive starter or drained battery?{" "}
                                <Link href="/en/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    <strong>Car battery charging and jump starting in Tbilisi</strong>
                                </Link>
                                {" "}is one of our flagship roadside assistance offerings.
                                There is no need to hire an expensive tow truck or flag down passing vehicles for jumper cables.
                                Our mobile technician arrives at your parking spot in <strong style={{ color: "#fff" }}>15–20 minutes</strong> equipped with commercial-grade digital jump boosters.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                We serve all districts of Tbilisi: Vake, Saburtalo, Didube, Gldani, Isani, Nadzaladevi, Samgori, and suburban areas round the clock.
                                On arrival, we safely jump start petrol, diesel, and hybrid 12V auxiliary systems, test alternator charging output, and diagnose battery health on-site.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.97rem" }}>
                                Traditional jumper cables can cause extreme voltage spikes that destroy sensitive engine control units (ECU).
                                mdzgholi.ge uses intelligent boosters with reverse polarity and anti-surge protection — making our{" "}
                                <Link href="/en/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    on-demand battery jump start service
                                </Link>{" "}
                                100% safe for all modern luxury and automatic vehicles.
                            </p>

                            {/* Additional Service Overview */}
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,1.85rem)", marginBottom: 16, marginTop: 40 }}>
                                24/7 Roadside Assistance, Tow Trucks & Airport Transfers Across Georgia
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                Beyond sober driver bookings, mdzgholi.ge delivers end-to-end automotive mobility solutions:
                                emergency <Link href="/en/services/evacuator" style={{ color: "var(--yellow)", fontWeight: 700 }}>tow truck dispatch</Link>,
                                mobile <Link href="/en/services/tire-change" style={{ color: "var(--yellow)", fontWeight: 700 }}>tire puncture repair</Link>,
                                door-to-door <Link href="/en/services/car-wash" style={{ color: "var(--yellow)", fontWeight: 700 }}>car wash pickup</Link>,
                                and punctual <Link href="/en/services/airport-transfer" style={{ color: "var(--yellow)", fontWeight: 700 }}>airport transfers</Link> to Tbilisi, Kutaisi, and Batumi international terminals.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.97rem" }}>
                                Every quote is agreed upfront with clear, transparent pricing.
                                Enjoy complete peace of mind on Georgian roads with our English-speaking 24/7 support.{" "}
                                <a href="tel:+995568834707" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    Call our dispatcher now →
                                </a>
                            </p>
                        </>
                    )}

                    {lang === "ru" && (
                        <>
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.5rem,3vw,2rem)", marginBottom: 20 }}>
                                Профессиональная служба «Трезвый водитель» в Тбилиси — mdzgholi.ge
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 16, fontSize: "0.97rem" }}>
                                <strong style={{ color: "#fff" }}>Вызов трезвого водителя в Тбилиси</strong> — это максимальная безопасность, комфорт и экономия времени.
                                Служба mdzgholi.ge работает 24 часа в сутки, 7 дней в неделю, предоставляя опытных и проверенных водителей по всему городу.
                                Наш водитель прибудет по вашему адресу в ресторан, гости или офис за <strong style={{ color: "#fff" }}>15–20 минут</strong>, сядет за руль вашего автомобиля и аккуратно доставит вас домой.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 40, fontSize: "0.97rem" }}>
                                Законодательство Грузии предусматривает суровые штрафы и лишение прав за вождение в нетрезвом виде.
                                <strong style={{ color: "#fff" }}>Услуга трезвого водителя от mdzgholi.ge</strong> исключает любые риски, гарантирует бережное отношение к авто и оставляет вашу машину припаркованной во дворе.
                                Звоните круглосуточно по телефону <strong style={{ color: "#fff" }}>+995 568 83 47 07</strong> или пишите в WhatsApp для мгновенного расчета стоимости.
                            </p>

                            {/* Battery Charging SEO Block */}
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,1.85rem)", marginBottom: 16 }}>
                                Зарядка аккумулятора и запуск авто бустером в Тбилиси 24/7
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                Машина не заводится, щелкает стартер или полностью сел аккумулятор?{" "}
                                <Link href="/ru/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    <strong>Выездная зарядка аккумулятора и прикуривание бустером в Тбилиси</strong>
                                </Link>
                                {" "}— одна из ключевых услуг нашей службы техпомощи.
                                Вам не придется вызывать дорогостоящий эвакуатор или просить прохожих «прикурить» проводами.
                                Наш мастер прибудет за <strong style={{ color: "#fff" }}>15–20 минут</strong> с профессиональным автономным пусковым устройством.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                Мы обслуживаем все районы Тбилиси: Ваке, Сабуртало, Дидубе, Глдани, Исани, Надзаладеви, Самгори, Чугурети и пригород.
                                Заводим бензиновые моторы, дизели большого объема, а также автомобили с АКПП и гибриды, проверяя на месте работу генератора.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.97rem" }}>
                                Кустарное прикуривание обычными проводами опасно для современных машин из-за скачков напряжения, способных сжечь ЭБУ.
                                Мы применяем сертифицированные бустеры со встроенной защитой, гарантируя 100% безопасность электроники.{" "}
                                <Link href="/ru/services/battery-charging" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    Заказать запуск авто в Тбилиси →
                                </Link>
                            </p>

                            {/* Additional Service Overview */}
                            <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.4rem,2.8vw,1.85rem)", marginBottom: 16, marginTop: 40 }}>
                                Эвакуатор, мобильный шиномонтаж и трансферы по всей Грузии
                            </h2>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, marginBottom: 14, fontSize: "0.97rem" }}>
                                Помимо услуг водителей, mdzgholi.ge предоставляет комплексную дорожную помощь:
                                круглосуточный <Link href="/ru/services/evacuator" style={{ color: "var(--yellow)", fontWeight: 700 }}>эвакуатор</Link>,
                                мобильная <Link href="/ru/services/tire-change" style={{ color: "var(--yellow)", fontWeight: 700 }}>замена и ремонт колес на месте</Link>,
                                мойка авто с <Link href="/ru/services/car-wash" style={{ color: "var(--yellow)", fontWeight: 700 }}>забором и доставкой</Link>,
                                и комфортные <Link href="/ru/services/airport-transfer" style={{ color: "var(--yellow)", fontWeight: 700 }}>трансферы в аэропорты Тбилиси, Кутаиси и Батуми</Link>.
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.9, fontSize: "0.97rem" }}>
                                Все тарифы фиксируются оператором до выезда экипажа — никаких скрытых доплат за пробки или ночное время.{" "}
                                <a href="tel:+995568834707" style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "underline" }}>
                                    Связаться с диспетчером 24/7 →
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </section>


            {/* ─── CONTACT ─── */}
            <section id="contact" style={{ background: "#0a0f1e", padding: "70px 16px" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 56 }}>
                        <span className="section-label">{d.contact.label}</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "#fff", marginBottom: 0 }}>
                            {d.contact.heading}
                        </h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
                        {/* Contact info */}
                        <div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 22, marginBottom: 36 }}>
                                {[
                                    { icon: "📞", label: d.contact.phone, href: `tel:${PHONE_TEL}`, highlight: true },
                                    { icon: "📧", label: d.contact.email, href: `mailto:${d.contact.email}`, highlight: false },
                                    { icon: "📍", label: d.contact.address, href: "#", highlight: false },
                                    { icon: "🕐", label: d.contact.hours, href: "#", highlight: false },
                                ].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 14,
                                            textDecoration: "none",
                                            color: item.highlight ? "var(--yellow)" : "rgba(255,255,255,0.75)",
                                            fontWeight: item.highlight ? 800 : 500,
                                            fontSize: item.highlight ? "1.15rem" : "0.95rem",
                                        }}
                                    >
                                        <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
                                        {item.label}
                                    </a>
                                ))}
                            </div>

                            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                <a href={`tel:${PHONE_TEL}`} className="btn-yellow" style={{ flex: 1, justifyContent: "center" }}>
                                    {d.contact.callBtn}
                                </a>
                                <a
                                    href={`https://wa.me/${PHONE_WA}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-blue"
                                    style={{ flex: 1, justifyContent: "center" }}
                                >
                                    💬 {d.contact.waBtn}
                                </a>
                            </div>

                            {/* Map placeholder */}
                            <div
                                style={{
                                    marginTop: 28,
                                    height: 180,
                                    background: "var(--bg-surface)",
                                    border: "1px solid var(--border)",
                                    borderRadius: 12,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-muted)",
                                    fontSize: "0.9rem",
                                    gap: 8,
                                }}
                            >
                                📍 Tbilisi, Georgia — Google Maps
                            </div>
                        </div>

                        {/* Contact form */}
                        <div
                            className="card"
                            style={{ padding: "32px 28px" }}
                        >
                            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                        <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 600 }}>{d.contact.formName}</label>
                                        <input type="text" className="input-field" placeholder={d.contact.formName} />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                        <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 600 }}>{d.contact.formPhone}</label>
                                        <input type="tel" className="input-field" placeholder="+995 5xx xxx xxx" />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                    <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 600 }}>{d.contact.formMsg}</label>
                                    <textarea rows={5} className="input-field" placeholder={d.contact.formMsg} style={{ resize: "none" }} />
                                </div>
                                <button type="submit" className="btn-yellow" style={{ justifyContent: "center", fontSize: "0.95rem" }}>
                                    {d.contact.formSubmit}
                                </button>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", textAlign: "center", margin: 0 }}>{d.contact.formNote}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
