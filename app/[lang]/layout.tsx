import type { Metadata } from "next";
import { getDictionary, locales, type Locale } from "@/dictionaries";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const d = getDictionary(lang);
    return {
        metadataBase: new URL("https://www.mdzgholi.ge"),
        title: d.meta.title,
        description: d.meta.description,
        keywords: d.meta.keywords,
        robots: { index: true, follow: true, googleBot: { index: true, follow: true } },

        openGraph: {
            title: d.meta.title,
            description: d.meta.description,
            url: lang === "ka" ? "https://www.mdzgholi.ge/" : `https://www.mdzgholi.ge/${lang}`,
            siteName: "mdzgholi.ge",
            locale: lang === "ka" ? "ka_GE" : lang === "ru" ? "ru_GE" : "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: d.meta.title,
            description: d.meta.description,
        },
    };
}

export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const isValidLang = (locales as readonly string[]).includes(lang);
    const resolvedLang = isValidLang ? (lang as Locale) : "ka";
    const d = getDictionary(resolvedLang);

    return (
        <>
            <Header d={d} lang={resolvedLang} />
            <main style={{ paddingTop: 56 }}>{children}</main>
            <Footer d={d} lang={resolvedLang} />
            <FloatingCall />
        </>
    );
}
