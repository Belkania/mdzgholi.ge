interface JsonLdProps {
    data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

/* ─── Schema Helpers ─── */

const PHONE = "+995568834707";
const BASE = "https://www.mdzgholi.ge";

// Middleware strips /ka prefix → canonical Georgian URLs are prefix-free
function langPath(lang: string, path: string = "/") {
    return lang === "ka" ? `${BASE}${path === "/" ? "" : path}` : `${BASE}/${lang}${path === "/" ? "" : path}`;
}

export function localBusinessSchema(lang: string) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${langPath(lang)}#business`,
        name: "mdzgholi.ge",
        alternateName: lang === "ka"
            ? ["ფხიზელი მძღოლი", "მძღოლი გამოძახებით", "მძღოლის გამოძახება"]
            : ["sober driver Tbilisi", "mdzgholi Georgia"],
        description:
            lang === "ka"
                ? "ფხიზელი მძღოლი გამოძახებით — mdzgholi.ge. მძღოლის გამოძახება 24/7 თბილისში. ნასვამი მძღოლი, ევაკუატორი, მანქანის რეცხვა, აეროპორტის ტრანსფერი თბილისში."
                : lang === "ru"
                    ? "mdzgholi.ge — трезвый водитель, эвакуатор, мойка машин, трансфер в аэропорт в Тбилиси. 24/7."
                    : "mdzgholi.ge — sober driver, tow truck, car wash, airport transfer in Tbilisi. 24/7.",
        url: langPath(lang),
        telephone: PHONE,
        email: "info@mdzgholi.ge",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Tbilisi",
            addressCountry: "GE",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 41.7151,
            longitude: 44.8271,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
        priceRange: "$$",
        areaServed: {
            "@type": "City",
            name: "Tbilisi",
        },
        sameAs: [
            `https://wa.me/${PHONE}`,
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: [
                { "@type": "Offer", price: "40", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Sober Driver" } },
                { "@type": "Offer", price: "50", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Personal Driver" } },
                { "@type": "Offer", price: "60", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Tow Truck / Evacuator" } },
                { "@type": "Offer", price: "40", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Car Wash" } },
                { "@type": "Offer", price: "50", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Airport Transfer & Intercity" } },
                { "@type": "Offer", price: "40", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Battery Charging & Jump Start" } },
                { "@type": "Offer", price: "40", priceCurrency: "GEL", itemOffered: { "@type": "Service", name: "Mobile Tire Change & Repair" } },
            ],
        },
    };
}

export function serviceSchema(opts: {
    lang: string;
    slug: string;
    name: string;
    description: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${langPath(opts.lang, `/services/${opts.slug}`)}#service`,
        name: opts.name,
        description: opts.description,
        provider: {
            "@type": "LocalBusiness",
            name: "mdzgholi.ge",
            telephone: PHONE,
            url: BASE,
            address: { "@type": "PostalAddress", addressLocality: "Tbilisi", addressCountry: "GE" },
        },
        areaServed: [
            { "@type": "City", name: "Tbilisi" },
            { "@type": "AdministrativeArea", name: "Vake" },
            { "@type": "AdministrativeArea", name: "Saburtalo" },
            { "@type": "AdministrativeArea", name: "Didube" },
            { "@type": "AdministrativeArea", name: "Isani" },
            { "@type": "AdministrativeArea", name: "Gldani" },
            { "@type": "AdministrativeArea", name: "Nadzaladevi" },
            { "@type": "AdministrativeArea", name: "Samgori" },
        ],
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "GEL",
            lowPrice: "40",
            highPrice: "120",
            offerCount: "1",
            availability: "https://schema.org/InStock",
            url: langPath(opts.lang, `/services/${opts.slug}`),
        },
    };
}

export function howToSchema(opts: {
    name: string;
    description: string;
    steps: { name: string; text: string }[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: opts.name,
        description: opts.description,
        totalTime: "PT20M",
        estimatedCost: { "@type": "MonetaryAmount", currency: "GEL", value: "40" },
        step: opts.steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
        })),
    };
}

export function aggregateRatingSchema(opts: {
    name: string;
    url: string;
    rating: string;
    reviewCount: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: opts.name,
        url: opts.url,
        telephone: PHONE,
        address: { "@type": "PostalAddress", addressLocality: "Tbilisi", addressCountry: "GE" },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: opts.rating,
            reviewCount: opts.reviewCount,
            bestRating: "5",
            worstRating: "1",
        },
    };
}

export function faqSchema(faq: { q: string; a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
    };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

// ─── Local Business with Review snippets (boosts AI Overview eligibility) ──
export function localBusinessWithReviewsSchema(lang: string) {
    const reviews_ka = [
        {
            author: "გიორგი ბ.",
            body: "მანქანის დაქოქვა გამოძახებით — 18 წუთში ჩამოვიდა სპეციალისტი. ბუსტერი ჩაუბა, ძრავმა პირველი ბრუნვიდან ამუშავდა. ბათუმის ქუჩაზე ვიყავი გაჩერებული. ევაკუატორის გამოძახება მომიწევდა — ამჯერად ეს გადამარჩინა.",
            rating: 5,
        },
        {
            author: "ნინო კ.",
            body: "ავტომატიკის მანქანა მქვს, მეშინოდა პერემიჩკა გამოვიყენო. mdzgholi.ge-ს სპეციალისტმა ბუსტერი გამოიყენა — ყოველგვარი პრობლემის გარეშე. ძრავი 2 წამში დაიქოქა.",
            rating: 5,
        },
        {
            author: "ლევან მ.",
            body: "ღამის 2 საათზე დამჯდა ბატარეა ვაკეში. 20 წუთში ჩამოვიდა სპეციალისტი, ბატარეა შეამოწმა, გენერატორიც — მთელი ამბავი 30 წუთი. ფასი სამართლიანი.",
            rating: 5,
        },
    ];
    const reviews_en = [
        {
            author: "David T.",
            body: "Jump start on call — technician arrived in 18 minutes. Booster connected, engine started on first crank. Would have needed a tow truck otherwise.",
            rating: 5,
        },
        {
            author: "Mariam S.",
            body: "Automatic transmission car — worried about jumper cables. mdzgholi.ge used a professional booster, completely safe. Engine started in 2 seconds.",
            rating: 5,
        },
    ];
    const reviews_ru = [
        {
            author: "Гиорги Б.",
            body: "Запуск машины с выездом — специалист приехал за 18 минут. Завёл с бустером, без проблем. Без этого пришлось бы вызывать эвакуатор.",
            rating: 5,
        },
        {
            author: "Нино К.",
            body: "У меня автомат, боялась обычного прикуривания. mdzgholi.ge использовал бустер — всё безопасно. Машина завелась с первого раза.",
            rating: 5,
        },
    ];

    const reviews = lang === "ru" ? reviews_ru : lang === "en" ? reviews_en : reviews_ka;

    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "mdzgholi.ge",
        url: langPath(lang),
        telephone: PHONE,
        address: { "@type": "PostalAddress", addressLocality: "Tbilisi", addressCountry: "GE" },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "214",
            bestRating: "5",
            worstRating: "1",
        },
        review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewBody: r.body,
            reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating,
                bestRating: "5",
                worstRating: "1",
            },
        })),
    };
}
