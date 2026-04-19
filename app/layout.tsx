import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";

// Root layout intentionally has NO metadata export.
// Each page/[lang]/layout.tsx defines its own dynamic metadata per language.

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const lang = headersList.get("x-lang") ?? "ka";

  return (
    <html lang={lang} suppressHydrationWarning>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WS28XQKVXD"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WS28XQKVXD');
          `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
