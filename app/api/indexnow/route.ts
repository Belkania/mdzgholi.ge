import { NextResponse } from "next/server";

const KEY = "1e86027377564c4fba7aeb0af2420ce8";
const HOST = "www.mdzgholi.ge";
const BASE = `https://${HOST}`;

// All URLs on the site (mirrors sitemap.ts)
const ALL_URLS = [
    // Homepage
    `${BASE}/`,
    `${BASE}/en/`,
    `${BASE}/ru/`,

    // Service pages — KA (canonical, no prefix)
    `${BASE}/services/sober-driver`,
    `${BASE}/services/personal-driver`,
    `${BASE}/services/evacuator`,
    `${BASE}/services/car-wash`,
    `${BASE}/services/airport-transfer`,
    `${BASE}/services/battery-tire`,

    // Service pages — EN
    `${BASE}/en/services/sober-driver`,
    `${BASE}/en/services/personal-driver`,
    `${BASE}/en/services/evacuator`,
    `${BASE}/en/services/car-wash`,
    `${BASE}/en/services/airport-transfer`,
    `${BASE}/en/services/battery-tire`,

    // Service pages — RU
    `${BASE}/ru/services/sober-driver`,
    `${BASE}/ru/services/personal-driver`,
    `${BASE}/ru/services/evacuator`,
    `${BASE}/ru/services/car-wash`,
    `${BASE}/ru/services/airport-transfer`,
    `${BASE}/ru/services/battery-tire`,

    // Blog index
    `${BASE}/blog`,
    `${BASE}/en/blog`,
    `${BASE}/ru/blog`,

    // Blog articles — KA
    `${BASE}/blog/when-to-call-sober-driver`,
    `${BASE}/blog/sober-driver-safety-guarantee`,

    // Blog articles — EN
    `${BASE}/en/blog/when-to-call-sober-driver`,
    `${BASE}/en/blog/sober-driver-safety-guarantee`,

    // Blog articles — RU
    `${BASE}/ru/blog/when-to-call-sober-driver`,
    `${BASE}/ru/blog/sober-driver-safety-guarantee`,
];

export async function POST(request: Request) {
    // Optional: protect with a secret header so only Vercel/CI can trigger it
    const authHeader = request.headers.get("x-indexnow-secret");
    const expectedSecret = process.env.INDEXNOW_SECRET;
    if (expectedSecret && authHeader !== expectedSecret) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const payload = {
            host: HOST,
            key: KEY,
            keyLocation: `${BASE}/${KEY}.txt`,
            urlList: ALL_URLS,
        };

        // Submit to Bing (also propagates to Yandex, Seznam, etc.)
        const bingRes = await fetch("https://api.indexnow.org/indexnow", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(payload),
        });

        return NextResponse.json({
            success: true,
            bing: bingRes.status,
            urlsSubmitted: ALL_URLS.length,
            urls: ALL_URLS,
        });
    } catch (err) {
        return NextResponse.json(
            { error: "IndexNow submission failed", detail: String(err) },
            { status: 500 }
        );
    }
}

// GET — for easy manual testing in browser
export async function GET() {
    return NextResponse.json({
        info: "IndexNow API for mdzgholi.ge",
        key: KEY,
        keyFile: `${BASE}/${KEY}.txt`,
        urlCount: ALL_URLS.length,
        urls: ALL_URLS,
        usage: "Send a POST request to this endpoint to submit all URLs to Bing via IndexNow.",
    });
}
