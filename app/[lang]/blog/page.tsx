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
            slug: "car-battery-charging-guide",
            date: {
                ka: "1 ოქტომბერი, 2026",
                en: "October 1, 2026",
                ru: "1 октября, 2026",
            }[lang] || "1 ოქტომბერი, 2026",
            title: {
                ka: "დამჯდარი აკუმულატორის დამუხტვა და დატენვა: სრული გზამკვლევი",
                en: "Dead Car Battery Charging & Jump Start: Complete Guide",
                ru: "Зарядка и запуск севшего аккумулятора авто: Полный гид",
            }[lang],
            excerpt: {
                ka: "რატომ ჯდება ავტომობილის აკუმულატორი, რატომ არის სახიფათო ძველი „პერემიჩკა“ თანამედროვე მანქანაზე და როგორ დავქოქოთ ძრავი უსაფრთხო ბუსტერით...",
                en: "Why do car batteries die, why traditional jumper cables pose serious risks to modern electronics, and how to safely jump start a dead battery...",
                ru: "Почему садится аккумулятор авто, чем опасен кустарный «прикуриватель» и как правильно запустить и зарядить севший аккумулятор бустером...",
            }[lang],
            image: "/images/blog/car-battery-charging-guide.jpg"
        },
        {
            slug: "manqanis-daqoqva-gamodzaxebit",
            date: {
                ka: "25 სექტემბერი, 2026",
                en: "September 25, 2026",
                ru: "25 сентября, 2026",
            }[lang] || "25 სექტემბერი, 2026",
            title: {
                ka: "მანქანის დაქოქვა გამოძახებით — სპეციალისტი 15-20 წუთში",
                en: "Car Jump Start on Call in Tbilisi — 15-20 Min Dispatch",
                ru: "Запуск автомобиля с выездом в Тбилиси — 15-20 минут",
            }[lang],
            excerpt: {
                ka: "არ იქოქება მანქანა? როგორ ამოვიცნოთ ბატარეის პრობლემა, რა საფრთხე აქვს ავტომატიკის კაბელებით დაქოქვას და რატომ არის ციფრული ბუსტერი საუკეთესო გამოსავალი...",
                en: "Car won't start? Recognize battery failure signs, understand risks for automatics, and discover why digital boosters are the safest choice...",
                ru: "Машина не заводится? Признаки севшей АКБ, риски прикуривания автомата и почему профессиональный бустер безопаснее эвакуатора...",
            }[lang],
            image: "/images/blog/car-jump-start-booster.jpg"
        },
        {
            slug: "when-to-call-sober-driver",
            date: "16 სექტემბერი, 2026",
            title: {
                ka: "როდის არის საჭირო ფხიზელი მძღოლი? სიტუაციები და ფასები",
                en: "When to Hire a Sober Driver? Situations & Pricing",
                ru: "Когда нужен трезвый водитель? Ситуации и цены",
            }[lang],
            excerpt: {
                ka: "სუფრა, გადაღლილობა, ექიმთან ვიზიტი თუ მანქანის გადაყვანა: როდის გამოვიძახოთ ფხიზელი მძღოლი და როგორ მუშაობს წინასწარ შეთანხმებული ტარიფები...",
                en: "Celebrations, exhaustion, post-medical visits, or vehicle transport: when to hire a designated driver and how upfront pricing works in Tbilisi...",
                ru: "Ресторан, сильная усталость или перегон авто: в каких ситуациях нужен трезвый водитель и как формируется фиксированная стоимость поездки...",
            }[lang],
            image: "/images/blog/when-to-call-sober-driver.jpg"
        },
        {
            slug: "sober-driver-safety-guarantee",
            date: "26 მარტი, 2026",
            title: {
                ka: "ფხიზელი მძღოლის მომსახურება: რატომ არის ეს სიმშვიდის გარანტია?",
                en: "Sober Driver Service: Why It Is Your Safety Guarantee",
                ru: "Услуга трезвого водителя: Почему это гарантия вашей безопасности",
            }[lang],
            excerpt: {
                ka: "როდის სჯობს საჭის გამოცდილი მძღოლისთვის მინდობა? რატომ არის ფხიზელი მძღოლის გამოძახება სიმშვიდის, უსაფრთხოებისა და დროის დაზოგვის საუკეთესო გზა...",
                en: "Why trusting a vetted driver behind the wheel of your own car brings total peace of mind, avoids heavy penalties, and keeps your schedule stress-free...",
                ru: "Почему доверить руль опытному водителю на своем авто — это спокойствие, безопасность и защита от огромных штрафов и лишения прав...",
            }[lang],
            image: "/images/blog/sober-driver.jpg"
        }
    ];

    const guideContent = {
        ka: {
            title: "რატომ ირჩევენ mdzgholi.ge-ს?",
            desc: "ჩვენი მიზანია, მძღოლისა და ტექნიკური დახმარების გამოძახება იყოს მაქსიმალურად მარტივი, საიმედო და ადამიანური. გზაზე გაუთვალისწინებელი შემთხვევები ყველას ემართება — ჩვენ კი აქ ვართ, რათა ეს პრობლემა 15-20 წუთში მოვაგვაროთ.",
            pillar1Title: "უსაფრთხოება და კანონი",
            pillar1Desc: "საჭესთან ნასვამი ან გადაღლილი დაჯდომა უდიდესი რისკია. ფხიზელი მძღოლი იცავს თქვენს სიცოცხლეს, თქვენს ავტომობილს და გარიდებთ მკაცრ სანქციებსა და მართვის მოწმობის ჩამორთმევას.",
            pillar2Title: "სისწრაფე და 24/7 მზადყოფნა",
            pillar2Desc: "ჩვენი მძღოლები და ტექნიკური ეკიპაჟები თბილისის სხვადასხვა უბანში მორიგეობენ. ზარიდან 15-20 წუთში თქვენთან ვართ — დღისით, ღამით, შაბათ-კვირასა და დღესასწაულებზე.",
            pillar3Title: "სამართლიანი და ფიქსირებული ფასი",
            pillar3Desc: "ფასს წინასწარ, დარეკვისას ვათანხმებთ. არანაირი ტაქსისებური მოულოდნელი ტარიფები, წუთობრივი გადასახადი ან საცობის კოეფიციენტი.",
            pillar4Title: "გზისპირა ტექნიკური დახმარება",
            pillar4Desc: "აკუმულატორი დაჯდა თუ საბურავი დაზიანდა? ჩვენი ტექნიკური ეკიპაჟი ჩამოვა ბუსტერით, დომკრატითა და ხელსაწყოებით და ადგილზევე მოაგვარებს პრობლემას 15–20 წუთში.",
            pillar5Title: "ტრანსფერები და რეგიონები",
            pillar5Desc: "თბილისის, ქუთაისისა და ბათუმის აეროპორტების ტრანსფერი, ასევე საქალაქთაშორისო მარშრუტები მთელ საქართველოში ფიქსირებული ტარიფითა და მაქსიმალური კომფორტით.",
            pillar6Title: "სრული პასუხისმგებლობა და გარანტია",
            pillar6Desc: "ჩვენთვის მთავარია თქვენი უსაფრთხოება და ნდობა. ყველა მძღოლი არის შემოწმებული პროფესიონალი, კომპანია კი იღებს სრულ პასუხისმგებლობას გაწეულ სერვისზე.",
            ctaText: "გჭირდებათ გამოცდილი მძღოლი ახლავე?",
            callBtn: "☎ დაგვირეკეთ: +995 568 83 47 07",
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
            pillar4Title: "Emergency Roadside Assistance",
            pillar4Desc: "Dead battery or flat tire? Our mobile technician arrives equipped with safe digital jump starters, hydraulic jacks, and vulcanization plugs to resolve emergencies on-site.",
            pillar5Title: "Airport & Intercity Transfers",
            pillar5Desc: "Punctual meet & greet transfers to Tbilisi, Kutaisi, and Batumi airports, plus intercity trips to Kazbegi, Gudauri, and Batumi with fixed transparent rates.",
            pillar6Title: "Professional Liability & Care",
            pillar6Desc: "Your car and personal safety are handled by background-checked chauffeurs with 5+ years experience. We uphold the highest safety and etiquette standards.",
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
            pillar4Title: "Техпомощь на дороге и бустер",
            pillar4Desc: "Сел аккумулятор или пробито колесо? Наша мобильная бригада быстро прибудет с безопасным цифровым бустером и ремкомплектом для устранения поломки на месте.",
            pillar5Title: "Трансферы в аэропорты и межгород",
            pillar5Desc: "Пунктуальная встреча в аэропортах Тбилиси, Кутаиси и Батуми, а также междугородние поездки по всей Грузии с фиксированной стоимостью.",
            pillar6Title: "Ответственность и надежность",
            pillar6Desc: "Ваша безопасность — наш главный ориентир. Проверенные водители с опытом от 5 лет и гарантия бережного отношения к вашему автомобилю.",
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
        pillar4Title: "",
        pillar4Desc: "",
        pillar5Title: "",
        pillar5Desc: "",
        pillar6Title: "",
        pillar6Desc: "",
        ctaText: "",
        callBtn: "",
    };

    const blogTips = {
        ka: {
            heading: "პრაქტიკული რჩევები მძღოლებისთვის საქართველოში",
            tips: [
                { title: "აკუმულატორის სეზონური შემოწმება", desc: "ზამთარსა და ზაფხულში ტემპერატურის მკვეთრი ცვალებადობა აკუმულატორის რესურსს ამცირებს. რეგულარულად შეამოწმეთ ტერმინალები და გენერატორის მუშაობა, რათა გზაზე მოულოდნელად არ გაჩერდეთ." },
                { title: "საბურავის წნევის კონტროლი", desc: "არასწორი წნევა ზრდის საწვავის ხარჯს და აუარესებს დამუხრუჭების დისტანციას. თვეში ერთხელ აუცილებლად შეამოწმეთ წნევა მანომეტრით ცივ საბურავზე." },
                { title: "ნასვამ მდგომარეობაში საჭესთან არ დაჯდომა", desc: "საქართველოში მოქმედებს მკაცრი კანონმდებლობა და მაღალი სანქციები ალკოჰოლზე. ფხიზელი მძღოლის გამოძახება იცავს თქვენს სიცოცხლეს, ავტომობილს და გარიდებთ მართვის მოწმობის ჩამორთმევას." },
                { title: "გადაუდებელი საავარიო კომპლექტი", desc: "საბარგულში ყოველთვის იქონიეთ გამართული სათადარიგო ბორბალი, ჰიდრავლიკური დომკრატი, პირველადი დახმარების აფთიაქი, მანათობელი ჟილეტი და საავარიო სამკუთხედი." },
                { title: "ტექნიკური სითხეებისა და ზეთის კონტროლი", desc: "ძრავის ზეთის, ანტიფრიზისა და სამუხრუჭე სითხის დონის რეგულარული მონიტორინგი თავიდან აგარიდებთ ძრავის გადახურებასა და ძვირადღირებულ რემონტს." },
                { title: "გზისპირა დახმარების ნომრის შენახვა", desc: "ყოველთვის შეინახეთ ტელეფონში საიმედო სერვისის კონტაქტი (+995 568 83 47 07). mdzgholi.ge-ის ეკიპაჟი 24/7 მზადაა დაგეხმაროთ თბილისსა და მის შემოგარენში." },
            ],
        },
        en: {
            heading: "Practical Safe Driving Tips for Georgia",
            tips: [
                { title: "Seasonal Car Battery Maintenance", desc: "Freezing winter mornings and scorching summer heat deplete battery capacity quickly. Routinely test charging voltage and terminal contacts to avoid morning breakdowns." },
                { title: "Tire Pressure & Tread Inspection", desc: "Incorrect tire pressure increases fuel burn and harms emergency braking distance. Check cold tire PSI and inspect tread depth at least once per month." },
                { title: "Never Drive Under the Influence", desc: "Georgia enforces strict legal alcohol limits with zero leniency. Booking a designated sober driver guarantees a secure trip home and keeps your record clean." },
                { title: "Emergency Roadside Essentials", desc: "Keep an inflated spare wheel, tested hydraulic jack, first-aid kit, reflective vest, and emergency warning triangle inside your vehicle at all times." },
                { title: "Fluid Levels & Engine Care", desc: "Consistently inspect motor oil, coolant (antifreeze), and brake fluid levels to prevent unexpected overheating and catastrophic powertrain wear." },
                { title: "Save Rapid Assistance Contacts", desc: "Keep our 24/7 roadside hotline (+995 568 83 47 07) saved in your phone. Quick dispatch across Tbilisi brings instant peace of mind." },
            ],
        },
        ru: {
            heading: "Полезные советы для водителей в Грузии",
            tips: [
                { title: "Сезонная диагностика аккумулятора", desc: "Мороз зимой и сильная жара летом ускоряют износ АКБ. Регулярно проверяйте чистоту клемм и напряжение генератора, чтобы избежать внезапного разряда." },
                { title: "Контроль давления и состояния шин", desc: "Пониженное давление повышает расход топлива и удлиняет тормозной путь. Измеряйте давление манометром минимум раз в месяц на холодных шинах." },
                { title: "Безопасность и отказ от нетрезвого вождения", desc: "В Грузии действуют жесткие штрафы и лишение прав за алкоголь за рулем. Вызов трезвого водителя — единственный безопасный и разумный выбор после застолья." },
                { title: "Аварийный набор в багажнике", desc: "Всегда возите с собой исправное запасное колесо, домкрат, знак аварийной остановки, светоотражающий жилет и аптечку первой помощи." },
                { title: "Контроль технических жидкостей", desc: "Регулярно проверяйте уровень моторного масла, антифриза и тормозной жидкости для предотвращения перегрева и дорогостоящего ремонта двигателя." },
                { title: "Сохраните контакт техпомощи", desc: "Сохраните в телефоне номер дежурной службы mdzgholi.ge (+995 568 83 47 07). Мы оперативно поможем вам в Тбилиси и окрестностях в любое время суток." },
            ],
        },
    }[lang] ?? {
        heading: "პრაქტიკული რჩევები მძღოლებისთვის საქართველოში",
        tips: [
            { title: "აკუმულატორის სეზონური შემოწმება", desc: "რეგულარულად შეამოწმეთ ტერმინალები და გენერატორის მუშაობა." },
            { title: "საბურავის წნევის კონტროლი", desc: "თვეში ერთხელ აუცილებლად შეამოწმეთ წნევა მანომეტრით ცივ საბურავზე." },
            { title: "ნასვამ მდგომარეობაში საჭესთან არ დაჯდომა", desc: "ფხიზელი მძღოლის გამოძახება იცავს თქვენს სიცოცხლეს." },
            { title: "გადაუდებელი საავარიო კომპლექტი", desc: "საბარგულში ყოველთვის იქონიეთ გამართული სათადარიგო ბორბალი." },
        ],
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

                {/* Practical Driving Tips Grid */}
                <div style={{ marginBottom: 40 }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 24, textAlign: "center" }}>
                        💡 {blogTips.heading}
                    </h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
                        {blogTips.tips.map((t, idx) => (
                            <div key={idx} className="card" style={{ padding: "22px 20px" }}>
                                <h3 style={{ color: "var(--yellow)", fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>
                                    {t.title}
                                </h3>
                                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                                    {t.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comprehensive Informational Section (Enriches page content & SEO) */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "40px 28px", marginTop: 20 }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: 16, textAlign: "center" }}>
                        {guideContent.title}
                    </h2>
                    <p style={{ color: "var(--text-muted)", maxWidth: 780, margin: "0 auto 36px", lineHeight: 1.8, textAlign: "center", fontSize: "1rem" }}>
                        {guideContent.desc}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 36 }}>
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
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                            <h3 style={{ color: "var(--yellow)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{guideContent.pillar4Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{guideContent.pillar4Desc}</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                            <h3 style={{ color: "var(--yellow)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{guideContent.pillar5Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{guideContent.pillar5Desc}</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                            <h3 style={{ color: "var(--yellow)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{guideContent.pillar6Title}</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{guideContent.pillar6Desc}</p>
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

