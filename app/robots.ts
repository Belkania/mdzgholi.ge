import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // General crawlers
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
            // Perplexity AI
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            // OpenAI / ChatGPT
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            // Anthropic / Claude
            {
                userAgent: "ClaudeBot",
                allow: "/",
            },
            {
                userAgent: "anthropic-ai",
                allow: "/",
            },
            // Google AI (Bard / Gemini training)
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
            // Cohere AI
            {
                userAgent: "cohere-ai",
                allow: "/",
            },
            // Meta AI
            {
                userAgent: "FacebookBot",
                allow: "/",
            },
            // Common AI research crawlers
            {
                userAgent: "YouBot",
                allow: "/",
            },
        ],
        sitemap: "https://www.mdzgholi.ge/sitemap.xml",
        host: "https://www.mdzgholi.ge",
    };
}
