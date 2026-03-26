import Link from "next/link";
import type { Dictionary } from "@/dictionaries";

interface FooterProps {
    d: Dictionary;
    lang: string;
}

const PHONE_DISPLAY = "+995 568 83 47 07";
const PHONE_RAW = "995568834707";
const PHONE_TEL = "+995568834707";

export default function Footer({ d, lang }: FooterProps) {
    const navLinks = [
        { label: d.nav.soberDriver, href: `/${lang}/services/sober-driver` },
        { label: d.nav.personalDriver, href: `/${lang}/services/personal-driver` },
        { label: d.nav.evacuator, href: `/${lang}/services/evacuator` },
        { label: d.nav.carWash, href: `/${lang}/services/car-wash` },
        { label: d.nav.airportTransfer, href: `/${lang}/services/airport-transfer` },
        { label: d.nav.batteryTire, href: `/${lang}/services/battery-tire` },
        { label: d.nav.blog, href: `/${lang}/blog` },
    ];

    return (
        <footer
            style={{
                background: "#060b18",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                padding: "60px 20px 30px",
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 40,
                        marginBottom: 50,
                    }}
                >
                    {/* Brand */}
                    <div>
                        <Link
                            href={`/${lang}`}
                            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}
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
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0f1e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3" />
                                    <rect x="9" y="11" width="14" height="10" rx="2" />
                                    <circle cx="12" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                </svg>
                            </div>
                            <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>
                                mdzgholi<span style={{ color: "var(--yellow)" }}>.ge</span>
                            </span>
                        </Link>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 18 }}>
                            {d.footer.tagline}
                        </p>
                        <div style={{ display: "flex", gap: 10 }}>
                            <a
                                href={`https://wa.me/${PHONE_RAW}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: "#25D366",
                                    color: "#fff",
                                    width: 38,
                                    height: 38,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    transition: "transform 0.2s",
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            {d.footer.links}
                        </h4>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            color: "rgba(255,255,255,0.55)",
                                            textDecoration: "none",
                                            fontSize: "0.9rem",
                                            transition: "color 0.2s",
                                        }}
                                        className="footer-link"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            {d.footer.contact}
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: "0.9rem" }}>
                            <a href={`tel:${PHONE_TEL}`} style={{ color: "var(--yellow)", fontWeight: 700, textDecoration: "none", fontSize: "1.05rem" }}>
                                {PHONE_DISPLAY}
                            </a>
                            <a href={`mailto:${d.contact.email}`} style={{ color: "inherit", textDecoration: "none" }}>{d.contact.email}</a>
                            <span>📍 {d.contact.address}</span>
                            <span>🕐 {d.footer.hours}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.07)",
                        paddingTop: 24,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "0.82rem",
                        textAlign: "center",
                    }}
                >
                    <span>{d.footer.rights}</span>
                </div>
            </div>

            <style>{`.footer-link:hover { color: var(--yellow) !important; }`}</style>
        </footer>
    );
}
