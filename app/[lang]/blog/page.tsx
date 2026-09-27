import { getDictionary, locales } from "@/dictionaries";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles: Record<string, string> = {
        ka: "ბლოგი — სასარგებლო რჩევები | mdzgholi.ge",
        en: "Blog — Tips & Driver Insights | mdzgholi.ge",
        ru: "Блог — Полезные советы и статьи | mdzgholi.ge",
    };
    const descs: Record<string, string> = {
        ka: "გაეცანით mdzgholi.ge-ის ბლოგს: სასარგებლო რჩევები, ფხიზელი მძღოლის გამოძახების წესები, უსაფრთხოება და ტარიფები საქართველოში.",
        en: "Explore mdzgholi.ge blog: helpful tips, sober driver booking rules, safety guidelines, and up-to-date pricing in Georgia.",
        ru: "Читайте блог mdzgholi.ge: полезные советы, правила вызова трезвого водителя, безопасность и актуальные тарифы в Грузии.",
    };
    return { 
        title: titles[lang] ?? titles.ka, 
        description: descs[lang] ?? descs.ka,
        alternates: {
            canonical: lang === "ka"
                ? "https://www.mdzgholi.ge/blog"
                : `https://www.mdzgholi.ge/${lang}/blog`,
            languages: {
                ka: "https://www.mdzgholi.ge/blog",
                en: "https://www.mdzgholi.ge/en/blog",
                ru: "https://www.mdzgholi.ge/ru/blog",
                "x-default": "https://www.mdzgholi.ge/blog",
            },
        },
    };
}

export default async function BlogIndexPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const d = getDictionary(lang);
    const getPath = (p: string) => (lang === "ka" ? p : `/${lang}${p}`);

    const heading = {
        ka: "ბლოგი და რჩევები",
        en: "Blog & Helpful Guides",
        ru: "Блог и советы"
    }[lang] || "ბლოგი და რჩევები";

    const subtitle = {
        ka: "გაეცანით ჩვენს უახლეს სტატიებს, რჩევებს ავტომობილის უსაფრთხო მართვისა და მძღოლის სერვისების შესახებ",
        en: "Explore our latest articles, practical insights on safe driving, and professional driver booking in Georgia",
        ru: "Читайте наши свежие статьи, советы по безопасному вождению и услугам профессиональных водителей в Грузии"
    }[lang] || "გაეცანით ჩვენს უახლეს სტატიებს და რჩევებს";

    const readMore = {
        ka: "სრულად წაკითხვა →",
        en: "Read full article →",
        ru: "Читать полностью →"
    }[lang];

    const posts = [
        {
            slug: "when-to-call-sober-driver",
            date: "16 სექტემბერი, 2026",
            title: {
                ka: "როდის არის საჭირო ფხიზელი მძღოლი? სიტუაციები და ფასები",
                en: "When to Hire a Sober Driver? Situations & Pricing",
                ru: "Когда нужен трезвый водитель? Ситуации и цены",
            }[lang],
            excerpt: {
                ka: "რა სიტუაციებშია ეფექტური ფხიზელი მძღოლის გამოძახება? რესტორანი, წვეულება, გადაღლილობა. საწყისი ფასი 40 ლარიდან შეთანხმებით...",
                en: "In what situations do you need a sober driver? Restaurants, parties, fatigue. Starting price from 40 GEL by agreement...",
                ru: "В каких ситуациях нужен трезвый водитель? Рестораны, праздники, усталость. Начальная цена от 40 лари по договоренности...",
            }[lang],
            image: "/images/blog/when-to-call-sober-driver.jpg"
        },
        {
            slug: "sober-driver-safety-guarantee",
            date: "26 მარტი, 2026",
            title: {
                ka: "ფხიზელი მძღოლის მომსახურება — უსაფრთხოების გარანტია",
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

    const guideContent = {
        ka: {
            title: "რატომ არის mdzgholi.ge საუკეთესო არჩევანი?",
            desc: "ჩვენი პლატფორმა შექმნილია იმისათვის, რომ მძღოლის გამოძახება იყოს მაქსიმალურად სწრაფი, საიმედო და კომფორტული. ჩვენი მიზანია არა მხოლოდ უსაფრთხო ტრანსპორტირება, არამედ მძღოლებისა და ავტომობილის მფლობელების ინფორმირება საგზაო უსაფრთხოების, კანონმდებლობისა და თანამედროვე სერვისების შესახებ.",
            pillar1Title: "უსაფრთხოება და კანონი",
            pillar1Desc: "არაფხიზელ მდგომარეობაში ავტომობილის მართვა საქართველოში მკაცრად ისჯება კანონით. ფხიზელი მძღოლის გამოძახება იცავს თქვენს სიცოცხლეს, იცავს თქვენს ავტომობილს და გარიდებთ მაღალ ჯარიმებსა და მართვის უფლების ჩამორთმევას.",
            pillar2Title: "სისწრაფე და 24/7 ხელმისაწვდომობა",
            pillar2Desc: "ჩვენი გამოცდილი მძღოლები მზად არიან მოვიდნენ თბილისის ნებისმიერ უბანში 15-20 წუთის განმავლობაში. სერვისი აქტიურია დღისით, ღამით, უქმეებსა და სადღესასწაულო დღეებში.",
            pillar3Title: "გამჭვირვალე და სამართლიანი ტარიფები",
            pillar3Desc: "არანაირი გაუგებარი ტაქსომეტრი ან ფარული ხარჯები. ფასი შეთანხმებულია წინასწარ ოპერატორთან დარეკვისას, რაც გარანტიას გაძლევთ მშვიდი და სასიამოვნო მგზავრობისთვის.",
            ctaText: "გჭირდებათ პროფესიონალი მძღოლი ახლავე?",
            callBtn: "☎ დაგვირეკეთ: 568 83 47 07",
        },
        en: {
            title: "Why is mdzgholi.ge the Top Choice?",
            desc: "Our platform is designed to make driver bookings fast, reliable, and entirely worry-free. Beyond transportation, we are committed to keeping vehicle owners informed about road safety, regulations, and mobility best practices across Georgia.",
            pillar1Title: "Safety & Traffic Law Compliance",
            pillar1Desc: "Driving under the influence carries heavy penalties and severe risks in Georgia. Calling a designated sober driver protects your life, your vehicle, and keeps your record clear of hefty fines or license suspension.",
            pillar2Title: "Fast Dispatch & 24/7 Availability",
            pillar2Desc: "Our qualified drivers reach any district in Tbilisi within 15-20 minutes. We operate round the clock, every day of the week, including weekends and holidays.",
            pillar3Title: "Transparent & Fair Pricing",
            pillar3Desc: "No unpredictable metering or surge surcharges. Pricing is agreed upfront when you speak with our dispatch team, ensuring full clarity and peace of mind.",
            ctaText: "Need a professional driver right now?",
            callBtn: "☎ Call Now: +995 568 83 47 07",
        },
        ru: {
            title: "Почему mdzgholi.ge — лучший выбор?",
            desc: "Наша платформа создана для того, чтобы заказ водителя был быстрым, надежным и комфортным. Мы стремимся не только обеспечить безопасную поездку, но и предоставить полезную информацию о безопасности дорожного движения и законодательстве Грузии.",
            pillar1Title: "Безопасность и соблюдение закона",
            pillar1Desc: "Управление автомобилем в нетрезвом виде в Грузии строго наказуемо. Вызов трезвого водителя сохраняет вашу жизнь, автомобиль и защищает от лишения прав и огромных штрафов.",
            pillar2Title: "Оперативность и доступность 24/7",
            pillar2Desc: "Наши опытные водители прибывают в любую точку Тбилиси за 15-20 минут. Сервис доступен круглосуточно, в будни, выходные и праздничные дни.",
            pillar3Title: "Прозрачные и честные тарифы",
            pillar3Desc: "Никаких скрытых платежей или непонятных счетчиков. Стоимость согласовывается заранее с оператором, что гарантирует спокойную поездку.",
            ctaText: "Нужен профессиональный водитель прямо сейчас?",
            callBtn: "☎ Позвонить: +995 568 83 47 07",
        },
    }[lang] || {
        title: "რატომ არის mdzgholi.ge საუკეთესო არჩევანი?",
        desc: "",
        pillar1Title: "",
        pillar1Desc: "",
        pillar2Title: "",
        pillar2Desc: "",
        pillar3Title: "",
        pillar3Desc: "",
        ctaText: "",
        callBtn: "",
    };

    return (
        <section style={{ background: "#0a0f1e", minHeight: "calc(100vh - 56px)", padding: "70px 16px 100px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <span className="section-label">{d.nav.blog}</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", marginBottom: 14 }}>
                        {heading}
                    </h1>
                    <p style={{ color: "var(--text-muted)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
                        {subtitle}
                    </p>
                </div>

                {/* Posts Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 60 }}>
                    {posts.map((post) => (
                        <Link key={post.slug} href={getPath(`/blog/${post.slug}`)} style={{ textDecoration: "none" }}>
                            <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%", overflow: "hidden" }}>
                                <div style={{ height: 210, width: "100%", backgroundColor: "#1e2439", backgroundImage: `url(${post.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1, gap: 12 }}>
                                    <span style={{ fontSize: "0.8rem", color: "var(--yellow)", fontWeight: 600 }}>{post.date}</span>
                                    <h2 style={{ fontSize: "1.2rem", color: "#fff", margin: 0, fontWeight: 800, lineHeight: 1.35 }}>{post.title}</h2>
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

                {/* Comprehensive Informational Section (Enriches page content & SEO) */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "40px 28px", marginTop: 40 }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 16, textAlign: "center" }}>
                        {guideContent.title}
                    </h2>
                    <p style={{ color: "var(--text-muted)", maxWidth: 780, margin: "0 auto 36px", lineHeight: 1.8, textAlign: "center", fontSize: "1rem" }}>
                        {guideContent.desc}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 36 }}>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                            <h3 style={{ color: "var(--yellow)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{guideContent.pillar1Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{guideContent.pillar1Desc}</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                            <h3 style={{ color: "var(--yellow)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{guideContent.pillar2Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{guideContent.pillar2Desc}</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                            <h3 style={{ color: "var(--yellow)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{guideContent.pillar3Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{guideContent.pillar3Desc}</p>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", paddingTop: 10 }}>
                        <a href="tel:+995568834707" className="btn-yellow" style={{ textDecoration: "none" }}>
                            {guideContent.callBtn}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

