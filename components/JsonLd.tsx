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
const BASE = "https://savedrive.ge";

export function localBusinessSchema(lang: string) {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE}/${lang}#business`,
        name: "SaveDrive",
        alternateName: "SaveDrive Georgia",
        description:
            lang === "ka"
                ? "SaveDrive — ფხიზელი მძღოლი, ევაკუატორი, მანქანის რეცხვა, აეროპორტის ტრანსფერი თბილისში. 24/7."
                : lang === "ru"
                    ? "SaveDrive — трезвый водитель, эвакуатор, мойка машин, трансфер в аэропорт в Тбилиси. 24/7."
                    : "SaveDrive — sober driver, tow truck, car wash, airport transfer in Tbilisi. 24/7.",
        url: `${BASE}/${lang}`,
        telephone: PHONE,
        email: "info@savedrive.ge",
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
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Battery & Tire Change" } },
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
        "@id": `${BASE}/${opts.lang}/services/${opts.slug}#service`,
        name: opts.name,
        description: opts.description,
        provider: {
            "@type": "LocalBusiness",
            name: "SaveDrive",
            telephone: PHONE,
            address: { "@type": "PostalAddress", addressLocality: "Tbilisi", addressCountry: "GE" },
        },
        areaServed: { "@type": "City", name: "Tbilisi" },
        availableChannel: {
            "@type": "ServiceChannel",
            servicePhone: { "@type": "ContactPoint", telephone: PHONE, contactType: "customer service", availableLanguage: ["ka", "en", "ru"] },
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
