import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/((?!_next|.*\\..*|api).*)"],
};

const LOCALES = ["ka", "en", "ru"] as const;
type Locale = typeof LOCALES[number];
const DEFAULT: Locale = "ka";

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const pathnameLocale = LOCALES.find(
        (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
    );

    // /ka/... → permanent 301 redirect to /... (clean canonical URL, fixes temporary redirect warnings)
    if (pathnameLocale === DEFAULT) {
        const rest = pathname.replace(/^\/ka/, "") || "/";
        const url = req.nextUrl.clone();
        url.pathname = rest;
        const response = NextResponse.redirect(url, 301);
        response.headers.set("x-lang", DEFAULT);
        return response;
    }

    // /en/... or /ru/... → pass through, set lang header for root layout
    if (pathnameLocale) {
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set("x-lang", pathnameLocale);
        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });
        response.headers.set("x-lang", pathnameLocale);
        return response;
    }

    // No locale prefix → internally rewrite to /ka/... (serves Georgian at clean URL)
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT}${pathname}`;
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-lang", DEFAULT);
    const response = NextResponse.rewrite(url, {
        request: {
            headers: requestHeaders,
        },
    });
    response.headers.set("x-lang", DEFAULT);
    return response;
}
