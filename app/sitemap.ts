import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mdzgholi.ge";

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
    const lastModified = new Date("2026-03-09");
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
                    "x-default": `${BASE_URL}/ka`,
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
                        "x-default": `${BASE_URL}/ka/services/${service}`,
                    },
                },
            });
        }
    }

    // Blog index
    for (const lang of locales) {
        entries.push({
            url: `${BASE_URL}/${lang}/blog`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        });
    }

    // Blog articles
    const blogSlugs = ["sober-driver-safety-guarantee"];
    for (const slug of blogSlugs) {
        for (const lang of locales) {
            entries.push({
                url: `${BASE_URL}/${lang}/blog/${slug}`,
                lastModified,
                changeFrequency: "monthly",
                priority: 0.6,
                alternates: {
                    languages: {
                        ka: `${BASE_URL}/ka/blog/${slug}`,
                        en: `${BASE_URL}/en/blog/${slug}`,
                        ru: `${BASE_URL}/ru/blog/${slug}`,
                        "x-default": `${BASE_URL}/ka/blog/${slug}`,
                    },
                },
            });
        }
    }

    return entries;
}
