import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/((?!_next|.*\\..*|api).*)"],
};

const LOCALES = ["ka", "en", "ru"];
const DEFAULT = "ka";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Check if path starts with a locale prefix
    const pathnameLocale = LOCALES.find(
        (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
    );

    // If path starts with /ka (default locale), redirect to remove the prefix
    // e.g. /ka/services/sober-driver → /services/sober-driver
    if (pathnameLocale === DEFAULT) {
        const rest = pathname.replace(/^\/ka/, "") || "/";
        const url = req.nextUrl.clone();
        url.pathname = rest;
        return NextResponse.redirect(url);
    }

    // If path starts with /en or /ru, keep as-is
    if (pathnameLocale) {
        return NextResponse.next();
    }

    // No locale prefix → internally rewrite to /ka/... (Georgian, default)
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT}${pathname}`;
    return NextResponse.rewrite(url);
}
