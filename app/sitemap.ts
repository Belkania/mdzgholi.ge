import type { MetadataRoute } from "next";

const BASE = "https://www.mdzgholi.ge";
const locales = ["ka", "en", "ru"] as const;

// Middleware strips /ka prefix → Georgian canonical has no lang prefix
function u(lang: string, path: string) {
    return lang === "ka" ? `${BASE}${path}` : `${BASE}/${lang}${path}`;
}

const services = [
    "sober-driver",
    "personal-driver",
    "evacuator",
    "car-wash",
    "airport-transfer",
    "battery-tire",
];

const blogSlugs = ["sober-driver-safety-guarantee"];

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date("2026-04-19");
    const entries: MetadataRoute.Sitemap = [];

    // Homepage
    for (const lang of locales) {
        entries.push({
            url: u(lang, "/"),
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
            alternates: {
                languages: {
                    ka: u("ka", "/"),
                    en: u("en", "/"),
                    ru: u("ru", "/"),
                    "x-default": u("ka", "/"),
                },
            },
        });
    }

    // Service pages
    for (const service of services) {
        for (const lang of locales) {
            entries.push({
                url: u(lang, `/services/${service}`),
                lastModified,
                changeFrequency: "monthly",
                priority: 0.8,
                alternates: {
                    languages: {
                        ka: u("ka", `/services/${service}`),
                        en: u("en", `/services/${service}`),
                        ru: u("ru", `/services/${service}`),
                        "x-default": u("ka", `/services/${service}`),
                    },
                },
            });
        }
    }

    // Blog index
    for (const lang of locales) {
        entries.push({
            url: u(lang, "/blog"),
            lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
            alternates: {
                languages: {
                    ka: u("ka", "/blog"),
                    en: u("en", "/blog"),
                    ru: u("ru", "/blog"),
                    "x-default": u("ka", "/blog"),
                },
            },
        });
    }

    // Blog articles
    for (const slug of blogSlugs) {
        for (const lang of locales) {
            entries.push({
                url: u(lang, `/blog/${slug}`),
                lastModified,
                changeFrequency: "monthly",
                priority: 0.6,
                alternates: {
                    languages: {
                        ka: u("ka", `/blog/${slug}`),
                        en: u("en", `/blog/${slug}`),
                        ru: u("ru", `/blog/${slug}`),
                        "x-default": u("ka", `/blog/${slug}`),
                    },
                },
            });
        }
    }

    return entries;
}
