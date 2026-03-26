import { getDictionary, locales } from "@/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "ბლოგი | mdzgholi.ge",
        en: "Blog | mdzgholi.ge",
        ru: "Блог | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "წაიკითხეთ უახლესი სტატიები და სიახლეები mdzgholi.ge-ის ბლოგზე.",
        en: "Read the latest articles and news on the mdzgholi.ge blog.",
        ru: "Читайте последние статьи и новости в блоге mdzgholi.ge.",
    };
    return { 
        title: titles[lang] ?? titles.ka, 
        description: descs[lang] ?? descs.ka,
        alternates: {
            canonical: `https://mdzgholi.ge/${lang}/blog`,
            languages: {
                ka: "https://mdzgholi.ge/ka/blog",
                en: "https://mdzgholi.ge/en/blog",
                ru: "https://mdzgholi.ge/ru/blog",
                "x-default": "https://mdzgholi.ge/ka/blog",
            },
        },
    };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);

    const heading = {
        ka: "ბლოგი",
        en: "Blog",
        ru: "Блог"
    }[lang] || "ბლოგი";

    const subtitle = {
        ka: "გაეცანით ჩვენს უახლეს სტატიებს და რჩევებს",
        en: "Read our latest articles and tips",
        ru: "Читайте наши последние статьи и советы"
    }[lang] || "გაეცანით ჩვენს უახლეს სტატიებს და რჩევებს";

    const readMore = {
        ka: "სრულად წაკითხვა →",
        en: "Read full article →",
        ru: "Читать полностью →"
    }[lang];

    const posts = [
        {
            slug: "sober-driver-safety-guarantee",
            date: "26 მარტი, 2026",
            title: {
                ka: "ფხიზელი მძღოლის მომსახურება: რატომ არის ეს თქვენი უსაფრთხოების გარანტია?",
                en: "Sober Driver Service: Why It Is Your Safety Guarantee",
                ru: "Услуга трезвого водителя: Почему это гарантия вашей безопасности",
            }[lang],
            excerpt: {
                ka: "დღევანდელ დინამიკურ სამყაროში, სადაც დრო ყველაზე ძვირფასი რესურსია, კომფორტი და უსაფრთხოება პრიორიტეტული ხდება...",
                en: "In today's dynamic world, where time is the most valuable resource, comfort and safety become priorities...",
                ru: "В сегодняшнем динамичном мире, где время — самый ценный ресурс, комфорт и безопасность выходят на первый план...",
            }[lang],
            image: "/images/blog/sober-driver.jpg"
        }
    ];

    return (
        <section style={{ background: "#0a0f1e", minHeight: "calc(100vh - 56px)", padding: "70px 16px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="section-label">{d.nav.blog}</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
                        {heading}
                    </h1>
                    <p style={{ color: "var(--text-muted)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
                        {subtitle}
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                            <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
                                <div style={{ height: 200, width: "100%", backgroundColor: "#1e2439", backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
                                    <span style={{ fontSize: "0.8rem", color: "var(--yellow)", fontWeight: 600 }}>{post.date}</span>
                                    <h2 style={{ fontSize: "1.25rem", color: "#fff", margin: 0, fontWeight: 800, lineHeight: 1.3 }}>{post.title}</h2>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0, flex: 1 }}>
                                        {post.excerpt}
                                    </p>
                                    <span style={{ color: "var(--yellow)", fontWeight: 700, fontSize: "0.9rem", marginTop: 8 }}>
                                        {readMore}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
