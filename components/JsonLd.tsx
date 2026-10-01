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
        priceRange: "₾₾",
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
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sober Driver" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Driver" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tow Truck / Evacuator" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Wash" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer & Intercity" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery Charging & Jump Start" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Tire Change & Repair" } },
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
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "214",
                bestRating: "5",
                worstRating: "1",
            },
        },
        areaServed: [
            { "@type": "City", name: "Tbilisi" },
            { "@type": "Place", name: "Vake" },
            { "@type": "Place", name: "Saburtalo" },
            { "@type": "Place", name: "Didube" },
            { "@type": "Place", name: "Isani" },
            { "@type": "Place", name: "Gldani" },
            { "@type": "Place", name: "Nadzaladevi" },
            { "@type": "Place", name: "Samgori" },
        ],
        offers: {
            "@type": "Offer",
            priceCurrency: "GEL",
            priceRange: "40-120",
            availability: "https://schema.org/InStock",
            seller: { "@type": "LocalBusiness", name: "mdzgholi.ge", telephone: PHONE },
        },
        availableChannel: {
            "@type": "ServiceChannel",
            servicePhone: { "@type": "ContactPoint", telephone: PHONE, contactType: "customer service", availableLanguage: ["ka", "en", "ru"] },
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
