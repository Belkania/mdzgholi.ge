"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/dictionaries";

const PHONE_TEL = "+995568834707";
const LOCALES = ["ka", "en", "ru"] as const;

interface HeaderProps {
    d: Dictionary;
    lang: string;
}

export default function Header({ d, lang }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close menus on route change
    useEffect(() => {
        setMenuOpen(false);
        setServicesOpen(false);
    }, [pathname]);

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

    const services = [
        { label: d.nav.soberDriver, href: localePath("/services/sober-driver"), icon: "🍷" },
        { label: d.nav.personalDriver, href: localePath("/services/personal-driver"), icon: "🧑‍✈️" },
        { label: d.nav.evacuator, href: localePath("/services/evacuator"), icon: "🚛" },
        { label: d.nav.carWash, href: localePath("/services/car-wash"), icon: "🚿" },
        { label: d.nav.airportTransfer, href: localePath("/services/airport-transfer"), icon: "✈️" },
        { label: d.nav.batteryTire, href: localePath("/services/battery-tire"), icon: "🔋" },
    ];

    const mainNav = [
        { label: d.nav.home, href: localePath("") },
        { label: d.nav.blog, href: localePath("/blog") },
        { label: d.nav.about, href: `${localePath("")}#why-us` },
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
                    : "rgba(10,15,30,0.8)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: "0 16px",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
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
                    <span style={{ fontWeight: 800, fontSize: "1.12rem", color: "#fff", letterSpacing: "-0.02em" }}>
                        mdzgholi<span style={{ color: "var(--yellow)" }}>.ge</span>
                    </span>
                </Link>

                {/* Desktop nav: Spacious, Clean & Organized with Dropdown */}
                <nav
                    className="hidden-mobile"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        flex: 1,
                        justifyContent: "center",
                    }}
                >
                    {/* Home Link */}
                    <Link
                        href={localePath("")}
                        style={{
                            color: pathname === "/" || pathname === `/${lang}` ? "#fff" : "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            padding: "8px 12px",
                            borderRadius: 8,
                            whiteSpace: "nowrap",
                            transition: "color 0.2s, background 0.2s",
                        }}
                        className="nav-link"
                    >
                        {d.nav.home}
                    </Link>

                    {/* Services Dropdown Trigger */}
                    <div
                        ref={dropdownRef}
                        style={{ position: "relative" }}
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            aria-expanded={servicesOpen}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: servicesOpen ? "var(--yellow)" : "rgba(255,255,255,0.8)",
                                fontSize: "0.85rem",
                                fontWeight: 600,
                                padding: "8px 12px",
                                borderRadius: 8,
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                transition: "all 0.2s",
                            }}
                            className="nav-link"
                        >
                            <span>{d.nav.services || "სერვისები"}</span>
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                    transition: "transform 0.2s ease",
                                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {servicesOpen && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    width: 250,
                                    background: "rgba(13, 18, 36, 0.98)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    backdropFilter: "blur(18px)",
                                    WebkitBackdropFilter: "blur(18px)",
                                    borderRadius: 14,
                                    padding: "8px",
                                    boxShadow: "0 14px 36px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(245, 197, 24, 0.15)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 3,
                                    zIndex: 1010,
                                }}
                            >
                                {services.map((s) => (
                                    <Link
                                        key={s.href}
                                        href={s.href}
                                        onClick={() => setServicesOpen(false)}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            padding: "10px 12px",
                                            borderRadius: 8,
                                            color: "rgba(255, 255, 255, 0.9)",
                                            textDecoration: "none",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            transition: "all 0.15s ease",
                                        }}
                                        className="dropdown-item"
                                    >
                                        <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
                                        <span>{s.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Blog Link - Now clearly visible and highlighted! */}
                    <Link
                        href={localePath("/blog")}
                        style={{
                            color: pathname.includes("/blog") ? "var(--yellow)" : "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            padding: "8px 12px",
                            borderRadius: 8,
                            whiteSpace: "nowrap",
                            transition: "color 0.2s, background 0.2s",
                        }}
                        className="nav-link"
                    >
                        {d.nav.blog}
                    </Link>

                    {/* About Us */}
                    <Link
                        href={`${localePath("")}#why-us`}
                        style={{
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            padding: "8px 12px",
                            borderRadius: 8,
                            whiteSpace: "nowrap",
                            transition: "color 0.2s, background 0.2s",
                        }}
                        className="nav-link"
                    >
                        {d.nav.about}
                    </Link>

                    {/* Contact */}
                    <Link
                        href={`${localePath("")}#contact`}
                        style={{
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            padding: "8px 12px",
                            borderRadius: 8,
                            whiteSpace: "nowrap",
                            transition: "color 0.2s, background 0.2s",
                        }}
                        className="nav-link"
                    >
                        {d.nav.contact}
                    </Link>
                </nav>

                {/* Right side: Language Switcher + Call CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    {/* Language switcher */}
                    <div style={{ display: "flex", gap: 2 }}>
                        {LOCALES.map((loc) => (
                            <Link
                                key={loc}
                                href={langHref(loc)}
                                style={{
                                    padding: "5px 8px",
                                    borderRadius: 6,
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em",
                                    background: lang === loc ? "var(--yellow)" : "rgba(255,255,255,0.06)",
                                    color: lang === loc ? "#0a0f1e" : "rgba(255,255,255,0.65)",
                                    transition: "all 0.2s",
                                    border: lang === loc ? "1px solid var(--yellow)" : "1px solid rgba(255,255,255,0.1)",
                                }}
                            >
                                {loc.toUpperCase()}
                            </Link>
                        ))}
                    </div>

                    {/* Call CTA */}
                    <a
                        href={`tel:${PHONE_TEL}`}
                        className="btn-yellow desktop-call"
                        style={{ padding: "8px 16px", fontSize: "0.85rem", fontWeight: 700, whiteSpace: "nowrap" }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        <span className="hidden-tablet">{d.nav.callNow}</span>
                    </a>

                    {/* Hamburger Button (Mobile) */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#fff",
                            padding: 6,
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

            {/* Mobile menu (Kept intact with all options fully expanded/available) */}
            {menuOpen && (
                <div
                    style={{
                        background: "rgba(10,15,30,0.98)",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        padding: "16px 18px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        maxHeight: "calc(100vh - 56px)",
                        overflowY: "auto",
                    }}
                >
                    <Link
                        href={localePath("")}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "1rem",
                            fontWeight: 600,
                            padding: "10px 12px",
                            borderRadius: 8,
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        {d.nav.home}
                    </Link>

                    {/* Mobile Services Accordion */}
                    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: "none",
                                border: "none",
                                color: "var(--yellow)",
                                fontSize: "1rem",
                                fontWeight: 700,
                                padding: "10px 12px",
                                cursor: "pointer",
                            }}
                        >
                            <span>{d.nav.services || "სერვისები"}</span>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{
                                    transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.2s",
                                }}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {mobileServicesOpen && (
                            <div style={{ display: "flex", flexDirection: "column", gap: 2, paddingLeft: 12, paddingBottom: 8 }}>
                                {services.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        style={{
                                            color: "rgba(255,255,255,0.85)",
                                            textDecoration: "none",
                                            fontSize: "0.92rem",
                                            fontWeight: 500,
                                            padding: "8px 12px",
                                            borderRadius: 6,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href={localePath("/blog")}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: "var(--yellow)",
                            textDecoration: "none",
                            fontSize: "1rem",
                            fontWeight: 700,
                            padding: "10px 12px",
                            borderRadius: 8,
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        {d.nav.blog}
                    </Link>

                    <Link
                        href={`${localePath("")}#why-us`}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            padding: "10px 12px",
                            borderRadius: 8,
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        {d.nav.about}
                    </Link>

                    <Link
                        href={`${localePath("")}#contact`}
                        onClick={() => setMenuOpen(false)}
                        style={{
                            color: "rgba(255,255,255,0.8)",
                            textDecoration: "none",
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            padding: "10px 12px",
                            borderRadius: 8,
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        {d.nav.contact}
                    </Link>

                    <a
                        href={`tel:${PHONE_TEL}`}
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
                .nav-link:hover {
                    color: var(--yellow) !important;
                    background: rgba(245,197,24,0.08) !important;
                }
                .dropdown-item:hover {
                    background: rgba(245,197,24,0.12) !important;
                    color: var(--yellow) !important;
                    transform: translateX(3px);
                }
            `}</style>
        </header>
    );
}
