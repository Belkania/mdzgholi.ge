import type { MetadataRoute } from "next";

const BASE_URL = "https://safedrive.ge";

const locales = ["ka", "en", "ru"];

const services = [
    "sober-driver",
    "personal-driver",
    "evacuator",
    "car-wash",
    "airport-transfer",
    "battery-tire",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-03-02");
    const entries: MetadataRoute.Sitemap = [];

    // Homepage per language
    for (const lang of locales) {
        entries.push({
            url: `${BASE_URL}/${lang}`,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
            alternates: {
                languages: {
                    ka: `${BASE_URL}/ka`,
                    en: `${BASE_URL}/en`,
                    ru: `${BASE_URL}/ru`,
                },
            },
        });
    }

    // Service pages per language
    for (const service of services) {
        for (const lang of locales) {
            entries.push({
                url: `${BASE_URL}/${lang}/services/${service}`,
                lastModified,
                changeFrequency: "monthly",
                priority: 0.8,
                alternates: {
                    languages: {
                        ka: `${BASE_URL}/ka/services/${service}`,
                        en: `${BASE_URL}/en/services/${service}`,
                        ru: `${BASE_URL}/ru/services/${service}`,
                    },
                },
            });
        }
    }

    return entries;
}
