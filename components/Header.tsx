"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries";

const PHONE_RAW = "+995568834707";
const LOCALES = ["ka", "en", "ru"] as const;

interface HeaderProps {
    d: Dictionary;
    lang: string;
}

export default function Header({ d, lang }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Build a path for a given locale — Georgian (ka) has no prefix in URL
    function localePath(path: string, locale?: string) {
        const loc = locale ?? lang;
        if (loc === "ka") return path || "/";
        return `/${loc}${path}`;
    }

    // Swap language in URL
    function langHref(locale: string) {
        const rest = pathname.replace(/^\/(ka|en|ru)/, "");
        return localePath(rest, locale);
    }

    const navItems = [
        { label: d.nav.home, href: localePath("") },
        { label: d.nav.soberDriver, href: localePath("/services/sober-driver") },
        { label: d.nav.personalDriver, href: localePath("/services/personal-driver") },
        { label: d.nav.evacuator, href: localePath("/services/evacuator") },
        { label: d.nav.carWash, href: localePath("/services/car-wash") },
        { label: d.nav.airportTransfer, href: localePath("/services/airport-transfer") },
        { label: d.nav.batteryTire, href: localePath("/services/battery-tire") },
        { label: d.nav.about, href: `${localePath("")}#why-us` },
        { label: d.nav.blog, href: localePath("/blog") },
        { label: d.nav.contact, href: `${localePath("")}#contact` },
    ];

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "background 0.3s, box-shadow 0.3s",
                background: scrolled
                    ? "rgba(10,15,30,0.97)"
                    : "rgba(10,15,30,0.75)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "0 12px",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                }}
            >
                {/* Logo */}
                <Link
                    href={localePath("")}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                        flexShrink: 0,
                    }}
                >
                    <div
                        style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: "var(--yellow)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
                            <rect x="9" y="11" width="14" height="10" rx="2" />
                            <circle cx="12" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                        </svg>
                    </div>
                    <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", letterSpacing: "-0.02em" }}>
                        mdzgholi<span style={{ color: "var(--yellow)" }}>.ge</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav
                    className="hidden-mobile"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0,
                        flex: 1,
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{
                                color: "rgba(255,255,255,0.75)",
                                textDecoration: "none",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                padding: "6px 8px",
                                borderRadius: 8,
                                whiteSpace: "nowrap",
                                transition: "color 0.2s, background 0.2s",
                                textTransform: "uppercase",
                                letterSpacing: "0.03em",
                            }}
                            className="nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side: lang switcher + call */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                    {/* Language switcher */}
                    <div style={{ display: "flex", gap: 1 }}>
                        {LOCALES.map((loc) => (
                            <Link
                                key={loc}
                                href={langHref(loc)}
                                style={{
                                    padding: "4px 6px",
                                    borderRadius: 6,
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    background: lang === loc ? "var(--yellow)" : "rgba(255,255,255,0.07)",
                                    color: lang === loc ? "#0a0f1e" : "rgba(255,255,255,0.6)",
                                    transition: "all 0.2s",
                                    border: lang === loc ? "1px solid var(--yellow)" : "1px solid rgba(255,255,255,0.1)",
                                }}
                            >
                                {loc.toUpperCase()}
                            </Link>
                        ))}
                    </div>

                    {/* Call CTA - Desktop only / Small icon on mobile */}
                    <a
                        href={`tel:${PHONE_RAW}`}
                        className="btn-yellow desktop-call"
                        style={{ padding: "8px 16px", fontSize: "0.82rem", fontWeight: 700, whiteSpace: "nowrap" }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        <span className="hidden-tablet">{d.nav.callNow}</span>
                    </a>

                    {/* Hamburger (mobile) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#fff",
                            padding: 4,
                            display: "none",
                        }}
                        className="show-mobile"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            {menuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="7" x2="21" y2="7" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="17" x2="21" y2="17" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    style={{
                        background: "rgba(10,15,30,0.98)",
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                        padding: "16px 20px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                    }}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                color: "rgba(255,255,255,0.8)",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight: 500,
                                padding: "11px 12px",
                                borderRadius: 8,
                                display: "block",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={`tel:${PHONE_RAW}`}
                        className="btn-yellow"
                        style={{ marginTop: 12, justifyContent: "center", fontSize: "1rem" }}
                    >
                        ☎ {d.nav.callNow}
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        .nav-link:hover { color: var(--yellow) !important; background: rgba(245,197,24,0.07) !important; }
      `}</style>
        </header>
    );
}
