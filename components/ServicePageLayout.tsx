import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/components/JsonLd";

const PHONE_RAW = "+995568834707";
const PHONE_DISPLAY = "+995 568 83 47 07";
const BASE = "https://mdzgholi.ge";

const ALL_SERVICES: Record<string, { slug: string; icon: string; ka: string; en: string; ru: string }> = {
    "sober-driver": { slug: "sober-driver", icon: "🍷", ka: "ფხიზელი მძღოლი", en: "Sober Driver", ru: "Трезвый водитель" },
    "personal-driver": { slug: "personal-driver", icon: "🧑‍✈️", ka: "პირადი მძღოლი", en: "Personal Driver", ru: "Личный водитель" },
    "evacuator": { slug: "evacuator", icon: "🚛", ka: "ევაკუატორი", en: "Tow Truck", ru: "Эвакуатор" },
    "car-wash": { slug: "car-wash", icon: "🚿", ka: "მანქანის რეცხვა", en: "Car Wash", ru: "Мойка машин" },
    "airport-transfer": { slug: "airport-transfer", icon: "✈️", ka: "აეროპორტის ტრანსფერი", en: "Airport Transfer", ru: "Трансфер" },
    "battery-tire": { slug: "battery-tire", icon: "🔋", ka: "აკუმულატორი / საბურავი", en: "Battery & Tire", ru: "Аккумулятор / Шины" },
};

interface ServiceContent {
    slug: string;
    icon: string;
    h1: string;
    description: string;
    benefits: string[];
    faq: { q: string; a: string }[];
}

interface ServicePageLayoutProps {
    d: Dictionary;
    lang: string;
    content: ServiceContent;
}

export function ServicePageLayout({ d, lang, content }: ServicePageLayoutProps) {
    const otherServices = Object.values(ALL_SERVICES).filter((s) => s.slug !== content.slug);
    const otherSectionTitle = lang === "ka" ? "სხვა სერვისები" : lang === "ru" ? "Другие услуги" : "Other Services";

    return (
        <>
            {/* Structured Data */}
            <JsonLd data={serviceSchema({ lang, slug: content.slug, name: content.h1, description: content.description })} />
            <JsonLd data={faqSchema(content.faq)} />
            <JsonLd data={breadcrumbSchema([
                { name: "mdzgholi.ge", url: `${BASE}/${lang}` },
                { name: content.h1, url: `${BASE}/${lang}/services/${content.slug}` },
            ])} />
            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0a0f1e 0%, #111827 100%)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    padding: "80px 16px 50px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div aria-hidden style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "rgba(245,197,24,0.05)", filter: "blur(60px)", pointerEvents: "none" }} />
                <div style={{ maxWidth: 750, margin: "0 auto", position: "relative" }}>
                    <div style={{ fontSize: "3.5rem", marginBottom: 16, lineHeight: 1 }}>{content.icon}</div>
                    <h1
                        style={{
                            fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
                            fontWeight: 900,
                            color: "#fff",
                            marginBottom: 18,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                        }}
                    >
                        {content.h1}
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 32px" }}>
                        {content.description}
                    </p>
                    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", padding: "0 8px" }}>
                        <a href={`tel:${PHONE_RAW}`} className="btn-yellow" style={{ fontSize: "0.95rem", padding: "13px 24px", minWidth: 160, justifyContent: "center" }}>
                            ☎ {d.nav.callNow}
                        </a>
                        <a
                            href={`https://wa.me/${PHONE_RAW}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ fontSize: "0.95rem", padding: "13px 24px", minWidth: 160, justifyContent: "center" }}
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section style={{ background: "#0a0f1e", padding: "60px 16px" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <span className="section-label">
                        {lang === "ka" ? "უპირატესობები" : lang === "ru" ? "Преимущества" : "Benefits"}
                    </span>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", marginBottom: 36 }}>
                        {lang === "ka" ? "რატომ mdzgholi.ge?" : lang === "ru" ? "Почему mdzgholi.ge?" : "Why mdzgholi.ge?"}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
                        {content.benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ padding: "20px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}
                            >
                                <div style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: "50%",
                                    background: "rgba(245,197,24,0.15)",
                                    border: "1px solid rgba(245,197,24,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.92rem", lineHeight: 1.6, margin: 0 }}>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inline CTA */}
            <section
                style={{
                    background: "var(--yellow)",
                    padding: "50px 20px",
                    textAlign: "center",
                }}
            >
                <div style={{ maxWidth: 650, margin: "0 auto" }}>
                    <h2 style={{ color: "#0a0f1e", fontWeight: 900, fontSize: "1.7rem", marginBottom: 18 }}>
                        {lang === "ka" ? "ახლავე დაგვიკავშირდით — 24/7 ვართ" : lang === "ru" ? "Свяжитесь с нами — работаем 24/7" : "Contact us now — available 24/7"}
                    </h2>
                    <a
                        href={`tel:${PHONE_RAW}`}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            background: "#0a0f1e",
                            color: "#fff",
                            fontWeight: 800,
                            padding: "15px 32px",
                            borderRadius: 50,
                            textDecoration: "none",
                            fontSize: "1.1rem",
                        }}
                    >
                        ☎ {PHONE_DISPLAY}
                    </a>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ background: "#080d1a", padding: "60px 16px" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <span className="section-label">FAQ</span>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.8rem", marginBottom: 36 }}>
                        {lang === "ka" ? "ხშირი კითხვები" : lang === "ru" ? "Частые вопросы" : "Frequently Asked Questions"}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {content.faq.map((item, i) => (
                            <div
                                key={i}
                                className="card"
                                style={{ padding: "22px 24px" }}
                            >
                                <h3 style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>
                                    {item.q}
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Services — Internal Cross-Linking */}
            <section style={{ background: "#080d1a", padding: "60px 16px" }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "1.5rem", marginBottom: 24, textAlign: "center" }}>
                        {otherSectionTitle}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
                        {otherServices.map((svc) => (
                            <Link
                                key={svc.slug}
                                href={`/${lang}/services/${svc.slug}`}
                                className="card"
                                style={{
                                    padding: "16px 18px",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                <span style={{ fontSize: "1.5rem" }}>{svc.icon}</span>
                                <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                                    {svc[lang as "ka" | "en" | "ru"] ?? svc.ka}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back + Final CTA */}
            <section style={{ background: "#0a0f1e", padding: "40px 16px", textAlign: "center" }}>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href={`/${lang}`} className="btn-outline" style={{ fontSize: "0.9rem", padding: "12px 24px" }}>
                        ← {d.nav.home}
                    </Link>
                    <a href={`tel:${PHONE_RAW}`} className="btn-yellow" style={{ fontSize: "0.9rem", padding: "12px 24px" }}>
                        ☎ {d.contact.callBtn}
                    </a>
                </div>
            </section>
        </>
    );
}
